// Dom mainipulation

// Event delegation 

// Allows users to append a single event listener to a parent element rgar adds it to all of its present
// present and future descendants that match a selector.

document.querySelector('#football').addEventListener('click', function(e){
    console.log('football is clicked');

    const target  = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})

document.querySelector('#basketball').addEventListener('click', function(e){
    console.log('basketball is clicked');

    const target  = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})

document.querySelector('#tennis').addEventListener('click', function(e){
    console.log('tennis is clicked');

    const target  = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})

document.querySelector('#cricket').addEventListener('click', function(e){
    console.log('cricket is clicked');

    const target  = e.target;
    if (target.matches('li')){
        target.style.backgroundColor ='green';
    }
})

document.querySelector('#boxing').addEventListener('click', function(e){
    console.log('boxing is clicked');

    const target  = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})

