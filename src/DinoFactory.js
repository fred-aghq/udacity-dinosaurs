const DinoFactory = function(data) {
    // function validate() {
    // 
    // }

    // @FIXME: this works but I am not convinced it is the best pattern,
    // particularly when it comes to scope

    // @FIXME: seem to be able to change Dino properties from outside scope.
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

export default DinoFactory;