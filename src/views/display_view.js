const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function(infoSection){
  this.infoSection = infoSection;
};

DisplayView.prototype.bindEvents = function(){
  PubSub.subscribe('planet_object_selected', (event)=>{
    const planet = event.detail;
    console.log(planet);
    this.renderPlanet(planet);
  });
};

DisplayView.prototype.renderPlanet = function(planet){
  const planetHeading = document.createElement('h2')
  const planetInfo = document.createElement('p');
  const planetImage = document.createElement('img');
  planetImage.src = planet.image;
  // planetImage.classList.add('.planet-image');
  planetHeading.textContent = planet.name;
  planetInfo.textContent = `Orbit: ${planet.orbit} Day: ${planet.day} Surface Area: ${planet.surfaceArea} Volume: ${planet.volume} Gravity: ${planet.gravity} Moons: ${planet.moons}`
  this.infoSection.innerHTML = '';
  this.infoSection.appendChild(planetHeading);
  this.infoSection.appendChild(planetInfo);
  this.infoSection.appendChild(planetImage);
};

module.exports = DisplayView;
