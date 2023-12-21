"use client";

import { NavigationLink, FlowerBox, Button } from '../components';
import styles from "./page.module.scss";

const navigationLinks = [
  { href: '/about-us', text: 'About Us' },
  { href: '/our-flowers-oils', text: 'Our Flowers & Oils' },
  { href: '/investor-relations', text: 'Investor Relations' },
];

const flowerData = [
  { image: '/path-to-dairy-queen.jpg', alt: 'Dairy Queen', text: 'Dairy Queen (DQ) - Texto descriptivo' },
  { image: '/path-to-tel-aviv.jpg', alt: 'Tel Aviv', text: 'Tel Aviv - Texto descriptivo' },
];

export default function Page() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          {navigationLinks.map(link => (
            <NavigationLink href={link.href} key={link.text}>{link.text}</NavigationLink>
          ))}
        </nav>
        <div className={styles.headerContent}>
          <h1>High-Quality Medical Cannabis</h1>
          <p>
            As a leading company approved by the MOH for the past decade, IMC
            works tirelessly to allow our patients to live a happy & fulfilling
            life.
          </p>
          <div className={styles.buttonContainer}>
            <Button>Our flowers and Oils</Button>
            <Button>About IMC</Button>
          </div>
        </div>
      </header>
      <main className={styles.mainContent}>
        {flowerData.map(flower => (
          <FlowerBox key={flower.alt} image={flower.image} alt={flower.alt} text={flower.text} />
        ))}
      </main>
      <footer className={styles.footer}>
        {/* Contenido del pie de página */}
      </footer>
    </div>
  );
}
