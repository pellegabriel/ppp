import React from 'react';
import styles from './PopupComponent.module.scss'; // Asegúrate de crear este archivo CSS con los estilos para tu popup

export const PopupComponent = ({ onClose }) => {
  return (
    <div className={styles.popupBackground}>
      <div className={styles.popupContainer}>
        <p>Nos alegramos de que te interese nuestra medicina. Por favor, si quieres tener detalles de lo que producimos, contáctate con nosotros en alguna red social o clickea el botón "Cómo unirme".</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

