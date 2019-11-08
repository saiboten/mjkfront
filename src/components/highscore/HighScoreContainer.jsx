import React from "react";
var HighScoreList = require("./HighScoreList.jsx");

class HighScoreContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Toppscorelisten!</h1>
        <HighScoreList />
      </div>
    );
  }
}

export default HighScoreContainer;
