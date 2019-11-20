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
        <div>
          {moment(this.props.day.revealDate).format("DD. MMMM")}:{" "}
          {answer.guessedSong} var riktig svar!
        </div>
      );
    } else {
      answerComp = (
        <div>
          {moment(this.props.day.revealDate).format("DD. MMMM")}: Du fant ikke
          riktig svar.
        </div>
      );
    }

    return <div>{answerComp}</div>;
  }
}

export default CurrentUserResultDay;
