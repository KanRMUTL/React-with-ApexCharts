import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ChartTypes } from "../../types/ApexOption";

interface Props {
  option: ApexOptions;
  series: any;
  type: ChartTypes;
  appendData: () => void;
  setOptions: (options: ApexOptions) => void;
}
function ChartMethodView({
  option,
  series,
  type,
  appendData,
  setOptions,
}: Props) {
  const updateColors = () => {
    setOptions({
      ...option,
      colors: ["#546E7A", "#E91E63"],
    });
  };

  return (
    <div>
      <h5>Chart Methods</h5>
      <Chart options={option} series={series} type={type} width="500" />
      <button onClick={() => appendData()}>Push Data</button>
      <button onClick={() => updateColors()}>Update Colors</button>
    </div>
  );
}

export default ChartMethodView;
