import { Dies } from "./constants.mjs";

export default class Combat {
    constructor(fighter1, fighter2, dies) {
      this.fighter1 = fighter1;
      this.fighter2 = fighter2;
      this.dies = dies;
    }
  
    execute() {
      let fighters = [];
      let round = 1;
      console.log("WELCOME TO THE COMBAT ARENA!!");
      console.log("--------------------------------------------");
      console.log("Hoy combatiran " + this.fighter1.name + " y " + this.fighter2.name);
      console.log("--------------------------------------------");
      console.log("Lista de atributos");
      console.log("--------------------------------------------");
      console.log(this.fighter1);
      console.log(this.fighter2);
      console.log("--------------------------------------------");
      if (this.fighter1.INT + this.fighter1.COM < this.fighter2.INT + this.fighter2.COM) {
        console.log("El primer asalto es para " + this.fighter2.name);
        fighters = [this.fighter2,this.fighter1]
      }
      else{
        console.log("El primer asalto es para " + this.fighter1.name);
        fighters = [this.fighter1,this.fighter2]

      }
      console.log("--------------------------------------------");
      //gameloop
      while (this.endOfTheGame()) {
       let turn = this.getTurn(round);
        console.log("Comienza el asalto " + round);
        console.log("--------------------------------------------");
        console.log("El asalto es para: " + fighters[turn].name);
        let roll = this.dies[Dies.D100].roll();
        
        if (roll <= fighters[turn].COM) {
          console.log(fighters[turn].name + " obtiene un " + roll + " y ataca con exito.");
          roll = this.dies[Dies.D20].roll();
          let otherturn = this.getOtherTurn(round);
          fighters[turn].attack(roll,this.dies,fighters[otherturn]);
        }
        else{
          console.log(fighters[turn].name + " obtiene un " + roll + " y el ataque falla.");
        }
        
        round++;
        console.log(fighters);
        
      }
    }
    getTurn(round){
      if (round % 2 === 0) {
        return 1;
        
      }
      else{
        return 0;
      }

    }
    getOtherTurn(round){
      if (round % 2 != 0) {
        return 1;
        
      }
      else{
        return 0;
      }
    }
    endOfTheGame(){
      if (this.fighter1.HP <= 0) {
        console.log("--------------------------------------------");
        console.log("--------------------------------------------");
        console.log(this.fighter1.name  +" a sido derrotado.");  
          return false;
        }
        else if(this.fighter2.HP <= 0){
          console.log("--------------------------------------------");
          console.log("--------------------------------------------");
          console.log(this.fighter2.name  +" a sido derrotado.");  
          return false;
        } 
        else{
          return true;
        }             
    }
  }
  

  