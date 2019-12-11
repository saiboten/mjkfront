import React from "react";
import { useSpring, animated, interpolate } from "react-spring";
import { useGesture } from "react-with-gesture";

export function HorisontalDraggable({ children }) {
  const [bind, { delta, down }] = useGesture();
  const { x, bg, size } = useSpring({
    x: down ? delta[0] : 0,
    size: 1,
    immediate: name => down && name === "x"
  });
  return (
    <animated.div {...bind()} style={{ background: bg }}>
      <animated.div
        style={{
          transform: interpolate([x, size], (x, s) => `translate3d(${x}px,0,0)`)
        }}
      >
        {children}
      </animated.div>
    </animated.div>
  );
}
