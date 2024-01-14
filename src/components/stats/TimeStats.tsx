import React from 'react';
import styles from './timeStats.module.scss'; // Asume que tienes estilos definidos en este archivo

const TimeStats = ({ weekly, monthly, yearly,w ,l, d } : any) => {
  return (
    <div className={styles.timeStats}>
      <div className={styles.statBlock}>
        <div className={styles.statHeader}>WEEK</div>
        <div className={styles.statValueHead}>{weekly}</div>
                <div className={styles.statValue}>{w}</div>
        <div className={styles.statValue}>{l}</div>
        <div className={styles.statValue}>{d}</div>

      </div>
      <div className={styles.statBlock2}>
        <div className={styles.statHeader}>MONTH</div>
        <div className={styles.statValueHead}>{monthly}</div>
                <div className={styles.statValue}>{w}</div>
        <div className={styles.statValue}>{l}</div>
        <div className={styles.statValue}>{d}</div>
      </div>
      <div className={styles.statBlock3}>
        <div className={styles.statHeader}>YEAR</div>
        <div className={styles.statValueHead}>{yearly}</div>
                        <div className={styles.statValue}>{w}</div>
        <div className={styles.statValue}>{l}</div>
        <div className={styles.statValue}>{d}</div>
      </div>
    </div>
  );
};

export default TimeStats;
