import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ChartTypes } from "../../types/ApexOption";

interface Props {
  option: ApexOptions;
  series: any;
  type: ChartTypes;
}
function ChartColor({ option, series, type }: Props) {
  return (
    <div>
      <h5>Chart Color</h5>
      <Chart options={option} series={series} type={type} width="500" />
    </div>
  );
}

export default ChartColor;
