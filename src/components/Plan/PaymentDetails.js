import React from 'react';

import style from './cssModules/PaymentDetails.module.css';

const PaymentDetails = ({ cardNumber, img }) => {
  return (
    <div className={style.container}>
      <div className={style.contentLeft}>
        <img src={img} alt='card' />
        <div className={style.cardDetails}>
          <h3>Credit card</h3>
          <p>{cardNumber}</p>
        </div>
      </div>
      <div className={style.contentRight}>
        <input type='text' maxLength='4' placeholder='CVC' />
      </div>
    </div>
  );
};

export default PaymentDetails;
