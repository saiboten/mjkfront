import { Block } from "jsxstyle";
import React from "react";
import SingleGuessDay from "./SingleGuessDay";

class SingleGuessDayContainer extends React.Component {
  render() {
    return (
      <Block
        className="guess-day__container"
        margin="0 auto"
        padding="5px"
        borderRadius="5px"
        backgroundColor="white"
      >
        <SingleGuessDay />
      </Block>
    );
  }
}

export default SingleGuessDayContainer;
