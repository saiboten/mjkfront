/**
 * Created by Tobias on 03.10.2016.
 */
import React from "react";

import moment from "moment";
import DatePicker from "react-datepicker";

var AdminAddDay = React.createClass({
  getInitialState() {
    return {
      description: "",
      optionalSolutionVideo: "",
      solutionArtist: "",
      solutionSong: "",
      link: "",
      revealDate: moment(),
      solutionDate: moment()
    };
  },

  changeRevealDate: function(date) {
    this.setState({
      revealDate: date
    });
    console.log("New date: ", date);
  },

  changeSolutionDate: function(date) {
    this.setState({
      solutionDate: date
    });
    console.log("New date: ", date);
  },

  changeDescription: function(event) {
    this.setState({ description: event.target.value });
  },

  changeSolutionArtist: function(event) {
    this.setState({ solutionArtist: event.target.value });
  },

  changeSolutionSong: function(event) {
    this.setState({ solutionSong: event.target.value });
  },

  changeOptionalSolutionVideo: function(event) {
    this.setState({ optionalSolutionVideo: event.target.value });
  },

  changeLink: function(event) {
    this.setState({ link: event.target.value });
  },

  addDay: function() {
    var saveObject = {
      link: this.state.link,
      description: this.state.description,
      optionalSolutionVideo: this.state.optionalSolutionVideo,
      solutionArtist: this.state.solutionArtist,
      solutionSong: this.state.solutionSong,
      revealDate: this.state.revealDate.valueOf(),
      solutionDate: this.state.solutionDate.valueOf(),
      revealDateAsString: this.state.revealDate.format("YYYY-MM-DD")
    };

    console.log("Save object: ", saveObject);
    // adminDayAction.addDay(saveObject);
  },

  render() {
    return (
      <div className="col-md-6 pane">
        <h1>Legg til dag</h1>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Kalender åpner</td>
                <td>
                  <DatePicker
                    selected={this.state.revealDate}
                    onChange={this.changeRevealDate}
                  />
                </td>
              </tr>
              <tr>
                <td>Dag avsluttes</td>
                <td>
                  <DatePicker
                    selected={this.state.solutionDate}
                    onChange={this.changeSolutionDate}
                  />
                </td>
              </tr>
              <tr>
                <td>Sang/Fasit</td>
                <td>
                  <input
                    type="text"
                    onChange={this.changeSolutionSong}
                    value={this.state.solutionSong}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            <button onClick={this.addDay}>Legg til dag</button>
          </p>
        </div>
      </div>
    );
  }
});

export default AdminAddDay;
