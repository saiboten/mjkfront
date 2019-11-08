import React from 'react';
import moment from 'moment';

moment.locale('fr');

var DateHeader = React.createClass({
    render: function() {
        console.log('this.props.unixDate', this.props.unixDate);
        return (<h3>{moment(this.props.unixDate).format('DD. MMMM')}</h3>);
    }
});

export default DateHeader;
