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
          {/* {navigationLinks.map((link) => (
            <NavigationLink href={link.href} key={link.text}>
              {link.text}
            </NavigationLink>
          ))} */}
       
          <div className={styles.socialMediaButtons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon style={{width:'50px',height:'50px'}} icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon style={{width:'50px',height:'50px'}} icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon style={{width:'50px',height:'50px'}} icon={faInstagram} />
            </a>
          </div>
          <div style={{display: 'flex', marginTop: '40px'}}>
           {/* <button className={styles.buttonFooter} onClick={openPopupFlowers}>
            Nuestras flores
          </button> */}
          <button className={styles.buttonFooter} onClick={openPopupWpp}>
            ¿Como ser parte?
          </button>
          </div>
        
        </nav>{" "}
      </footer>
    </>
  );
};