const planetsData = require('./data/planets.js');
const MenuView = require('./views/menu_view.js');
const DisplayView = require('./views/display_view.js');
const SolarSystem = require('./models/solar_system.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  const menuView = new MenuView();
  menuView.bindEvents();

  const infoSection = document.querySelector('.planet-details');
  const displayView = new DisplayView(infoSection);
  displayView.bindEvents();

});
