"use client";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          {/* Navigation links here */}
          <a href="/about-us">About Us</a>
          <a href="/our-flowers-oils">Our Flowers & Oils</a>
          <a href="/investor-relations">Investor Relations</a>
        </nav>
        <div className={styles.headerContent}>
          <h1>High-Quality Medical Cannabis</h1>
          <p>
            As a leading company approved by the MOH for the past decade, IMC
            works tirelessly to allow our patients to live a happy & fulfilling
            life.
          </p>
          <div className={styles.buttonContainer}>
            <button>Our flowers and Oils</button>
            <button>About IMC</button>
          </div>
        </div>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.flowerSection}>
          <div className={styles.flowerBox}>
            <img
              src="/path-to-dairy-queen.jpg"
              alt="Dairy Queen"
              className={styles.flowerImage}
            />
            <p className={styles.flowerText}>
              Dairy Queen (DQ) - Texto descriptivo
            </p>
          </div>
          <div className={styles.flowerBox}>
            <img
              src="/path-to-tel-aviv.jpg"
              alt="Tel Aviv"
              className={styles.flowerImage}
            />
            <p className={styles.flowerText}>Tel Aviv - Texto descriptivo</p>
          </div>
        </section>
        <section className={styles.flowerSection}>
          <div className={styles.flowerBox}>
            <img
              src="/path-to-dairy-queen.jpg"
              alt="Dairy Queen"
              className={styles.flowerImage}
            />
            <p className={styles.flowerText}>
              Dairy Queen (DQ) - Texto descriptivo
            </p>
          </div>
          <div className={styles.flowerBox}>
            <img
              src="/path-to-tel-aviv.jpg"
              alt="Tel Aviv"
              className={styles.flowerImage}
            />
            <p className={styles.flowerText}>Tel Aviv - Texto descriptivo</p>
          </div>
        </section>{" "}
      </main>
      <footer className={styles.footer}>
        {/* Contenido del pie de página */}
      </footer>
    </div>
  );
}
