import React, { useState } from 'react';
import styles from '../../pages/page.module.scss';
import { NavigationLink } from '../NavigationLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import  {PopupComponent}  from './PopupComponent';
import  {PopupComponentWpp}  from './PopupComponentWpp';
import { navigationLinks } from '../data';

export const Footer = () => {
  const [isPopupFlowersOpen, setIsPopupFlowersOpen] = useState(false);
  const [isPopupWppOpen, setIsPopupWppOpen] = useState(false);

  const openPopupFlowers = () => {
    setIsPopupFlowersOpen(true);
    setIsPopupWppOpen(false); 
  };

  const openPopupWpp = () => {
    setIsPopupWppOpen(true);
    setIsPopupFlowersOpen(false); 
  };

  const closePopups = () => {
    setIsPopupFlowersOpen(false);
    setIsPopupWppOpen(false);
  };
  return (
    <>
{isPopupFlowersOpen && <PopupComponent onClose={closePopups} />}
      {isPopupWppOpen && <PopupComponentWpp onClose={closePopups} />}
      <footer className={styles.footer}>
        <nav className={styles.navigation}>
          {navigationLinks.map((link) => (
            <NavigationLink href={link.href} key={link.text}>
              {link.text}
            </NavigationLink>
          ))}
                <button className={styles.button} onClick={openPopupFlowers}>
            Nuestras flores
          </button>
          <button className={styles.button} onClick={openPopupWpp}>
            Como ser parte
          </button>
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
    </>
  );
};