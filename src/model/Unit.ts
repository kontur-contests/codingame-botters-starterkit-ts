import Vector from "../Vector";

export default class Unit {
  constructor(
    public unitId: number,
    public team: number,
    public unitType: string,
    public pos: Vector,
    public attackRange: number,
    public health: number,
    public maxHealth: number,
    public shield: number,
    public attackDamage: number,
    public movementSpeed: number,
    public stunDuration: number,
    public goldValue: number,
    public countDown1: number,
    public countDown2: number,
    public countDown3: number,
    public mana: number,
    public maxMana: number,
    public manaRegeneration: number,
    public heroType: string,
    public isVisible: number,
    public itemsOwned: number
  ) {}

  makeCopy() {
    return new Unit(
      this.unitId,
      this.team,
      this.unitType,
      this.pos,
      this.attackRange,
      this.health,
      this.maxHealth,
      this.shield,
      this.attackDamage,
      this.movementSpeed,
      this.stunDuration,
      this.goldValue,
      this.countDown1,
      this.countDown2,
      this.countDown3,
      this.mana,
      this.maxMana,
      this.manaRegeneration,
      this.heroType,
      this.isVisible,
      this.itemsOwned
    );
  }
}
