import BaseStateReader from "./BaseStateReader";
import State from "./model/State";
import Vector from "./Vector";
import Entity from "./model/Entity";
import Unit from "./model/Unit";
import Item from "./model/Item";
import InitData from "./model/InitData";
import { IO } from "./IO";

export default class StateReader extends BaseStateReader {
  constructor(input?: string) {
    super(typeof input === "string" ? input : IO.readline);
  }

  readInitData() {
    const team = this.readInt();
    const staticObjects = Array.from(Array(this.readInt()).keys()).map(() =>
      this.readStaticObject()
    );
    const items = Array.from(Array(this.readInt()).keys()).map(() =>
      this.readItem()
    );
    IO.printErr("\n");
    return new InitData(team, staticObjects, items);
  }

  readStaticObject() {
    const parts = this.readLine().split(/\s/);
    const position = new Vector(parseInt(parts[1]), parseInt(parts[2]));
    const radius = parseInt(parts[3]);
    const entityType = parts[0];
    return new Entity(position, radius, entityType);
  }

  readItem() {
    const parts = this.readLine().split(" ");
    const itemName = parts[0]; // contains keywords such as BRONZE, SILVER and BLADE, BOOTS connected by "_" to help you sort easier
    const itemCost = parseInt(parts[1]); // BRONZE items have lowest cost, the most expensive items are LEGENDARY
    const damage = parseInt(parts[2]); // keyword BLADE is present if the most important item stat is damage
    const health = parseInt(parts[3]);
    const maxHealth = parseInt(parts[4]);
    const mana = parseInt(parts[5]);
    const maxMana = parseInt(parts[6]);
    const moveSpeed = parseInt(parts[7]); // keyword BOOTS is present if the most important item stat is moveSpeed
    const manaRegeneration = parseInt(parts[8]);
    const isPotion = parseInt(parts[9]) === 1; // 0 if it's not instantly consumed
    return new Item(
      itemName,
      itemCost,
      damage,
      health,
      maxHealth,
      mana,
      maxMana,
      moveSpeed,
      manaRegeneration,
      isPotion
    );
  }

  readState(initData: InitData) {
    const gold = this.readInt();
    const enemyGold = this.readInt();
    const roundType = this.readInt(); // a positive value will show the number of heroes that await a command
    const units = Array(this.readInt())
      .fill(undefined)
      .map(() => this.readUnit());
    IO.printErr("\n");
    return new State(gold, enemyGold, roundType, units, initData);
  }

  readUnit() {
    const parts = this.readLine().split(" ");
    const unitId = parseInt(parts[0]);
    const team = parseInt(parts[1]);
    const unitType = parts[2];
    const x = parseInt(parts[3]);
    const y = parseInt(parts[4]);
    const attackRange = parseInt(parts[5]);
    const health = parseInt(parts[6]);
    const maxHealth = parseInt(parts[7]);
    const shield = parseInt(parts[8]); // useful in bronze
    const attackDamage = parseInt(parts[9]);
    const movementSpeed = parseInt(parts[10]);
    const stunDuration = parseInt(parts[11]); // useful in bronze
    const goldValue = parseInt(parts[12]);
    const countDown1 = parseInt(parts[13]); // all countDown and mana variables are useful starting in bronze
    const countDown2 = parseInt(parts[14]);
    const countDown3 = parseInt(parts[15]);
    const mana = parseInt(parts[16]);
    const maxMana = parseInt(parts[17]);
    const manaRegeneration = parseInt(parts[18]);
    const heroType = parts[19]; // DEADPOOL, VALKYRIE, DOCTOR_STRANGE, HULK, IRONMAN
    const isVisible = parseInt(parts[20]); // 0 if it isn't
    const itemsOwned = parseInt(parts[21]); // useful from wood1

    return new Unit(
      unitId,
      team,
      unitType,
      new Vector(x, y),
      attackRange,
      health,
      maxHealth,
      shield,
      attackDamage,
      movementSpeed,
      stunDuration,
      goldValue,
      countDown1,
      countDown2,
      countDown3,
      mana,
      maxMana,
      manaRegeneration,
      heroType,
      isVisible,
      itemsOwned
    );
  }

  /**
   * Для тестов
   */
  static read(init: string, state: string) {
    const initData = new StateReader(init).readInitData();
    return new StateReader(state).readState(initData);
  }
}
