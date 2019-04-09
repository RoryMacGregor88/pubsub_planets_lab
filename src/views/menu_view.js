const PubSub = require('../helpers/pub_sub.js');

const MenuView = function(){

};

MenuView.prototype.bindEvents = function(){
  const navbar = document.querySelector('.planets-menu');
  navbar.addEventListener('click', (event) => {
    const selectedPlanetId = event.target.id;
    PubSub.publish( 'planet_id_selected', selectedPlanetId);
  });
};

module.exports = MenuView;
