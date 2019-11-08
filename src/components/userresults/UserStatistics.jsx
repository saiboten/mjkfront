import React from "react";
import UserResultList from "./UserResultList";

class UserStatistics extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("User statistics props", this.props);

    return (
      <div>
        {this.props.days.map((day, i) => {
          if (day.id === this.props.today) {
            return (
              <UserResultList
                key={day.id}
                day={day}
                userResult={this.props.userResult}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default UserStatistics;
