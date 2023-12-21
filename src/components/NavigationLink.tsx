import styles from "../pages/page.module.scss";

export function NavigationLink({ href, children }) {
  return (
    <a href={href} className={styles.navLink}>
      {children}
    </a>
  );
}