import React, { useContext } from "react";
import CurrentUserResultDay from "./CurrentUserResultDay.jsx";
import { DataContext } from "../../context/DataContext.js";
import { StyledMainBox } from "../lib/MainBox.jsx";

export function CurrentUserStatistics() {
  const { days, user, answers, today } = useContext(DataContext);

  var userstat = days.map((day, i) => {
    if (day.solutionArtist || day.revealDateAsString === today) {
      return <CurrentUserResultDay day={day} user={user} answers={answers} />;
    } else {
      return null;
    }
  });

  var userinfo = user ? (
    <span>
      Du er logget inn som <strong>{user.userName}</strong>
    </span>
  ) : (
    ""
  );
  var exist = user ? userstat : "Du må være logget inn for å få score";

  return (
    <StyledMainBox>
      <h1>Dine resultater</h1>
      <p className="smallspace">{userinfo}</p>
      <p className="smallspace">{exist}</p>
    </StyledMainBox>
  );
}
