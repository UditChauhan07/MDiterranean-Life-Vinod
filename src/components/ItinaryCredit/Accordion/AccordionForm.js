import React from 'react';
import Styles from './Style.module.scss';
import CheckCredit from '../CheckCredit';
// import GuestDetail from '../ItineraryPages/GuestDetail';
import Accordion from '.';
import ItinaryButtons from '../ItinaryButtons';

function AccordionForm() {
  const items = [
    {
      title: 'Credit / Debit Card',
      content: 'Content for Section 1',
    },
    {
      title: 'Digital Payment',
      content: 'Content for Section 2',
    },
    {
      title: 'Online Banking',
      content: 'Content for Section 3',
    },
  ];
  return (
    <div>
      <section>
        <div className={Styles.container}>
          <div className={Styles.travel1}>
            <div className={Styles.travel2}>
              <div className={`${Styles.travel2a} ${Styles.TravelPadding} }`}>
                {/* Accordion */}
                <div className={Styles.dropD}>
                  <Accordion items={items} />
                </div>

                {/* sduh */}
              </div>
            </div>

            <CheckCredit></CheckCredit>
          </div>

          <ItinaryButtons />
        </div>
      </section>
    </div>
  );
}

export default AccordionForm;

// pages/index.js
