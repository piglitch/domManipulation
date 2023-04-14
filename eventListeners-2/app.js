// Dom manipulation

// Reveal Event

const revealBtn = document.querySelector('.reveal-btn');
const hiddencontent = document.querySelector('.hidden-content');

function revealContent(){
    if(hiddencontent.classList.contains('reveal-btn')){
        hiddencontent.classList.remove('reveal-btn');
        revealBtn.innerText = 'Reveal more'
    }else{
        hiddencontent.classList.add('reveal-btn');
        let def = revealBtn.innerText = 'See less';
    }
}

revealBtn.addEventListener('click', revealContent);
