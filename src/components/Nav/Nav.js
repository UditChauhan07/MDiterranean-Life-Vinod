import React from 'react';
import Link from 'next/link';
// import useSite from 'hooks/use-site';
// import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';

import Section from 'components/Section';
import styles from './Nav.module.scss';
import NavListItem from 'components/NavListItem';
import Leftsidebar from 'components/Leftsidebar';

const Nav = () => {
  // const { menus } = useSite();
  // const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;
  // const navigation = findMenuByLocation(menus, navigationLocation);
  const navigation = [
    {
      id: 'cG9zdDoxMjIz',
      label: 'Fashion & Beauty',
      path: '/categories/fashion-and-beauty/',
    },
    {
      id: 'cG9zdDoxMTkw',
      label: 'Culture',
      path: '/categories/culture/',
    },
    {
      id: 'cG9zdDoxMDY1',
      label: 'Science',
      path: '/categories/science/',
    },
    {
      id: 'cG9zdDoxMjY4',
      label: 'Travel & Leisure',
      path: '/categories/travel-and-leisure/',
    },
    {
      id: 'cG9zdDoxMjkz',
      label: 'Food & Wine',
      path: '/categories/food-and-wine/',
    },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.sidebarcontainer}>
        <Section className={styles.navSection}>
          <Leftsidebar />
          <div className={styles.navName}>
            <Link href="/" aria-label="themditerraneanlifeIcon">
              <a aria-label="themditerraneanlifeIcon">
                <img src="/logo-black-v2.png" width={180} height={'auto'} alt="themditerraneanlifeIcon" />
              </a>
            </Link>
          </div>
          <div className={styles.sidebarcontainer}>
            <div className={styles.topnav}>
              <div className={styles.MobileScroll}>
                {navigation?.map((listItem) => {
                  return <NavListItem key={listItem.id} item={listItem} />;
                })}
              </div>

              <div className={styles.topnavright}>
                <Link href="/subscribe">
                  <a className={styles.subscribeBtn}>
                    <span>Subscribe</span>
                  </a>
                </Link>
                {/* <a href="#about">Sign in</a> */}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </nav>
  );
};

export default Nav;
