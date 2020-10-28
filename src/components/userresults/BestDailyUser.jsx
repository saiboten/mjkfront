import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";
import { format } from "date-fns";
import { nb } from "date-fns/locale";

const StyledListElement = styled.li`
  list-style-type: none;
`;

export function BestDailyUser({ user, index }) {
  const { user: userData } = useContext(DataContext);

  return (
    <StyledListElement>
      {index + 1}:{" "}
      {userData && user.name === userData.nickName ? (
        <strong>{user.name}</strong>
      ) : (
        user.name
      )}
      : {format(new Date(user.time), "hh:mm:ss", { locale: nb })}
    </StyledListElement>
  );
}
