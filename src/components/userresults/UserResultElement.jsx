import React from 'react';
import moment from 'moment';

var UserResultElement = React.createClass({
    render() {

        var momentTime = moment(this.props.user.time).format("HH:mm");

        return (
            <li>
              <p>{this.props.user.name}: {momentTime} </p>
            </li>
        );
    }
});

export default UserResultElement;
