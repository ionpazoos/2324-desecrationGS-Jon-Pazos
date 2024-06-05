import TrainingGround from "./Characters/TrainingGround.mjs";
import axios from "axios";
import Die from "./Die.mjs";
import Combat from "./Combat.mjs";

CreateGame();


function CreateGame() {
  const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

  axios.get(url)
    .then(response => {
      const datos = response.data;
      const Characters = TrainingGround.createCharacters(datos);
      let dies = createDies();
      let combat = new Combat(Characters.hero,Characters.villain,dies)
      combat.execute();
    })
    .catch(error => {
      console.error('Error al obtener datos:', error);
    });
}
function createDies() {
    let dies = [];

    dies.push(Die.createDie("D3"));
    dies.push(Die.createDie("D5"));
    dies.push(Die.createDie("D20"));
    dies.push(Die.createDie("D100"));

    return dies;
}
