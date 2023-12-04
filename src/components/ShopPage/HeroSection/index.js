import React from 'react';
import Styles from './Style.module.scss';

function index() {
  return (
    <div>
      <section>
        <div className={Styles.HeroImg}>
          <img src="\package\ShopPageHerobanner.png" />
          <h3>
            TrendHub: Unleash <br /> Your Style
          </h3>
        </div>
      </section>
    </div>
  );
}

export default index;
