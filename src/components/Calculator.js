import React from "react";

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
              rel="noopener noreferrer"
            >
              Click here to know more
            </a>
          </div>
        </div>
      </div>
      <div className="content-calculator">
        {" "}
        <h5>
          <b>Try Yourself Using This Calculator.</b>
        </h5>
        <span className="content-calculator">
          Use this calculator to calculate the other smaller side or longer side
          that satisfies the golden ratio where{"\n"}
          <div className="fraction">
            <span className="top">(A+B)</span>
            <span className="bottom">A</span>
          </div>
          =
          <div className="fraction">
            <span className="top">A</span>
            <span className="bottom">B</span>
          </div>{" "}
          Enter any ratio term to calculate the missing golden ratio values.{" "}
        </span>
      </div>
    </div>
  );
};

const RectangleCalculator = () => {
  return (
    <div className="rect-calci">
      <div className="rectangle-calculator">
        <div
          className="omni-calculator"
          data-calculator="math/golden-rectangle"
          data-width="300"
          data-config="{}"
          data-currency="INR"
          data-show-row-controls="false"
          data-version="3"
          data-t="1597416616733"
        >
          <div className="omni-calculator-header">
            Golden Rectangle Calculator
          </div>
          <div className="omni-calculator-footer">
            <a
              href="https://www.omnicalculator.com/math/golden-rectangle"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to know more
            </a>
          </div>
        </div>
      </div>
      <div className="content-calculator-1">
        {" "}
        <h5>
          <b>Try Yourself Using This Calculator.</b>
        </h5>
        <span className="content-calculator-1">
          Use this calculator to calculate the other sides of the rectangle
          which satisfies the golden ratio where{"\n"}
          <div className="fraction">
            <span className="top">(A+B)</span>
            <span className="bottom">A</span>
          </div>
          =
          <div className="fraction">
            <span className="top">A</span>
            <span className="bottom">B</span>
          </div>{" "}
          Enter any ratio term to calculate the missing golden ratio values and
          check the area of the rectangle.{" "}
        </span>
      </div>
    </div>
  );
};
export { RatioCalculator, RectangleCalculator };
