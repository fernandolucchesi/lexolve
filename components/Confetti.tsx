import confetti from "canvas-confetti";
import { useEffect } from "react";

function Confetti() {
  useEffect(() => {
    const end = Date.now() + 2 * 1000;
    const colors = ["#2f855a", "#ffa500"];

    function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }

    frame();
  }, []);

  return null;
}

export default Confetti;
