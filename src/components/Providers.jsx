import React, { useState } from "react";
import { DataContext } from "../context/DataContext";

export const Providers = ({ children }) => {
  const [days, setDays] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [date, setDate] = useState("");
  const [today, setToday] = useState(null);
  const [user, setUser] = useState(null);

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
    setUser
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};
