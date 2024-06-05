export default class Character {
  constructor(id, name, slug, intelligence, strength, speed, durability, power, combat) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.INT = intelligence;
    this.STR = strength;
    this.SPD = speed;
    this.DUR = durability;
    this.POW = power;
    this.CBT = combat;
    this.HP = Math.min(strength * 10, 666);
  }

  attack() {
  }
}
