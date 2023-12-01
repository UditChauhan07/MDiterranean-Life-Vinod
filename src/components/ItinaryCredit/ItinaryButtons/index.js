import React from 'react';
import styles from './style.module.scss';

function ItinaryButtons() {
  return (
    <div className={styles.buttonItinery}>
      <div className={styles.buttonBlackb}>
        <button className={styles.buttonBlack}>Book Now</button>
      </div>
      <div className={styles.buttonBlackb}>
        <button className={styles.buttonWhite}>Back To Your Booking Details </button>
      </div>
      <div></div>
    </div>
  );
}

export default ItinaryButtons;
