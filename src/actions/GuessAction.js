"use strict"
import alt from '../alt';
import GuessSource from '../sources/GuessSource';

class GuessAction {
    guess(song) {
        // we dispatch an event here so we can have "loading" state.
        GuessSource.guess(song)
            .then((response) => {
                console.log("Guess complete, response: ", response);
                this.actions.guessDone(response);
            })
            .catch((errorMessage) => {
                this.actions.guessFailed(errorMessage);
            });
    }

    guessDone(guessResult) {
        console.log("dispatching guessDone: Guess done! Guess result: ", guessResult);
        this.dispatch(guessResult);
    }

    guessFailed(errorMessage) {
      console.log("dispatching guessFailed: Something failed when guessing: ", errorMessage);
      this.dispatch(errorMessage);
    }

}

export default alt.createActions(GuessAction);
