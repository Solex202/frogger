const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
console.log(squares);
let currentIndex = 76 ;

function moveFrog(e) {
    switch(e.key){
        case 'ArrowLeft' :
            console.log('move left');
            break
        case 'ArrowRight' :
            console.log('move right');
            break
        case 'ArrowUp' :
            console.log('move up');
            break
        case 'ArrowDown' :
            console.log('move down');
            break            
    }
    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog )