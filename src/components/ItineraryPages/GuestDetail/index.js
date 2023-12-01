// import react from 'react';
import Styles from './Style.module.scss';

function GuestDetail() {
  return (
    <div>
      <div className={Styles.GuestMainSection}>
        <div className={Styles.GuestFromBorder}>
          <h3>GUEST DETAILS</h3>
          <div className={Styles.GuestFlex}>
            <div className={Styles.GuestFill}>
              <div className={Styles.GuestForm}>
                <label>First Name</label>
                <br />
                <input type="name"></input>
              </div>

              <div className={Styles.GuestForm}>
                <label>
                  Email Address <span>(Voucher sent to this email.)</span>
                </label>
                <br />
                <input type="name"></input>
              </div>
            </div>

            <div className={Styles.GuestFill}>
              <div className={Styles.GuestForm}>
                <label>Last Name </label>
                <br />
                <input type="name"></input>
              </div>

              <div className={Styles.GuestForm}>
                <label>Phone Number</label>
                <br />
                <input type="name"></input>
              </div>
            </div>
          </div>
          <a href="#">Add Guest</a>
        </div>
        <button>Proceed To Payment Options</button>
      </div>
    </div>
  );
}
export default GuestDetail;
