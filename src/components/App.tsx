import React, {
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
//import CandleContext from "../contexts/candleContext";
import Candle from "../models/candle";
import CandleGraph from "./CandleGraph";

function App() {
  //useContext(CandleContext);

  // interface IProps {
  //   myVar: any[];
  //   setMyVar?: Dispatch<SetStateAction<any[]>>;
  // }

  const [candlesArray, setCandlesArray] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_CANDLES_API}${process.env.REACT_APP_CANDLES_API_ENDPOINT}/10`
      )
      .then((response) => {
        console.log("Success");
        console.log(response);
        setCandlesArray(response.data);
      })
      .catch((e) => {
        console.log("Error");
        console.log(e.response);
      });
  }, []);

  return (
    <>
      {/* <CandleContext.Provider value={}> */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <CandleGraph candleArray={candlesArray}></CandleGraph>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      {/* </CandleContext.Provider> */}
    </>
  );
}

export default App;
