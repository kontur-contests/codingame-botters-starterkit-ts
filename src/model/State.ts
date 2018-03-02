import Unit from "./Unit";
import InitData from "./InitData";

export default class State {
  constructor(
    public gold: number,
    public enemyGold: number,
    public roundType: number,
    public units: Unit[],
    public initData: InitData
  ) {}

  makeCopy() {
    return new State(
      this.gold,
      this.enemyGold,
      this.roundType,
      this.units.map(u => u.makeCopy()),
      this.initData
    );
  }
}
