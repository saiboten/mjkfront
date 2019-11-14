import { Flex } from "jsxstyle";
import React, { useEffect, useContext } from "react";
import DaySelector from "./day/DaySelector";
import { fetchDays } from "../../api/daysApi";
import { DataContext } from "../../context/DataContext";

export const Days = function() {
  const {
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
    setUserResult,
    setTopList
  } = useContext(DataContext);

  useEffect(() => {
    fetchDays().then(
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
    <div>
      <h1>Løsninger</h1>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "10px"
        }}
      >
        {days
          .filter(day => day.realDate !== new Date(date).getDate().toString())
          .map((day, i) => (
            <DaySelector
              key={day.id}
              answers={answers}
              user={user}
              today={today}
              date={date}
              day={day}
            />
          ))}
      </div>
    </div>
  );
};
