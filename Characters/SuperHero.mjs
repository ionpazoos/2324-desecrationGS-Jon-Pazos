import { Dies } from "../Constants.mjs";
export default class SuperHero extends Character {
  constructor(id, name, slug, intelligence, strength, speed, durability, power, combat) {
    super(id, name, slug, intelligence, strength, speed, durability, power, combat);
  }

  attack(dieResult,dies) {
    let damage;
    if (dieResult === 1) {
      // Pifia
      damage = this.SPD / dieResult;
      console.log( this.name + ' ha hecho una pifia de ' + damage);
    } else if (dieResult === 2) {
      // Pifia
      damage = this.SPD / (4 * dieResult);
      console.log( this.name + ' ha hecho una pifia de ' + damage);
    } else if (dieResult >= 3 && dieResult <= 17) {
      // Daño normal
      damage = (this.POW + this.STR) * dieResult / 100;
      console.log( this.name + ' ha inflingido un daño de ' + damage);
    } else if (dieResult >= 18 && dieResult <= 20) {
      // Crítico
      damage = this.calculateCriticalDamage(dieResult) + (this.POW + this.STR) * dieResult / 100;
      console.log( this.name + ' ha hecho un daño critico de ' + damage);
    }
    return damage;
  }

  calculateCriticalDamage(dieResult,dies) {
    let damage;
    switch (dieResult) {
      case 18:
        damage = (this.INT * this.DUR) / 100 * dies[Dies.D3].roll();
        break;
      case 19:
        damage = (this.INT * this.DUR) / 100 * (dies[Dies.D3].roll() + dies[Dies.D3].roll());
        break;
      case 20:
        damage = (this.INT * this.DUR) / 100 * (dies[Dies.D3].roll() + dies[Dies.D3].roll() + dies[Dies.D3].roll());
        break;
    }
    return damage;
  }


}
