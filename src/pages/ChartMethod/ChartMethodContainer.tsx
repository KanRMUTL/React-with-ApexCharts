import React from "react";
import ChartMethodView from "./ChartMethodView";
import { ChartTypes } from "../../types/ApexOption";
import OptionsHooks from "./OptionsHooks";

function ChartMethodContainer() {
  const chartId = "chart-method";
  const { options, series, appendData } = OptionsHooks({
    chartId,
  });
  return (
    <div>
      <ChartMethodView
        id={chartId}
        option={options}
        series={series}
        type={ChartTypes.bar}
        appendData={appendData}
      />
    </div>
  );
}

export default ChartMethodContainer;
