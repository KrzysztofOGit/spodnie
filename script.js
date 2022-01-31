const imageMap = document.querySelector('svg');

imageMap.addEventListener('click', materialChange);

function materialChange(el) {
	console.log(el.target )
	
}

/*
function getNode(n, v) {
  n = document.createElementNS("http://www.w3.org/2000/svg", n);
  for (var p in v)
    n.setAttributeNS(null, p.replace(/[A-Z]/g, function(m, p, o, s) { return "-" + m.toLowerCase(); }), v[p]);
  return n
}

var svg = getNode("svg");
document.body.appendChild(svg);

var r = getNode('rect', { x: 131, y: 124, width: 461, height: 150, fill:'#ff00ff' });
svg.appendChild(r);
*/

