import { Block, Flex } from "jsxstyle";
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
    setUser
  } = useContext(DataContext);

  useEffect(() => {
    fetchDays().then(({ days, date, user, answers, today }) => {
      setDays(days);
      setDate(date);
      setUser(user);
      setAnswers(answers);
      setToday(today);
    });
  }, [setAnswers, setDate, setDays, setToday, setUser]);

  return (
    <Block>
      <h1>Løsninger</h1>
      <Flex flexDirection="row" flexWrap="wrap" padding="10px">
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
      </Flex>
    </Block>
  );
};
