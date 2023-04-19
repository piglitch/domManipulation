// Dom manipulation

// Event Probagation

window.addEventListener("click", function(){
    console.log('window');
}, false);

document.addEventListener("click", function(){
    console.log('Document');
}, false);

document.querySelector(".div2").addEventListener("click", function(){
//    e.stopPropagation()
    console.log('DIV 2');
},{once: true});

document.querySelector(".div1").addEventListener("click", function(){
    console.log('DIV 1');
}, false);

document.querySelector(".btn").addEventListener("click", function(e){
    e.preventDefault()
    console.log(e.target.innerText = "clicked!");
}, false);
