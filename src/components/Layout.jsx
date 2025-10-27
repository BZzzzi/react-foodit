import styles from "./Layout.module.css";
import logo from "../asset/logo.svg";
import logoWhite from "../asset/logo-white.svg";

function Layout({ children }) {
  return (
    <div className={styles.siteBg}>
      <header className={styles.siteHeader}>
        <div className={styles.siteHeaderLayout}>
          <a href="/">
            <img src={logo} alt="로고" />
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.siteFooter}>
        <div className={styles.siteFooterLayout}>
          <img src={logoWhite} alt="풋터 로고" className={styles.footerImg} />
          <p>서비스 이용약관 | 개인정보 처리방침</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
