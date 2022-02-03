import message from './materialChange.js';
import openModalWindow  from './modalWindowChoosematerial.js';


//get the buton on svg information
//const imageMap = document.querySelector('svg');
//imageMap.addEventListener('click', message);

// Get the button that opens the modal
const btnSVG = document.querySelector('svg');

// When the user clicks the button, open the modal 
btnSVG.addEventListener('click', openModalWindow)







