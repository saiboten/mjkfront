import { Block, Flex } from "jsxstyle";
import React, { useState, useEffect } from "react";
import DaySelector from "./day/DaySelector";
import { fetchDays } from "../../api/daysApi";

export const Days = function() {
  const [days, setDays] = useState([]);
  const [date, setDate] = useState(null);
  const [user, setUser] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [today, setToday] = useState(null);

  useEffect(() => {
    fetchDays().then(({ days, date, user, answers, today }) => {
      setDays(days);
      setDate(date);
      setUser(user);
      setAnswers(answers);
      setToday(today);
    });
  }, []);

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
        })}
      </Flex>
    </Block>
  );
};
