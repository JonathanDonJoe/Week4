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

const button = document.querySelector('.button');
const xCoord = document.getElementById("xaxis");
const yCoord = document.getElementById("yaxis");
const dropDownSelect = document.getElementById("box-color");
const colorInputSelect = document.getElementById("box-color-input");

// console.log(boxContainer.style)

function makeBox(event) {

    if (xCoord.value <= 550 
        && xCoord.value >= 0
        && yCoord.value <= 350
        && yCoord.value >= 0){
        const element = document.createElement("div");
        element.classList.add("box");
        element.style.top = yCoord.value + "px";
        element.style.left = xCoord.value + "px";
        boxContainer.appendChild(element);

        //Drop Down Color Selector:
        // element.style.backgroundColor = dropDownSelect.options[dropDownSelect.selectedIndex].value;

        console.log(colorInputSelect.value);
        element.style.backgroundColor = colorInputSelect.value;
    } else {
        alert("COORDINATES OUT OF BOUNDS");
    }
}

button.addEventListener('click', makeBox);





