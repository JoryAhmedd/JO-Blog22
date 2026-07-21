"use client";

import { isEmail, minLength } from "@/helpers/validators";
import { useCallback } from "react";
import Input from "../UiElements/Input";
import Button from "../UiElements/Button";
import useForm from "@/hooks/useForm";
import classes from "../GlobalStyles/forms.module.css";

const formValidators = {
  email: isEmail,
  password: minLength,
};
const initialState = {
  email: { value: "", isValid: false, touched: false },
  password: { value: "", isValid: false, touched: false },
};

export default function LoginForm() {
  const { formState, handleChange, handleTouch, formIsValid } = useForm({
    initialState,
    formValidators,
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("sent");
  }, []);

  return (
    <form onSubmit={handleSubmit} className={classes["mainForm"]}>
      <h3>Login to your account</h3>
      <Input
        id="email"
        type="email"
        name="email"
        label="Email"
        placeholder="write an exist email"
        errorText="Please provide a valid email"
        inputState={formState.email}
        onChange={handleChange}
        onBlur={handleTouch}
      />

      <Input
        id="password"
        type="password"
        name="password"
        label="Password"
        errorText="Password must be at least 6 chars"
        placeholder="******"
        inputState={formState.password}
        onChange={handleChange}
        onBlur={handleTouch}
        minLength={6}
      />

      <div>
        <Button disabled={!formIsValid} onClick={handleSubmit}>
          Log In
        </Button>
        <Button onClick={handleSubmit} href="/sign-up">
          Create New Account
        </Button>
      </div>

      <Button onClick={handleSubmit} outline>
        Continue with google
      </Button>
    </form>
  );
}
