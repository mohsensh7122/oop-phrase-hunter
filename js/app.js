/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startBtn = document.getElementById('btn__reset');

startBtn.addEventListener('click', e => {
    game = new Game();
    game.startGame();
    
    
})


// qwerty.addEventListener('click', e => {

//     let chosenLetter = '';
//     const letters = document.querySelectorAll('.letter');

//     for(let i = 0; i < letters.length; i++){
//         if(e.target.tagName = 'BUTTON' && e.target.textContent.toLowerCase() === letters[i].textContent){
//             chosenLetter = letters[i].textContent;
//             console.log(chosenLetter)
//             letters[i].classList.add('show')
//         }
//     }

    
// })