import State from "./State";
import StateReader from "./StateReader";

test("Some test", () => {
  const initData = new StateReader("abc|123").readInitData();
  console.log(initData);
});
