import React, { useState } from "react";
import TooltipView from "./TooltipView";
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
