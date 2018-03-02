export default class Item {
  constructor(
    public itemName: string,
    public itemCost: number,
    public damage: number,
    public health: number,
    public maxHealth: number,
    public mana: number,
    public maxMana: number,
    public moveSpeed: number,
    public manaRegeneration: number,
    public isPotion: boolean
  ) {}
}
