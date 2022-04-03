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
import { getInitialCandles } from "../store/modules/candleStore";
import Header from "./Header";

function App() {
  //useContext(CandleContext);

  // interface IProps {
  //   myVar: any[];
  //   setMyVar?: Dispatch<SetStateAction<any[]>>;
  // }

  const [candlesArray, setCandlesArray] = useState([]);
  const [data, setData] = useState(false);

  useEffect(() => {
    getInitialCandles(setCandlesArray, setData);
  }, [data]);

  return (
    <>
      <div className="App-header">
        {/* 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p> */}

        {/* <button onClick={() => console.log(candlesArray)}>
          TESTattttttttttttttt
        </button> */}

        <Header></Header>

        {candlesArray.length > 0 ? (
          <CandleGraph candleArray={data ? candlesArray : []}></CandleGraph>
        ) : null}
      </div>

      {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
