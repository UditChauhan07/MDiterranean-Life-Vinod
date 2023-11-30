import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let documentHeight = document.getElementsByTagName('main');
    if (documentHeight.length) {
      documentHeight = documentHeight[0].offsetHeight * 0.5;
    } else {
      documentHeight = 300;
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY >= documentHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className={styles.btnScrollTop} onClick={goTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000"
            class="bi bi-chevron-double-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
