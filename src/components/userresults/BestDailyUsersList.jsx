import React from "react";

import { BestDailyUser } from "./BestDailyUser";

function BestDailyUsersList(props) {
  var userList = props.userResult
    ? props.userResult[props.day.revealDateAsString]
    : undefined;

  if (userList === undefined) {
    return null;
  }

  var maybeempty = "";
  if (userList && userList.users && userList.users.length > 0) {
    var userCopy = [...userList.users];
    userCopy.sort(function(a, b) {
      if (a.time > b.time) {
        return 1;
      } else {
        return -1;
      }
    });

    maybeempty = (
      <ul>
        {userCopy.map((user, i) => {
          return <BestDailyUser key={i} user={user} />;
        })}
      </ul>
    );
  } else {
    maybeempty = <div>Ingen riktige svar</div>;
  }
  return (
    <div>
      <p style={{ marginBottom: "1rem" }}>
        Dette viser klokkeslettet oppgaven ble løst på per bruker
      </p>
      {maybeempty}
    </div>
  );
}

export default BestDailyUsersList;
