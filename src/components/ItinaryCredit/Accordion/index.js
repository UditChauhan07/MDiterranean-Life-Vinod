import React, { useState } from 'react';
import CustomDropdown from './CustomDropDown';
import styles from './Style.module.scss';
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.accordion}>
      <div
        className={`${styles.title} ${styles.borderRad} ${activeIndex === 0 ? styles.active : ''}`}
        onClick={() => onTitleClick(0)}
      >
        <input type="radio" checked={activeIndex === 0} readOnly />
        Credit / Debit Card {activeIndex === 0}
      </div>

      {activeIndex === 0 && (
        <div className={styles.Content}>
          <CustomDropdown />
          <div className={styles.creditControl}>
            <div className={styles.creditInput}>
              <div>
                <label>
                  Card Holder Name<span className={styles.HashRed}>*</span>
                </label>
                <br />
                <input placeholder="Card holder name" required></input>
              </div>

              <div>
                <label>
                  Credit/Debit Card Number<span className={styles.HashRed}>*</span>
                </label>
                <br />
                <input placeholder="Card number" required></input>
              </div>

              <div className={styles.ExpiryDate}>
                <div>
                  <label>
                    Expiry Date<span className={styles.HashRed}>*</span>
                  </label>
                  <br />
                  <input placeholder="MM/YY" required></input>
                </div>

                <div>
                  <label>
                    CVC/CVV<span className={styles.HashRed}>*</span>
                  </label>
                  <br />
                  <input placeholder="MM/YY" required></input>
                </div>
              </div>
            </div>
            <div className={styles.creditOut}>
              <div>
                <img src="/package/CreditCard.png" alt="CreditCard" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`${styles.title} ${activeIndex === 1 ? styles.active : ''}`} onClick={() => onTitleClick(1)}>
        <input type="radio" checked={activeIndex === 1} readOnly />
        Digital Payment {activeIndex === 1}
      </div>
      {activeIndex === 1 && (
        <div className={styles.Content}>
          <p className={styles.ConfirmMail}>Coming Soon</p>
        </div>
      )}

      <div className={`${styles.title} ${activeIndex === 2 ? styles.active : ''}`} onClick={() => onTitleClick(2)}>
        <input type="radio" checked={activeIndex === 2} readOnly />
        Online Banking {activeIndex === 2}
      </div>
      {activeIndex === 2 && (
        <div className={styles.Content}>
          <p className={styles.ConfirmMail}>Coming Soon</p>
        </div>
      )}
      <p className={styles.ConfirmMail}>
        We&apos;ll send confirmation of your booking to <b>Test@gmail.com</b>
      </p>
    </div>
  );
};

export default Accordion;
