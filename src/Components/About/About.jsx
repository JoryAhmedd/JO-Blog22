"use client";

import { useReducer } from "react";
import Button from "../UiElements/Button";

const initialState = {
  score: 0,
  lives: 3,
  level: 1,
};

const reducer = (state, action) => {
  const { type, amount } = action;

  switch (type) {
    // score
    case "ADD_SCORE":
      return { ...state, score: state.score + amount };

    case "LOSE_SCORE":
      return { ...state, score: Math.max(0, state.score - amount) };

    // lives
    case "ADD_LIVES":
      return { ...state, lives: state.lives + amount };

    case "LOSE_LIVES":
      // اللفل اقل حاجة فيه 3 ف مش هيقل عن كدة
      return { ...state, lives: Math.max(3, state.lives - amount) };

    // levels
    case "ADD_LEVELS":
      return { ...state, level: state.level + amount };

    case "LOSE_LEVELS":
      return { ...state, level: Math.max(1, state.level - amount) };

    default:
      return state;
  }
};

const About = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // score
  const addScore = () => dispatch({ type: "ADD_SCORE", amount: 10 });
  const loseScore = () => dispatch({ type: "LOSE_SCORE", amount: 10 });
  // lives
  const addLives = () => dispatch({ type: "ADD_LIVES", amount: 1 });
  const loseLives = () => dispatch({ type: "LOSE_LIVES", amount: 1 });
  // levels
  const addLevels = () => dispatch({ type: "ADD_LEVELS", amount: 1 });
  const loseLevels = () => dispatch({ type: "LOSE_LEVELS", amount: 1 });
  return (
    <div>
      <h2>About</h2>
      <p>
        Score: {state.score} Lives: {state.lives} Level: {state.level}
      </p>
      <section>
        {/* score */}
        <Button onClick={addScore}>Score +</Button>
        <Button onClick={loseScore} danger>
          Score -
        </Button>

        {/* lives */}
        <Button onClick={addLives}>Lives +</Button>
        <Button onClick={loseLives} danger>
          Lives -
        </Button>

        {/* levels */}
        <Button onClick={addLevels}>Levels +</Button>
        <Button onClick={loseLevels} danger>
          Levels -
        </Button>
      </section>
    </div>
  );
};

export default About;
