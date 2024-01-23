// FlowerBox.js
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from "../pages/page.module.scss";

export function FlowerBox({ id, image, alt, text }) {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: '/stats',
      query: { id, alt, text }
    });
  };

  return (
    <div className={styles.flowerBox}>
      <Image src={image} alt={alt} width={200} height={200} />
      <p className={styles.flowerText}>{text}</p>
    </div>
  );
}
