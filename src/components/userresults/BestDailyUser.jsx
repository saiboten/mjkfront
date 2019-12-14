import React, { useContext } from "react";
import moment from "moment";
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";

const StyledListElement = styled.li`
  list-style-type: none;
`;

export function BestDailyUser({ user, index }) {
  const { user: userData } = useContext(DataContext);

  var momentTime = moment(user.time).format("HH:mm");

  return (
    <StyledListElement>
      {index + 1}:{" "}
      {userData && user.name === userData.nickName ? (
        <strong>{user.name}</strong>
      ) : (
        user.name
      )}
      : {momentTime}
    </StyledListElement>
  );
}
