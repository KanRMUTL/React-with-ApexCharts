import { useState, useEffect } from "react";
import { ApexOptions } from "apexcharts";

interface Props {
  chartId: string;
}
interface Serie {
  name: string;
  data: number[];
}

const OptionsHooks = ({ chartId }: Props) => {
  const [categories, setCategories] = useState<number[]>([]);
  const [options, setOptions] = useState<ApexOptions>({});
  const [series, setSeries] = useState<Serie[]>([]);
  useEffect(() => {
    setCategories([1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]);
    setOptions({
      chart: {
        id: chartId,
      },
      xaxis: {
        categories: categories,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
      },
    });
    setSeries([
      {
        name: "Product A",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
      },
      {
        name: "Product B",
        data: [45, 60, 70, 30, 40, 91, 100, 50, 49],
      },
    ]);
  }, []);

  const appendData = () => {
    console.log("wow");
    setSeries(
      series?.map((s) => {
        s.data.push(Math.floor(Math.random() * 100));
        return s;
      })
    );

    setCategories([...categories, categories[categories.length - 1]++]);
    console.log("categories", categories);
    console.log("serires: ", series);
    console.log("option", options);
  };

  return {
    categories,
    options,
    series,
    appendData,
  };
};

export default OptionsHooks;
