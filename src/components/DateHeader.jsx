import React from "react";
import moment from "moment";
import { H2 } from "./lib/Heading";

export function DateHeader({ unixDate, children }) {
  return (
    <H2>
      {moment(unixDate).format("DD. MMMM")} {children}
    </H2>
  );
}
