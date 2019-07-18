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
const dropDownSelect = document.getElementById("box-color")

// console.log(boxContainer.style)

function makeBox(event) {

    if (xCoord.value <= 550 
        && xCoord.value >= 0
        && yCoord.value <= 350
        && yCoord.value >= 0){
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
        // console.log(dropDownSelect);
        element.style.backgroundColor = dropDownSelect.options[dropDownSelect.selectedIndex].value;
        // console.log(dropDownSelect.options[dropDownSelect.selectedIndex].value);

        // element.
    } else {
        alert("COORDINATES OUT OF BOUNDS")
    }
}

button.addEventListener('click', makeBox)




