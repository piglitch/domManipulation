// DOM manipulation

//const title = document.querySelector('#main-heading');
//title.style.color ='black';
//console.log(title)


//const listItems = document.querySelectorAll('.list-items');



//for (i = 0; i<listItems.length; i++){
 //   listItems[i].style.fontSize = '1rem'
 //}

 // Creating elements

 const ul = document.querySelector('ul');
 const li = document.createElement('li');

// Adding elements

ul.append(li)

// Modifying the text
li.innerText = 'Star Wars';
//modifying attributes and classes
li.setAttribute('id', 'main-heading');