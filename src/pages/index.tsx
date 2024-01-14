"use client";

import { NavigationLink, Button } from "../components";
import Image from 'next/image';

import styles from "./page.module.scss";
import coco1 from "../../assets/coco1.jpg";
import coco2 from "../../assets/coco2.jpg";
import { FlowerBox } from "../components/FlowerBox";


const navigationLinks = [
  { href: "/aboutUs", text: "About Us" },
  { href: "/ourFlowersOils", text: "Our Flowers & Oils" },
  { href: "/relations", text: "Relations" },
];

export const flowerData = [
  {
    id: 'coco1',
    image: coco1,
    alt: "Dairy Queen",
    text: "Dairy Queen (DQ) - Texto descriptivo",
  },
  { 
    id: 'coco2',image: coco2, alt: "Tel Aviv", text: "Tel Aviv - Texto descriptivo" },
  {    id: 'coco3',
    image: coco1,
    alt: "Dairy Queen",
    text: "Dairy Queen (DQ) - Texto descriptivo",
  },
  {     id: 'coco4',image: coco2, alt: "Tel Aviv", text: "Tel Aviv - Texto descriptivo" },
  {
    id: 'coco5',image: coco1,
    alt: "Dairy Queen",
    text: "Dairy Queen (DQ) - Texto descriptivo",
  },
  {    id: 'coco6', image: coco2, alt: "Tel Aviv", text: "Tel Aviv - Texto descriptivo" },
  {
    id: 'coco7',
    image: coco1,
    alt: "Dairy Queen",
    text: "Dairy Queen (DQ) - Texto descriptivo",
  },

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
      <div className={styles.mainContent}>
      {flowerData.map((flower, index) => (
          <FlowerBox
            key={index}
            id={flower.id}
            image={flower.image}
            alt={flower.alt}
            text={flower.text}
          />
        ))}
      </div>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
