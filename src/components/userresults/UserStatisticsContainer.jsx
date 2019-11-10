import React from "react";
import { UserStatistics } from "./UserStatistics";

export class UserStatisticsContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Dagens beste!</h1>
        <p className="smallspace">
          Dette viser klokkeslettet oppgaven ble løst på per bruker
        </p>
        <UserStatistics />
      </div>
    );
  }
}
