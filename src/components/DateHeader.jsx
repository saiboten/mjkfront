import React from "react";
import moment from "moment";
import { H2 } from "./lib/Heading";

export function DateHeader(props) {
  return <H2>{moment(props.unixDate).format("DD. MMMM")}</H2>;
}
