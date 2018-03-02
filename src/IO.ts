declare function readline(): string;
declare function printErr(str: string): void;
declare function print(str: string): void;

export class IO {
  static readline() {
    if (typeof readline === "undefined") {
      return "mock_string";
    }
    return readline();
  }

  static print(str: string) {
    if (typeof print === "undefined") {
      console.log(str);
    }
    return print(str);
  }

  static printErr(str: string) {
    if (typeof printErr === "undefined") {
      return console.error(str);
    }
    return printErr(str);
  }
}
