/**
 * Created by Tobias on 16.10.2016.
 */
import React, { useState } from "react";

import SongAudio from "./SongAudio";
import { StyledButton } from "../../lib/StyledButton";
import { Difficulty } from "../../lib/Difficulty";
import { Cooperator } from "../../lib/Cooperator";
import { DayMetadata } from "../../lib/DayMetadata";

function createMarkup(text) {
  return { __html: text };
}

export function PastDay(props) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <>
      <DayMetadata>
        <Cooperator cooperator={props.day.cooperator} />
        <Difficulty difficulty={props.day.difficulty} />
      </DayMetadata>
      <div
        dangerouslySetInnerHTML={createMarkup(props.day.description)}
        style={{
          marginBottom: "1rem",
          paddingBottom: "1rem",
          textAlign: "left"
        }}
      ></div>
      {showSolution ? (
        <div
          style={{
            marginBottom: "2rem"
          }}
        >
          {props.day.solutionArtist} - {props.day.solutionSong}
          {props.day.optionalSolutionVideo ? (
            <span
              className="youtube"
              dangerouslySetInnerHTML={createMarkup(
                props.day.optionalSolutionVideo
              )}
            ></span>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <StyledButton
            style={{
              marginBottom: "2rem"
            }}
            onClick={() => setShowSolution(true)}
          >
            Vis fasit
          </StyledButton>
        </div>
      )}
      <SongAudio link={props.day.link} />
    </>
  );
}
