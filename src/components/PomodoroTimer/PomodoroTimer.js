import React, { useState, useEffect, Fragment, useContext } from "react";
import classes from "./PomodoroTimer.module.css"
import Button from "../UI/Button";

const PomodoroTimer = (props) => {
  const [timeLeft, setTimeLeft] = useState(props.pomodoroTime * 60);

  
  useEffect(() => {
    let interval = null;

    if (props.isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
        const check = 100 - (timeLeft * 100) / (props.pomodoroTime * 60);
        props.setWidth(check)
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (timeLeft === 0) {
      props.setCreateTask();
      props.resetTime();
          }

    return () => clearInterval(interval);
  }, [props.isRunning, timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Fragment>
      <div className={classes.time}>{formatTime(timeLeft)}</div>
    </Fragment>
  );
};

export default PomodoroTimer;
