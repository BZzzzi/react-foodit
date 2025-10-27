import styles from "./Layout.module.css";
import logo from "../asset/logo.svg";
import logoWhite from "../asset/logo-white.svg";
import LocaleSelect from "../contexts/LocaleSelect";
import useTranslate from "../hooks/useTranslate.js";

function Layout({ children }) {
  const t = useTranslate();
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
          <p>
            {t("term of service")} | {t("privacy policy")}
          </p>
          <LocaleSelect />
        </div>
      </footer>
    </div>
  );
}

export default Layout;
