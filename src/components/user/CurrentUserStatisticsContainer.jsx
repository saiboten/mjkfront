import React from "react";
import CurrentUserStatistics from "./CurrentUserStatistics.jsx";

var CurrentUserStatisticsContainer = React.createClass({
  render() {
    return (
      <div>
        <h1>Dine resultater</h1>
        <CurrentUserStatistics />
      </div>
    );
  }
});

export default CurrentUserStatisticsContainer;
