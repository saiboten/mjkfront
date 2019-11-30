import React from "react";
import { array } from "prop-types";
import moment from "moment";
import DatePicker from "react-datepicker";
import { DateHeader } from "../DateHeader";
import SongAudio from "../days/day/SongAudio";
import Dropzone from "react-dropzone";
import request from "superagent";
import "react-datepicker/dist/react-datepicker.css";
import {
  updateDay,
  deleteDay,
  fetchAdminData,
  addSolution,
  deleteSolution
} from "../../api/adminApi";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 300px;
  height: 140px;
`;

const StyledInput = styled.input`
  width: 100%;
`;

export class AdminEditDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.day.description,
      optionalSolutionVideo: this.props.day.optionalSolutionVideo,
      solutionArtist: this.props.day.solutionArtist,
      solutionSong: this.props.day.solutionSong,
      link: this.props.day.link,
      revealDate: moment(this.props.day.revealDate).toDate(),
      solutionDate: moment(this.props.day.solutionDate).toDate(),
      addSolution: "",
      confirmDelete: false,
      file: {},
      feedback: "",
      solutions: this.props.solutions
    };

    this.changeRevealDate = this.changeRevealDate.bind(this);
    this.changeSolutionDate = this.changeSolutionDate.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeSolutionArtist = this.changeSolutionArtist.bind(this);
    this.changeSolutionSong = this.changeSolutionSong.bind(this);
    this.changeLink = this.changeLink.bind(this);
    this.changeOptionalSolutionVideo = this.changeOptionalSolutionVideo.bind(
      this
    );
    this.saveChanges = this.saveChanges.bind(this);
    this.addSolutionChange = this.addSolutionChange.bind(this);
    this.addSolution = this.addSolution.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
    this.deleteDay = this.deleteDay.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.upload = this.upload.bind(this);
    this.deleteSolution = this.deleteSolution.bind(this);
  }

  changeRevealDate(date) {
    this.setState({
      revealDate: date
    });
  }

  changeSolutionDate(date) {
    this.setState({
      solutionDate: date
    });
  }

  changeDescription(event) {
    this.setState({ description: event.target.value });
  }

  changeSolutionArtist(event) {
    this.setState({ solutionArtist: event.target.value });
  }

  changeSolutionSong(event) {
    this.setState({ solutionSong: event.target.value });
  }

  changeOptionalSolutionVideo(event) {
    this.setState({ optionalSolutionVideo: event.target.value });
  }

  changeLink(event) {
    this.setState({ link: event.target.value });
  }

  saveChanges() {
    const {
      link,
      description,
      optionalSolutionVideo,
      solutionArtist,
      solutionSong,
      revealDate,
      solutionDate
    } = this.state;

    var saveObject = {
      link: link,
      description: description,
      optionalSolutionVideo: optionalSolutionVideo,
      solutionArtist: solutionArtist,
      solutionSong: solutionSong,
      revealDate: revealDate.valueOf(),
      solutionDate: solutionDate.valueOf(),
      revealDateAsString: moment(revealDate).format("YYYY-MM-DD"),
      id: this.props.day.id
    };

    updateDay(saveObject)
      .then(() => {
        fetchAdminData();
        this.setState({
          feedback: "Dag oppdatert med hell!"
        });
      })
      .catch(() => {
        this.setState({
          feedback: "Noe gikk fryktelig galt under lagring"
        });
      });
  }

  addSolutionChange(e) {
    this.setState({
      addSolution: e.target.value
    });
  }

  addSolution(e) {
    if (this.state.addSolution !== "") {
      this.setState(state => {
        var newSolutions = [this.state.addSolution, ...state.solutions];
        console.log("New soluitions: ", newSolutions);
        return {
          addSolution: "",
          solutions: [this.state.addSolution, ...state.solutions]
        };
      });
      addSolution(this.props.day.id, this.state.addSolution);
    } else {
      this.setState({
        feedback: "Løsning er tom!"
      });
    }
  }

  createMarkup() {
    return { __html: this.state.optionalSolutionVideo };
  }

  deleteSolution(day, solution) {
    this.setState(state => {
      return {
        feedback: "Deleting day",
        solutions: state.solutions.filter(el => el !== solution)
      };
    });
    deleteSolution(day, solution);
  }

  deleteDay() {
    if (this.state.confirmDelete) {
      deleteDay(this.props.day.id);
    } else {
      this.setState({
        confirmDelete: true
      });
    }
  }

  onDrop(files) {
    this.setState({
      file: files[0]
    });
  }

  upload() {
    var req = request.post(
      "/api/admin/upload/" + this.props.day.revealDateAsString
    );
    req.query({ filename: this.state.file.name });
    req.attach("file", this.state.file);

    var that = this;

    req.end(function(err, res) {
      if (res) {
        fetchAdminData();
      }

      that.setState({
        file: {}
      });
    });
  }

  abortUpload() {
    this.setState({
      file: {}
    });
  }

  render() {
    var fileupload = (
      <p>
        Fil som blir lastet opp: {this.state.file.name}
        <button onClick={this.upload}>Last opp</button>
        <button onClick={this.abortUpload}>Avbryt opplasting</button>
      </p>
    );

    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          margin: "5px",
          padding: "5px"
        }}
      >
        <DateHeader unixDate={this.props.day.revealDateAsString}></DateHeader>

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
                <td>Beskrivelse</td>
                <td>
                  <StyledTextArea
                    type="text"
                    onChange={this.changeDescription}
                    value={this.state.description}
                  />
                </td>
              </tr>
              <tr>
                <td>Artist</td>
                <td>
                  <StyledInput
                    type="text"
                    onChange={this.changeSolutionArtist}
                    value={this.state.solutionArtist}
                  />
                </td>
              </tr>
              <tr>
                <td>Sang</td>
                <td>
                  <StyledInput
                    type="text"
                    onChange={this.changeSolutionSong}
                    value={this.state.solutionSong}
                  />
                </td>
              </tr>
              <tr>
                <td>Video</td>
                <td>
                  <p>
                    Gå inn på youtubevideoen, trykk "share", velg Embed, og lim
                    inn hele sulamitten i feltet under
                  </p>
                  <StyledInput
                    type="text"
                    onChange={this.changeOptionalSolutionVideo}
                    value={this.state.optionalSolutionVideo}
                  />
                </td>
              </tr>
              <tr>
                <td>Link</td>
                <td>
                  <StyledInput
                    readOnly
                    disabled
                    type="text"
                    onChange={this.changeLink}
                    value={this.state.link}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <ul>
            {this.state.solutions.map(function(solution) {
              return (
                <li key={solution}>
                  Løsning: {solution}
                  <button
                    onClick={() =>
                      this.deleteSolution(this.props.day.id, solution)
                    }
                  >
                    Slett
                  </button>
                </li>
              );
            }, this)}
          </ul>
          <input
            type="text"
            value={this.state.addSolution}
            placeholder="Legg til løsning"
            onChange={this.addSolutionChange}
          />
          <button onClick={this.addSolution}>Legg til</button>

          <Dropzone ref="dropzone" className="dropzone" onDrop={this.onDrop}>
            <p>Last opp låt</p>
          </Dropzone>
          {this.state.file.name ? fileupload : ""}

          <p>
            <span>
              {this.state.optionalSolutionVideo ? (
                <span
                  className="youtube"
                  dangerouslySetInnerHTML={this.createMarkup()}
                ></span>
              ) : (
                ""
              )}
            </span>
          </p>
          <div>
            <button onClick={this.saveChanges}>Lagre endringer</button>
            <button onClick={this.deleteDay}>Slett dag</button>
            {this.state.confirmDelete ? "Bekreft" : ""}
            <div>{this.state.feedback}</div>
          </div>

          <SongAudio link={this.state.link} />
          <button onClick={() => this.props.close()}>Lukk</button>
        </div>
      </div>
    );
  }
}

AdminEditDay.propTypes = {
  solutions: array
};

AdminEditDay.defaultProps = {
  solutions: []
};
