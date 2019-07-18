 const el = document.createElement('div');
 el.classList.add('box');
 const container = document.querySelector('.box-container');
 container.appendChild(el);

 const boxes = document.querySelectorAll('.box');
//  boxes.forEach(box => box.style.backgroundColor = 'aliceblue')




 boxes.forEach(box => box.addEventListener('click', event => {
    event.target.style.backgroundColor = event.target.style.backgroundColor === "aliceblue"
        ? 'salmon'
        : event.target.style.backgroundColor === "lightgreen"
            ? 'aliceblue'
            : 'lightgreen';
}))