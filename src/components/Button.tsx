import styles from "../pages/page.module.scss";

export function Button({ children }) {
  return (
    <button className={styles.button}>{children}</button>
  );
}