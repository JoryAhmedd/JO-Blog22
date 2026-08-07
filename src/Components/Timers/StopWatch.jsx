"use client";

import { useEffect, useReducer } from "react";
import Button from "../UiElements/Button";
import classes from "@/Components/Timers/StopWatch.module.css";

const initialState = {
  time: 0,
  startTime: null,
  elapsedTime: 0,
  isRunning: false,
};

const reducer = (state, action) => {
  const { type, currentTime } = action;

  switch (type) {
    case "START":
      return {
        ...state,
        time: 0,
        startTime: Date.now(),
        elapsedTime: 0,
        isRunning: true,
      };

    case "PAUSE": {
      return {
        ...state,
        time: currentTime,
        elapsedTime: currentTime,
        isRunning: false,
      };
    }

    case "RESUME": {
      return {
        ...state,
        startTime: Date.now(),
        isRunning: true,
      };
    }

    case "RESET": {
      return {
        ...state,
        time: 0,
        elapsedTime: 0,
        startTime: null,
        isRunning: false,
      };
    }

    case "UPDATED-TIME": {
      return {
        ...state,
        time: currentTime,
      };
    }

    default:
      return state;
  }
};

export default function StopWatch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const start = () => {
    if (state.isRunning) return;
    dispatch({ type: "START" });
  };
  const pause = () => {
    const currentTime = Date.now() - state.startTime + state.elapsedTime;
    dispatch({ type: "PAUSE", currentTime });
  };
  const resume = () => {
    dispatch({ type: "RESUME" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    if (!state.isRunning) return;

    const interval = setInterval(() => {
      const currentTime = Date.now() - state.startTime + state.elapsedTime;
      dispatch({ type: "UPDATED-TIME", currentTime });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [state.isRunning, state.startTime, state.elapsedTime]);

  //   calculating times
  const minutes = Math.floor(state.time / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(state.time / 1000)
    .toString()
    .padStart(2, "0");
  const mill = Math.floor((state.time % 1000) / 10);

  return (
    <section>
      <p className={classes["timer"]}>
        {minutes}:{seconds}.{mill}
      </p>

      <div>
        {!state.isRunning && !state.elapsedTime ? (
          <Button onClick={start} success disabled={state.isRunning}>
            Start
          </Button>
        ) : (
          <Button outline onClick={resume} disabled={state.isRunning}>
            Resume
          </Button>
        )}

        <Button onClick={pause} danger>
          Pause
        </Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </section>
  );
}
