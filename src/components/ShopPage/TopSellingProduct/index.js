import React from 'react';
import Styles from './Style.module.scss';
import RightsideSmallBanner from '../MainProduct/RightsideSmallBanner';

function index() {
  return (
    <div>
      <section>
        <div className={Styles.container}>
          <h2 className={Styles.TopH2}>Top Selling Categories</h2>
          <div className={Styles.topSelling}>
            <div className={Styles.ProductTop}>
              <div className={Styles.ProductTopImg}>
                <img src="/package/TopSelling1.png" />
                <h4>GLADIATOR SANDAL</h4>
              </div>

              <p>The Famouse da Costanzo’s Shop</p>
            </div>

            <div className={Styles.ProductTop}>
              <div className={Styles.ProductTopImg}>
                <img src="/package/MainImage1.png" />
                <h4>Fragrance</h4>
              </div>

              <p>The Essence of capri in a bottle</p>
            </div>

            <div className={Styles.ProductTop}>
              <div className={Styles.ProductTopImg}>
                <img src="/package/MainImage2.png" />
                <h4>Ferragamo shoe</h4>
              </div>

              <p>A Dynastly “Made in Italy”</p>
            </div>
          </div>
          <RightsideSmallBanner></RightsideSmallBanner>
        </div>
      </section>
    </div>
  );
}

export default index;
