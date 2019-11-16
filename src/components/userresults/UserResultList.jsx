import React from "react";
import UserResultElement from "./UserResultElement";

class UserResultList extends React.Component {
  render() {
    var userList = this.props.userResult
      ? this.props.userResult[this.props.day.revealDateAsString]
      : undefined;

    var maybeempty = "";
    if (userList && userList.users && userList.users.length > 0) {
      var userCopy = {
        ...userList.users
      };
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
            return <UserResultElement user={user} />;
          })}
        </ul>
      );
    } else {
      maybeempty = <div>Ingen riktige svar</div>;
    }
    return (
      <div>
        <p>Dette viser klokkeslettet oppgaven ble løst på per bruker</p>
        {maybeempty}
      </div>
    );
  }
}

export default UserResultList;
