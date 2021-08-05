import React, { useState } from "react";
import MultiSeriesView from "./MultiSeriesView";
import { ChartTypes } from "../../types/ApexOption";
import { ApexOptions } from "apexcharts";
import { eachDayOfInterval, add, format } from "date-fns";

function TooltipContainer() {
  const today = new Date();
  const next30Day = add(today, { days: 30 });
  const allDays = eachDayOfInterval({ start: today, end: next30Day });

  const [option] = useState<ApexOptions>({
    chart: {
      id: "multiple-series",
      width: "100%",
    },
    colors: ["#f54287", "#42f554"],
    xaxis: {
      categories: allDays.map((day, index) =>
        index % 5 === 0 ? format(day, "do MMM yyyy") : ""
      ),
    },
    markers: {
      size: 5,
      colors: undefined,
      strokeColors: "#274de6",
      strokeWidth: 2,
      strokeOpacity: 0.7,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
  });

  const randomValues = (limit: number) => {
    return allDays.map(() => Math.floor(Math.random() * limit));
  };

  const [seires] = useState([
    {
      name: "Product A",
      data: randomValues(100),
    },
    {
      name: "Product B",
      data: randomValues(50),
    },
  ]);

  return (
    <div>
      <MultiSeriesView option={option} series={seires} type={ChartTypes.line} />
    </div>
  );
}

export default TooltipContainer;
