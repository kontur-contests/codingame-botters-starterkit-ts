import BaseStateReader from "./BaseStateReader";
import { InitData, default as State } from "./State";
import { IO } from "./IO";

export default class StateReader extends BaseStateReader {
  constructor(input?: string) {
    super(typeof input === "string" ? input : IO.readline);
  }

  readInitData() {
    //let size = this.readInt()
    //let unitsPerPlayer = this.readInt()
    return new InitData();
  }

  readState(initData: InitData) {
    //let actionCount = this.readInt();
    //...
    this.flushInputToLog();
    return new State();
  }

  /**
   * Для тестов
   */
  static read(init: string, state: string) {
    const initData = new StateReader(init).readInitData();
    return new StateReader(state).readState(initData);
  }
}
