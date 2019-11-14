import React from "react";
import UserResultElement from "./UserResultElement";
import moment from "moment";

class UserResultList extends React.Component {
  render() {
    var userList = this.props.userResult
      ? this.props.userResult[this.props.day.revealDateAsString]
      : undefined;

    var maybeempty = "";
    if (userList && userList.users && userList.users.length > 0) {
      var copy = userList.users;
      copy.sort(function(a, b) {
        if (a.time > b.time) {
          return 1;
        } else {
          return -1;
        }
      });

      maybeempty = (
        <ul>
          {copy.map((user, i) => {
            return <UserResultElement user={user} />;
          })}
        </ul>
      );
    } else {
      maybeempty = <div>Ingen riktige svar</div>;
    }
    return (
      <div>
        <h3>{moment(this.props.day.revealDateAsString).format("DD. MMMM")}</h3>
        {maybeempty}
      </div>
    );
  }
}

export default UserResultList;
