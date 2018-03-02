import Countdown from "./Countdown";
import State from "./model/State";

export default class Ai {
  getNextMove(state: State, countdown: Countdown) {
    return state.roundType < 0 ? "IRONMAN" : "ATTACK_NEAREST UNIT";
  }
}
