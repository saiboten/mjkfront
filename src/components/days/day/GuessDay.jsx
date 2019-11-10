import { Inline } from "jsxstyle";

import React from "react";
import SongAudio from "./SongAudio";
import { answerApi } from "../../../api/answerApi";

class GuessDay extends React.Component {
  state = {
    guess: "",
    feedback: "",
    correctAnswer: undefined
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    console.log("Submit!", this.state.guess);

    answerApi(this.state.guess).then(({ correct, feedback }) => {
      if (correct) {
        this.setState({
          correctAnswer: true,
          feedback
        });
      } else {
        this.setState({
          feedback
        });
      }
    });
  }

  handleChange(event) {
    this.setState({ guess: event.target.value });
  }

  getDescription(description) {
    return {
      __html: description
    };
  }

  render() {
    console.log("Props: ", this.props);

    var answerThisDay = undefined;
    if (this.props.answers) {
      answerThisDay = this.props.answers.find(function(el) {
        return el.correctSongAnswer && el.day === this.props.today;
      }, this);
    }

    console.log("Answer this day: ", answerThisDay);

    var formOrFeedback = "";

    if (answerThisDay && answerThisDay.correctSongAnswer) {
      formOrFeedback = (
        <p>
          Du har allerede svart rett på denne oppgaven! Svaret var:{" "}
          {answerThisDay.guessedSong}{" "}
        </p>
      );
    } else if (this.state.guess && this.state.correctAnswer) {
      formOrFeedback = <p>Gratulerer, det var rett!</p>;
    } else {
      formOrFeedback = (
        <form onSubmit={this.submit}>
          <div>
            <input
              className="guess-form__input"
              placeholder="Sang"
              onChange={this.handleChange}
              value={this.state.guess}
            />
            <Inline margin="10px" width="10%">
              <button className="guess-form__submitbutton" type="submit">
                Gjett!
              </button>
            </Inline>
          </div>
          <p>{this.state.status ? this.state.status : ""} </p>
        </form>
      );
    }

    return (
      <span>
        <p
          dangerouslySetInnerHTML={this.getDescription(
            this.props.day.description
          )}
        ></p>
        <SongAudio link={this.props.day.link} />

        {this.props.user ? (
          formOrFeedback
        ) : (
          <div>
            <input
              className="guess-form__input"
              disabled="true"
              placeholder="Sang"
            />
            <p>Logg inn for å besvare (se menyen)</p>
          </div>
        )}
      </span>
    );
  }
}

export default GuessDay;
