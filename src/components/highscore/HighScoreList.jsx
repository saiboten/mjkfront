import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";
import { StyledMainBox } from "../lib/MainBox";
import { H2 } from "../lib/Heading";
import { StyledButtonSecondary } from "../lib/StyledButton";
import { FadeInList } from "../lib/FadeInList";
import { NumberAnimation } from "../lib/NumberAnimation";

const StyledListElement = styled.li`
  padding-left: 0.5rem;
  list-style-type: none;
`;

export function HighScoreList() {
  const { topList, user } = useContext(DataContext);

  const [showAll, setShowAll] = useState(false);

  const scoresAboveZero = topList.filter(user => user.score > 0);

  let tmpScore = Number.MAX_SAFE_INTEGER;
  let pos = 0;

  var scores = scoresAboveZero
    .filter((user, index) => index < 5 || showAll)
    .map((topListUser, index) => {
      if (topListUser.score < tmpScore) {
        pos = index;
        tmpScore = topListUser.score;
      }

      return (
        <StyledListElement key={index}>
          {pos + 1}:{" "}
          {user && user.nickName === topListUser.user ? (
            <strong>{topListUser.user}</strong>
          ) : (
            topListUser.user
          )}{" "}
          :{" "}
          <strong>
            <NumberAnimation>{topListUser.score}</NumberAnimation>
          </strong>
        </StyledListElement>
      );
    });

  return (
    <StyledMainBox>
      <H2>Toppscorelisten</H2>
      <ol>
        <FadeInList list={scores} />
      </ol>
      {scoresAboveZero.length > 5 && (
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <StyledButtonSecondary
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            {showAll ? "Skjul" : "Vis alle"}
          </StyledButtonSecondary>
        </div>
      )}
    </StyledMainBox>
  );
}
