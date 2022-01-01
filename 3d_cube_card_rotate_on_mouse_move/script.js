let mainCard = document.getElementById('main-card')
let degree = 0;
let viewMode = false;

function left(){
    if(viewMode == false){
        degree = degree - 90;
        rotate();
    }
}

function right(){
    if(viewMode == false){
        degree = degree + 90;
        rotate();
    }
}

function rotate(){
    mainCard.style.transform = `rotateY(${degree}deg) translate(-50%, -50%)`;
}

    
function view(){
    mainCard.classList.toggle('view');
    let info = document.querySelectorAll('.info');
    if(viewMode == false){
        viewMode = true;
        setTimeout(() => {
            for (let i = 1; i < info.length; i++) {
                info[i].style.display = "none";
            }
        }, 400);
    }
    else{
        viewMode = false;
        setTimeout(() => {
            for (let i = 1; i < info.length; i++) {
                info[i].style.display = "inline-block";
            }
        }, 1000);
    }
}




/* ------------------------------------------------ */

let isDown = false;
let startX;
let scrollLeft;

mainCard.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - mainCard.offsetLeft + 100;
    scrollLeft = mainCard.scrollLeft;
});
mainCard.addEventListener('mouseleave', () => {
    isDown = false;
});
mainCard.addEventListener('mouseup', () => {
    isDown = false;
});
mainCard.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX -mainCard.offsetLeft + 100;
    const walk = x - startX;
    if(walk > 80 && walk < 95){
        right();
    }
    else if(walk < -80 && walk > -95){
        left();
    }
});

