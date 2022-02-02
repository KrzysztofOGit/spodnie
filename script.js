import message from './materialChange.js';
import openModalWindow  from './modalWindowChoosematerial.js';

const imageMap = document.querySelector('svg');

imageMap.addEventListener('click', message);

// Get the button that opens the modal
var btnSVG = document.querySelector('svg');

// When the user clicks the button, open the modal 
btnSVG.addEventListener('click', openModalWindow )


