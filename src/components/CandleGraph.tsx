import React, { Props, useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getCandles, getCandlesTest } from "../store/modules/candleStore";

// import ApexAxisChartSeries from "react-apexcharts";
// import ApexChart from "react-apexcharts";
// import ApexXAxis from "react-apexcharts";
// import ApexYAxis from "react-apexcharts";
// import ApexTitleSubtitle from "react-apexcharts";
// import ApexTooltip from "react-apexcharts";

// // {
// //   ChartComponent,
// //
// //   ApexChart,
// //   ApexYAxis,
// //   ApexXAxis,
// //   ApexTitleSubtitle,
// //   ApexTooltip,
// // }
// //import CandleContext from "../contexts/candleContext";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   yaxis: ApexYAxis;
//   title: ApexTitleSubtitle;
//   tooltip: ApexTooltip;
// };

export default function CandleGraph({ candleArray }) {
  const [series, setseries] = useState([]);
  //   console.log("candleArray");
  //   console.log(candleArray);
  //   // return candleArray.map((c, i) => {
  //   //   <Chart type="candlestick" height="350" width="450" series={series}>
  //   //     {c.open}
  //   //   </Chart>;
  //   // });

  const options2: ApexCharts.ApexOptions = {
    // chart: {
    //   id: "basic-bar",
    //   type: "candlestick",
    // },

    chart: {
      // height: 1500,
      // type: "candlestick",
      // width: 500,
      //parentHeightOffset: 1500,
    },

    xaxis: {
      type: "category",
    },

    title: {
      text: "CandleStick Chart - Category X-axis",
    },
    tooltip: {
      enabled: true,
    },

    yaxis: {
      tooltip: {
        enabled: true,
      },
    },

    // get series() {
    //   const series = [
    //     {
    //       data: [
    //         {
    //           x: new Date(1538778600000),
    //           y: [6629.81, 6650.5, 6623.04, 6633.33],
    //         },
    //       ],
    //     },
    //   ];

    //   return series;
    // },

    // series: [
    //   {
    //     data: getCandles(candleArray),
    //   },
    // ],

    series: [
      {
        name: "series-1",

        data: getCandles(candleArray),

        //data: getCandlesTest(),
      },
    ],
  };

  return (
    <Chart
      options={options2}
      series={options2.series}
      width="1600"
      height="auto"
      type="candlestick"
    />
  );
}
