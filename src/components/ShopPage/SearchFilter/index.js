import React from 'react';
import SimpleDropdown from './PriceRangeDropDown';
import Styles from './Style.module.scss';

function index() {
  return (
    <div className={Styles.container}>
      <div>
        index
        <SimpleDropdown></SimpleDropdown>
      </div>
    </div>
  );
}

export default index;
