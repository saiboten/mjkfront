import React, { useContext } from "react";
import { HighScoreElement } from "./HighScoreElement";
import { DataContext } from "../../context/DataContext";
import { StyledMainBox } from "../lib/MainBox";
import { H1 } from "../lib/Heading";

export function HighScoreList() {
  const { topList, user } = useContext(DataContext);

  return (
    <StyledMainBox>
      <H1>Toppscorelisten!</H1>
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
    </StyledMainBox>
  );
}
