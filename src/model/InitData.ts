import Entity from "./Entity";
import Item from "./Item";

export default class InitData {
  spawns: Entity[];
  bushes: Entity[];

  constructor(
    public team: number,
    staticObjects: Entity[],
    public items: Item[]
  ) {
    this.spawns = staticObjects.filter(x => x.type === "Spawn");
    this.bushes = staticObjects.filter(x => x.type === "Bush");
  }
}
