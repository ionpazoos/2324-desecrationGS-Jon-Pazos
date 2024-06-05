import SuperHero from "./SuperHero.mjs";
import SuperVillain from "./SuperVillain.mjs";

export default class TrainingGround {
  static createRandomHero(characters) {
    const heroes = [];
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
      const powerstats = character.powerstats;
      const hero = new SuperHero(
        character.id,
        character.name,
        character.slug,
        powerstats.intelligence,
        powerstats.strength,
        powerstats.speed,
        powerstats.durability,
        powerstats.power,
        powerstats.combat
      );
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
      const powerstats = character.powerstats;
      const superVillain = new SuperVillain(
        character.id,
        character.name,
        character.slug,
        powerstats.intelligence,
        powerstats.strength,
        powerstats.speed,
        powerstats.durability,
        powerstats.power,
        powerstats.combat
      );
      if (superVillain.name === "Junkpile") {
        villain = superVillain;
        break;
      }
    }
    return villain;
  }

  static createCharacters(characters) {
    const hero = this.createRandomHero(characters);
    const villain = this.createVillain(characters);
    return { hero, villain };
  }
}
