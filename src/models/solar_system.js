const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function() {
  PubSub.subscribe('planet_id_selected', (event) => {
    const planetId = event.detail;
    const planetObject = this.findPlanetById(planetId);
    PubSub.publish('planet_object_selected', planetObject);
  });
};

SolarSystem.prototype.findPlanetById = function(planetId) {
  let selectedPlanet = null
  this.planets.forEach(function(planet){
    if (planet.name === planetId){
      selectedPlanet = planet;
    };
  });
  return selectedPlanet;
};

module.exports = SolarSystem;
