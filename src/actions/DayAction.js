"use strict"
import alt from '../alt';
import DaySource from '../sources/DaySource';

class DayAction {
    getDays() {
        DaySource.fetchDays()
            .then((data) => {
                this.actions.setData(data);
            })
            .catch((errorMessage) => {
                this.actions.getDaysFailed(errorMessage);
            });
    }

    setData(data) {
        this.dispatch(data);
    }

    getDaysFailed(errorMessage) {
      this.dispatch(errorMessage);
    }
}

export default alt.createActions(DayAction);
