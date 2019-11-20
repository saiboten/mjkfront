import React from "react";
import moment from "moment";
import styled from "styled-components";

const StyledListElement = styled.li`
  list-style-type: none;
`;

export function BestDailyUser(props) {
  var momentTime = moment(props.user.time).format("HH:mm");

  return (
    <StyledListElement>
      {props.user.name}: {momentTime}
    </StyledListElement>
  );
}
