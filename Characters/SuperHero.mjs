import { Dies } from "../constants.mjs";
import Character from "./Character.mjs"
export default class SuperHero extends Character {
  constructor(id, name, slug, intelligence, strength, speed, durability, power, combat) {
    super(id, name, slug, intelligence, strength, speed, durability, power, combat);
  }

  attack(dieResult,dies,otherTurnFigher) {
    let damage = 0;
    if (dieResult === 1) {
      // Pifia
      damage =  Math.ceil(this.SPD / dieResult);
      console.log("FAIL!!" +  this.name + ' obtiene un  '+ dieResult + " y se clava el arma en su pierna izda. Recibe un daño de " + damage + "Puntos" );
      this.HP -= damage;
    } else if (dieResult === 2) {
      // Pifia
      damage =  Math.ceil(this.SPD / (4 * dieResult));
      console.log( this.name + ' ha hecho una pifia de ' + damage);
      otherTurnFigher.HP -= damage;
    } else if (dieResult >= 3 && dieResult <= 17) {
      // Daño normal
      damage =  Math.ceil((this.POW + this.STR) * dieResult / 100);
      console.log( this.name + ' ha inflingido un daño de ' + damage);
      otherTurnFigher.HP -= damage;
    } else if (dieResult >= 18 && dieResult <= 20) {
      // Crítico
      damage =  Math.ceil(this.calculateCriticalDamage(dieResult,dies) + (this.POW + this.STR) * dieResult / 100);
      console.log( '\x1b[32m%s\x1b[0m',"CRITICAL HIT!!!" + this.name + ' obtiene un ' + dieResult + " y ejerce un daño de  " + damage + " puntos.");
      otherTurnFigher.HP -= damage;
    }
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
