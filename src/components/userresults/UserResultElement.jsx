import React from "react";
import moment from "moment";

class UserResultElement extends React.Component {
  render() {
    var momentTime = moment(this.props.user.time).format("HH:mm");

    return (
      <li>
        <p>
          {this.props.user.name}: {momentTime}{" "}
        </p>
      </li>
    );
  }
}

export default UserResultElement;
