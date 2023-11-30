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
      modified
      databaseId
      title
      slug
      isSticky
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
    posts(where: { categoryId: 3, orderby: { field: AUTHOR, order: DESC } }, first: 1) {
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
          categories {
            edges {
              node {
                name
              }
            }
          }
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
              }
            }
          }
          link
          title
          content
          author {
            node {
              name
            }
          }
          excerpt
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
    posts(where: { categoryId: 11, orderby: { field: AUTHOR, order: DESC } }, first: 1) {
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
        }
      }
    }
  }
`;

export const QUERY_CATNOT_MISS_READS_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { categoryId: 3, orderby: { field: AUTHOR, order: DESC } }, first: 4) {
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
        }
      }
    }
  }
`;

export const QUERY_CULTURE_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { categoryId: 5, orderby: { field: AUTHOR, order: DESC } }, first: 1) {
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
        }
      }
    }
  }
`;

export const QUERY_TRAVEL_AND_LEISURE_BY_ID2 = gql`
  query PostsById {
    posts(where: { categoryId: 12, id: 93 }) {
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
        }
      }
    }
  }
`;

export const QUERY_TRAVEL_AND_LEISURE_BY_ID3 = gql`
  query PostsByCategoryId {
    posts(where: { categoryId: 12, orderby: { field: AUTHOR, order: DESC } }, first: 3) {
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
        }
      }
    }
  }
`;

export const QUERY_HEALTH_WELLNESS_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { categoryId: 13, orderby: { field: AUTHOR, order: DESC } }, first: 5) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
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
          excerpt
        }
      }
    }
  }
`;

export const QUERY_ART_HISTORY_POSTS = gql`
  query PostsByCategoryId {
    posts(where: { categoryId: 14, orderby: { field: AUTHOR, order: DESC } }, first: 5) {
      edges {
        node {
          author {
            node {
              name
              slug
            }
          }
          content
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
          excerpt
        }
      }
    }
  }
`;
