import { getApolloClient } from 'lib/apollo-client';

import { updateUserAvatar } from 'lib/users';
import { sortObjectsByDate } from 'lib/datetime';

import {
  QUERY_ALL_POSTS_INDEX,
  QUERY_ALL_POSTS_ARCHIVE,
  QUERY_ALL_POSTS,
  QUERY_LATEST_POST,
  QUERY_FASHIOH_POSTS,
  QUERY_FASHIOH_POST_BY_ID,
  QUERY_BEAUTY_POSTS,
  QUERY_FRUIT_AND_WINE_POSTS,
  QUERY_CATNOT_MISS_READS_POSTS,
  QUERY_CULTURE_POSTS,
  QUERY_TRAVEL_AND_LEISURE_BY_ID1,
  QUERY_TRAVEL_AND_LEISURE_BY_ID2,
  QUERY_TRAVEL_AND_LEISURE_BY_ID3,
  QUERY_HEALTH_WELLNESS_POSTS,
  QUERY_ART_HISTORY_POSTS,
  QUERY_POST_BY_SLUG,
  QUERY_POSTS_BY_AUTHOR_SLUG_INDEX,
  QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
  QUERY_POSTS_BY_AUTHOR_SLUG,
  QUERY_POSTS_BY_CATEGORY_ID_INDEX,
  QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
  QUERY_POSTS_BY_CATEGORY_ID,
  QUERY_POST_SEO_BY_SLUG,
  QUERY_POST_PER_PAGE,
} from 'data/posts';

/**
 * postPathBySlug
 */

export function postPathBySlug(slug) {
  return `/posts/${slug}`;
}

/**
 * getPostBySlug
 */

