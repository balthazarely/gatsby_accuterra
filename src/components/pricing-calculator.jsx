import React, { useState, useEffect } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export const PricingCalculator = () => {
  const [sliderValue, setSliderValue] = useState(1000000);
  const [sliderStep, setSliderStep] = useState(10000);
  const [sliderMinRange, setSliderMinRange] = useState(0);
  const [sliderMaxRange, setSliderMaxRange] = useState(30000000);

  // let sliderValue = 1000000;
  // let sliderMinRange = 0;
  // let sliderMaxRange = 30000000;
  // let sliderStep = 10000;

  const [finalCharge, setFinalCharge] = useState(0);
  const [tierLimit, setTierLimit] = useState({
    tier1Limit: 50000,
    tier2Limit: 500000,
    tier3Limit: 2000000,
    tier4Limit: 8000000,
  });

  // let tier1Limit = 50000;
  // let tier2Limit = 500000;
  // let tier3Limit = 2000000;
  // let tier4Limit = 8000000;

  let tier1Rate = 0.4;
  let tier2Rate = 0.2;
  let tier3Rate = 0.1;
  let tier4Rate = 0.05;

  let tier1Charge = 0;
  let tier2Charge = 0;
  let tier3Charge = 0;
  let tier4Charge = 0;

  let tier1Remainder = 0;
  let tier2Remainder = 0;
  let tier3Remainder = 0;
  let tier4Remainder = 0;
  let finalRemainder = 0;

  // let finalCharge = 0;

  function calculateCharge() {
    tier1Remainder = 0;
    tier2Remainder = 0;
    tier3Remainder = 0;
    tier4Remainder = 0;
    finalRemainder = 0;

    tier1Charge = 0;
    tier2Charge = 0;
    tier3Charge = 0;
    tier4Charge = 0;

    if (sliderValue > 0) {
      tier1Remainder =
        sliderValue > tierLimit.tier1Limit ? tierLimit.tier1Limit : sliderValue;
    }

    if (sliderValue > tierLimit.tier1Limit) {
      tier2Remainder =
        sliderValue - tierLimit.tier1Limit >=
        tierLimit.tier2Limit - tierLimit.tier1Limit
          ? tierLimit.tier2Limit - tierLimit.tier1Limit
          : sliderValue - tierLimit.tier1Limit;
      tier1Charge = (tier2Remainder / 1000) * tier1Rate;
    }

    if (sliderValue > tierLimit.tier2Limit) {
      tier3Remainder =
        sliderValue - tierLimit.tier2Limit >=
        tierLimit.tier3Limit - tierLimit.tier2Limit
          ? tierLimit.tier3Limit - tierLimit.tier2Limit
          : sliderValue - tierLimit.tier2Limit;
      tier2Charge = (tier3Remainder / 1000) * tier2Rate;
    }

    if (sliderValue > tierLimit.tier3Limit) {
      tier4Remainder =
        sliderValue - tierLimit.tier3Limit >=
        tierLimit.tier4Limit - tierLimit.tier3Limit
          ? tierLimit.tier4Limit - tierLimit.tier3Limit
          : sliderValue - tierLimit.tier3Limit;
      tier3Charge = (tier4Remainder / 1000) * tier3Rate;
    }

    if (sliderValue > tierLimit.tier4Limit) {
      finalRemainder = sliderValue - tierLimit.tier4Limit;
      tier4Charge = (finalRemainder / 1000) * tier4Rate;
    }
    setFinalCharge(tier1Charge + tier2Charge + tier3Charge + tier4Charge);

    // finalCharge = tier1Charge + tier2Charge + tier3Charge + tier4Charge;
    console.log(finalCharge);
  }

  function numberFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function currencyFormat(x) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
    return formatter.format(x);
  }

  const changeSliderValue = (e) => {
    console.log(e.target.value);
    setSliderValue(e.target.value);
    calculateCharge();
  };

  useEffect(() => {
    calculateCharge();
  }, []);

  return (
    <div className="container mx-auto py-20">
      {/* <Slider
        value={sliderValue}
        step={sliderStep}
        min={sliderMinRange}
        max={sliderMaxRange}
        onChange={changeSliderValue}
      /> */}
      <input
        id="typeinp"
        type="range"
        value={sliderValue}
        step={sliderStep}
        min={sliderMinRange}
        max={sliderMaxRange}
        onChange={(e) => changeSliderValue(e)}
      />
      <div className="top">
        <span className="requests-amount">{numberFormat(sliderValue)}</span>
        monthly requests
      </div>
      <div className="price-ranges text-left">
        <div className="row">
          <div className="col-5">
            <h6>Tier</h6>
          </div>
          <div className="col-4">
            <h6>Cost per 1,000</h6>
          </div>
          <div className="col-3 text-right">
            <h6>Cost</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-5">{numberFormat(tier1Remainder)}</div>
          <div className="col-4">Free</div>
          <div className="col-3 text-right">Free</div>
        </div>
        <div className="row" hidden="{tier2Remainder <= 0}">
          <div className="col-5">{numberFormat(tier2Remainder)}</div>
          <div className="col-4">{currencyFormat(tier1Rate)}</div>
          <div className="col-3 text-right">{currencyFormat(tier1Charge)}</div>
        </div>
        <div className="row" hidden="{tier3Remainder <= 0}">
          <div className="col-5">{numberFormat(tier3Remainder)}</div>
          <div className="col-4">{currencyFormat(tier2Rate)}</div>
          <div className="col-3 text-right">{currencyFormat(tier2Charge)}</div>
        </div>
        <div className="row" hidden="{tier4Remainder <= 0}">
          <div className="col-5">{numberFormat(tier4Remainder)}</div>
          <div className="col-4">{currencyFormat(tier3Rate)}</div>
          <div className="col-3 text-right">{currencyFormat(tier3Charge)}</div>
        </div>
        <div className="row" hidden="{finalRemainder <= 0}">
          <div className="col-5">{numberFormat(finalRemainder)}</div>
          <div className="col-4">{currencyFormat(tier4Rate)}</div>
          <div className="col-3 text-right">{currencyFormat(tier4Charge)}</div>
        </div>
      </div>
      <div className="total">
        <span className="requests-amount">
          final charge : {finalCharge} / mo
          <span hidden="{sliderValue < sliderMaxRange}">*</span>
        </span>
        <div className="footnote" hidden="{sliderValue < sliderMaxRange}">
          * For higher usage, <a href="/#contact-us">contact us</a> for bulk
          volume pricing.
        </div>
      </div>{' '}
    </div>
  );
};

// import React, { useState } from 'react';
// import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css';

// export const PricingCalculator = () => {
//   const [value, setValue] = useState(50);

//   const onSliderChange = (val) => {
//     console.log(val);
//     setValue(val);
//   };

//   return (
//     <div>
//       {value}
//       <Slider value={value} min={0} max={30000000} onChange={onSliderChange} />
//     </div>
//   );
// };
