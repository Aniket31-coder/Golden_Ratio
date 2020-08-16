import React, { useEffect } from "react";

const RatioCalculator = () => {
  return (
    <div className="calculator">
      <div
        className="omni-calculator"
        data-calculator="math/golden-ratio"
        data-width={300}
        data-config="{}"
        data-currency="INR"
        data-show-row-controls="false"
        data-version={3}
        data-t={1597226078402}
      >
        <div className="omni-calculator-header">Golden Ratio Calculator</div>
        <div className="omni-calculator-footer">
          <a
            href="https://www.omnicalculator.com/math/golden-ratio"
            target="_blank"
          >
          </a>
        </div>
      </div>
    </div>
  );
};

const RectangleCalculator= ()=>{
  return (
   <div className="rectangle-calculator">
      <div class="omni-calculator" data-calculator="math/golden-rectangle" data-width="300" data-config='{}' data-currency="INR" data-show-row-controls="false" data-version="3" data-t="1597416616733">
      <div class="omni-calculator-header">Golden Rectangle Calculator</div>
      <div class="omni-calculator-footer">
        <a href="https://www.omnicalculator.com/math/golden-rectangle" target="_blank"></a>
      </div>
    </div>
   </div>
  ); 
}
export  {RatioCalculator,RectangleCalculator};
