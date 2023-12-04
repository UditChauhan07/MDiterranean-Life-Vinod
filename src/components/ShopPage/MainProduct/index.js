import React from 'react';
import Styles from './Styles.module.scss'

function index() {
  return (
    <div>
<section>
<div className={Styles.container}>
<div className={Styles.ProductsPart}>

<div className={Styles.mainProduct}>  
<div className={Styles.MainOne}>
    <h1>Where Style Becomes Everyday Elegance!</h1>
    <p>Every man’s life ends the same way. It is only details of how he lived and how he died that distinguish one man from another</p>

{/* efef */}

<div className="wrapper">
  <div className={Styles.topHeader}>
    <div className={Styles.iconMenu}>
        <div className={Styles.menuMobile}>
           <img src="package/MainImg1.png"/>
        </div>
        <div className={Styles.menu__desktop}>
          <ul className={Styles.desktop__menu}>
            <li className={Styles.promo}>Promo</li>
            <li>Register</li>
            <li>Login</li>
          </ul>
        </div>
    </div>
    <h3>Best Hotel By Customer</h3>
  </div>
  <div className={Styles.cards}>
    <div className={Styles.card}>
      <div className={Styles.card__img}>
          <picture>
            <source media="(max-width: 320px)" 
                    srcset="https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&h=200&q=80"/>

            <source media="(min-width: 538px)" 
                    srcset="https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=200&q=1500"/>

            <img src="https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=200&q=1500"/>
          </picture>
      </div>
      <div className={Styles.card__details}>
        <h3 for="cozyroom">Cozying Room</h3>
        <div className={Styles.address}>St.lorem ipsum des</div>
        <div className={Styles.price}>
          <div className={Styles.star}>
            <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt=""/>
            <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt=""/>
            <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt=""/>
            <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt=""/>
          </div>
          <div className={Styles.price__l}>
            <span className={Styles.price__label}>IDR 1500K /</span>
            <span className={Styles.measure__label}>night</span>
          </div>
        </div>
        <button>Detail</button>
      </div>
      <span className={Styles.creditImg}>image by: unsplash.com/@jazzband</span>
    </div>

   
  
  </div>
</div>

</div>



  </div>
    <div className={Styles.TopProduct}>    </div>





    </div>
    </div>
</section>


    </div>
  )
}

export default index