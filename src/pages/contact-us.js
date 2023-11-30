import React, { useEffect } from 'react';
import Layout from 'components/Layout';
import { Helmet } from 'react-helmet';
import Link from 'next/link';
import Image from '../../public/tuscany.webp';
const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        document.getElementById('formContact').style.height = '400px';
        window.hbspt.forms.create({
          portalId: '19647191',
          formId: 'fe5925db-40b4-48ee-b150-3cdde78a0a41',
          target: '#formContact',
        });
      }
    });
  }, []);

  const ContactRaw = () => {
    return (
      <section class="mb-5" id="contact">
        <div class="Bg-Image" style={{ backgroundImage: `url(${Image.src})` }}>
          <div class="container">
            <div class="logoCenter text-center mb-4">
              {false && (
                <img
                  src="https://mditerraneastg.wpengine.com/wp-content/uploads/2023/05/the_MDiterranean_life_logo-white-1.png"
                  alt=""
                />
              )}
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 m-auto">
                <div class="subscribeFormText">
                  <p class="SecondText">How can we help?</p>
                  <p class="ThirdTextDesc">
                    Should you have any questions or require further clarification, please submit your request using the
                  </p>
                  <p class="FourthText">email us at :</p>
                  <p class="FifthText">
                    <a href="mailto:customercare@theMDiterraneanlife.com">customercare@theMDiterraneanlife.com</a>
                  </p>
                  <p class="FourthText">Follow Us :</p>
                  <ul class="contactSocialIcons">
                    {/* <li>
                    <Link href={'https://www.facebook.com/BrunoMDofficial/'}>
                      <svg
                        style={{ color: '#fff' }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="35"
                        height="35"
                      >
                        <path
                          d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                          fill="white"
                        ></path>
                      </svg>
                    </Link>
                  </li> */}
                    <li>
                      <Link href={' https://www.instagram.com/brunomdofficial/'}>
                        <svg
                          style={{ color: '#fff' }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </li>
                    {/* <li style={{ marginTop: '5px' }}>
                    <Link href={'https://www.tiktok.com/@brunomdofficial'}>
                      <a>
                        <div
                          style={{
                            height: '35px',
                            width: '35px',
                            background: '#fff',
                            borderRadius: '25%',
                            display: 'grid',
                            placeContent: 'center',
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-tiktok"
                            viewBox="0 0 16 16"
                          >
                            {' '}
                            <path
                              d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"
                              fill="#b9837f"
                            />{' '}
                          </svg>
                        </div>
                      </a>
                    </Link>
                  </li> */}
                  </ul>
                </div>
              </div>
              <div class=" col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div class="login-form Subscribe">
                  <h2>Contact</h2>
                  <form id="formContact">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="First Name "
                      />

                      <input
                        type="text"
                        class="form-control mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Last Name "
                      />

                      <input
                        type="email"
                        class="form-control mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email "
                      />

                      <input
                        type="text"
                        class="form-control mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Phone Number "
                      />

                      <textarea
                        class="form-control mb-3"
                        rows="3"
                        id="comment"
                        name="text"
                        placeholder="Message "
                      ></textarea>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-darkBlack">
                        Submit
                      </button>
                    </div>
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
        <title>Contact Us | Mditerranean life</title>
        <meta name="description" content={null} />
        <meta property="og:title" content={'Contact Us | Mditerranean life'} />
        <meta property="og:description" content={null} />
      </Helmet>
      <ContactRaw />
    </Layout>
  );
};

export default Contact;
