import React, { useState, useEffect } from "react";
import AdminAddDay from "./AdminAddDay";

import { fetchAdminData } from "../../api/adminApi";
import { AdminDay } from "./AdminDay";

function AdminOverview() {
  const [days, setDays] = useState([]);
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    fetchAdminData().then(({ days, solutions }) => {
      setDays(days);
      setSolutions(solutions);
    });
  }, [setDays, setSolutions]);

  return (
    <div
      style={{
        backgroundColor: "white",
        flexWrap: "wrap",
        margin: "5px auto",
        maxWidth: "980px"
      }}
    >
      {days.map((day, i) => {
        var solutionsForThisDay = solutions
          .filter(solution => solution.day === day.id)
          .map(el => el.solution);

        return (
          <AdminDay
            key={day.revealDate + solutionsForThisDay.length}
            day={day}
            solutions={solutionsForThisDay}
          />
        );
      })}
      <AdminAddDay />
    </div>
  );
}

export default AdminOverview;
