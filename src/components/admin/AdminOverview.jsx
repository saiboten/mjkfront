import React, { useContext, useEffect } from "react";
import AdminDay from "./AdminDay";
import AdminAddDay from "./AdminAddDay";
import { AdminDataContext } from "../../context/AdminDataContext";
import { fetchAdminData } from "../../api/adminApi";

function AdminOverview() {
  const {
    days,
    solutions,
    setDays,
    setAnswers,
    setDate,
    setToday,
    setUser,
    setUserResult,
    setTopList,
    setSolutions
  } = useContext(AdminDataContext);

  useEffect(() => {
    fetchAdminData().then(
      ({
        days,
        date,
        user,
        answers,
        today,
        userResult,
        topList,
        solutions
      }) => {
        setDays(days);
        setDate(date);
        setUser(user);
        setAnswers(answers);
        setToday(today);
        setUserResult(userResult);
        setTopList(topList);
        setSolutions(solutions);
      }
    );
  }, [
    setAnswers,
    setDate,
    setDays,
    setToday,
    setUser,
    setUserResult,
    setTopList,
    setSolutions
  ]);

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
