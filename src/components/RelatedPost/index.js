import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
const CustomLink = ({ text }) => {
  const arr = text.toLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const tagLink = arr.join('_');
  return (
    <Link href={`/editorial/#${tagLink}`}>
      <a>
        <span>{text}</span>
      </a>
    </Link>
  );
};
const RelatedPost = ({ array }) => {
  if (!array || !array.length) return null;
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>RELATED POST</h2>
      {/* {array.map((post, index) => {
        return (
          <li key={index}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        );
      })} */}
      <div className={styles.holder}>
        {array.map((post, index) => {
          return (
            <>
              <div className={styles.dflex} key={index}>
                <div className={styles.imgHolder}>
                  {post.featuredImage?.node && (
                    <img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
                  )}
                </div>
                <div className={styles.textHolder}>
                  {post.writtenBy && (
                    <p className={styles.authorLabel}>
                      Written By : <CustomLink text={post.writtenBy} />
                    </p>
                  )}
                  <h3 className={styles.postTitle}>
                    <a href={`/posts/${post.slug}`}>{post.title}</a>
                  </h3>
                  <div
                    className={styles.descText}
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}
                  />
                  <a className={styles.btnHolderLink} href={`/posts/${post.slug}`}>
                    <div className={styles.btnHolder}>
                      <a href={`/posts/${post.slug}`}>Read More</a>
                    </div>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default RelatedPost;
