import React, { useState } from "react";
import { AdminEditDay } from "./AdminEditDay";

export function AdminDay(props) {
  const { day, solutionsForThisDay } = props;

  const [edit, setEdit] = useState(false);

  if (edit) {
    return (
      <AdminEditDay
        day={day}
        solutions={solutionsForThisDay}
        close={() => setEdit(false)}
      />
    );
  }

  return (
    <div>
      <h1>{day.revealDateAsString}</h1>
      <p>
        {day.solutionArtist} - {day.solutionSong}
      </p>
      <button onClick={() => setEdit(true)}>Utvid</button>
    </div>
  );
}
