import './app.css';
import dinoJson from './dino.json';
import DinoFactory from './DinoFactory.js';
import submitHandler from './submitHandler.js';

console.log(dinoJson.Dinos);

// Create Dino Constructor


// @TODO: remove this test/prototype code.
const dinoObjects = dinoJson.Dinos.map(function (v) {
  const dino = DinoFactory(v);
  return dino;
});



// function Human(name, height, weight, diet){
//     function getName() { return this.name; }
// }

// Create Dino Objects


// Create Human Object
// const human = new Human('fred', 72, 180, 'omnivor');
// console.log(human.getName());

// Use IIFE to get human data from form
// @see submitHandler.js
const form = document.getElementById('dino-compare');
form.addEventListener('submit', submitHandler);
form.addEventListener('submit', function (event) {
  event.target.remove();
});

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
