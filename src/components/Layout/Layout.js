import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import styles from './Layout.module.scss';
import { NewsLetter } from 'components/NewsLetter';
import useSite from 'hooks/use-site';
import { helmetSettingsFromMetadata } from 'lib/site';

import Nav from 'components/Nav';
import Main from 'components/Main';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';

const Layout = ({ children, newsLetterShow }) => {
  if (!newsLetterShow) newsLetterShow = true;
  const router = useRouter();
  const { asPath } = router;

  const { homepage, metadata = {} } = useSite();

  if (!metadata.og) {
    metadata.og = {};
  }

  metadata.og.url = `${homepage}${asPath}`;
  const helmetSettings = {
    defaultTitle: metadata.title,
    titleTemplate: process.env.WORDPRESS_PLUGIN_SEO === true ? '%s' : `%s`,
    ...helmetSettingsFromMetadata(metadata, {
      setTitle: false,
      link: [
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          href: '/feed.xml',
        },

        // Favicon sizes and manifest generated via https://favicon.io/

        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
    }),
  };

  return (
    <div className={styles.layoutContainer}>
      <Helmet {...helmetSettings} />

      <Nav />
      <Main>{children}</Main>
      <ScrollToTop />
      {newsLetterShow && (
        <div className="mb-5">
          <NewsLetter
            content={{
              title: 'Join Our Newsletter',
              portalId: '19647191',
              formId: '9763546f-5aed-4882-8ef6-1f9e9a92a6c5',
            }}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
