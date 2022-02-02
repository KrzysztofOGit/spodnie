const imageMap = document.querySelector('svg');

imageMap.addEventListener('click', materialChange);

//chose color for the part fo the trouser
function materialChange(el) {
	console.log(el.target.id )
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnSVG = document.querySelector('svg');
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnSVG.onclick = function() {
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
