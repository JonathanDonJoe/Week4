console.log('*********');
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

const xform = document.querySelector('.x-form');
const yform = document.querySelector('.y-form');
const button = document.querySelector('.button')
const xCoord = document.getElementById("xaxis")
const yCoord = document.getElementById("yaxis")


function makeBox(event) {
    const element = document.createElement("div");
    element.classList.add("box");
    // element.style.top = '100px';
    // element.style.left = '200px';
    element.style.top = yCoord.value + "px";
    element.style.left = xCoord.value + "px";
    boxContainer.appendChild(element);
    // console.log(yCoord.value + " px");
    // console.log(yform)
    // console.log(xCoord.value)
    // console.log(yCoord.value)
}

button.addEventListener('click', makeBox)




