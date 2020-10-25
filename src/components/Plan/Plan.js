import React from 'react';

import style from './cssModules/Plan.module.css';
import ChangePlan from './ChangePlan';
import PaymentDetails from './PaymentDetails';
import visa from '../../assets/visa.png';
import mastercard from '../../assets/mastercard.png';

const Plan = () => {
  return (
    <div className={style.container}>
      <div className={style.headerInfo}>
        <h1>Upgrade your plan</h1>
        <p>
          Please make the payment to start enjoying all the features of our
          premium plan as soon as possible.
        </p>
      </div>

      <ChangePlan />

      <h2 className={style.paymentDetailsHeader}>Payment details</h2>

      <PaymentDetails cardNumber={'2344 xxxx xxxx 8880'} img={mastercard} />
      <PaymentDetails cardNumber={'8890 xxxx xxxx 1234'} img={visa} />

      <button className={style.addPaymentButton}>Add Payment Method</button>

      <input
        type='email'
        placeholder='Email address'
        className={style.emailAddress}
      />

      <button className={style.proceedButton}>
        Proceed to payment &#8594;
      </button>
    </div>
  );
};

export default Plan;
