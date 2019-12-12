import React from "react";
import { number } from "prop-types";
import { animated, useSpring } from "react-spring";

export function NumberAnimation({ children }) {
  const { x } = useSpring({
    config: {
      mass: 1000,
      tension: 3000,
      friction: 3000
    },
    from: {
      x: 0
    },
    x: children
  });

  return <animated.span>{x.interpolate(val => Math.floor(val))}</animated.span>;
}

NumberAnimation.propTypes = {
  number: number.isRequired
};
