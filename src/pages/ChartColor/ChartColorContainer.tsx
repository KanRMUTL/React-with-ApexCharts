import React, { useState } from "react";
import ChartColorView from "./ChartColorView";
import { ChartTypes, ChartHorizontalAlign } from "../../types/ApexOption";

interface ColorCallback {
  value: any;
  seriesIndex: any;
  w: any;
}
function BasicContainer() {
  const [option] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
    },
    colors: [
      function ({ value, seriesIndex, w }: ColorCallback) {
        return value >= 100 / 2 ? "#31e8a5" : "#e83134";
      },
    ],
    stroke: {
      show: true,
      width: 2,
    },
    subtitle: {
      text: "Products",
      align: ChartHorizontalAlign.center,
      offsetY: 0,
      style: {
        fontSize: "18px",
        margin: "25",
      },
    },
  });

  const [seires] = useState([
    {
      name: "Product A",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
    },
    {
      name: "Product B",
      data: [45, 60, 70, 30, 40, 91, 100, 50, 49],
    },
  ]);
  return (
    <div>
      <ChartColorView option={option} series={seires} type={ChartTypes.bar} />
    </div>
  );
}

export default BasicContainer;
