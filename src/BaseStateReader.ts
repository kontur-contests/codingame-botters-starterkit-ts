import { NotImplementedMethod } from "./common/NotImplementedMethod";
import { IO } from "./IO";

export default class BaseStateReader {
  private lines: string[];

  private readLine!: () => string;

  constructor(input: string | (() => string)) {
    this.lines = [];
    typeof input === "string"
      ? this.initByStringInput(input)
      : this.initByFuncInput(input);
  }

  initByStringInput(input: string) {
    const lines = input.split("|");
    let index = 0;
    this.readLine = () => (index < lines.length ? lines[index++] : "");
  }

  initByFuncInput(readLine: () => string) {
    this.readLine = () => {
      const lastLine = readLine();
      this.lines.push(lastLine);
      return lastLine;
    };
  }

  flushInputToLog() {
    IO.printErr(this.lines.join("|"));
    this.lines = [];
  }

  readInt() {
    return parseInt(this.readLine());
  }

  readInts() {
    return this.readLine()
      .split(/\s+/)
      .map(parseInt);
  }
}
