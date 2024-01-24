import React from 'react';
import styles from './PopupComponent.module.scss'; 
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PopupComponentWpp = ({ onClose }) => {
  const whatsappNumber = "+5402966305853";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  return (
    <div className={styles.popupBackground}>
    <div className={styles.popupContainer}>
      <p>Buenas, Agradecidos de que quieras unirte a nuestra comunidad, te invitamos a hablar con nuestro operador mediante el botón de WhatsApp.</p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
        <button className={styles.whatsappButton}>
          <FontAwesomeIcon icon={faWhatsapp} />
          Hablar con Operador
        </button>
      </a>
      <button onClick={onClose} className={styles.button}>Cerrar</button>

    </div>
  </div>
  );
};

