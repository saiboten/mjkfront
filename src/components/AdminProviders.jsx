import React, { useState } from "react";
import { AdminDataContext } from "../context/AdminDataContext";

export const AdminProviders = ({ children }) => {
  const [days, setDays] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [date, setDate] = useState("");
  const [today, setToday] = useState(null);
  const [user, setUser] = useState(null);
  const [userResult, setUserResult] = useState(null);
  const [topList, setTopList] = useState([]);

  const dataContextValue = {
    days,
    setDays,
    answers,
    setAnswers,
    date,
    setDate,
    today,
    setToday,
    user,
    setUser,
    userResult,
    setUserResult,
    topList,
    setTopList
  };

  return (
    <AdminDataContext.Provider value={dataContextValue}>
      {children}
    </AdminDataContext.Provider>
  );
};
