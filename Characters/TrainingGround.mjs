import SuperHero from "./SuperHero.mjs";
import SuperVillain from "./SuperVillain.mjs";

export default class TrainingGround {
  static createRandomHero(characters) {
    const heroes = [];
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
      
        const hero = new SuperHero(character.id, character.name, character.slug, character.INT, character.STR, character.SPD, character.DUR, character.POW, character.CBT);
        if (hero.name !== "Junkpile") {
          heroes.push(hero);
        }
    }
    const randomIndex = Math.floor(Math.random() * heroes.length);
    return heroes[randomIndex];
  }

  static createVillain(characters) {
    let villain;
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
   
        const superVillain = new SuperVillain(character.id, character.name, character.slug, character.INT, character.STR, character.SPD, character.DUR, character.POW, character.CBT);
        if (superVillain.name === "Junkpile") {
          villain = superVillain;
          break;
        }
    }
    return villain;
  }

  static createTrainingScenario(characters) {
    const hero = this.createRandomHero(characters);
    const villain = this.createVillain(characters);
    return { hero, villain };
  }
}
