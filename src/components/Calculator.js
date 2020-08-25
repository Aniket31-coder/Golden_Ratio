import React, { useEffect } from "react";

const RatioCalculator = () => {
  return (
    <div className="calci">
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
            ></a>
          </div>
        </div>
      </div>
      <div className="content-calculator">
        <p className="content-calculator">
          {" "}
          <h5>
            <b>Try Yourself Using This Calculator.</b>
          </h5>
          Use this calculator to calculate the other smaller side or longer side
          that satisfies the golden ratio where{"\n"}
          <div class="fraction">
            <span class="top">(A+B)</span>
            <span class="bottom">A</span>
          </div>
          =
          <div class="fraction">
            <span class="top">A</span>
            <span class="bottom">B</span>
          </div>{" "}
          Enter any ratio term to calculate the missing golden ratio values.{" "}
        </p>
      </div>
    </div>
  );
};

const RectangleCalculator = () => {
  return (
    <div className="rect-calci">
      <div className="rectangle-calculator">
        <div
          class="omni-calculator"
          data-calculator="math/golden-rectangle"
          data-width="300"
          data-config="{}"
          data-currency="INR"
          data-show-row-controls="false"
          data-version="3"
          data-t="1597416616733"
        >
          <div class="omni-calculator-header">Golden Rectangle Calculator</div>
          <div class="omni-calculator-footer">
            <a
              href="https://www.omnicalculator.com/math/golden-rectangle"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
      <div className="content-calculator-1">
        <p className="content-calculator-1">
          {" "}
          <h5>
            <b>Try Yourself Using This Calculator.</b>
          </h5>
          Use this calculator to calculate the other smaller side or longer side
          that satisfies the golden ratio where{"\n"}
          <div class="fraction">
            <span class="top">(A+B)</span>
            <span class="bottom">A</span>
          </div>
          =
          <div class="fraction">
            <span class="top">A</span>
            <span class="bottom">B</span>
          </div>{" "}
          Enter any ratio term to calculate the missing golden ratio values.{" "}
        </p>
      </div>
    </div>
  );
};
export { RatioCalculator, RectangleCalculator };
