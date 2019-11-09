import { Block } from "jsxstyle";

import React from "react";
import GuessDay from "./GuessDay";
import DateHeader from "./../../DateHeader";
import PastDayWithSolution from "./PastDayWithSolution";
import PastDayWithoutSolution from "./PastDayWithoutSolution";

class DaySelector extends React.Component {
  getInitialState() {
    return {
      showSolution: false
    };
  }

  showSolution() {
    console.log("Showing solution");
    this.setState({
      showSolution: true
    });
  }

  createMarkup() {
    console.log("Creating markup", this.props.day.optionalSolutionVideo);
    return { __html: this.props.day.optionalSolutionVideo };
  }

  render() {
    var day = "";

    console.log("Day.props", this.props);

    if (this.state.showSolution && this.props.day.solutionArtist) {
      day = <PastDayWithSolution day={this.props.day} />;
    } else if (this.props.day.revealDateAsString === this.props.date) {
      day = (
        <GuessDay
          date={this.props.day.revealDateAsString}
          today={this.props.today}
          day={this.props.day}
          answers={this.props.answers}
          user={this.props.user}
        />
      );
    } else if (this.props.day.description) {
      day = (
        <PastDayWithoutSolution
          day={this.props.day}
          showSolutionCallback={this.showSolution}
        />
      );
    } else {
      day = <p>Luke ikke åpnet</p>;
    }

    return (
      <Block className="day__container">
        <DateHeader unixDate={this.props.day.revealDateAsString}></DateHeader>
        {day}
      </Block>
    );
  }
}

export default DaySelector;
