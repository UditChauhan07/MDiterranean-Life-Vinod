import React from 'react';
import Styles from './Style.module.scss';
// import ItineraryContent from '../ItineraryPages/ItineraryContent'

function ItineraryImages() {
  return (
    <div>
      <section className={Styles.ItineraryTop}>
        <div className={Styles.container}>
          <div className={Styles.MainBannerIti}>
            <div className={Styles.MainBannerImageConvert}>
              <div className={Styles.MainBannerImg}>
                <img src="/package/TopBannerIti.png" alt="TopBannerIti" />
              </div>
              <div className={Styles.MainBannerItiWIdth}>
                <div className={`${Styles.MainBannerItiControl} ${Styles.bottom}`}>
                  <div className={`${Styles.MainBannerItiImg} ${Styles.Side}`}>
                    <img src="/package/TopA.png" alt="TopA" />
                  </div>

                  <div className={`${Styles.MainBannerItiImg} ${Styles.sde} ${Styles.borderRaduis}`}>
                    <img src="/package/TopB.png" alt="TopB" />
                  </div>
                </div>

                <div className={Styles.MainBannerItiControl}>
                  <div className={`${Styles.MainBannerItiImg} ${Styles.Side} `}>
                    <img src="/package/TopC.png" alt="TopC" />
                  </div>

                  <div className={`${Styles.MainBannerItiImg} ${Styles.borderRaduis}`}>
                    <img src="/package/TopD.png" alt="TopD" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <ItineraryContent></ItineraryContent> */}
    </div>
  );
}

export default ItineraryImages;
