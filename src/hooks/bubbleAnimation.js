import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../style/hooks/bubbleAnimation.scss";

function useBubbleAnimation() {
  const popTime = 10;
  const popSpeed = 1;
  const [bubbles, setBubbles] = useState([]);

  const bubblesF = () =>
    setTimeout(() => {
      const newBubble = React.createElement("div", {
          key: uuidv4(),
          className: `bubble`,
          style: {
            top: Math.floor(Math.random() * window.innerHeight) + "px",
            left: Math.floor(Math.random() * window.innerWidth) + "px",
            backgroundColor:
              "rgb(" +
              Math.floor(Math.random() * 255) +
              "," +
              Math.floor(Math.random() * 255) +
              "," +
              Math.floor(Math.random() * 255) +
              ")",
            animationDuration: Math.ceil(Math.random() * popTime) + "s",
          },
        });

      if (bubbles.length <= popTime/popSpeed) {
        setBubbles([...bubbles, newBubble]);
      } else if (bubbles.length > popTime/popSpeed) {
        const concated = [...bubbles, newBubble];
        setBubbles(concated.slice(1));
      }
    }, popSpeed*1000);

    useEffect(() => {
      bubblesF();
    })

  return bubbles.map((bub) => bub);
}

export default useBubbleAnimation;