import './app.css';
import submitHandler from './submitHandler.js';
import dinoJson from './dino.json';

console.log(dinoJson.Dinos);

    // Create Dino Constructor
const DinoFactory = function(data) {
    // function validate() {
    // 
    // }

    // @FIXME: this works but I am not convinced it is the best pattern,
    // particularly when it comes to scope
    function Dino() {
        this.species = data.species;
        this.weight = data.weight;
        this.height = data.height;
        this.diet = data.diet;
        this.where = data.where;
        this.getSpecies = () => this.species;
    };

    // @TODO: validate data
    // validate(data);

    return new Dino();
}

// @TODO: remove this test/prototype code.
dinoJson.Dinos.forEach(function(v) {
    const dino = DinoFactory(v);
    console.log(dino);
    console.log(dino.getSpecies());
})

const Human = function() {}

    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form
    // @see submitHandler.js
    const form = document.getElementById('dino-compare');
    form.addEventListener('submit', submitHandler);
    form.addEventListener('submit', function(event) {
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
