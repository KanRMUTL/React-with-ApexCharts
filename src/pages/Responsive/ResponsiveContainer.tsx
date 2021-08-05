import React, { useState } from "react";
import MultiSeriesView from "./ResponsiveView";
import { ChartTypes } from "../../types/ApexOption";
import { ApexOptions } from "apexcharts";
import { eachDayOfInterval, add, format } from "date-fns";

function TooltipContainer() {
  const today = new Date();
  const next15Day = add(today, { days: 15 });
  const allDays = eachDayOfInterval({ start: today, end: next15Day });

  const [option] = useState<ApexOptions>({
    chart: {
      id: "multiple-series",
    },
    colors: ["#f54287", "#42f554"],
    xaxis: {
      categories: allDays.map((day, index) =>
        index % 5 === 0 ? format(day, "do MMM yyyy") : ""
      ),
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top",
        },
      },
    },
    responsive: [
      {
        breakpoint: 769,
        options: {
          chart: {
            width: 650,
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            width: 350,
            type: "line",
          },
          stroke: {
            width: [1.5, 1.5],
            curve: "smooth",
          },
          colors: ["#f54287", "#42f554"],
          xaxis: {
            categories: allDays.map((day, index) =>
              index % 5 === 0 ? format(day, "dd MMM") : ""
            ),
          },
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: false,
            style: {
              fontSize: "12px",
              fontFamily: undefined,
            },
            onDatasetHover: {
              highlightDataSeries: false,
            },
            x: {
              show: true,
              format: "dd MMM",
              formatter: undefined,
            },
            y: {
              formatter: undefined,
              title: {
                formatter: (seriesName: any) => seriesName,
              },
            },
            z: {
              formatter: undefined,
              title: "Size: ",
            },
            marker: {
              show: true,
            },
            items: {
              display: "flex",
            },
            fixed: {
              enabled: false,
              position: "topRight",
              offsetX: 0,
              offsetY: 0,
            },
          },
        },
      },
    ],
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
      <MultiSeriesView option={option} series={seires} type={ChartTypes.bar} />
    </div>
  );
}

export default TooltipContainer;
