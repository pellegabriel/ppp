import styles from "../pages/page.module.scss";
import Image from 'next/image';

export default function FlowerBox({ image, alt, text }) {
  return (
    <div className={styles.flowerBox}>
      <Image src={image} alt={alt} width={100} height={100} />
      <p className={styles.flowerText}>{text}</p>
    </div>
  );
}