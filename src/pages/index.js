import Link from 'next/link';
import {
  getFashionPosts,
  getFeshionPostById,
  getFruitAndWinePosts,
  getCantMissReadsPosts,
  getSectionElevenData,
  getCulturePosts,
  getTravelandLeisureById1,
  getHealthWellnessPosts,
  getArtHistoryPosts,
  getTravelandLeisureById2,
  getTravelandLeisureById3,
  getTravelandLeisureById4,
} from 'lib/posts';
import Layout from 'components/Layout';
import Header from 'components/Header';
import styles from 'styles/pages/Home.module.scss';
import Image from 'next/image';
// import { NewsLetter } from 'components/NewsLetter';

export default function Home({
  fruitandwinepost,
  cantmissreadspost,
  feshionpost,
  sectionEleven,
  culturepost,
  travelandleisure1,
  travelandleisure2,
  travelandleisure3,
  travelandleisure4,
  healthwellnesspost,
  arthistorypost,
  fashionbyidpost,
}) {
  const CustomLink = ({ text }) => {
    const arr = text.toLowerCase().split(' ');
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const tagLink = arr.join('_');
    return (
      <Link href={`/editorial/#${tagLink}`}>
        <a href={`/editorial/#${tagLink}`} className={styles.Atag}>
          <span>{text}</span>
        </a>
      </Link>
    );
  };

  const MastHead = ({ wistia }) => {
    if (wistia) {
      return (
        <iframe
          src={`//fast.wistia.net/embed/iframe/i633jy0w7m?videoFoam=true`}
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          class="wistia_embed imgShadow"
          name="wistia_embed"
          autoPlay
          allowfullscreen
          mozallowfullscreen
          webkitallowfullscreen
          oallowfullscreen
          msallowfullscreen
          title="myFrame-2"
        ></iframe>
      );
    } else {
      return (
        <video
          poster={'https://mditerraneastg.wpengine.com/wp-content/uploads/2023/10/home-thumb-opt.webp'}
          controls
          loop
        >
          <source src={'/home.mp4'} type="video/mp4" />
          <track src="" kind="captions" />
        </video>
      );
    }
  };
  return (
    <Layout newsLetterShow={true}>
      <div class="ratio ratio-16x9">
        <MastHead />
      </div>
      <Header></Header>
      <section className={styles.section1}>
        <div className="container">
          {fashionbyidpost.map((nodes, index1) => {
            const interviewedBy = nodes.interviewedBy;
            const writtenBy = nodes.writtenBy;
            const featuredimage = nodes?.homepagePostThumb?.node?.mediaItemUrl || nodes.featuredImage?.sourceUrl;
            const postslug = 'posts/' + nodes.slug;
            return (
              <div className="row" key={index1}>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 m-auto ">
                  <div className={styles.textStleShop}>
                    <div className="text-center">
                      <div className={styles.pLR75}>
                        {nodes.categories.map((ele, index) => {
                          return (
                            <div className={styles.ShoppingText} key={index}>
                              {ele.name}
                            </div>
                          );
                        })}
                        <Link href={postslug}>
                          <a href={postslug} className={styles.Atag}>
                            <h2 className={styles.pagesTitle}>
                              <span>{nodes.pageTitle || nodes.title}</span>
                            </h2>
                          </a>
                        </Link>
                        <div
                          className={styles.pagesSubTitle}
                          dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle }}
                        ></div>
                        <div className={styles.AuthorText}>
                          {nodes.writtenBy && (
                            <p className={styles.pagesAutherDesc}>
                              Written By: <CustomLink text={writtenBy} />
                            </p>
                          )}
                          {nodes.interviewedBy && (
                            <p className={styles.pagesAutherDesc}>
                              Interviewed By: <CustomLink text={interviewedBy} />
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {featuredimage && (
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <Link href={postslug}>
                      <a href={postslug}>
                        <Image
                          width={647}
                          height={448}
                          className="img-fluid imgShadow"
                          src={featuredimage}
                          alt="fluid"
                        />
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.section2}>
        <div className="container text-center">
          {fruitandwinepost.map((nodes, index1) => {
            return (
              <div className={styles.FashionNew} key={index1}>
                {nodes.categories.map((ele, index) => {
                  const categoryslug = '/categories/' + ele.slug;
                  return (
                    <div key={index}>
                      <h2 className={styles.fashionText}>
                        <Link href={categoryslug}>
                          <a href={categoryslug} className={styles.fashiHyperLink}>
                            {ele.name}
                          </a>
                        </Link>
                      </h2>
                      <div className={styles.WhatNew}> {ele.description}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        {fruitandwinepost.map((nodes, index) => {
          const posttitle = nodes.title;
          const featuredimage = nodes?.homepagePostThumb?.node?.mediaItemUrl || nodes.featuredImage?.sourceUrl;
          const writtenBy = nodes.writtenBy;
          const interviewedBy = nodes.interviewedBy;
          const postslug = 'posts/' + nodes.slug;
          return (
            <div className="container" key={index}>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mtb-p3 text-center">
                  {featuredimage && (
                    <div className={styles.imgResponsive}>
                      <Link href={postslug}>
                        <a href={postslug}>
                          <Image
                            width={1290}
                            height={860}
                            className="img-fluid imgShadow"
                            src={featuredimage}
                            alt="fluid"
                          />
                        </a>
                      </Link>
                    </div>
                  )}
                  <Link href={postslug}>
                    <a href={postslug} className={styles.Atag}>
                      <div className="text-center mt-3">
                        <h2 className={styles.pagesTitle}>
                          <span>{nodes.pageTitle || posttitle}</span>
                        </h2>
                      </div>
                      <div className={styles.pagesSubTitle}>
                        <div className="text-center" dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle }} />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.AuthorText}>
                    {nodes.writtenBy && (
                      <p className={styles.pagesAutherDesc}>
                        Written By: <CustomLink text={writtenBy} />
                      </p>
                    )}
                    {nodes.interviewedBy && (
                      <p className={styles.pagesAutherDesc}>
                        Interviewed By: <CustomLink text={interviewedBy} />
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className={styles.section3}>
        <div className="container">
          <div className="row">
            <div className="text-center">
              <div className={styles.FashionNew}>
                <h2 className={styles.fashionText}>
                  <a href="#" className={styles.fashiHyperLink}>
                    Can&apos;t Miss Reads
                  </a>
                </h2>
              </div>
            </div>
            {cantmissreadspost.map((nodes, index) => {
              const posttitle = nodes.title;
              const featuredimage = nodes?.homepagePostThumb?.node?.mediaItemUrl || nodes.featuredImage?.sourceUrl;
              const postslug = 'posts/' + nodes.slug;
              return (
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-5" key={index}>
                  <Link href={postslug}>
                    <a href={postslug} className={styles.CardHoverEffect}>
                      <div className={styles.cardBorder}>
                        <div className={'card ' + styles.cards}>
                          {featuredimage ? (
                            <Image
                              width={303}
                              height={303}
                              src={featuredimage}
                              className={styles.imgShadow}
                              alt="Fluid"
                            />
                          ) : (
                            <div className={styles.imgShadow}>
                              <img alt={posttitle} />
                            </div>
                          )}
                          <p className={'card-text mt-2'}>{nodes.pageTitle || posttitle}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.section4}>
        <div className="container text-center">
          {travelandleisure2.map((nodes, index1) => {
            return (
              <div className={styles.FashionNew} key={index1}>
                {nodes.categories.map((ele, index) => {
                  const categoryslug = '/categories/' + ele.slug;
                  return (
                    <div key={index}>
                      <h2 className={styles.fashionText}>
                        <Link href={categoryslug}>
                          <a href={categoryslug} className={styles.fashiHyperLink}>
                            {ele.name}
                          </a>
                        </Link>
                      </h2>
                      <div className={styles.WhatNew}>{ele.description}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-xl-8 col-lg-6 col-md-12 col-sm-12 pr-15 mb-5">
              {travelandleisure2.map((nodes, index) => {
                const posttitle = nodes.title;
                const featuredimage = nodes?.homepagePostThumb?.node?.mediaItemUrl || nodes.featuredImage?.sourceUrl;
                const writtenBy = nodes.writtenBy;
                const interviewedBy = nodes.interviewedBy;
                const postslug = 'posts/' + nodes.slug;
                return (
                  <div key={index}>
                    {featuredimage ? (
                      <div className={styles.imgResponsive}>
                        <Link href={postslug}>
                          <a href={postslug}>
                            <Image
                              width={845}
                              height={445}
                              className="img-fluid imgShadow"
                              src={featuredimage}
                              alt="fluid"
                            />
                          </a>
                        </Link>
                      </div>
                    ) : (
                      <div className={styles.imgResponsive}>
                        <img alt={posttitle} />
                      </div>
                    )}
                    <Link href={postslug}>
                      <a className={styles.Atag} href={postslug}>
                        <div className="text-center mt-3">
                          <div className={styles.ahover}>
                            <h2 className={styles.pagesTitle}>
                              <span>{nodes.pageTitle || posttitle}</span>
                            </h2>
                          </div>
                        </div>
                      </a>
                    </Link>
                    <div className={styles.AuthorText}>
                      {writtenBy && (
                        <p className={styles.pagesAutherDesc}>
                          Written By: <CustomLink text={writtenBy} />
                        </p>
                      )}
                      {interviewedBy && (
                        <p className={styles.pagesAutherDesc}>
                          Interviewed By: <CustomLink text={interviewedBy} />
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 pl-15 mb-5">
              <div className={styles.ThreeDivHoverEffect}>
                {travelandleisure3.map((nodes, index) => {
                  const posttitle = nodes.title;
                  const featuredimage = nodes?.homepagePostThumb?.node?.mediaItemUrl || nodes.featuredImage?.sourceUrl;
                  const writtenBy = nodes.writtenBy;
                  const postslug = 'posts/' + nodes.slug;
                  return (
                    <div className={styles.sthumbBox} key={index}>
                      <div className={styles.inlineBox}>
                        <Link href={postslug}>
                          <a className={styles.Atag} href={postslug}>
                            {featuredimage ? (
                              <div className="">
                                <Image
                                  className={`${styles.img120} ${styles.img120ResFull}`}
                                  src={featuredimage}
                                  alt="fluid"
                                  height={100}
                                  width={130}
                                />
                              </div>
                            ) : (
                              <div className={styles.img120}>
                                <img alt={posttitle} />
                              </div>
                            )}
                          </a>
                        </Link>
                        <div className={styles.sthumb}>
                          <div className={styles.gridGap}>
                            <Link href={postslug} key={index}>
                              <a className={styles.Atag} href={postslug}>
                                <div className={styles.pagesSubTitle}>
                                  <span>{nodes.pageTitle || posttitle}</span>
                                </div>
                              </a>
                            </Link>
                            {writtenBy && (
                              <p className={styles.pagesAutherDesc}>
                                WRITTEN BY: <CustomLink text={writtenBy} />
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section5}>
        <div className="container text-center">
          {feshionpost.map((nodes, index) => {
            return (
              <div key={index}>
                <div className={styles.FashionNew}>
                  {nodes.categories.map((ele, index1) => {
                    const categoryslug = '/categories/' + ele.slug;
                    return (
                      <div key={index1}>
                        <h2 className={styles.fashionText}>
                          <Link href={categoryslug}>
                            <a className={styles.fashiHyperLink} href={categoryslug}>
                              {ele.name}
                            </a>
                          </Link>
                        </h2>
                        <div className={styles.WhatNew}>{ele.description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {feshionpost.map((nodes, index) => {
          const posttitle = nodes.title;
          const featuredimage = nodes?.homepagePostThumb?.node?.mediaItemUrl || nodes.featuredImage?.sourceUrl;
          const postslug = 'posts/' + nodes.slug;
          return (
            <div className="container text-center mt-5 mb-5" key={index}>
              {featuredimage && (
                <div className={styles.imgResponsive}>
                  <Link href={postslug}>
                    <a href={postslug}>
                      <div class="">
                        <Image
                          width={1290}
                          height={860}
                          className="img-fluid imgShadow"
                          src={featuredimage}
                          alt="fluid"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              )}
              <Link href={postslug}>
                <a className={styles.Atag} href={postslug}>
                  <div className="text-center mt-3">
                    <div className={styles.ahover}>
                      <h2 className={styles.pagesTitle}>
                        <span>{nodes.pageTitle || posttitle}</span>
                      </h2>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className={styles.pagesSubTitle}>
                      <div dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle }} />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </section>
      <section className={styles.section6}>
        <div className="container">
          {culturepost.map((nodes, index) => {
            const writtenBy = nodes.writtenBy;
            const posttitle = nodes.title;
            const featuredimage = nodes?.homepagePostThumb?.node?.mediaItemUrl || nodes.featuredImage?.sourceUrl;
            const postslug = 'posts/' + nodes.slug;
            return (
              <div className="row" key={index}>
                <div className="container text-center">
                  {nodes.categories.map((ele, index1) => {
                    const categoryslug = '/categories/' + ele.slug;
                    return (
                      <div className={styles.FashionNew} key={index1}>
                        <h2 className={styles.fashionText}>
                          <Link href={categoryslug}>
                            <a href={categoryslug} className={styles.fashiHyperLink}>
                              {ele.name}
                            </a>
                          </Link>
                        </h2>
                        <div className={styles.WhatNew}>{ele.description}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 m-auto ">
                  <div className={styles.textStleShop}>
                    <div className="text-center">
                      <div>
                        <Link href={postslug}>
                          <a href={postslug} className={styles.Atag}>
                            <h2 className={styles.pagesTitle}>
                              <span>{nodes.pageTitle || posttitle}</span>
                            </h2>
                          </a>
                        </Link>
                        {writtenBy && (
                          <div className={styles.Author}>
                            <p className={styles.pagesAutherDesc}>
                              WRITTEN BY: <CustomLink text={writtenBy} />
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {featuredimage && (
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-5">
                    <Link href={postslug}>
                      <a href={postslug}>
                        <Image
                          width={647}
                          height={448}
                          className="img-fluid imgShadow"
                          src={featuredimage}
                          alt="fluid"
                        />
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.section7}>
        {travelandleisure1.map((nodes, index) => {
          const posttitle = nodes.title;
          const postslug = 'posts/' + nodes.slug;
          return (
            <div className="container text-center" key={index}>
              <div className={styles.videoHeight}>
                {/* {nodes.wistiaVideoScriptId && (
                  <div class="ratio ratio-16x9">
                    <iframe
                      src={`//fast.wistia.net/embed/iframe/${nodes.wistiaVideoScriptId}?videoFoam=true`}
                      allowtransparency="true"
                      frameborder="0"
                      scrolling="no"
                      class="wistia_embed imgShadow"
                      name="wistia_embed"
                      autoPlay
                      allowfullscreen
                      mozallowfullscreen
                      webkitallowfullscreen
                      oallowfullscreen
                      msallowfullscreen
                      title="myFrame-3"
                    ></iframe>
                  </div>
                )} */}
                <video
                  poster={'/738f73855239dce54ab5e6bbc51b006ea6c56c91.webp'}
                  controls
                  style={{ width: '100%', height: 'auto' }}
                >
                  <source src={'/SINA_HOTELS_BOCCA.mp4'} type="video/mp4" />
                  <track src="" kind="captions" />
                </video>
              </div>
              <Link href={postslug}>
                <a className={styles.Atag} href={postslug}>
                  <div>
                    <div className={styles.ShoppingText}>{nodes.pageTitle || posttitle}</div>
                  </div>
                  <div className="text-center mt-4">
                    <div className={styles.ahover}>
                      <a className={styles.Atag} href={postslug}>
                        <h2 className={styles.pagesTitle}>
                          <span dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle }} />
                        </h2>
                      </a>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </section>
      <section className={styles.section8}>
        <div className="container">
          {healthwellnesspost.map((nodes, index) => {
            const posttitle = nodes.title;
            const writtenBy = nodes.writtenBy;
            const featuredimage = nodes?.homepagePostThumb?.node?.mediaItemUrl || nodes.featuredImage?.sourceUrl;
            const postslug = 'posts/' + nodes.slug;
            return (
              <div className="row" key={index}>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 m-auto ">
                  <div className={styles.textStleShop}>
                    <Link href={postslug}>
                      <a className={styles.Atag} href={postslug}>
                        <div className="text-center">
                          <div>
                            {nodes.categories.map((ele, index1) => {
                              const categoryslug = '/categories/' + ele.slug;
                              return (
                                <Link href={categoryslug} key={index1}>
                                  <a href={categoryslug}>
                                    <div className={styles.ShoppingText}>{ele.name}</div>
                                  </a>
                                </Link>
                              );
                            })}
                            <h2 class={styles.pagesTitle}>
                              <span>{nodes.pageTitle || posttitle}</span>
                            </h2>
                            <div className={styles.pagesSubTitle}>
                              <div dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle }}></div>
                            </div>
                            {writtenBy && (
                              <div className={styles.Author}>
                                <p className={styles.pagesAutherDesc}>
                                  WRITTEN BY: <CustomLink text={writtenBy} />
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                {featuredimage && (
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <Link href={postslug}>
                      <a className={styles.Atag} href={postslug}>
                        <Image
                          width={430}
                          height={355}
                          className="img-fluid imgShadow"
                          src={featuredimage}
                          alt="fluid"
                        />
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.section9}>
        {arthistorypost.map((nodes, index) => {
          const posttitle = nodes.title;
          const postslug = 'posts/' + nodes.slug;
          return (
            <div className="container text-center" key={index}>
              <div className="container text-center">
                {index == 0 &&
                  nodes.categories.map((ele, index1) => {
                    const categoryslug = '/categories/' + ele.slug;
                    return (
                      <div className={styles.FashionNew} key={index1}>
                        <Link href={categoryslug}>
                          <h2 className={styles.fashionText}>
                            <a href={categoryslug} className={styles.fashiHyperLink}>
                              {ele.name}
                            </a>
                          </h2>
                        </Link>
                      </div>
                    );
                  })}
              </div>
              <div className={styles.videoHeight}>
                {/* {nodes.wistiaVideoScriptId && (
                  <div class="ratio ratio-16x9 ">
                    <iframe
                      src={`//fast.wistia.net/embed/iframe/${nodes.wistiaVideoScriptId}?videoFoam=true`}
                      allowtransparency="true"
                      frameborder="0"
                      scrolling="no"
                      class="wistia_embed imgShadow"
                      name="wistia_embed"
                      autoPlay
                      allowfullscreen
                      mozallowfullscreen
                      webkitallowfullscreen
                      oallowfullscreen
                      msallowfullscreen
                      title="myFrame-1"
                    ></iframe>
                  </div>
                )} */}
                <video
                  poster={'/9713ce51e7c697782a23c6a58257c82ab33b490c.webp'}
                  controls
                  style={{ width: '100%', height: 'auto' }}
                >
                  <source src={'/BMD_Capri_Darius_Water_EDIT_rev09_1.mp4'} type="video/mp4" />
                  <track src="" kind="captions" />
                </video>
              </div>
              <Link href={postslug}>
                <div className={styles.ahover}>
                  <a href={postslug} className={styles.TextHoverEffect}>
                    <div>
                      <div className={styles.ShoppingText}>{posttitle || nodes.pageTitle}</div>
                    </div>
                  </a>
                </div>
              </Link>
              <div className="text-center">
                <Link href={postslug}>
                  <div className={styles.ahover}>
                    <a href={postslug} className={styles.Atag}>
                      <div className="text-center">
                        <h2 className={styles.pagesTitle}>
                          <span style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>
                            <p dangerouslySetInnerHTML={{ __html: nodes.pageSubtitle }} />
                          </span>
                        </h2>
                        {nodes.writtenBy && (
                          <div className={styles.Author}>
                            <p className={styles.pagesAutherDesc}>
                              WRITTEN BY: <CustomLink text={nodes.writtenBy} />
                            </p>
                          </div>
                        )}
                      </div>
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <section className={styles.section10}>
        {travelandleisure4.map((nodes, index) => {
          const posttitle = nodes.title;
          const postslug = 'posts/' + nodes.slug;
          return (
            <div className="container text-center " key={index}>
              <div className="container text-center mb-5">
                {nodes.categories.map((ele, index1) => {
                  const categoryslug = '/categories/' + ele.slug;
                  return (
                    <div className={styles.FashionNew} key={index1}>
                      <h2 className={styles.fashionText}>
                        <Link href={categoryslug}>
                          <a href={categoryslug} className={styles.fashiHyperLink}>
                            {ele.name}
                          </a>
                        </Link>
                      </h2>
                    </div>
                  );
                })}
              </div>
              <Link href={postslug}>
                <div className={styles.ahover}>
                  <a href={postslug} className={styles.TextHoverEffect}>
                    <div>
                      <div className={styles.ShoppingText}>{nodes.pageSubtitle}</div>
                    </div>
                  </a>
                </div>
              </Link>
              <div className="text-center mt-4">
                <Link href={postslug}>
                  <div className={styles.ahover}>
                    <a href={postslug} className={styles.Atag}>
                      <h2 className={styles.pagesTitle}>
                        <span dangerouslySetInnerHTML={{ __html: nodes.pageTitle || posttitle }} />
                      </h2>
                    </a>
                    {nodes.writtenBy && (
                      <div className={styles.Author}>
                        <p className={styles.pagesAutherDesc}>
                          BY <span>{nodes.writtenBy}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <section className={styles.section11}>
        <div className="container">
          <div className="row">
            {sectionEleven.map((nodes, index) => {
              const posttitle = nodes.title;
              const featuredimage = nodes?.homepagePostThumb?.node?.mediaItemUrl || nodes.featuredImage?.sourceUrl;
              const postslug = 'posts/' + nodes.slug;
              return (
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={index}>
                  <Link href={postslug}>
                    <a href={postslug} className={styles.CardHoverEffect}>
                      <div className={styles.cardBorder}>
                        <div className={'card mb-4 ' + styles.cards}>
                          {featuredimage ? (
                            <Image
                              width={303}
                              height={303}
                              src={featuredimage}
                              className={styles.imgShadow}
                              alt="Fluid"
                            />
                          ) : (
                            <img className={styles.imgShadow} alt="..." />
                          )}
                          <p className="card-text mt-2">{nodes.pageTitle || posttitle}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { feshionpost } = await getFashionPosts({
    queryIncludes: 'fashion',
  });

  const { fashionbyidpost } = await getFeshionPostById({
    queryIncludes: 'fashionbyid',
  });

  const { fruitandwinepost } = await getFruitAndWinePosts({
    queryIncludes: 'fruitandwine',
  });

  const { cantmissreadspost } = await getCantMissReadsPosts({
    queryIncludes: 'cantmissreads',
  });

  const { sectionEleven } = await getSectionElevenData({
    queryIncludes: 'sectionElevenQuery',
  });
  const { culturepost } = await getCulturePosts({
    queryIncludes: 'culture',
  });

  const { travelandleisure1 } = await getTravelandLeisureById1({
    queryIncludes: 'travelandleisurebyid1',
  });

  const { travelandleisure2 } = await getTravelandLeisureById2({
    queryIncludes: 'travelandleisurebyid2',
  });

  const { travelandleisure3 } = await getTravelandLeisureById3({
    queryIncludes: 'travelandleisurebyid3',
  });

  const { travelandleisure4 } = await getTravelandLeisureById4({
    queryIncludes: 'travelandleisurebyid4',
  });

  const { healthwellnesspost } = await getHealthWellnessPosts({
    queryIncludes: 'healthwellness',
  });

  const { arthistorypost } = await getArtHistoryPosts({
    queryIncludes: 'artandhistory',
  });

  return {
    props: {
      feshionpost,
      fashionbyidpost,
      fruitandwinepost,
      cantmissreadspost,
      sectionEleven,
      culturepost,
      travelandleisure1,
      travelandleisure2,
      travelandleisure3,
      travelandleisure4,
      healthwellnesspost,
      arthistorypost,
    },
  };
}
