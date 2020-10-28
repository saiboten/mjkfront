import React, { useState } from "react";

import { BestDailyUser } from "./BestDailyUser";
import { StyledButtonSecondary } from "../lib/StyledButton";
import { FadeInList } from "../lib/FadeInList";

function BestDailyUsersList(props) {
  const [showAll, setShowAll] = useState(false);

  var userList = props.userResult
    ? props.userResult[props.day.revealDateAsString]
    : undefined;

  if (userList === undefined) {
    return null;
  }

  var maybeempty = "";

  if (userList?.users?.length > 0) {
    var userCopy = [...userList.users];
    userCopy.sort(function (a, b) {
      if (a.time > b.time) {
        return 1;
      } else {
        return -1;
      }
    });

    maybeempty = (
      <>
        <ol>
          {showAll ? (
            <FadeInList
              list={userCopy.map((user, i) => {
                return <BestDailyUser key={i} index={i} user={user} />;
              })}
            />
          ) : (
            userCopy
              .filter((el, index) => index < 5)
              .map((user, i) => {
                return <BestDailyUser key={i} index={i} user={user} />;
              })
          )}
        </ol>
        {userCopy.length > 5 && (
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StyledButtonSecondary onClick={() => setShowAll(!showAll)}>
              {showAll ? "Skjul" : "Vis alle"}
            </StyledButtonSecondary>
          </div>
        )}
      </>
    );
  } else {
    maybeempty = <div>Ingen riktige svar</div>;
  }
  return (
    <div>
      <p style={{ marginBottom: "1rem" }}>
        Dette viser klokkeslettet oppgaven ble løst på per bruker.
      </p>
      {maybeempty}
    </div>
  );
}

export default BestDailyUsersList;
