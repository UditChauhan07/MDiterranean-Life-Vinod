import { gql } from '@apollo/client';

export const QUERY_ALL_CATEGORIES = gql`
  query AllCategories {
    categories(first: 10000) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
        }
      }
    }
  }
`;

export const QUERY_CATEGORY_BY_SLUG = gql`
  query CategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      databaseId
      description
      id
      name
      slug
      s1CategoryBanner {
        node {
          sourceUrl
          altText
        }
      }
      s1CustomPageTitle
      s1CustomPageReference {
        node {
          content
          title
        }
      }
      categoryBannerArticleLink {
        node {
          slug
        }
      }
    }
  }
`;

export const QUERY_CATEGORY_BY_ID = gql`
  query CategoryById {
    category(id: "3", idType: DATABASE_ID) {
      id
      name
      link
    }
  }
`;

export const QUERY_CATEGORY_SEO_BY_SLUG = gql`
  query CategorySEOBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
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
