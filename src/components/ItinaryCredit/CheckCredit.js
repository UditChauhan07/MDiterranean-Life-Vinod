import React from 'react'
import Styles from '../ItineraryPages/Style.module.scss'
import styles from '../ItinaryCredit/style.module.scss'

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
                      <div className={styles.CreditSmallImg}>
                        <div className={styles.imgSmall}>
                        <img src="/package/TravelSmallImg.png" />
                        </div>
                        <div className={styles.TravelContent}>
                            <h4>Travelling Capri By Boat</h4>
                            <img src="/package/GoldenStar.svg" /><img src="/package/GoldenStar.svg" /><img src="/package/GoldenStar.svg" /><img src="/package/GoldenStar.svg" />
                            <p>Tour Ste 324A Boca Raton, FL 33431</p>

                        </div>

                      </div>
                    </div>

                    <div className={Styles.checkDate}>
                        <div className={styles.TravelPrice}>

                        <div className={styles.TravelPricea}>
                            <p>Price</p>
                        </div>
                        <div className={styles.TravelPriceb}>
                            <p>$1150.49</p>
                        </div>

                        </div>
                        <p className={styles.PriceBSpan}>Included in price: Taxes and fees</p>
                        <h5 className={styles.PriceBh5}>YOU SAVED $ 32.21 ON THIS BOOKING!</h5>
                    </div>
                </div>
                <div className={`${Styles.travel3a} ${Styles.TravHeight}`}>
                    <h5>8.6 Excellent</h5>
                    <span>188 reviews</span>
                    <div className={Styles.ExecllentTravel}>
                    <span className={Styles.ExecllentMargin}>Brekfast</span>
                    <span>Housekeeping</span>
                
                    </div>

                    <div className={Styles.MapTravel}>
                        <div>
                        <img src="/package/MapTravel.png" />
                        </div>
                        <h4>8.9 Excellent</h4>
                        <span>Location rating score</span>

                        <div className={Styles.ParkingFree}>
                            <div> <span>Parking</span></div>
                            <div> <h4>FREE</h4></div>
                        </div>

                    </div>
                </div>

                </div>
                
                </div>
    </div>
  )
}

export default CheckCredit