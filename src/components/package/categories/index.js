import CategoriesBox from '../categoriesBox';
import styles from './categories.module.scss';

const PackegeCategories = ({ categories }) => {
  if (!categories) return null;
  return (
    <div className={styles.categoryContainer}>
      {categories.length > 0 &&
        categories.map((element, index) => {
          return <CategoriesBox category={element} />;
        })}
    </div>
  );
};
export default PackegeCategories;
