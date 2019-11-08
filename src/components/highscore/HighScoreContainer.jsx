import React from "react";
var HighScoreList = require("./HighScoreList.jsx");

var HighScoreContainer = React.createClass({
  render() {
    return (
      <div>
        <h1>Toppscorelisten!</h1>
        <HighScoreList />
      </div>
    );
  }
});

export default HighScoreContainer;
