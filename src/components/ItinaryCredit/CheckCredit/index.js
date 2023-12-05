import React from 'react';
import Styles from './Style.module.scss';
function CheckCredit() {
  return (
    <div className={Styles.travel3Main}>
      <div className={Styles.travel3Ye}>
        <div className={Styles.travel3}>
          <div className={Styles.SideSpaceTravel}>
            <div className={Styles.checkDate}>
              <h6>07 Jul 2023 - 08 Jul 2023</h6>
              <span>1 Night</span>
            </div>
            <div className={Styles.checkDate}>
              <div className={Styles.CreditSmallImg}>
                <div className={Styles.imgSmall}>
                  <img src="/package/TravelSmallImg.png" alt="TravelSmallImg" />
                </div>
                <div className={Styles.TravelContent}>
                  <h4>Travelling Capri By Boat</h4>
                  <img src="/package/GoldenStar.svg" alt="GoldenStar" />
                  <img src="/package/GoldenStar.svg" alt="GoldenStar" />
                  <img src="/package/GoldenStar.svg" alt="GoldenStar" />
                  <img src="/package/GoldenStar.svg" alt="GoldenStar" />
                  <p>Tour Ste 324A Boca Raton, FL 33431</p>
                </div>
              </div>
            </div>
            <div className={`${Styles.checkDate} ${Styles.BorderNoneCheckDate}`}>
              <div className={Styles.TravelPrice}>
                <div className={Styles.TravelPricea}>
                  <p>Price</p>
                </div>
                <div className={Styles.TravelPriceb}>
                  <p>$1150.49</p>
                </div>
              </div>
              <p className={Styles.PriceBSpan}>Included in price: Taxes and fees</p>
              <h5 className={Styles.PriceBh5}>YOU SAVED $ 32.21 ON THIS BOOKING!</h5>
            </div>
          </div>
          <div className={`${Styles.travel3a} ${Styles.TravHeight}`}>
            <h5>8.6 Excellent</h5>
            <span>188 reviews</span>
            <div className={Styles.ExecllentTravel}>
              <span className={Styles.ExecllentMargin}>Breakfast</span>
              <span>Housekeeping</span>
            </div>
            <div className={Styles.MapTravel}>
              <div>
                <img src="/package/mapTravel.png" alt="mapTravel" />
              </div>
              <h4>8.9 Excellent</h4>
              <span>Location rating score</span>
              <div className={Styles.ParkingFree}>
                <div>
                  <span>Parking</span>
                </div>
                <div>
                  <h4>FREE</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckCredit;
