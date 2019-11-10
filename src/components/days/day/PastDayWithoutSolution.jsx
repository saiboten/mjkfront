import { Block } from "jsxstyle";

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
      <Block backgroundColor="white" padding="10px">
        <Block>
          <div
            dangerouslySetInnerHTML={this.getDescription(
              this.props.day.description
            )}
          ></div>
        </Block>
        <p>
          <button class="button" onClick={this.props.showSolutionCallback}>
            Vis fasit
          </button>
        </p>
        <SongAudio link={this.props.day.link} />
      </Block>
    );
  }
}

export default PastDayWithoutSolution;
