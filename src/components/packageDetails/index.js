import styles from './index.module.scss';

const PackageDetails = ({ data }) => {
  return (
    <div className={styles.packageDetailContainer}>
      <h2>{data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.subTitle }} />
      <div className={styles.imgConatiner}>
      {data.gallery.length > 0 &&
        data.gallery.map((element, index) => {
          return <img className={styles.imgHolder} src={element.src} alt={element.alt} key={index} width={200} />;
        })}
        </div>
      <div dangerouslySetInnerHTML={{ __html: data.desc }} />
    </div>
  );
};
export default PackageDetails;
