var React = require('react');

var HighScoreElement = React.createClass({
    render() {
        return (<li>{this.props.topListUser.user}: <strong>{this.props.topListUser.score}</strong></li>);
    }
});

export default HighScoreElement;
