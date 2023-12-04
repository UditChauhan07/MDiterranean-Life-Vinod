import React from 'react';
import Styles from './Style.module.scss';
function CheckIn() {
  return (
    <div className={Styles.travel3Main}>
      <div className={Styles.travel3Ye}>
        <div className={Styles.travel3}>
          <div className={Styles.SideSpaceTravel}>
            <div className={Styles.checkDate}>
              <span>Check in</span>
              <h6>Fri, 07 Jul 2023</h6>
              <span>03:00 PM</span>
            </div>
            <div className={Styles.checkDate}>
              <span>Check Out</span>
              <h6>Sat, 08 Jul 2023</h6>
              <span>12:00 PM</span>
            </div>
            <div className={`${Styles.checkDate} ${Styles.BorderNoneCheckDate}`}>
              <span>Guest</span>
              <h6>2 Guest | 1 Room</h6>
              <span>1 Night</span>
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

export default CheckIn;
