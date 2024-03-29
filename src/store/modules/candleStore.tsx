import * as React from "react";
import axios from "axios";
import Candle from "../../models/candle";
// import Candle from "../../models/candle";

// export default class CandleStore{

//     private _candles : Candle[]

//     getCandles(){
//         return
//         this._candles.length>0 ?
//         {this._candles.map((candle)=>{
//             return
//         })}
//     }

// }

export function getCandles(candleArray: Candle[]) {
  const result =
    candleArray.length > 0
      ? candleArray.map((candle) => {
          return {
            x: candle.finalDateTime.toLocaleTimeString(),
            y: [candle.open, candle.high, candle.low, candle.close],
          };
        })
      : [];
  console.log("result");
  console.log(result);

  //return y;
  return result;
}

export function addNewCandle(candle: Candle, candleArray: never[]) {
  candleArray.push(candle as never);
}

export function getInitialCandles(
  setCandleArray: React.Dispatch<React.SetStateAction<never[]>>,
  setData: React.Dispatch<React.SetStateAction<boolean>>
) {
  axios
    .get(
      `${process.env.REACT_APP_CANDLES_API}${process.env.REACT_APP_CANDLES_API_ENDPOINT}/10`
    )
    .then((response) => {
      console.log("Success");
      console.log(response);
      // setCandleArray(response.data);
      const result = response.data;
      const candles: Candle[] = result.map((c: any) => {
        return new Candle(c);
      });

      console.log(candles);

      //*refactor all into private method in class later

      setCandleArray(candles.reverse() as never[]);
      setData(true);
    })
    .catch((e) => {
      console.log("Error");
      console.log(e.response);
    });
}

export function getCandlesTest() {
  return [
    {
      x: new Date(1538778600000).toLocaleTimeString(),
      y: [6629.81, 6650.5, 6623.04, 6633.33],
    },
    {
      x: new Date(1538780400000).toLocaleTimeString(),
      y: [6632.01, 6643.59, 6620, 6630.11],
    },
    {
      x: new Date(1538782200000).toLocaleTimeString(),
      y: [6630.71, 6648.95, 6623.34, 6635.65],
    },
    {
      x: new Date(1538784000000).toLocaleTimeString(),
      y: [6635.65, 6651, 6629.67, 6638.24],
    },
    {
      x: new Date(1538785800000).toLocaleTimeString(),
      y: [6638.24, 6640, 6620, 6624.47],
    },
    {
      x: new Date(1538787600000),
      y: [6624.53, 6636.03, 6621.68, 6624.31],
    },
    {
      x: new Date(1538789400000).toLocaleTimeString(),
      y: [6624.61, 6632.2, 6617, 6626.02],
    },
    {
      x: new Date(1538791200000).toLocaleTimeString(),
      y: [6627, 6627.62, 6584.22, 6603.02],
    },
    {
      x: new Date(1538793000000),
      y: [6605, 6608.03, 6598.95, 6604.01],
    },
    {
      x: new Date(1538794800000).toLocaleTimeString(),
      y: [6604.5, 6614.4, 6602.26, 6608.02],
    },
    {
      x: new Date(1538778600000).toLocaleTimeString(),
      y: [6629.81, 6650.5, 6623.04, 6633.33],
    },
  ];
}
