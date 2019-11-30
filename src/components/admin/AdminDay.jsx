import React, { useState } from "react";
import { AdminEditDay } from "./AdminEditDay";

export function AdminDay(props) {
  const { day, solutions } = props;

  const [edit, setEdit] = useState(false);

  function createMarkup(markup) {
    return { __html: markup };
  }

  if (edit) {
    return (
      <AdminEditDay
        day={day}
        solutions={solutions}
        close={() => setEdit(false)}
      />
    );
  }

  const done = day.description !== "" && day.optionalSolutionVideo !== "";

  return (
    <div
      style={{
        backgroundColor: done ? "white" : "#ffbbbb"
      }}
    >
      <h1>{day.revealDateAsString}</h1>
      <p>
        {day.solutionArtist} - {day.solutionSong}
      </p>
      <p dangerouslySetInnerHTML={createMarkup(day.description)}></p>
      <button onClick={() => setEdit(true)}>Utvid</button>
    </div>
  );
}
