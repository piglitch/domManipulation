// DOM manipulation

//Traverse the DOM

//Parent Node Traversal


//console.log(ul.parentNode);
//console.log(ul.parentElement.parentElement);

// Child node traversal

//let ul = document.querySelector('ul');
//console.log(ul.childNodes);
//console.log(ul.firstChild);
//console.log(ul.lastChild);

//ul.childNodes[1].style.backgroundColor = 'blue';


//console.log(ul.children);
//console.log(ul.firstElementChild);
//console.log(ul.lastElementChild);

//Sibling traversal 

let ul = document.querySelector('ul');
const div = document.querySelector('div')

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
