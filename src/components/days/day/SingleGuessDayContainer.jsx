import { Block } from "jsxstyle";
import React from "react";
import Days from "./../Days";
import SingleGuessDay from "./SingleGuessDay";

var SingleGuessDayContainer = React.createClass({
  componentDidMount() {},

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
});

export default SingleGuessDayContainer;
