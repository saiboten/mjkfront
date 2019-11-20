import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import AdminDaySolution from "./AdminDaySolution";
import { DateHeader } from "../DateHeader";
import SongAudio from "../days/day/SongAudio";
import Dropzone from "react-dropzone";
import request from "superagent";
import "react-datepicker/dist/react-datepicker.css";
import { updateDay, deleteDay, fetchAdminData } from "../../api/adminApi";

class AdminDay extends React.Component {
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
      feedback: ""
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
    console.log("Updating state: ", e.target.value);
    this.setState({
      addSolution: e.target.value
    });
  }

  addSolution(e) {
    console.log("Adding solution: ", this.state.addSolution);
    if (this.state.addSolution !== "") {
      var solutionObject = {};
      solutionObject.solution = this.state.addSolution;
      solutionObject.id = this.props.day.id;
      this.setState({
        addSolution: ""
      });
    } else {
      this.setState({
        feedback: "Løsning er tom!"
      });
    }
  }

  createMarkup() {
    console.log("Creating markup", this.state.optionalSolutionVideo);
    return { __html: this.state.optionalSolutionVideo };
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
    console.log("Received files: ", files);
    this.setState({
      file: files[0]
    });
  }

  upload() {
    var req = request.post(
      "/admin/upload/" + this.props.day.revealDateAsString
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
          padding: "5px",
          className: "admin-day__container"
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
                  <textarea
                    className="admin-day__description-textarea"
                    type="text"
                    onChange={this.changeDescription}
                    value={this.state.description}
                  />
                </td>
              </tr>
              <tr>
                <td>Artist</td>
                <td>
                  <input
                    className="admin-day__input"
                    type="text"
                    onChange={this.changeSolutionArtist}
                    value={this.state.solutionArtist}
                  />
                </td>
              </tr>
              <tr>
                <td>Sang</td>
                <td>
                  <input
                    className="admin-day__input"
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
                  <input
                    className="admin-day__input"
                    type="text"
                    onChange={this.changeOptionalSolutionVideo}
                    value={this.state.optionalSolutionVideo}
                  />
                </td>
              </tr>
              <tr>
                <td>Link</td>
                <td>
                  <input
                    className="admin-day__input"
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
            {this.props.day.solutions &&
              this.props.day.solutions.map(function(solution) {
                console.log("This props:", this);
                return (
                  <AdminDaySolution
                    key={solution.solution}
                    dayId={this.props.day.id}
                    solution={solution}
                  ></AdminDaySolution>
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
          <p>
            <button onClick={this.saveChanges}>Lagre endringer</button>
            <button onClick={this.deleteDay}>Slett dag</button>
            {this.state.confirmDelete ? "Bekreft" : ""}
            <p>{this.state.feedback}</p>
          </p>

          <SongAudio link={this.state.link} />
        </div>
      </div>
    );
  }
}

export default AdminDay;
