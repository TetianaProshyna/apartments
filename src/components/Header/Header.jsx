import Logo from "../Logo";
import Container from "../UI/Container";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <a href="/">
            <Logo />
          </a>
          <nav className={styles.nav}>
            <a className={styles.navLink} href="/">
              About us
            </a>
            <a className={styles.navLink} href="/">
              Gallery
            </a>
            <a className={styles.navLink} href="/">
              Contacts
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
};
export default Header;
