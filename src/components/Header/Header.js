import Container from 'components/Container';

import styles from './Header.module.scss';

const Header = ({ children, isTopMargin }) => {
  return (
    <header className={isTopMargin ? styles.headerZeroMargin : styles.header}>
      <Container>{children}</Container>
    </header>
  );
};

export default Header;
