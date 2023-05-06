/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("RIDE OR DIE"),
            new Phrase("TIME IS MONEY"),
            new Phrase("NOW IS ALL"),
            new Phrase("AS WITHIN SO WITHOUT"),
            new Phrase("YOU MATTER")
        ];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        const randomItem = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomItem];
    }

    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');

        if (hiddenLetters > 0) {
            return false;
        } else {
            return true;
        }
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */

    removeLife() {

        const hearts = document.querySelectorAll('.tries img');
        this.missed++;
        console.log(this.missed);
        hearts[this.missed - 1].src = 'images/lostHeart.png';

        if (this.missed === 5){
            this.gameOver()
        }
    };

    

}