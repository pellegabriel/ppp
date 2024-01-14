import React from 'react'
import styles from './totalMatches.module.scss' // Asume que tienes estilos definidos en este archivo

export const TotalMatches = ({ total, wins, winRate, losses, lossRate, draws, drawRate }: any) => {
	return (
  <div className={styles.totalMatches}>
      <div className={styles.headerSection}>
      </div>
      <div className={styles.statsSection}>
        <div className={styles.matchesCount}>{total}</div>
        <div className={styles.stat}>
          <div className={`${styles.statLetter} ${styles.winLetter}`}>W</div>
          <div className={styles.numbersContainer}>
            <div className={styles.statNumbers}>{wins}</div>
            <div className={styles.statPercent}>{winRate}%</div>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={`${styles.statLetter} ${styles.lossLetter}`}>L</div>
          <div className={styles.numbersContainer}>
            <div className={styles.statNumbers}>{losses}</div>
            <div className={styles.statPercent}>{lossRate}%</div>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={`${styles.statLetter} ${styles.drawLetter}`}>D</div>
          <div className={styles.numbersContainer}>
            <div className={styles.statNumbers}>{draws}</div>
            <div className={styles.statPercent}>{drawRate}%</div>
          </div>
        </div>
      </div>
    </div>
	)
}
