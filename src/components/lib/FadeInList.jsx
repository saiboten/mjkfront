import React from "react";
import { useTrail, animated, config } from "react-spring";

export function FadeInList({ list }) {
  const trail = useTrail(list.length, {
    config: config.stiff,
    opacity: 1,
    from: { opacity: 0 }
  });

  return trail.map(({ opacity }, index) => (
    <animated.div style={{ opacity }}>{list[index]}</animated.div>
  ));
}
