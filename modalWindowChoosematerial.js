let colorMaterialChosed;
let partTrouserId; //wich one of the trouser was chosen

// Get the modal
const modal = document.getElementById("myModal");

//get a material from modal
const colorMaterial = document.querySelector(".modal-body");
//chose material for the trausers
colorMaterial.addEventListener('click', choseColorMaterial);
function choseColorMaterial(el) {
 	colorMaterialChosed = el.target.alt;
	document.getElementById(partTrouserId).setAttribute('fill', `url(#${colorMaterialChosed.split('.')[0]})` ) ;
	modal.style.display = "none";
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
const openModalWindow = function(el) {
	partTrouserId = el.target.id;

  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

export default openModalWindow;