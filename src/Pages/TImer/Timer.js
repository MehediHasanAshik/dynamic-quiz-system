import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = ({ score }) => {
  const [timer, setTimer] = useState(120);
  const [stop, setStop] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 0){
      setStop(true)
      return navigate("/result", { state: { score } });
    };
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer, navigate, score]);

  return timer;
};

export default Timer;
