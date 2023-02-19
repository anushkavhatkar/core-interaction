
var slider = document.getElementById('slider');
var p = document.querySelector('p');

slider.oninput = changeOpacity;

function changeOpacity() {
    p.style.opacity = 1 - this.value / 100 ;
}

