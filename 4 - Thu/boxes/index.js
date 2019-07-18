// console.log('*********');
const boxContainer = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box');
/**********************************
 * Add a form for the user to input an x and a y coordinate
 * and when the user clicks an "Add Box", it will add a new
 * "box" element to the page at that x/y coordinate INSIDE
 * THE BOX CONTAINER.
 * 
 * The HTML file is linked to both the CSS file and 
 * this JS file.
 * 
 * Have fun!
 ***********************************/

const button = document.querySelector('.button');
const xCoord = document.getElementById("xaxis");
const yCoord = document.getElementById("yaxis");
const dropDownSelect = document.getElementById("box-color");
const colorInputSelect = document.getElementById("box-color-input");
var minx = 0;
var maxx = 548;
var miny = 0;
var maxy = 348;


function delBox(event) {
    event.target.parentNode.removeChild(event.target)
}

function moveBox(event) {
    var randomx = Math.random() * (+maxx - +minx) + +minx;
    var randomy = Math.random() * (+maxy - +miny) + +miny;

    event.target.style.left = randomx + "px"
    event.target.style.top = randomy + "px"
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }  


function createBox(event, x, y, makeBoxColor) {
    const element = document.createElement("div");
    element.classList.add("box");
    element.style.top = y + "px";
    element.style.left = x + "px";
    boxContainer.appendChild(element);
    element.style.backgroundColor = makeBoxColor;
    var randomZ = Math.random() * (+20 - +0) + +0;
    element.style.zIndex = randomZ
    
    //Drop Down Color Selector:
    // element.style.backgroundColor = dropDownSelect.options[dropDownSelect.selectedIndex].value;
    
    //Text Input Color Selector:
    // element.style.backgroundColor = colorInputSelect.value;
    
    element.addEventListener('click', delBox)
    element.addEventListener('mouseover', moveBox)    
}

function makeBox(event) {
    if (xCoord.value === "" && yCoord.value === "") {
        var randomx = Math.random() * (+maxx - +minx) + +minx;
        var randomy = Math.random() * (+maxy - +miny) + +miny;    
        createBox(event, randomx, randomy, getRandomColor())
    } else if (xCoord.value <= maxx 
        && xCoord.value >= minx
        && yCoord.value <= maxy
        && yCoord.value >= miny){
        createBox(event, xCoord.value, yCoord.value, colorInputSelect.value)
    }  else {
        alert("COORDINATES OUT OF BOUNDS");
    }
}




button.addEventListener('click', makeBox);

// boxes.forEach( box => box.addEventListener('click',delBox));




