import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ChartTypes } from "../../types/ApexOption";

interface Props {
  option: ApexOptions;
  series: any;
  type: ChartTypes;
}

function MultiSeriesView({ option, series, type }: Props) {
  return (
    <div>
      <h5>Responsive Chart</h5>
      <Chart options={option} series={series} type={type} width="800" />
    </div>
  );
}

export default MultiSeriesView;
