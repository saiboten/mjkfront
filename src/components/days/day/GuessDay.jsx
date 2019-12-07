import React from "react";
import styled from "styled-components";
import SongAudio from "./SongAudio";
import { answerApi } from "../../../api/answerApi";
import { StyledButton } from "../../lib/StyledButton";

import { Form } from "../../lib/Form";
import { Input } from "../../lib/Input";
import { FieldSet } from "../../lib/FieldSet";
import { StyledLinkAlternate } from "../../lib/StyledLink";
import { Difficulty } from "../../lib/Difficulty";
import { Cooperator } from "../../lib/Cooperator";
import { DayMetadata } from "../../lib/DayMetadata";

const Description = styled.div`
  margin-bottom: 2rem;
  text-align: left;
`;

class GuessDay extends React.Component {
  state = {
    guess: "",
    feedback: "",
    correctAnswer: undefined,
    loading: false
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.setState({
      loading: true
    });

    answerApi(this.state.guess).then(({ correct, feedback }) => {
      if (correct) {
        this.setState({
          correctAnswer: true,
          status: feedback
        });
      } else {
        this.setState({
          status: feedback
        });
      }
      this.setState({
        loading: false
      });
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
          <p>
            Svaret var: <strong>{answerThisDay.guessedSong}</strong>
          </p>
        </div>
      );
    } else if (this.state.guess && this.state.correctAnswer) {
      formOrFeedback = <p>Gratulerer, det var rett!</p>;
    } else {
      formOrFeedback = (
        <Form onSubmit={this.submit}>
          <FieldSet>
            <Input
              disabled={this.props.user == null}
              placeholder="Sang"
              onChange={this.handleChange}
              value={this.state.guess}
              style={{
                marginRight: "1rem",
                borderRadius: "5px"
              }}
            />
            <StyledButton
              type="submit"
              disabled={this.state.loading || this.props.user == null}
            >
              Svar
            </StyledButton>
          </FieldSet>
          <p>{this.state.status ? this.state.status : ""} </p>
        </Form>
      );
    }

    return (
      <div
        id="today"
        style={{
          maxWidth: "500px"
        }}
      >
        <DayMetadata>
          <Cooperator cooperator={this.props.day.cooperator} />
          <Difficulty difficulty={this.props.day.difficulty} />
        </DayMetadata>
        <Description
          dangerouslySetInnerHTML={this.getDescription(
            this.props.day.description
          )}
        ></Description>
        <div style={{ marginBottom: "1rem" }}>
          <SongAudio link={this.props.day.link} />
        </div>
        {formOrFeedback}
        {this.props.user == null && (
          <p>
            <StyledLinkAlternate href="/login">Logg inn</StyledLinkAlternate>{" "}
            for å besvare
          </p>
        )}
      </div>
    );
  }
}

export default GuessDay;
