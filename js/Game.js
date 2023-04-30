/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
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

}

