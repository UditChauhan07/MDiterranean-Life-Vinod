import Link from 'next/link';

import { postPathBySlug } from 'lib/posts';

import Metadata from 'components/Metadata';

import { FaMapPin } from 'react-icons/fa';
import styles from './PostCard.module.scss';

const PostCard = ({ post }) => {
  // console.log("check post data", post);
  const { slug, isSticky = false } = post;

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  return (
    <div className={postCardStyle}>
      {isSticky && <FaMapPin aria-label="Sticky Post" />}
      <Link href={postPathBySlug(slug)}>
        <div>
          <h3 className={styles.fashionCompaigns}>{post.title}</h3>
        </div>
      </Link>

      <div className={styles.postCardTitle} dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <Metadata className={styles.postCardMetadata} />

      <div className={styles.postCardContent}>{post?.author?.name}</div>
    </div>
  );
};

export default PostCard;
