import Vector from "../Vector";

export default class Entity {
  constructor(
    public position: Vector,
    public radius: number,
    public type: string
  ) {}
}
