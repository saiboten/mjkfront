import React from "react";

let AdminDaySolution = React.createClass({
  componentDidMount() {
    console.log("AdminDaySolution did mount", this.props.solution);
  },

  delete() {
    // AdminDayAction.deleteSolution({
    //   id: this.props.dayId,
    //   solution: this.props.solution.solution
    // });
  },

  render() {
    return (
      <li>
        Løsning: {this.props.solution.solution}{" "}
        <button onClick={this.delete}>Slett</button>
      </li>
    );
  }
});

export default AdminDaySolution;
