import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

// Chart Component is recieving the data-points to be rendered as props
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
  
    return (
    <div className="chart">
      {/* We are creating as many ChartBar Components as we have data-points*/}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
