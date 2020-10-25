import React, { useState } from 'react';

import style from './cssModules/PricingRange.module.css';

const PricingRange = () => {
  const [price, setPrice] = useState(180);

  const handleRange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className={style.container}>
      <p className={style.price}>
        <span>$</span>
        {price} <span>/ hour</span>
      </p>

      <input
        type='range'
        id='price'
        name='price'
        min='20'
        max='300'
        value={price}
        onChange={handleRange}
      />
      <div className={style.meter}>
        <span>$20</span>
        <span>$300</span>
      </div>
    </div>
  );
};

export default PricingRange;
