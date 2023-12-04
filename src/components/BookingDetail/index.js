import React from 'react';
import Styles from './Styles.module.scss';

function Booking() {
  const handlePrint = () => {
    const printContent = document.getElementById('DivToPrint');
    const windowUrl = 'about:blank';
    const uniqueName = new Date();
    const windowName = `Print_${uniqueName.getTime()}`;
    const printWindow = window.open(windowUrl, windowName);

    if (printWindow) {
      const printDocument = printWindow.document;
      printDocument.write('<html><head><title>Print</title>');

      const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
      styles.forEach((style) => {
        printDocument.write(style.outerHTML);
      });
      printDocument.write('</head><body>');
      printDocument.write(printContent.innerHTML);
      printDocument.write('</body></html>');
      printDocument.close();
      printWindow.print();
    } else {
      alert('Please allow popups for this website');
    }
  };

  return (
    <div>
      <section>
        <div className={Styles.container}>
          <div id="DivToPrint" className={Styles.ConfirmedBook}>
            <div className={Styles.ConfirmedBookIn}>
              <div className={Styles.BookIn}>
                <h3>Great! Your Stay Is Confirmed</h3>
                <p>You will soon receive an email confirmation on test@gmail.com</p>
                <h4>Booking ID</h4>
                <p>
                  <span>DBYB4488</span>
                </p>
              </div>
              <div className={Styles.BookOut}>
                <div className={Styles.BookBtn}>
                  <button onClick={handlePrint}>Print</button>
                </div>
                <p>Booking by Test on Wed, 26 Jul 2023</p>
              </div>
            </div>

            <div className={Styles.CapriBoat}>
              <div className={Styles.CapriContent}>
                <h3>Travelling Capri By Boat</h3>
                <h6>Capri By Boat</h6>
                <p>Plot No 120, Ekta Merket ,Sector 42 , Floridaaa</p>
                <p className={Styles.BookEnd}>Trip Direction </p>
              </div>
              <div className={Styles.CapriImg}>
                <div className={Styles.CapriControlImg}>
                  <img src="/package/CapriBoat.png" alt="CapriBoat" />
                </div>
              </div>
            </div>

            <div className={Styles.DetailHistory}>
              <div className={Styles.DetailLine}>
                <div className={Styles.DetailInfo}>
                  <p>Primary Guest</p>
                  <h6>Test</h6>
                </div>

                <div className={Styles.DetailInfo}>
                  <p>Mobile Number</p>
                  <h6>98XXXXXXX0</h6>
                </div>
              </div>

              <div className={Styles.DetailLine}>
                <div className={Styles.DetailInfo}>
                  <p>Check In</p>
                  <h6>Fri, 07 Jul 2023</h6>
                </div>

                <div className={Styles.DetailInfo}>
                  <p>Check Out</p>
                  <h6>Sat, 08 Jul 2023</h6>
                </div>
              </div>

              <div className={Styles.DetailLine}>
                <div className={Styles.DetailInfo}>
                  <p>Check In Time</p>
                  <h6>12:00 PM</h6>
                </div>

                <div className={Styles.DetailInfo}>
                  <p>Check Out Time</p>
                  <h6>11:00 AM</h6>
                </div>
              </div>

              <div className={`${Styles.DetailLine} ${Styles.DetaiFlex}`}>
                <div className={Styles.DetailInfo}>
                  <p>Guest</p>
                  <h6>2 Guest | 1 Room | 1Night</h6>
                </div>

                <div className={Styles.DetailInfo}>
                  <p>Total Payable Amount</p>
                  <h6>$1150.49</h6>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </div>
  );
}
export default Booking;