export async function getPostBySlug(slug) {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let postData;
  let seoData;

  try {
    postData = await apolloClient.query({
      query: QUERY_POST_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[posts][getPostBySlug] Failed to query post data: ${e.message}`);
    throw e;
  }

  if (!postData?.data.post) return { post: undefined };

  const post = [postData?.data.post].map(mapPostData)[0];

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_POST_SEO_BY_SLUG,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[posts][getPostBySlug] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.post || {};

    post.metaTitle = seo.title;
    post.metaDescription = seo.metaDesc;
    post.readingTime = seo.readingTime;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      post.canonical = seo.canonical;
    }

    post.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    post.article = {
      author: post.og.author,
      modifiedTime: post.og.modifiedTime,
      publishedTime: post.og.publishedTime,
      publisher: post.og.publisher,
    };

    post.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    post.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    post,
  };
}

/**
 * getAllPosts
 */

const allPostsIncludesTypes = {
  all: QUERY_ALL_POSTS,
  archive: QUERY_ALL_POSTS_ARCHIVE,
  index: QUERY_ALL_POSTS_INDEX,
  fashion: QUERY_FASHIOH_POSTS,
  fashionbyid: QUERY_FASHIOH_POST_BY_ID,
  beauty: QUERY_BEAUTY_POSTS,
  latestpost: QUERY_LATEST_POST,
  fruitandwine: QUERY_FRUIT_AND_WINE_POSTS,
  cantmissreads: QUERY_CATNOT_MISS_READS_POSTS,
  culture: QUERY_CULTURE_POSTS,
  travelandleisurebyid1: QUERY_TRAVEL_AND_LEISURE_BY_ID1,
  travelandleisurebyid2: QUERY_TRAVEL_AND_LEISURE_BY_ID2,
  travelandleisurebyid3: QUERY_TRAVEL_AND_LEISURE_BY_ID3,
  healthwellness: QUERY_HEALTH_WELLNESS_POSTS,
  artandhistory: QUERY_ART_HISTORY_POSTS,
};

export async function getAllPosts(options = {}) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const posts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getPostsByAuthorSlug
 */

const postsByAuthorSlugIncludesTypes = {
  all: QUERY_POSTS_BY_AUTHOR_SLUG,
  archive: QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
  index: QUERY_POSTS_BY_AUTHOR_SLUG_INDEX,
};

export async function getPostsByAuthorSlug({ slug, ...options }) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  let postData;

  try {
    postData = await apolloClient.query({
      query: postsByAuthorSlugIncludesTypes[queryIncludes],
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[posts][getPostsByAuthorSlug] Failed to query post data: ${e.message}`);
    throw e;
  }

  const posts = postData?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getPostsByCategoryId
 */

const postsByCategoryIdIncludesTypes = {
  all: QUERY_POSTS_BY_CATEGORY_ID,
  archive: QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
  index: QUERY_POSTS_BY_CATEGORY_ID_INDEX,
};

export async function getPostsByCategoryId({ categoryId, ...options }) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  let postData;

  try {
    postData = await apolloClient.query({
      query: postsByCategoryIdIncludesTypes[queryIncludes],
      variables: {
        categoryId,
      },
    });
  } catch (e) {
    console.log(`[posts][getPostsByCategoryId] Failed to query post data: ${e.message}`);
    throw e;
  }

  const posts = postData?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getRecentPosts
 */

export async function getRecentPosts({ count, ...options }) {
  const { posts } = await getAllPosts(options);
  const sorted = sortObjectsByDate(posts);
  return {
    posts: sorted.slice(0, count),
  };
}

/**
 * sanitizeExcerpt
 */

export function sanitizeExcerpt(excerpt) {
  if (typeof excerpt !== 'string') {
    throw new Error(`Failed to sanitize excerpt: invalid type ${typeof excerpt}`);
  }

  let sanitized = excerpt;

  // If the theme includes [...] as the more indication, clean it up to just ...

  sanitized = sanitized.replace(/\s?\[&hellip;\]/, '&hellip;');

  // If after the above replacement, the ellipsis includes 4 dots, it's
  // the end of a setence

  sanitized = sanitized.replace('....', '.');
  sanitized = sanitized.replace('.&hellip;', '.');

  // If the theme is including a "Continue..." link, remove it

  sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, '');

  return sanitized;
}

/**
 * mapPostData
 */

export function mapPostData(post = {}) {
  const data = { ...post };

  // Clean up the author object to avoid someone having to look an extra
  // level deeper into the node

  if (data.author) {
    data.author = {
      ...data.author.node,
    };
  }

  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default

  if (data.author?.avatar) {
    data.author.avatar = updateUserAvatar(data.author.avatar);
  }

  // Clean up the categories to make them more easy to access

  if (data.categories) {
    data.categories = data.categories.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }

  // Clean up the featured image to make them more easy to access

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  return data;
}

/**
 * getRelatedPosts
 */

export async function getRelatedPosts(categories, postId, count = 5) {
  if (!Array.isArray(categories) || categories.length === 0) return;

  let related = {
    category: categories && categories.shift(),
  };

  if (related.category) {
    const { posts } = await getPostsByCategoryId({
      categoryId: related.category.databaseId,
      queryIncludes: 'archive',
    });

    const filtered = posts.filter(({ postId: id }) => id !== postId);
    const sorted = sortObjectsByDate(filtered);

    related.posts = sorted.map((post) => ({ title: post.title, slug: post.slug }));
  }

  if (!Array.isArray(related.posts) || related.posts.length === 0) {
    const relatedPosts = await getRelatedPosts(categories, postId, count);
    related = relatedPosts || related;
  }

  if (Array.isArray(related.posts) && related.posts.length > count) {
    return related.posts.slice(0, count);
  }

  return related;
}

/**
 * sortStickyPosts
 */

export function sortStickyPosts(posts) {
  return [...posts].sort((post) => (post.isSticky ? -1 : 1));
}

/**
 * getPostsPerPage
 */

export async function getPostsPerPage() {
  //If POST_PER_PAGE is defined at next.config.js
  if (process.env.POSTS_PER_PAGE) {
    console.warn(
      'You are using the deprecated POST_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").'
    );
    return Number(process.env.POSTS_PER_PAGE);
  }

  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_POST_PER_PAGE,
    });

    return Number(data.allSettings.readingSettingsPostsPerPage);
  } catch (e) {
    console.log(`Failed to query post per page data: ${e.message}`);
    throw e;
  }
}

