import React, { useContext, useState } from "react";
import { HighScoreElement } from "./HighScoreElement";
import { DataContext } from "../../context/DataContext";
import { StyledMainBox } from "../lib/MainBox";
import { H2 } from "../lib/Heading";
import { StyledButtonSecondary } from "../lib/StyledButton";

export function HighScoreList() {
  const { topList, user } = useContext(DataContext);

  const [showAll, setShowAll] = useState(false);

  return (
    <StyledMainBox>
      <H2>Toppscorelisten</H2>
      <ol>
        {showAll
          ? topList
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
              })
          : topList
              .filter(function(user) {
                return user.score > 0;
              })
              .filter((user, index) => index < 5)
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
      {topList &&
        topList.filter(function(user) {
          return user.score > 0;
        }).length > 5 && (
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <StyledButtonSecondary onClick={() => setShowAll(!showAll)}>
              {showAll ? "Skjul alle" : "Vis alle"}
            </StyledButtonSecondary>
          </div>
        )}
    </StyledMainBox>
  );
}
