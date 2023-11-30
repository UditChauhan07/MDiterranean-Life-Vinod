import { getApolloClient } from 'lib/apollo-client';
import { getTopLevelPages } from 'lib/pages';
import { QUERY_ALL_LEFT_MENUS } from 'data/leftsidemenu';

export const LEFT_MENU_LOCATION_NAVIGATION = 'LEFT';

/**
 * getAllMenus
 */

export async function getAllMenus() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_LEFT_MENUS,
  });

  const leftmenus = data?.data.menus.edges.map(mapMenuData);

  const leftNavigation = createMenuFromPages({
    locations: [LEFT_MENU_LOCATION_NAVIGATION],
    pages: await getTopLevelPages({
      queryIncludes: 'index',
    }),
  });

  leftmenus.push(leftNavigation);

  return {
    leftmenus,
  };
}

/**
 * mapMenuData
 */

export function mapMenuData(menu = {}) {
  const { node } = menu;
  const data = { ...node };

  data.menuItems = data.menuItems.edges.map(({ node }) => {
    return { ...node };
  });
  return data;
}

/**
 * mapPagesToMenuItems
 */

export function mapPagesToMenuItems(pages) {
  return pages.map(({ id, uri, title }) => {
    return {
      label: title,
      path: uri,
      id,
    };
  });
}

/**
 * createMenuFromPages
 */

export function createMenuFromPages({ locations, pages }) {
  return {
    menuItems: mapPagesToMenuItems(pages),
    locations,
  };
}

/**
 * parseHierarchicalMenu
 */
export const parseHierarchicalMenu = (
  data = [],
  { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}
) => {
  const tree = [];
  const childrenOf = {};

  data.forEach((item) => {
    const newItem = { ...item };
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem) : tree.push(newItem);
  });
  return tree;
};

/**
 * findMenuByLocation
 */

export function findSideMenuByLocation(leftmenus, location) {
  if (typeof location !== 'string') {
    throw new Error('Failed to find menu by location - location is not a string.');
  }

  const leftmenu = leftmenus.find(({ locations }) => {
    return locations.map((loc) => loc.toUpperCase()).includes(location.toUpperCase());
  });

  return leftmenu && parseHierarchicalMenu(leftmenu.menuItems);
}
