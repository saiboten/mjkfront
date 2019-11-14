/**
 * Created by Tobias on 16.10.2016.
 */
import React from "react";

import SongAudio from "./SongAudio";

class PastDayWithoutSolution extends React.Component {
  getDescription(description) {
    return {
      __html: description
    };
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "10px"
        }}
      >
        <div>
          <div
            dangerouslySetInnerHTML={this.getDescription(
              this.props.day.description
            )}
          ></div>
        </div>
        <p>
          <button class="button" onClick={this.props.showSolutionCallback}>
            Vis fasit
          </button>
        </p>
        <SongAudio link={this.props.day.link} />
      </div>
    );
  }
}

export default PastDayWithoutSolution;
