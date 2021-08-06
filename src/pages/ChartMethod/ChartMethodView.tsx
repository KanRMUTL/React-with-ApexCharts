import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ChartTypes } from "../../types/ApexOption";

interface Props {
  id: string;
  option: ApexOptions;
  series: any;
  type: ChartTypes;
  appendData: () => void;
}
function ChartMethodView({ id, option, series, type, appendData }: Props) {
  return (
    <div>
      <h5>Chart Methods</h5>
      <Chart options={option} series={series} type={type} width="500" />
      <button onClick={() => appendData()}>Push Data</button>
    </div>
  );
}

export default ChartMethodView;
