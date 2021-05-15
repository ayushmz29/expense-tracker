import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  // 0% is string tyoe because later we use this to overwrite the css property(height: 0%)
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* In react, 'style' attributes takes a JS object as input */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>

      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
