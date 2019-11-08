"use strict"
import alt from '../alt';
import AdminDaySource from '../sources/AdminDaySource';

class AdminDayAction {
    getDays() {
        AdminDaySource.fetchDays()
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

    updateDay(day) {
        AdminDaySource.updateDay(day).then((response) => {
            this.actions.getDays();
        })
            .catch((errorMessage) => {
                this.actions.updateDaysFailed(errorMessage);
            });
    }

    deleteDay(id) {
        AdminDaySource.deleteDay(id).then((response) => {
            this.actions.getDays();
        })
            .catch((errorMessage) => {
                this.actions.updateDaysFailed(errorMessage);
            });
    }

    addDay(day) {
        AdminDaySource.addDay(day).then((response) => {
            this.actions.getDays();
        })
            .catch((errorMessage) => {
                this.actions.updateDaysFailed(errorMessage);
            });
    }

    addSolution(solutionObject) {
        AdminDaySource.addSolution(solutionObject)
            .then((response) => {
                this.actions.getDays();
            })
            .catch((errorMessage) => {
                console.log('Errormessage: ', errorMessage)
            })
    }

    deleteSolution(solutionObject) {
        AdminDaySource.deleteSolution(solutionObject)
            .then((response) => {
                this.actions.getDays();
            })
            .catch((errorMessage) => {
                console.log("Error: ", errorMessage);
            })
    }

    updateDaysFailed(errorMessage) {
        console.log("dispatching getDaysFailed");
        this.dispatch(errorMessage);
    }

    getDaysFailed(errorMessage) {
        console.log("dispatching getDaysFailed");
        this.dispatch(errorMessage);
    }
}

export default alt.createActions(AdminDayAction);
