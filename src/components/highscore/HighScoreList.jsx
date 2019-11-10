import React, { useContext } from "react";
import HighScoreElement from "./HighScoreElement";
import { DataContext } from "../../context/DataContext";

export function HighScoreList() {
  const { topList, user } = useContext(DataContext);

  return (
    <ol>
      {topList
        .filter(function(user) {
          return user.score > 0;
        })
        .map((topListUser, index) => {
          return (
            <HighScoreElement
              key={index}
              user={user}
              topListUser={topListUser}
            />
          );
        })}
    </ol>
  );
}
