import React from 'react';
import AltContainer from 'alt-container';
import DayStore from '../../stores/DayStore';
import UserStatistics from './UserStatistics';

var UserStatisticsContainer = React.createClass({
    render() {
        return (
            <div>
                <h1>Dagens beste!</h1>
                <p className="smallspace">Dette viser klokkeslettet oppgaven ble løst på per bruker</p>
                <AltContainer store={DayStore}>
                     <UserStatistics />
              </AltContainer>
            </div>
        );
    }
});

export default UserStatisticsContainer;
