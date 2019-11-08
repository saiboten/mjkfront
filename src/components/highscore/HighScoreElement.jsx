var React = require("react");

class HighScoreElement extends React.Component {
  render() {
    return (
      <li>
        {this.props.topListUser.user}:{" "}
        <strong>{this.props.topListUser.score}</strong>
      </li>
    );
  }
}

export default HighScoreElement;
