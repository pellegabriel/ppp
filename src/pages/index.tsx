"use client";

import { NavigationLink, Button } from "../components";
import Image from "next/image";

import styles from "./page.module.scss";
import coco1 from "../../assets/coco1.jpg";
import coco2 from "../../assets/coco2.jpg";
import { FlowerBox } from "../components/FlowerBox";
import logo from "../../assets/logoONG.png";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const navigationLinks = [
  { href: "/aboutUs", text: "Sobre Nosotros" },
  { href: "/ourFlowersOils", text: "Nuestras flores" },
  { href: "/relations", text: "Como ser parte..." },
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
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowText(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? `translateY(0)` : `translateY(30px)`,
  });
  const scrollContainerRef = useRef(null);

  const onDragStart = (e) => {
    e.preventDefault();
    const scrollContainer = scrollContainerRef.current;
    let startX = e.pageX || e.touches[0].pageX;
    let scrollLeft = scrollContainer.scrollLeft;

    const onMouseMove = (e) => {
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", onMouseMove);
      },
      { once: true }
    );

    document.addEventListener("touchmove", onMouseMove);
    document.addEventListener(
      "touchend",
      () => {
        document.removeEventListener("touchmove", onMouseMove);
      },
      { once: true }
    );
  };
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoAndTitle}>
          <Image src={logo} alt="Logo" width={200} height={200} />
        </div>
      </header>
      <div className={styles.title}>
        <div className={styles.headerContent}>
          <h1>Plantas Para el Pueblo</h1>
          <p>
            As a leading company approved by the MOH for the past decade, IMC
            works tirelessly to allow our patients to live a happy & fulfilling
            life.
          </p>
          <div className={styles.buttonContainer}>
            <Button>Registrate</Button>
            <Button>Iniciar Sesion</Button>
          </div>
        </div>
      </div>
      <animated.div style={fadeIn} className={styles.animatedText}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          distinctio corporis doloremque, amet vero voluptatum, consectetur
          ducimus vel praesentium reiciendis soluta temporibus nulla velit
          architecto pariatur, culpa quasi omnis perferendis.
        </p>
      </animated.div>
      <div
        className={styles.imageScrollContainer}
        ref={scrollContainerRef}
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}>
        {" "}
        {flowerData.map((flower, index) => (
          <div key={index} className={styles.scrollItem}>
            {/* <Image
              src={flower.image}
              alt={flower.alt}
              width={300}
              height={200}
            /> */}
            <div
              style={{
                width: "300px",
                height: "400px",
                backgroundColor: "#101010",
                margin: "40px",
              }}></div>
          </div>
        ))}
      </div>

      <main className={styles.mainContent}>
        <animated.div style={fadeIn} className={styles.animatedText}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            distinctio corporis doloremque, amet vero voluptatum, consectetur
            ducimus vel praesentium reiciendis soluta temporibus nulla velit
            architecto pariatur, culpa quasi omnis perferendis.
          </p>
          <br />
          <p className={styles.animatedText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            distinctio corporis doloremque, amet vero voluptatum, consectetur
            ducimus vel praesentium reiciendis soluta temporibus nulla velit
            architecto pariatur, culpa quasi omnis perferendis.
          </p>
        </animated.div>
      </main>
      <footer className={styles.footer}>
        <nav className={styles.navigation}>
          {navigationLinks.map((link) => (
            <NavigationLink href={link.href} key={link.text}>
              {link.text}
            </NavigationLink>
          ))}
          <div className={styles.socialMediaButtons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </nav>{" "}
      </footer>
    </div>
  );
}
