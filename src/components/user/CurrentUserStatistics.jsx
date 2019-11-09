import React from "react";
import CurrentUserResultDay from "./CurrentUserResultDay.jsx";

class CurrentUserStatistics extends React.Component {
  componentDidMount() {
    console.log("this.props.days", this.props.days);
  }

  render() {
    console.log("this.props: ", this.props);

    var userstat = this.props.days.map((day, i) => {
      console.log("Day: ", day);
      if (day.solutionArtist || day.revealDateAsString === this.props.today) {
        return (
          <CurrentUserResultDay
            day={day}
            user={this.props.user}
            answers={this.props.answers}
          />
        );
      } else {
        return null;
      }
    });

    var userinfo = this.props.user ? (
      <span>
        Du er logget inn som <strong>{this.props.user.userName}</strong>
      </span>
    ) : (
      ""
    );
    var exist = this.props.user
      ? userstat
      : "Du må være logget inn for å få score";

    return (
      <div>
        <p className="smallspace">{userinfo}</p>
        <p className="smallspace">{exist}</p>
      </div>
    );
  }
}

export default CurrentUserStatistics;
