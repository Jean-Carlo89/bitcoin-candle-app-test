import logo from "../assets/images/Bitcoin.png";

export default function Header() {
  return (
    <div id="Header">
      <img src={logo} />
      <span>Bitcoin-Candle-Generator</span>
    </div>
  );
}
