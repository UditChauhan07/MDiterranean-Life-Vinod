import Link from 'next/link';
import { Helmet } from 'react-helmet';
import { getPostBySlug, getRecentPosts, getRelatedPosts, postPathBySlug } from 'lib/posts';
import { categoryPathBySlug } from 'lib/categories';
import { formatDate } from 'lib/datetime';
import { ArticleJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import usePageMetadata from 'hooks/use-page-metadata';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import Content from 'components/Content';
import Metadata from 'components/Metadata';
import FeaturedImage from 'components/FeaturedImage';
import styles from 'styles/pages/Post.module.scss';
import RelatedPost from 'components/RelatedPost';

export default function Post({ post, socialImage, related }) {
  const {
    title,
    mastheadMp4Video,
    mastheadMp4VideoThumb,
    metaTitle,
    description,
    content,
    date,
    author,
    categories,
    modified,
    tags,
    selectRelatedPosts,
    featuredImage,
    mastheadWistiaVideoId,
    mastheadBanner,
    seo,
    isSticky = false,
  } = post;

  const { metadata: siteMetadata = {}, homepage } = useSite();
  if (!post.og) {
    post.og = {};
  }
  post.og.imageUrl = `${homepage}${socialImage}`;
  post.og.imageSecureUrl = post.og.imageUrl;
  post.og.imageWidth = 2000;
  post.og.imageHeight = 1000;

  const { metadata } = usePageMetadata({
    metadata: {
      ...post,
      title: seo ? seo.title : metaTitle,
      description: seo ? seo.metaDesc : description || post.og?.description || `Read more about ${title}`,
    },
  });

  metadata.title = `${metadata.title}`;
  metadata.og.title = metadata.title;
  metadata.twitter.title = metadata.title;

  const metadataOptions = {
    compactCategories: false,
  };

  const { posts: relatedPostsList, title: relatedPostsTitle } = related || {};

  let tagList = tags?.nodes || [];
  let selList = selectRelatedPosts.nodes || [];
  let postId = post.id;
  let relatedPosts = [];
  let relatedPostId = [];
  if (selList.length) {
    selList.map((post) => {
      if (!relatedPostId.includes(post.id) && postId != post.id) {
        relatedPosts = [...relatedPosts, post];
        relatedPostId.push(post.id);
      }
    });
  } else {
    if (tagList.length) {
      tagList.map((tag) => {
        if (tag.posts && tag.posts.nodes && tag.posts.nodes.length) {
          tag.posts.nodes.map((post) => {
            if (!relatedPostId.includes(post.id) && postId != post.id) {
              relatedPosts = [...relatedPosts, post];
              relatedPostId.push(post.id);
            }
          });
        }
      });
    }
  }

  function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len) n = len;
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  const helmetSettings = helmetSettingsFromMetadata(metadata);
  // console.warn({ metadata });
  return (
    <Layout newsLetterShow={true}>
      <Helmet {...helmetSettings} />
      <ArticleJsonLd post={post} siteTitle={siteMetadata.title} />
      {!mastheadBanner ? (
        <>
          {mastheadMp4Video ? (
            <div style={{ margin: 'auto', display: 'block', placeContent: 'center' }}>
              {true && (
                <figure className="videoFull">
                  <video
                    poster={
                      mastheadMp4VideoThumb.node.mediaItemUrl ||
                      featuredImage.sourceUrl ||
                      mastheadMp4Video.node.mediaItemUrl
                    }
                    controls
                    style={{ width: '68rem' }}
                  >
                    <source src={mastheadMp4Video.node.mediaItemUrl} type="video/mp4" />
                  </video>
                </figure>
              )}
              <Header>
                <div className={(mastheadWistiaVideoId || mastheadBanner) && 'mt-4'}>
                  <h1
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                      __html: title,
                    }}
                  />
                </div>
              </Header>
            </div>
          ) : (
            <Header isTopMargin={mastheadWistiaVideoId ? true : false}>
              {mastheadWistiaVideoId && (
                <div class="ratio ratio-16x9">
                  <iframe
                    src={`//fast.wistia.net/embed/iframe/${mastheadWistiaVideoId}?videoFoam=true`}
                    allowtransparency="true"
                    frameborder="0"
                    scrolling="no"
                    class="wistia_embed"
                    name="wistia_embed"
                    autoPlay
                    allowfullscreen
                    mozallowfullscreen
                    webkitallowfullscreen
                    oallowfullscreen
                    msallowfullscreen
                  ></iframe>
                </div>
              )}
              <div className={(mastheadWistiaVideoId || mastheadBanner) && 'mt-4'}>
                <h1
                  className={styles.title}
                  dangerouslySetInnerHTML={{
                    __html: title,
                  }}
                />
              </div>
              {false && (
                <Metadata
                  className={styles.postMetadata}
                  date={date}
                  author={author}
                  categories={categories}
                  options={metadataOptions}
                  isSticky={isSticky}
                />
              )}

              {featuredImage && false && (
                <FeaturedImage
                  {...featuredImage}
                  src={featuredImage.sourceUrl}
                  dangerouslySetInnerHTML={featuredImage.caption}
                />
              )}
            </Header>
          )}
        </>
      ) : (
        <div>
          {mastheadBanner && (
            <div>
              <img src={mastheadBanner.node.link} className="imgBanner" alt="" />
            </div>
          )}
          <div
            className={(mastheadWistiaVideoId || mastheadBanner) && 'mt-4'}
            style={{ maxWidth: '60rem', margin: '0 auto' }}
          >
            <h1
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </div>
        </div>
      )}
      <Content className={'mt-4 postsContainer'}>
        {/* <Container> */}
        <div
          className={styles.content1}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        {/* </Container> */}
      </Content>
      {relatedPosts.length > 0 && <RelatedPost array={getRandom(relatedPosts, 3)} />}

      {false && (
        <Section className={styles.postFooter}>
          <Container>
            <p className={styles.postModified}>Last updated on {formatDate(modified)}.</p>
            {Array.isArray(relatedPostsList) && relatedPostsList.length > 0 && (
              <div className={styles.relatedPosts}>
                {relatedPostsTitle.name ? (
                  <span>
                    More from{' '}
                    <Link href={relatedPostsTitle.link}>
                      <a>{relatedPostsTitle.name}</a>
                    </Link>
                  </span>
                ) : (
                  <span>More Posts</span>
                )}
                <ul>
                  {relatedPostsList.map((post) => (
                    <li key={post.title}>
                      <Link href={postPathBySlug(post.slug)}>
                        <a>{post.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Container>
        </Section>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { post } = await getPostBySlug(params?.slug);
  if (!post) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { categories, databaseId: postId } = post;

  const props = {
    post,
    socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${params?.slug}.png`,
  };

  const { category: relatedCategory, posts: relatedPosts } = (await getRelatedPosts(categories, postId)) || {};
  const hasRelated = relatedCategory && Array.isArray(relatedPosts) && relatedPosts.length;

  if (hasRelated) {
    props.related = {
      posts: relatedPosts,
      title: {
        name: relatedCategory.name || null,
        link: categoryPathBySlug(relatedCategory.slug),
      },
    };
  }

  return {
    props,
  };
}

export async function getStaticPaths() {
  // Only render the most recent posts to avoid spending unecessary time
  // querying every single post from WordPress

  // Tip: this can be customized to use data or analytitcs to determine the
  // most popular posts and render those instead

  const { posts } = await getRecentPosts({
    count: process.env.POSTS_PRERENDER_COUNT, // Update this value in next.config.js!
    queryIncludes: 'index',
  });

  const paths = posts
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        slug,
      },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
}
