import React, { useEffect } from 'react';
import Layout from 'components/Layout';
import { Helmet } from 'react-helmet';
import Image from '../../public/BMD-IG-Feed-i4-Tuscany-FIOR8113+.jpg';
const Subscribe = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.defer = true;
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        document.getElementById('formSubscribe').style.height = '400px';
        window.hbspt.forms.create({
          portalId: '19647191',
          formId: '2dc7982a-20de-40e5-acaf-ee19d2bcea93',
          target: '#formSubscribe',
        });
      }
    });
  }, []);
  const SubscribeRaw = () => {
    return (
      <section class="mb-5" id="subscribe">
        <div class="Bg-Image" style={{ backgroundImage: `url(${Image.src})` }}>
          <div class="container">
            <div class="logoCenter text-center mb-4">
              {false && (
                <img
                  src="https://mditerraneastg.wpengine.com/wp-content/uploads/2023/05/the_MDiterranean_life_logo-white-1.png"
                  alt="textAlt"
                />
              )}
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 m-auto p-0 m-0">
                <div class="subscribeFormText">
                  <p class="FirstText">
                    Become a member to get the best of The MDiterranean Life
                    <sup style={{ color: '#fff' }}>&reg;</sup> in its entirety.
                  </p>
                  <p class="SecondText">Stay up - to - date with exclusive content!</p>
                  <p class="ThirdText">Subscribe now and never miss a thing. For further assistance, </p>
                  <p class="FourthText">email us at :</p>
                  <p class="FifthText">
                    <a href="mailto:customercare@theMDiterraneanlife.com">customercare@theMDiterraneanlife.com</a>
                  </p>
                </div>
              </div>
              <div class=" col-xl-5 col-lg-5 col-md-12 col-sm-12 p-0 Submtb-50">
                <div class="login-form Subscribe">
                  <h2>Subscribe</h2>
                  <form id="formSubscribe">
                    <div style={{ height: '350px' }}></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <Layout>
      <Helmet>
        <title>Subscribe | Mditerranean life</title>
        <meta name="description" content={null} />
        <meta property="og:title" content={'Subscribe | Mditerranean life'} />
        <meta property="og:description" content={null} />
      </Helmet>
      <SubscribeRaw />
    </Layout>
  );
};

export default Subscribe;
