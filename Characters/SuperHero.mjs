import Character from "./Character.mjs";

export default class SuperHero extends Character {
  constructor(id, name, slug, intelligence, strength, speed, durability, power, combat) {
    super(id, name, slug, intelligence, strength, speed, durability, power, combat);
  }
}
