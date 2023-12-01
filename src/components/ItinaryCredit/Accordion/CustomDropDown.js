// components/CustomDropdown.js
import React, { useState } from 'react';
import styles from './Style.module.scss';

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState({
    img: '/package/postCard.png',
    label: 'Visa / MasterCard / Amex / JCB',
  });
  const [showOption, setShowOption] = useState(false);
  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  const handleElectOption = () => {
    setShowOption(!showOption);
  };

  const getElectedOption = (item) => {
    setShowOption(!showOption);
    setSelectedOption(item);
  };

  const Options = [
    {
      img: '/package/postCard.png',
      label: ' Visa / MasterCard / Amex / JCB',
    },
    {
      img: '/package/postCard.png',
      label: 'Visa / MasterCard / Amex / JCB 1',
    },
    {
      img: '/package/postCard.png',
      label: ' Visa / MasterCard / Amex / JCB 2',
    },
    {
      img: '/package/postCard.png',
      label: '  Visa / MasterCard / Amex / JCB 3',
    },
  ];

  return (
    <div className={styles.Dropo}>
      <label>
        Select Payment Method<span className={styles.HashRed}>*</span>
      </label>
      <div className={styles.dropDown}>
        <div onClick={handleElectOption}>
          {selectedOption.img && <img src={selectedOption.img} alt="card" />}
          <label>{selectedOption.label}</label>
          <span className={styles.arrowIcon}> &#8735;</span>
        </div>
        {showOption && (
          <ul>
            {Options &&
              Options.map((item, index) => (
                <li key={index.toString()} onClick={() => getElectedOption(item)}>
                  <img src={item.img} alt="card" />
                  <label>{item.label}</label>
                </li>
              ))}
          </ul>
        )}
      </div>
      {/* <select className={styles.custonDrop} id="custom-dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value=""> <img src='/package/postCard.png'/> Visa / MasterCard / Amex / JCB</option>
        <option value="option1" style={myStyles}>  Visa / MasterCard / Amex / JCB 1</option>
        <option value="option2"> Visa / MasterCard / Amex / JCB 2</option>
        <option value="option3"> Visa / MasterCard / Amex / JCB 3</option>
      </select> */}
    </div>
  );
};

export default CustomDropdown;
