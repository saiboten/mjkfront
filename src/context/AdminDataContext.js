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
  setTopList: () => [],
  solutions: [],
  setSolutions: () => [],
};

export const AdminDataContext = React.createContext(initialState);
