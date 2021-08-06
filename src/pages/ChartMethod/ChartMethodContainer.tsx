import React from "react";
import ChartMethodView from "./ChartMethodView";
import { ChartTypes } from "../../types/ApexOption";
import OptionsHooks from "./OptionsHooks";

function ChartMethodContainer() {
  const chartId = "chart-method";
  const { options, series, appendData, setOptions } = OptionsHooks({
    chartId,
  });
  return (
    <div>
      <ChartMethodView
        option={options}
        series={series}
        type={ChartTypes.bar}
        appendData={appendData}
        setOptions={setOptions}
      />
    </div>
  );
}

export default ChartMethodContainer;
