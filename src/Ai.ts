import State from "./State";
import Countdown from "./Countdown";

export default class Ai {
  getNextMove(state: State, countdown: Countdown) {
    while (!countdown.isFinished()) {
      // Think about state!
    }
    return "Command";
  }
}
