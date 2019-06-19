//These are notes !!! Not work in code

window.addEventListener('resize', function(eve) {
     document.getElementById('phuket').style.height = window.getComputedStyle(document.getElementById('thailand'),null).getPropertyValue("height");
 });