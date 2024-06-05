import { Dies } from "../constants.mjs";
import Character from "./Character.mjs"
export default class SuperVillain extends Character {
  constructor(id, name, slug, intelligence, strength, speed, durability, power, combat) {
    super(id, name, slug, intelligence, strength, speed, durability, power, combat);
  }

  attack(dieResult,dies,otherTurnFigher) {
    let damage = 0;
    if (dieResult >= 1 && dieResult <= 17) {
      // Normal
      damage = Math.ceil( (this.POW + this.STR) * dieResult / 100);
      console.log( this.name + ' ha hecho un daño de ' + damage);
    } else if (dieResult >= 18 && dieResult <= 20) {
      // Crítico
      damage =  Math.ceil(this.calculateCriticalDamage(dieResult,dies) + (this.POW + this.STR) * dieResult / 100);
      console.log( "CRITICAL HIT!!!" + this.name + ' obtiene un ' + dieResult + " y ejerce un daño de  " + damage + " puntos.");
    }
    otherTurnFigher.HP -= damage;
  }

  calculateCriticalDamage(dieResult,dies) {
    let damage;
    switch (dieResult) {
      case 18:
        damage = (this.INT * this.DUR) / 100 * (dies[Dies.D3].roll() + dies[Dies.D3].roll());
        break;
      case 19:
        damage = (this.INT * this.DUR) / 100 * (dies[Dies.D3].roll() + dies[Dies.D3].roll() + dies[Dies.D3].roll());
        break;
      case 20:
        damage = (this.INT * this.DUR) / 100 * (dies[Dies.D5].roll() + dies[Dies.D5].roll() + dies[Dies.D5].roll() + dies[Dies.D5].roll());
        break;
    }
    return damage;
  }

}