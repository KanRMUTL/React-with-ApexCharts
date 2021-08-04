import React, { useState } from "react";
import BasicView from "./BasicView";
function BasicContainer() {
  const [option] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [seires] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);
  return (
    <div>
      <BasicView option={option} series={seires} />
    </div>
  );
}

export default BasicContainer;
