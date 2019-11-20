import React from "react";
import styled from "styled-components";

const StyledListElement = styled.li`
  list-style-type: none;
`;

export function HighScoreElement(props) {
  return (
    <StyledListElement>
      {props.topListUser.user}: <strong>{props.topListUser.score}</strong>
    </StyledListElement>
  );
}
