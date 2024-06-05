import TrainingGround from "./Characters/TrainingGround.mjs";
import axios from "axios";

getCharacters();
createDies();


function getCharacters() {
  const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

  axios.get(url)
    .then(response => {
      const datos = response.data;
      
      const Characters = TrainingGround.createCharacters(datos);
      
      console.log('Charcter:', Characters);
    })
    .catch(error => {
      console.error('Error al obtener datos:', error);
    });
}
function createDies() {
    
    
}
