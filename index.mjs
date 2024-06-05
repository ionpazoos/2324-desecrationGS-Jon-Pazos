import TrainingGround from "./Characters/TrainingGround.mjs";
import axios from "axios";

getCharacters();

function getCharacters() {
  const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

  axios.get(url)
    .then(response => {
      const datos = response.data;
      
      const trainingScenario = TrainingGround.createTrainingScenario(datos);
      
      console.log('Training Scenario:', trainingScenario);
    })
    .catch(error => {
      console.error('Error al obtener datos de la API:', error);
    });
}
