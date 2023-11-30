// import ClassName from 'models/classname';
// import styles from './NavListItem.module.scss';
import Link from 'next/link';

const NavListItem = ({ className, item }) => {
  const nestedItems = (item.children || []).map((item) => {
    return <NavListItem key={item.id} item={item} />;
  });

  const catUrl = item.path.replace('category', 'categories');

  return (
    <span key={item.id}>
      {!item.path.includes('http') && !item.target && (
        <Link href={catUrl}>
          <a title={item.title}>
            <span>{item.label}</span>
          </a>
        </Link>
      )}
      {item.path.includes('http') && (
        <a href={catUrl} title={item.title} target={item.target}>
          <span>{item.label}</span>
        </a>
      )}

      {nestedItems.length > 0 && <ul className={className}>{nestedItems}</ul>}
    </span>
  );
};

export default NavListItem;
