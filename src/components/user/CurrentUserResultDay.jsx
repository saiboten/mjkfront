import React from "react";
import moment from "moment";

class CurrentUserResultDay extends React.Component {
  render() {
    var answerComp = "";
    var answer = this.props.answers.filter(answer => {
      return answer.day === this.props.day.id && answer.correctSongAnswer;
    })[0];

    if (answer) {
      answerComp = (
        <p>
          {moment(this.props.day.revealDate).format("DD. MMMM")}:{" "}
          {answer.guessedSong} var riktig svar!
        </p>
      );
    } else {
      answerComp = (
        <p>
          {moment(this.props.day.revealDate).format("DD. MMMM")}: Du fant ikke
          riktig svar.
        </p>
      );
    }

    return (
      <div>
        <p>{answerComp}</p>
      </div>
    );
  }
}

export default CurrentUserResultDay;
