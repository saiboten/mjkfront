import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useSpring } from "react-spring";

import { DataContext } from "../../context/DataContext";
import { StyledMainBox } from "../lib/MainBox";
import { H2 } from "../lib/Heading";
import { StyledButtonSecondary } from "../lib/StyledButton";

const StyledListElement = styled.li`
  list-style-type: none;
`;

export function HighScoreList() {
  const { topList } = useContext(DataContext);

  const [showAll, setShowAll] = useState(false);

  const [, setY] = useSpring(() => ({ y: 0 }));

  function scrollReset() {
    // setY({
    //   y: 0,
    //   reset: true,
    //   from: { y: window.scrollY },
    //   onFrame: props => window.scroll(0, props.y)
    // });
  }

  const scoresAboveZero = topList.filter(user => user.score > 0);

  return (
    <StyledMainBox>
      <H2>Toppscorelisten</H2>
      <ol>
        {scoresAboveZero
          .filter((user, index) => index < 5 || showAll)
          .map((topListUser, index) => (
            <StyledListElement key={index}>
              {topListUser.user}: <strong>{topListUser.score}</strong>
            </StyledListElement>
          ))}
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
              scrollReset();
            }}
          >
            {showAll ? "Skjul" : "Vis alle"}
          </StyledButtonSecondary>
        </div>
      )}
    </StyledMainBox>
  );
}
