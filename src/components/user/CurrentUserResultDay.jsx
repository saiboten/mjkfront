import React from "react";

const CurrentUserResultDay = (props) => {
  var answerComp = "";
  var answer = props.answers.filter((answer) => {
    return answer.day === props.day.id && answer.correctSongAnswer;
  })[0];

  if (answer) {
    answerComp = (
      <div>
        {props.day.revealDate}: {answer.guessedSong} var riktig svar!
      </div>
    );
  } else {
    answerComp = <div>{props.day.revealDate}: Du fant ikke riktig svar.</div>;
  }

  return <div>{answerComp}</div>;
};

export default CurrentUserResultDay;
