import React, { useEffect, useState } from 'react'
import Styles from "../ItineraryPages/Style.module.scss"
// import ItineraryContent from '../ItineraryPages/ItineraryContent'


function ItineraryImages() {
  return (
    <div>
      <section className={Styles.ItineraryTop}>
        <div className={Styles.container}>


        <div className={Styles.MainBannerIti}>
          <div className={Styles.MainBannerImageConvert}>
          <div className={Styles.MainBannerImg}>
            <img src="/package/TopBannerIti.png" />
          </div>
          <div className={Styles.MainBannerItiWIdth }>

          <div className= {`${Styles.MainBannerItiControl} ${Styles.bottom}`} >

            <div className={`${Styles.MainBannerItiImg} ${Styles.Side}`}>
              <img src="/package/TopA.png" />
            </div>

            <div className={`${Styles.MainBannerItiImg} ${Styles.sde} ${Styles.borderRaduis}`} >
              <img src="/package/TopB.png" />
            </div>
            </div>

            <div className={Styles.MainBannerItiControl}>

            <div className={`${Styles.MainBannerItiImg} ${Styles.Side} `}>
              <img src="/package/TopC.png" />
            </div>

            <div className={`${Styles.MainBannerItiImg} ${Styles.borderRaduis}`} >
              <img src="/package/TopD.png" />
            </div>
            </div>
            </div>   
        </div>
        </div>
        </div>
        </section>





      {/* <ItineraryContent></ItineraryContent> */}
    </div>
    
  )
}


export default ItineraryImages