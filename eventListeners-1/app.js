// Dom manipulations

// Event listeners

//element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
    alert('Yo!');
}

buttonTwo.addEventListener("click", alertBtn);

// Mouse hover

const newBgColor = document.querySelector('.box-3');

function changeBgColor(){
    newBgColor.style.backgroundColor = 'teal'; 
}

newBgColor.addEventListener("mouseover", changeBgColor);