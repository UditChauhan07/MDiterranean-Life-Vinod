import Link from 'next/link';

const LeftbarItem = ({ className, item }) => {
  const nestedItems = (item.children || []).map((item) => {
    return <LeftbarItem key={item.id} item={item} />;
  });
  const catUrl = item.path.replace('category', 'categories');
  return (
    <span key={item.id}>
      {!item.path.includes('http') && !item.target && (
        <Link href={catUrl}>
          <a title={item.title}>{item.label}</a>
        </Link>
      )}
      {item.path.includes('http') && (
        <a href={catUrl} title={item.title} target={item.target}>
          {item.label}
        </a>
      )}
      {nestedItems.length > 0 && <ul className={className}>{nestedItems}</ul>}
    </span>
  );
};

export default LeftbarItem;
