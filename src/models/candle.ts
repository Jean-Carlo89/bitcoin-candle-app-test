export default class Candle {
  currency: string = "";
  finalDateTime: Date = new Date();
  open: number = 0;
  close: number = 0;
  high: number = 0;
  low: number = 0;
  color: string = "";

  constructor(candleObject: any) {
    Object.assign(this, candleObject);
    this.finalDateTime = new Date(this.finalDateTime);
  }
}
