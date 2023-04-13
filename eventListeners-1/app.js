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
    if (newBgColor.classList.contains('colorChange')){
        newBgColor.classList.remove('colorChange'); 
    }
    else{
        newBgColor.classList.add('colorChange');
    }
}

newBgColor.addEventListener("mouseover", changeBgColor);