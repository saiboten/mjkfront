import React from "react";
import CurrentUserStatistics from "./CurrentUserStatistics.jsx";

class CurrentUserStatisticsContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Dine resultater</h1>
        <CurrentUserStatistics />
      </div>
    );
  }
}

export default CurrentUserStatisticsContainer;
