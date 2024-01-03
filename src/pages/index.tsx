"use client";

import { NavigationLink, Button } from "../components";
import FlowerBox from "../components/FlowerBox";
import Image from 'next/image';

import styles from "./page.module.scss";
import coco1 from "../../assets/coco1.jpg";
import coco2 from "../../assets/coco2.jpg";


const navigationLinks = [
  { href: "/aboutUs", text: "About Us" },
  { href: "/ourFlowersOils", text: "Our Flowers & Oils" },
  { href: "/relations", text: "Relations" },
];

const flowerData = [
  {
    image: coco1,
    alt: "Dairy Queen",
    text: "Dairy Queen (DQ) - Texto descriptivo",
  },
  { image: coco2, alt: "Tel Aviv", text: "Tel Aviv - Texto descriptivo" },
  {
    image: coco1,
    alt: "Dairy Queen",
    text: "Dairy Queen (DQ) - Texto descriptivo",
  },
  { image: coco2, alt: "Tel Aviv", text: "Tel Aviv - Texto descriptivo" },
  {
    image: coco1,
    alt: "Dairy Queen",
    text: "Dairy Queen (DQ) - Texto descriptivo",
  },
  { image: coco2, alt: "Tel Aviv", text: "Tel Aviv - Texto descriptivo" },
];
export default function Page() {

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          {navigationLinks.map((link) => (
            <NavigationLink href={link.href} key={link.text}>
              {link.text}
            </NavigationLink>
          ))}
        </nav>
        <div className={styles.headerContent}>
          <Image src="/assets/logoONG.png" alt="Logo ONG" width={150} height={75} layout="fixed" />
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
        {flowerData.map((flower, index) => (
          <FlowerBox
            key={index}
            image={flower.image}
            alt={flower.alt}
            text={flower.text}
          />
        ))}
      </main>
      <footer className={styles.footer}>
        {/* Contenido del pie de página */}
      </footer>
    </div>
  );
}
