import React from 'react';
import styles from './matchStats.module.scss';

export const MatchStatRow = ({ type, wins, losses, draws, winRate, imgSrc } : any) => {
  return (
    <>
     <div className={styles.matchTypeContainer}>  
              {type}
              </div>

    <div className={styles.matchStatRow}>
           
                    <div className={styles.matchType}> 
            		<img src={imgSrc} alt={''} className={styles.image} />
     			

      </div>

      <div className={styles.statsContainer}>

        <div className={`${styles.Letter} ${styles.winLetter}`}>{`W`}</div>
        <div className={styles.wins}>{`${wins} ${winRate}%`}</div>

        <div className={`${styles.Letter} ${styles.lossLetter}`}>{`L `}</div>
                <div className={styles.losses}>{`${losses} ${winRate}%`}</div>

        <div className={`${styles.Letter} ${styles.drawLetter}`}>{`D `}</div>
                <div className={styles.draws}>{`${draws} ${winRate}%`}</div>


      </div>
    </div></>
  );
};

export const MatchStatsSection = ({ matchStats } : any) => {
  return (
    <div className={styles.matchStatsSection}>
      {matchStats.map((stat: any, index: any) => (
        <MatchStatRow key={index} {...stat} />
      ))}
    </div>
  );
};