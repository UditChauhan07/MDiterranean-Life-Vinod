import { gql } from '@apollo/client';

export const QUERY_SITE_LOGO = gql`
  query SiteLogo {
    mediaItems(where: { id: 65 }) {
      edges {
        node {
          uri
          title
          link
          id
        }
      }
    }
  }
`;
