import { gql } from '@apollo/client';

export const QUERY_ALL_LEFT_MENUS = gql`
  query LeftSideMenus {
    menus(where: { location: LEFT }) {
      edges {
        node {
          id
          menuItems {
            edges {
              node {
                cssClasses
                id
                parentId
                label
                title
                target
                path
              }
            }
          }
          name
          slug
          locations
        }
      }
    }
  }
`;
