import React from "react";
import { H2 } from "./lib/Heading";

export function DateHeader({ unixDate, children }) {
  return (
    <H2>
      {unixDate} {children}
    </H2>
  );
}
