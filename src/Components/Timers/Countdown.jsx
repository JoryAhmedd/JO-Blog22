"use client";

import { useEffect, useState, useReducer } from "react";
import Button from "../UiElements/Button";
import handleTime from "@/helpers/handleTime";

export default function Countdown({ duration = 8_000 }) {
  const initialState = {
    timeLeft: duration,
    endTime: null,
    isRunning: false,
  };

  const reducer = (state, action) => {
    const { type } = action;

    switch (type) {
      case "START":
        return {
          ...state,
          isRunning: true,
          endTime: Date.now() + duration,
          timeLeft: duration,
        };

      case "PAUSE": {
        return {
          ...state,
          isRunning: false,
        };
      }

      case "RESUME": {
        return {
          ...state,
          endTime: Date.now() + state.timeLeft,
          isRunning: true,
        };
      }

      case "RESET": {
        return {
          ...state,
          isRunning: false,
          timeLeft: duration,
          endTime: null,
        };
      }

      case "UPDATE_TIME": {
        const remaining = Math.max(state.endTime - Date.now(), 0);

        return {
          ...state,
          timeLeft: remaining,
        };
      }

      case "STOP_TIME": {
        return {
          ...state,
          isRunning: false,
        };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const start = () => {
    if (state.isRunning) return;
    dispatch({ type: "START" });
  };
  const pause = () => {
    dispatch({ type: "PAUSE" });
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
      const remaining = Math.max(state.endTime - Date.now(), 0);

      dispatch({ type: "UPDATE_TIME" });

      if (remaining <= 0) {
        clearInterval(interval);
        dispatch({ type: "STOP_TIME" });
      }
    }, 10);

    return () => clearInterval(interval);
  }, [state.isRunning, state.endTime]);

  const { minutes, seconds, mill } = handleTime(state.timeLeft);

  return (
    <div>
      <p>
        {minutes}:{seconds}.{mill}
      </p>

      <Button onClick={start}>Start</Button>
      <Button onClick={resume} disabled={state.isRunning}>
        Resume
      </Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
