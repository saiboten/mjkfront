import alt from '../alt';
import DayActions from '../actions/DayAction';
import request from 'superagent';

class DayStore {
    constructor() {
        this.days = [];
        this.date = undefined;
        this.user = undefined;
        this.userResult = undefined;
        this.answers = undefined;
        this.topList = [];
        this.today = undefined;

        this.bindListeners({
            setData: DayActions.SET_DATA,
        });
    }

    setData(data) {
        console.log("Data: ", data);
        this.date = data.date;
        this.days = data.days;
        this.user = data.user;
        this.userResult = data.userResult;
        this.topList = data.topList;
        this.answers = data.answers;
        this.today = data.today;
    }
}

export default alt.createStore(DayStore, 'DayStore');
