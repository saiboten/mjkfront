import React, { useContext, useEffect } from "react";
import AdminDay from "./AdminDay";
import AdminAddDay from "./AdminAddDay";
import { AdminDataContext } from "../../context/AdminDataContext";
import { fetchAdminData } from "../../api/adminApi";

function AdminOverview() {
  const {
    days,
    setDays,
    setAnswers,
    date,
    setDate,
    setToday,
    setUser,
    setUserResult,
    setTopList
  } = useContext(AdminDataContext);

  useEffect(() => {
    fetchAdminData().then(
      ({ days, date, user, answers, today, userResult, topList }) => {
        setDays(days);
        setDate(date);
        setUser(user);
        setAnswers(answers);
        setToday(today);
        setUserResult(userResult);
        setTopList(topList);
      }
    );
  }, [
    setAnswers,
    setDate,
    setDays,
    setToday,
    setUser,
    setUserResult,
    setTopList
  ]);

  return (
    <div
      className="admin__container"
      style={{
        backgroundColor: "white",
        flexWrap: "wrap",
        margin: "5px auto"
      }}
    >
      {days.map((day, i) => {
        if (day.realDate !== new Date(date).getDate().toString()) {
          return <AdminDay key={day.revealDate} day={day} />;
        } else {
          return null;
        }
      })}
      <AdminAddDay />
    </div>
  );
}

export default AdminOverview;
