import React from "react";
import CurrentUserResultDay from "./CurrentUserResultDay.jsx";
import { StyledMainBox } from "../lib/MainBox.jsx";
import { H2 } from "../lib/Heading.jsx";
import { AddNickName } from "./AddNickName.jsx";
import { useDays } from "../../hooks/useData.js";

export function CurrentUserStatistics() {
  const { days, user, answers, today } = useDays();

  var userstat = days.map((day, i) => {
    if (day.solutionArtist || day.revealDateAsString === today) {
      return (
        <CurrentUserResultDay key={i} day={day} user={user} answers={answers} />
      );
    } else {
      return null;
    }
  });

  var exist = user ? userstat : "Du må være logget inn for å få score";

  return (
    <StyledMainBox>
      <H2>Dine resultater</H2>
      <AddNickName user={user} />
      <div>{exist}</div>
    </StyledMainBox>
  );
}
