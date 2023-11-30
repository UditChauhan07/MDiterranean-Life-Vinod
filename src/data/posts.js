import { gql } from '@apollo/client';
export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
          description
        }
      }
    }
    databaseId
    date
    isSticky
    postId
    slug
    title
  }
`;

export const QUERY_ALL_POSTS_INDEX = gql`
  ${POST_FIELDS}
  query AllPostsIndex {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS_ARCHIVE = gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      author {
        node {
          avatar {
            height
            url
            width
          }
          id
          name
          slug
        }
      }
      id
      categories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      content
      date
      excerpt
      featuredImage {
        node {
          altText
          caption
          sourceUrl
          srcSet
          sizes
          id
        }
      }
      seo {
        metaDesc
        metaKeywords
        title
      }
      modified
      databaseId
      title
      slug
      isSticky
      mastheadWistiaVideoId

      mastheadMp4Video {
        node {
          mimeType
          mediaItemUrl
        }
      }
      mastheadMp4VideoThumb {
        node {
          mimeType
          mediaItemUrl
        }
      }
      selectRelatedPosts {
        nodes {
          id
          title
          content
          slug
          date
          excerpt
          writtenBy
          interviewedBy
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
        }
      }

      tags {
        nodes {
          id
          name
          slug
          posts {
            nodes {
              id
              title
              content
              slug
              date
              excerpt
              writtenBy
              interviewedBy
              featuredImage {
                node {
                  altText
                  caption
                  sourceUrl
                  srcSet
                  sizes
                  id
                }
              }
            }
          }
        }
      }
      mastheadBanner {
        node {
          altText
          link
        }
      }
    }
  }
`;
export const QUERY_SEARCH_BY_TAGS = gql`
  query MyQuery2 {
    posts(where: { tag: "Health, travel" }) {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID_INDEX = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG_INDEX = gql`
  ${POST_FIELDS}
  query PostByAuthorSlugIndex($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE = gql`
  ${POST_FIELDS}
  query PostByAuthorSlugArchive($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG = gql`
  ${POST_FIELDS}
  query PostByAuthorSlug($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_POST_SEO_BY_SLUG = gql`
  query PostSEOBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;

export const QUERY_FASHIOH_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { categoryId: 3, id: 88 }) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          excerpt
          categories {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
        }
      }
    }
  }
`;
export const QUERY_FASHIOH_POST_BY_ID = gql`
  query PostsByCategoryId {
    posts(where: { categoryId: 3, id: 77 }) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          excerpt
          categories {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
        }
      }
    }
  }
`;

export const QUERY_BEAUTY_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { categoryId: 4, orderby: { field: AUTHOR, order: DESC } }, first: 5) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          categories {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
        }
      }
    }
  }
`;

export const QUERY_LATEST_POST = gql`
  query latestPost {
    posts(first: 1) {
      edges {
        node {
          categories {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          link
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          content
          author {
            node {
              name
            }
          }
          excerpt
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
          featuredImage {
            node {
              altText
              caption
              srcSet
              sourceUrl
              sizes
            }
          }
        }
      }
    }
  }
`;

export const QUERY_FRUIT_AND_WINE_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { categoryId: 11, id: 82 }, first: 1) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          excerpt
          categories {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
        }
      }
    }
  }
`;
//12
export const QUERY_CATNOT_MISS_READS_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { in: ["83", "84", "86", "87"] }) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
        }
      }
    }
  }
`;

export const QUERY_SECTION_ELEVEN_POST = gql`
  query PostsByCategoryId {
    posts(where: { in: ["95", "597", "965", "992"] }) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
        }
      }
    }
  }
`;

export const QUERY_CULTURE_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { in: ["1009"] }) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          excerpt
          categories(where: { termTaxonomyId: "6" }) {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
        }
      }
    }
  }
`;

export const QUERY_TRAVEL_AND_LEISURE_BY_ID1 = gql`
  query PostsById {
    posts(where: { categoryId: 12, id: 90 }) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          excerpt
          categories {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
          wistiaVideoScriptId
        }
      }
    }
  }
`;

export const QUERY_TRAVEL_AND_LEISURE_BY_ID2 = gql`
  query PostsById {
    posts(where: { categoryId: 12, id: 96 }) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          categories(where: { termTaxonomyId: "12" }) {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          postId
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
        }
      }
    }
  }
`;

export const QUERY_TRAVEL_AND_LEISURE_BY_ID3 = gql`
  query PostsByCategoryId {
    posts(where: { in: ["1261", "1147", "861", "92"] }) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          postId
          content
          excerpt
          categories {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
        }
      }
    }
  }
`;

export const QUERY_TRAVEL_AND_LEISURE_BY_ID4 = gql`
  query PostsById {
    posts(where: { categoryId: 11, id: 178 }) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          excerpt
          categories(where: { termTaxonomyId: "11" }) {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
          wistiaVideoScriptId
        }
      }
    }
  }
`;

export const QUERY_HEALTH_WELLNESS_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { in: ["91"] }) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          categories {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          excerpt
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
        }
      }
    }
  }
`;

export const QUERY_ART_HISTORY_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { categoryId: 14, id: 92 }, first: 1) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
          categories(where: { termTaxonomyId: "14" }) {
            edges {
              node {
                name
                slug
                description
              }
            }
          }
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          postId
          modified
          title
          homepagePostThumb {
            node {
              mimeType
              mediaType
              mediaItemUrl
            }
          }
          slug
          excerpt
          interviewedBy
          writtenBy
          pageTitle
          pageSubtitle
          wistiaVideoScriptId
        }
      }
    }
  }
`;
