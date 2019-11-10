import React from "react";

const initialState = {
  days: [],
  setDays: () => [],
  answers: [],
  setAnswers: () => [],
  date: "",
  setDate: () => {},
  today: null,
  setToday: () => {},
  user: {},
  setUser: () => {},
  userResult: {},
  setUserResult: () => {},
  topList: [],
  setTopList: () => []
};

export const DataContext = React.createContext(initialState);
