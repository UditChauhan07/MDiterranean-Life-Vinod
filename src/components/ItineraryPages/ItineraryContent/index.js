import React from 'react';
import Styles from '../ItineraryContent/Style.module.scss';
import CheckIn from '../CheckIn';
import GuestDetail from '../GuestDetail';

function ItineraryContent() {
  return (
    <div>
      <section>
        <div className={Styles.container}>
          <div className={Styles.travel1}>
            <div className={Styles.travel2}>
              <div className={Styles.travel2a}>
                <h2>
                  Travelling Capri By Boat &nbsp; <img src="/package/GoldenStar.svg" alt="GoldenStar" />
                  <img src="/package/GoldenStar.svg" alt="GoldenStar" />
                  <img src="/package/GoldenStar.svg" alt="GoldenStar" />
                  <img src="/package/GoldenStar.svg" alt="GoldenStar" />
                </h2>

                <p className={Styles.travelP1}>
                  Survey No.52/5 A Capri By Sea Island Tour Ste 324A Boca Raton, FL 33431
                </p>
                <p className={Styles.travelP2}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <div className={Styles.controllUL}>
                  <div className={Styles.ul1}>
                    <h3>Workout and Leisure</h3>
                    <ul>
                      <li>Fitness center</li>
                      <li>Swimming pool [outdoor]</li>
                    </ul>
                  </div>
                  <div className={Styles.ul1}>
                    <h3>Spa & Beauty</h3>
                    <ul>
                      <li>Massage</li>
                      <li>Spa</li>
                    </ul>
                  </div>
                </div>

                <div className={Styles.route1}>
                  <h3>Route Distance : 509 km</h3>

                  <div className={Styles.RouteFlex}>
                    <div className={`${Styles.routeA} ${Styles.routePAdding}`}>
                      <div className={Styles.routeAa}>
                        <div className={Styles.routeAin}>
                          <div className={Styles.routeWidthControl}>
                            <h5>
                              Day <span className={Styles.RoutSpan}>01</span>
                            </h5>
                          </div>

                          <p>
                            223 Km <br /> 2.25 hrs by car
                          </p>
                        </div>
                        <div className={Styles.routeAout}>
                          <p>San Diego: Coastal Wonders and Cultural Hot Spots</p>
                        </div>
                      </div>
                      <div className={Styles.routeAa}>
                        <div className={Styles.routeAin}>
                          <div className={Styles.routeWidthControl}>
                            <h5>
                              Day <span className={Styles.RoutSpan}>02</span>
                            </h5>
                          </div>
                          <p>
                            231 km <br />
                            1.75 hrs by car
                          </p>
                        </div>
                        <div className={Styles.routeAout}>
                          <p>San Diego: Coastal Wonders and Cultural Hot Spots</p>
                        </div>
                      </div>
                    </div>
                    <div className={Styles.routeB}>
                      <div className={Styles.routeAa}>
                        <div className={Styles.routeAin}>
                          <div className={Styles.routeWidthControl}>
                            <h5>
                              Day <span className={Styles.RoutSpan}>04</span>
                            </h5>
                          </div>
                          <p>
                            55 km
                            <br />
                            1.5 hrs by car
                          </p>
                        </div>
                        <div className={Styles.routeAout}>
                          <p>San Diego: Coastal Wonders and Cultural Hot Spots</p>
                        </div>
                      </div>
                      <div className={Styles.routeAa}>
                        <div className={Styles.routeAin}>
                          <div className={Styles.routeWidthControl}>
                            <h5>
                              Day <span className={Styles.RoutSpan}>05</span>
                            </h5>
                          </div>
                          <p>
                            231 km <br /> 1.75 hrs by car
                          </p>
                        </div>
                        <div className={Styles.routeAout}>
                          <p>San Diego: Coastal Wonders and Cultural Hot Spots</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CheckIn></CheckIn>
          </div>

          <GuestDetail />
        </div>
      </section>
    </div>
  );
}

export default ItineraryContent;
