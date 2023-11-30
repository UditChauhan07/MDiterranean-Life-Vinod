import styles from './index.module.scss';
const CategoryList = ({ data }) => {
  return (
    <section className={styles.CategoryListContainer}>
      {data.length > 0 &&
        data.map((Element, index) => {
          return (
            <div className={`${styles.cardContainer} ${index % 4 ? styles.alignLeft : styles.alignRight}`} key={index}>
              <a className={styles.linkHolder} href={Element?.link}>
                <div className={styles.titleHeadHolder}>
                  <div className={styles.titleHolder}>{Element.title}</div>
                  <div className={styles.subTitleContainer}>
                    <img className={styles.locationIconHolder} src="/location_icon.png" alt="..." />
                    <div className={styles.subTitleHolder} dangerouslySetInnerHTML={{ __html: Element.subTitle }} />
                  </div>
                </div>
                <img className={styles.imgHolder} src={Element.banner.src} alt={Element.banner.alt} />
                <div className={styles.linkIconHolder}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="24" height="24">
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </div>
              </a>
            </div>
          );
        })}
    </section>
  );
};
export default CategoryList;
