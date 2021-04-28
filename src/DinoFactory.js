const DinoFactory = (function () {
  return function (data) {
    let species = data.species;
    let weight = data.weight;
    let height = data.height;
    let diet = data.diet;
    let where = data.where;

    const dinoObject = {
      getSpecies: function () {
        return species;
      },
      setSpecies: function (speciesName) {
        species = speciesName;
      },
      getWeight: function () {
        return weight;
      },
      getHeight: function () {
        return height;
      },
      getDiet: function () {
        return diet;
      },
      getWhere: function () {
        return where;
      }
    };

    Object.preventExtensions(dinoObject);
    return dinoObject;
  };
})();

export default DinoFactory;