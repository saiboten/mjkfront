import React from "react";
import SongAudio from "./SongAudio";
import { answerApi } from "../../../api/answerApi";

import styled from "styled-components";

const StyledGuessBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

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
    var answerThisDay = undefined;
    if (this.props.answers) {
      answerThisDay = this.props.answers.find(function(el) {
        return el.correctSongAnswer && el.day === this.props.today;
      }, this);
    }

    var formOrFeedback = "";

    if (answerThisDay && answerThisDay.correctSongAnswer) {
      formOrFeedback = (
        <div>
          <p style={{ marginBottom: "1rem" }}>
            Du har allerede svart rett på denne oppgaven!
          </p>
          <p>Svaret var:{answerThisDay.guessedSong}</p>
        </div>
      );
    } else if (this.state.guess && this.state.correctAnswer) {
      formOrFeedback = <p>Gratulerer, det var rett!</p>;
    } else {
      formOrFeedback = (
        <form
          onSubmit={this.submit}
          styled={{
            maxWidth: "300px"
          }}
        >
          <StyledGuessBox>
            <input
              style={{
                width: "405px",
                height: "50px",
                textAlign: "center",
                margin: "10px 0"
              }}
              placeholder="Sang"
              onChange={this.handleChange}
              value={this.state.guess}
            />
            <button className="guess-form__submitbutton" type="submit">
              Gjett!
            </button>
          </StyledGuessBox>
          <p>{this.state.status ? this.state.status : ""} </p>
        </form>
      );
    }

    return (
      <div
        style={{
          maxWidth: "500px"
        }}
      >
        <p
          style={{
            marginBottom: "2rem"
          }}
          dangerouslySetInnerHTML={this.getDescription(
            this.props.day.description
          )}
        ></p>
        <SongAudio link={this.props.day.link} />

        {this.props.user ? (
          formOrFeedback
        ) : (
          <>
            <StyledGuessBox>
              <input
                className="guess-form__input"
                disabled
                placeholder="Sang"
              />
              <button
                className="guess-form__submitbutton"
                type="submit"
                disabled
              >
                Gjett!
              </button>
            </StyledGuessBox>
            <p>Logg inn for å besvare (se menyen)</p>
          </>
        )}
      </div>
    );
  }
}

export default GuessDay;
