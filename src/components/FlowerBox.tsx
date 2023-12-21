import styles from "../pages/page.module.scss";

export function FlowerBox({ image, alt, text }) {
  return (
    <div className={styles.flowerBox}>
      <img src={image} alt={alt} className={styles.flowerImage} />
      <p className={styles.flowerText}>{text}</p>
    </div>
  );
}