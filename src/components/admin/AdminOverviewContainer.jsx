import React from 'react';
import AltContainer from 'alt-container';
import AdminDayStore from '../../stores/AdminDayStore';
import AdminDayActions from '../../actions/AdminDayAction';
import AdminOverview from './AdminOverview';

export var AdminOverviewContainer = React.createClass({

    componentDidMount() {

       AdminDayActions.getDays();
    },

    render() {
        return (
          <AltContainer store={AdminDayStore}>
                 <AdminOverview />
          </AltContainer>
        );
    }
});
