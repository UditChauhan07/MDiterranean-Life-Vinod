import styles from './MastHead.module.scss';
const MastHead = ({ source, v2 = false }) => {
  if (!source) return null;
  if (v2) {
    return (
      <div className={styles.mastHeadContainerAvail}>
        <img src={source?.desk?.src} alt={source?.desk?.alt || '...'} className={styles.MastHeadDeskImg} />
        <img src={source?.mob?.src} alt={source?.mob?.alt || '...'} className={styles.MastHeadMobImg} />
        {source?.title && <div className={styles.titleHolder}>{source.title}</div>}
        {source.avail && (
          <div className={styles.availabilyContainer}>
            <div>
              <div className={styles.dateRangeContainer}>
                <input className={styles.dateRangeHolder1} type="date" />
                <input className={styles.dateRangeHolder2} type="date" />
              </div>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <p className={styles.availabilyButton}>Check Availability</p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.mastHeadContainer}>
        <img src={source?.desk?.src} alt={source?.desk?.alt || '...'} className={styles.MastHeadDeskImg} />
        <img src={source?.mob?.src} alt={source?.mob?.alt || '...'} className={styles.MastHeadMobImg} />
        {source?.title && <div className={styles.titleHolder}>{source.title}</div>}
      </div>
    );
  }
};
export default MastHead;
