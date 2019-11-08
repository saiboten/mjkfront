import React from 'react';
import AltContainer from 'alt-container';
import CurrentUserStatistics from './CurrentUserStatistics.jsx';
import DayStore from '../../stores/DayStore';

var CurrentUserStatisticsContainer = React.createClass({
    render() {
        return (
          <div>
            <h1>Dine resultater</h1>
          <AltContainer store={DayStore}>
                 <CurrentUserStatistics />
          </AltContainer>
        </div>

        );
    }
});

export default CurrentUserStatisticsContainer;
