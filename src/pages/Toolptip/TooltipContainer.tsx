import React, { useState } from "react";
import TooltipView from "./TooltipView";
import { TooltipCustom } from "../../types/ApexOption";

const badgeStyle = `
display: inline-block;
padding: .25em .4em;
font-size: 75%;
font-weight: 700;
line-height: 1;
text-align: center;
white-space: nowrap;
vertical-align: baseline;
border-radius: .25rem;
color: #fff;
          background-color: #28a745;
`;
function TooltipContainer() {
  const [option] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    tooltip: {
      enabled: true,
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        formatter: () => "Custom format of x-axis",
      },
      y: {
        title: {
          formatter: (seriesName: any) => "",
        },
      },
      // custom: function ({
      //   series,
      //   seriesIndex,
      //   dataPointIndex,
      //   w,
      // }: TooltipCustom) {
      //   return (
      //     '<div style="' +
      //     badgeStyle +
      //     '">' +
      //     "<span>" +
      //     series[seriesIndex][dataPointIndex] +
      //     "</span>" +
      //     "</div>"
      //   );
      // },
    },
  });

  const [seires] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 100, 49, 60, 70, 91, 50],
    },
  ]);
  return (
    <div>
      <TooltipView option={option} series={seires} />
    </div>
  );
}

export default TooltipContainer;
