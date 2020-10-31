import React, { useState } from "react";
import styled from "styled-components";
import Confetti from "react-confetti";
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

const StyledConfetti = styled(Confetti)`
  width: 100%;
  height: 100%;
`;

const GuessDay = (props) => {
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e) {
    e.preventDefault();
    setLoading(true);

    answerApi(guess).then(({ correct, feedback }) => {
      if (correct) {
        setCorrectAnswer(true);
        setFeedback(feedback);
      } else {
        setFeedback(feedback);
      }
      setLoading(false);
    });
  }

  function handleChange(event) {
    setGuess(event.target.value);
  }

  function getDescription(description) {
    return {
      __html: description,
    };
  }

  var answerThisDay = undefined;
  if (props.answers) {
    answerThisDay = props.answers.find(function (el) {
      return el.correctSongAnswer && el.day === props.today;
    });
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
  } else if (guess && correctAnswer) {
    formOrFeedback = (
      <>
        <StyledConfetti colors={["#fff", "#ce0000", "red", "#29ce00"]} />
        <p>Gratulerer, det var rett!</p>
      </>
    );
  } else {
    formOrFeedback = (
      <Form onSubmit={submit}>
        <FieldSet>
          <Input
            disabled={props.user == null}
            placeholder="Sang"
            onChange={handleChange}
            value={guess}
            style={{
              marginRight: "1rem",
              borderRadius: "5px",
            }}
          />
          <StyledButton type="submit" disabled={loading || props.user == null}>
            Svar
          </StyledButton>
        </FieldSet>
        <p>{feedback ? feedback : ""} </p>
      </Form>
    );
  }

  return (
    <div
      style={{
        maxWidth: "50rem",
      }}
    >
      <DayMetadata>
        <Cooperator cooperator={props.day.cooperator} />
        <Difficulty difficulty={props.day.difficulty} />
      </DayMetadata>
      <Description
        dangerouslySetInnerHTML={getDescription(props.day.description)}
      ></Description>
      <div style={{ marginBottom: "1rem" }}>
        <SongAudio link={props.day.link} />
      </div>
      {formOrFeedback}
      {props.user == null && (
        <p>
          <StyledLinkAlternate href="/login">Logg inn</StyledLinkAlternate> for
          å besvare
        </p>
      )}
    </div>
  );
};

export default GuessDay;
