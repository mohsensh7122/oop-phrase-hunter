/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const ul = document.getElementById('phrase').querySelector('ul');

        const phrase = this.phrase.split('');
        // console.log(phrase);
        for (let i = 0; i < phrase.length; i++) {
            let li = document.createElement("li");
            if (phrase[i] === ' ') {
                li.className = "space";
                ul.appendChild(li);
                li.innerText = ' ';

            } else {
                li.className = `hide letter ${phrase[i]}`;
                ul.appendChild(li);
                li.innerText = `${phrase[i]}`;
            }

        }
    };

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        if(game.activePhrase.phrase.includes(letter.textContent)){
            return true;
        } else {
            return false;
        }
    };



}