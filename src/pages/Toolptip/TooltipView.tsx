import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface Props {
  option: ApexOptions;
  series: any;
}

function TooltipView({ option, series }: Props) {
  return (
    <div>
      <h5>Tooltip</h5>
      <Chart options={option} series={series} type="bar" width="500" />
    </div>
  );
}

export default TooltipView;
