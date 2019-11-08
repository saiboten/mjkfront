import { Block, Flex } from "jsxstyle";
import React from "react";
import DaySelector from "./day/DaySelector";

export class Days extends React.Component {
  state = {
    days: []
  };

  onChange(state) {
    this.setState(state);
  }
  render() {
    console.log("Days props: ", this.props);

    return (
      <Block>
        <h1>Løsninger</h1>
        <Flex flexDirection="row" flexWrap="wrap" padding="10px">
          {this.state.days.map((day, i) => {
            if (
              day.realDate !== new Date(this.state.date).getDate().toString()
            ) {
              return (
                <DaySelector
                  key={day.id}
                  answers={this.state.answers}
                  user={this.state.user}
                  today={this.state.today}
                  date={this.state.date}
                  day={day}
                />
              );
            }
          })}
        </Flex>
      </Block>
    );
  }
}