/**
 * getPageCount
 */

export async function getPagesCount(posts, postsPerPage) {
  const _postsPerPage = postsPerPage ?? (await getPostsPerPage());
  return Math.ceil(posts.length / _postsPerPage);
}

/**
 * getPaginatedPosts
 */

export async function getPaginatedPosts({ currentPage = 1, ...options } = {}) {
  const { posts } = await getAllPosts(options);
  const postsPerPage = await getPostsPerPage();
  const pagesCount = await getPagesCount(posts, postsPerPage);

  let page = Number(currentPage);

  if (typeof page === 'undefined' || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      posts: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = postsPerPage * (page - 1);
  const sortedPosts = sortStickyPosts(posts);
  return {
    posts: sortedPosts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}

export async function getLatestPosts(options = {}) {
  const { queryIncludes = 'latestpost' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const latestposts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    latestpost: Array.isArray(latestposts) && latestposts.map(mapPostData),
  };
}

export async function getFashionPosts(options = {}) {
  const { queryIncludes = 'fashion' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const feshionposts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    feshionpost: Array.isArray(feshionposts) && feshionposts.map(mapPostData),
  };
}

export async function getTravelandLeisureById1(options = {}) {
  const { queryIncludes = 'travelandleisurebyid1' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const travelandleisurepost1 = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    travelandleisure1: Array.isArray(travelandleisurepost1) && travelandleisurepost1.map(mapPostData),
  };
}

export async function getTravelandLeisureById2(options = {}) {
  const { queryIncludes = 'travelandleisurebyid2' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const travelandleisurepost2 = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    travelandleisure2: Array.isArray(travelandleisurepost2) && travelandleisurepost2.map(mapPostData),
  };
}

export async function getTravelandLeisureById3(options = {}) {
  const { queryIncludes = 'travelandleisurebyid3' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const travelandleisurepost3 = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    travelandleisure3: Array.isArray(travelandleisurepost3) && travelandleisurepost3.map(mapPostData),
  };
}

export async function getCulturePosts(options = {}) {
  const { queryIncludes = 'culture' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const cultureposts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    culturepost: Array.isArray(cultureposts) && cultureposts.map(mapPostData),
  };
}

export async function getBeautyPosts(options = {}) {
  const { queryIncludes = 'beauty' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const beautyposts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    beautypost: Array.isArray(beautyposts) && beautyposts.map(mapPostData),
  };
}

export async function getFruitAndWinePosts(options = {}) {
  const { queryIncludes = 'fruitandwine' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const fruitandwineposts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    fruitandwinepost: Array.isArray(fruitandwineposts) && fruitandwineposts.map(mapPostData),
  };
}

export async function getCantMissReadsPosts(options = {}) {
  const { queryIncludes = 'cantmissreads' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const cantmissreadsposts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    cantmissreadspost: Array.isArray(cantmissreadsposts) && cantmissreadsposts.map(mapPostData),
  };
}

export async function getHealthWellnessPosts(options = {}) {
  const { queryIncludes = 'healthwellness' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const healthwellnessposts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    healthwellnesspost: Array.isArray(healthwellnessposts) && healthwellnessposts.map(mapPostData),
  };
}

export async function getArtHistoryPosts(options = {}) {
  const { queryIncludes = 'artandhistory' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const arthistoryposts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    arthistorypost: Array.isArray(arthistoryposts) && arthistoryposts.map(mapPostData),
  };
}

export async function getFeshionPostById(options = {}) {
  const { queryIncludes = 'fashionbyid' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const fashionbyidposts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    fashionbyidpost: Array.isArray(fashionbyidposts) && fashionbyidposts.map(mapPostData),
  };
}
