import styles from './categoriesBox.module.scss';

const CategoriesBox = ({ category }) => {
  console.log({ category });
  const Box = ({ title, href = null }) => (
    <div className={styles.categoryTitleContainer}>
      {href ? (
        <a href={href} className={styles.titleHolder}>
          {title}
        </a>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
  const Box1 = ({ title, href = null }) => (
    <div className={styles.categoryTitleContainer1}>
      {href ? (
        <a href={href} className={styles.titleHolder}>
          {title}
        </a>
      ) : (
        <span className={styles.titleHolder}>{title}</span>
      )}
    </div>
  );
  const Box2 = ({ title, href = null }) => (
    <div className={styles.categoryTitleContainer2}>
      <span className={styles.layout2Border1}></span>
      <span className={styles.layout2Border2}></span>
      {href ? (
        <a href={href} className={styles.titleHolder}>
          {title}
        </a>
      ) : (
        <span className={styles.titleHolder}>{title}</span>
      )}
      <span className={styles.layout2Border3}></span>
      <span className={styles.layout2Border4}></span>
    </div>
  );
  const Box3 = ({ title, href = null }) => (
    <div className={styles.categoryTitleContainer3}>
      <span className={styles.layout2Border1}></span>
      <span className={styles.layout2Border2}></span>
      {href ? (
        <a href={href} className={styles.titleHolder}>
          {title}
        </a>
      ) : (
        <span className={styles.titleHolder}>{title}</span>
      )}
      <span className={styles.layout2Border3}></span>
      <span className={styles.layout2Border4}></span>
    </div>
  );
  const Box4 = ({ title, href = null }) => (
    <div className={styles.categoryTitleContainer4}>
      <span className={styles.layout2Border1}></span>
      <span className={styles.layout2Border2}></span>
      {href ? (
        <a href={href} className={styles.titleHolder}>
          {title}
        </a>
      ) : (
        <span className={styles.titleHolder}>{title}</span>
      )}
      <span className={styles.layout2Border3}></span>
      <span className={styles.layout2Border4}></span>
    </div>
  );
  if (!category) return null;
  return (
    <div className={styles.categoryBoxContainer}>
      {category?.align == 'left' ? (
        <>
          {category?.banner?.src && <img src={category.banner.src} alt={category.banner.alt} />}
          {category?.title && (
            <>
              {category.theme == 1 ? (
                <Box1 title={category.title} href={category?.href} />
              ) : category.theme == 2 ? (
                <Box2 title={category.title} href={category?.href} />
              ) : category.theme == 3 ? (
                <Box3 title={category.title} href={category?.href} />
              ) : category.theme == 4 ? (
                <Box4 title={category.title} href={category?.href} />
              ) : (
                <Box title={category.title} href={category?.href} />
              )}
            </>
          )}
        </>
      ) : (
        <>
          {category?.title && (
            <>
              {category.theme == 1 ? (
                <Box1 title={category.title} href={category?.href} />
              ) : category.theme == 2 ? (
                <Box2 title={category.title} href={category?.href} />
              ) : category.theme == 3 ? (
                <Box3 title={category.title} href={category?.href} />
              ) : category.theme == 4 ? (
                <Box4 title={category.title} href={category?.href} />
              ) : (
                <Box title={category.title} href={category?.href} />
              )}
            </>
          )}
          {category?.banner?.src && <img src={category.banner.src} alt={category.banner.alt} />}
        </>
      )}
    </div>
  );
};
export default CategoriesBox;
