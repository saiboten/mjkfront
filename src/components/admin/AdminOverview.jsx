import { Flex } from "jsxstyle";

import React from "react";
import AdminDay from "./AdminDay";
import AdminAddDay from "./AdminAddDay";

class AdminOverview extends React.Component {
  componentDidMount() {
    console.log("Day! Woho");
  }

  render() {
    console.log("this.props.days: ", this.props.days);
    return (
      <Flex
        backgroundColor="white"
        flexWrap="wrap"
        margin="5px auto"
        className="admin__container"
      >
        {this.props.days.map((day, i) => {
          if (day.realDate !== new Date(this.props.date).getDate().toString()) {
            return <AdminDay key={day.revealDate} day={day} />;
          } else {
            return null;
          }
        })}
        <AdminAddDay />
      </Flex>
    );
  }
}

export default AdminOverview;
