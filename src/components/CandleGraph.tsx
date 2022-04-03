import React, { Props, useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getCandles, getCandlesTest } from "../store/modules/candleStore";
import "../components/App.css";

export default function CandleGraph({ candleArray }) {
  const [series, setseries] = useState([]);

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "candlestick",
    },

    xaxis: {
      type: "category",

      labels: {
        style: {
          fontSize: "30px",
        },
      },
    },

    title: {
      text: "CandleStick Chart ",
      style: {
        fontSize: "60px",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      enabled: true,

      // custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      //   var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

      //   return (
      //     "<ul>" +
      //     "<li><b>Price</b>: " +
      //     data.x +
      //     "</li>" +
      //     "<li><b>Number</b>: " +
      //     data.y[0] +
      //     "</li>" +
      //     // '<li><b>Product</b>: \'' + data.product + '\'</li>' +
      //     // '<li><b>Info</b>: \'' + data.info + '\'</li>' +
      //     // '<li><b>Site</b>: \'' + data.site + '\'</li>' +
      //     "</ul>"
      //   );
      // },

      x: {
        show: true,
      },
      style: {
        fontSize: "30px",
      },
      // items:{
      //   display: ;
      // }
    },
    labels: ["Open", "High", "Low", "Close"],

    yaxis: {
      tooltip: {
        // enabled: true,
        enabled: true,
      },

      labels: {
        show: true,
        style: {
          fontSize: "30px",
        },
      },
    },

    series: [
      {
        name: "candles",

        data: getCandles(candleArray),

        //data: getCandlesTest(),
      },
    ],
  };

  return (
    <>
      <Chart
        id="ChartContainer"
        options={options}
        series={options.series}
        width="1600"
        height="900"
        type="candlestick"
      />

      {/* <Chart
        options={options2}
        series={options.series}
        width="1600"
        height="950"
        type="candlestick"
      />
      */}
    </>
  );
}
