import React from 'react';

import style from './cssModules/Pricing.module.css';
import paper from '../../assets/paper.png';
import watch from '../../assets/watch.png';
import PricingRange from './PricingRange';

const Pricing = () => {
  return (
    <div className={style.container}>
      <h1>Set up your pricing</h1>
      <p>
        Please set up your hourly or fixed rate so that the client is aware of
        your pricing.
      </p>

      <div className={style.buttons}>
        <button>
          <img src={watch} alt='watch' />
          Hourly
        </button>
        <button>
          <img src={paper} alt='paper' /> Fixed
        </button>
      </div>

      <PricingRange />
    </div>
  );
};

export default Pricing;
