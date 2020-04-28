require('../styles/index.scss');
window.jQuery = require('jquery');
require('slick-carousel');

import {initDevHelpers} from './dev-helpers';
initDevHelpers();

import {initRolledContent} from './rolled-content';
initRolledContent();

import {initSlider} from './slider';
// initSlider();

window.addEventListener('load', initSlider);

import {initHamburgerMenu} from './hamburger_menu';
initHamburgerMenu();