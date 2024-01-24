"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import logo from "../../assets/logoONG.png";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Footer } from "../components/footer/footer";
import coco1 from "../../assets/coco1.jpg";
import coco2 from "../../assets/coco2.jpg";
 const flowerData = [
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;

    const x = (offsetX / clientWidth - 0.5) * 2; // Rango -1 a 1
    const y = (offsetY / clientHeight - 0.5) * 2; // Rango -1 a 1

    setMousePos({ x, y });
  };

  const logoStyle = {
    transform: `perspective(500px) rotateX(${-mousePos.y * 20}deg) rotateY(${mousePos.x * 20}deg)`
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
      <h1>PLANTAS PARA EL PUEBLO</h1>

        <div
          className={styles.logoAndTitle}
          onMouseMove={handleMouseMove}
          style={logoStyle}>
          <Image src={logo} alt="Logo" width={300} height={300} />
        </div>
        
      </header>
      <animated.div style={fadeIn} className={styles.animatedTextTop} >
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
        {flowerData.map((flower, index) => (
          <div key={index} className={styles.scrollItem}>
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


      <div className={styles.title}>
        <div className={styles.headerContent}>
          <p style={{color: 'white'}}>
            As a leading company approved by the MOH for the past decade, IMC
            works tirelessly to allow our patients to live a happy & fulfilling
            life.
          </p>

        </div>
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
      <Footer/>
    </div>
  );
}
