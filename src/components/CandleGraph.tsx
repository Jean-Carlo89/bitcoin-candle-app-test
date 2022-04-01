import React, { Props, useContext } from "react";
import Chart from "react-apexcharts";
//import CandleContext from "../contexts/candleContext";

export default function CandleGraph({ candleArray }) {
  console.log("candleArray");
  console.log(candleArray);
  // return candleArray.map((c, i) => {
  //   <Chart type="candlestick" height="350" width="450" series={series}>
  //     {c.open}
  //   </Chart>;
  // });

  const options = {
    chart: {
      id: "apexchart-example",
    },
  };

  return (
    <Chart
      height={350}
      width={450}
      series={[{ data: [1, 2, 3, 4, 5] }]}
      options={options}
    ></Chart>
  );
}
