import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = ({ score, difficulty }) => {
  const [timer, setTimer] = useState(() => {
    if (difficulty === "easy") return 120;
    else if (difficulty === "medium") return 150;
    else return 180;
  });
  const [stop, setStop] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 0) {
      setStop(true);
      return navigate("/result", { state: { score } });
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer, navigate, score]);

  return timer;
};

export default Timer;
