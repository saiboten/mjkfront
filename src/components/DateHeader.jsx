import React from "react";
import moment from "moment";

moment.locale("fr");

class DateHeader extends React.Component {
  render() {
    console.log("this.props.unixDate", this.props.unixDate);
    return <h3>{moment(this.props.unixDate).format("DD. MMMM")}</h3>;
  }
}

export default DateHeader;
