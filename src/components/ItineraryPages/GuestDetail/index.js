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
                  Email Address<span>(Your booking voucher will be sent to this email address)</span>
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
          <div className={Styles.ADDGuestA}>
          <a href="#">Add Guest</a>
          </div>
        </div>
        <button>Proceed To Payment Options</button>
      </div>
    </div>
  );
}
export default GuestDetail;
