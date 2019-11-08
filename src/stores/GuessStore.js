import alt from '../alt';
import GuessAction from '../actions/GuessAction';
import DayStore from '../stores/DayStore';
import request from 'superagent';

class GuessStore {
    constructor() {
        this.guess = "";

        this.bindListeners({
            guessDone: GuessAction.GUESS_DONE
        });
    }

    guessDone(guess) {
        console.log("Guess: ", guess);
        this.guess = guess;
    }
}

export default alt.createStore(GuessStore, 'GuessStore');
