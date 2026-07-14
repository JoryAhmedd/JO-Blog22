"use client";

import {
  isEmail,
  isPast,
  minLength,
  passwordsMatch,
} from "@/helpers/validators";
import { useCallback } from "react";
import Input from "../UiElements/Input";
import Button from "../UiElements/Button";
import useForm from "@/hooks/useForm";

const formValidators = {
  name: minLength,
  email: isEmail,
  birthdate: isPast,
  password: minLength,
  passwordConfirm: passwordsMatch,
};
const initialState = {
  name: { value: "", isValid: false, touched: false },
  email: { value: "", isValid: false, touched: false },
  birthdate: { value: "", isValid: false, touched: false },
  password: { value: "", isValid: false, touched: false },
  passwordConfirm: { value: "", isValid: false, touched: false },
};

const SignUp = () => {
  const { formState, handleChange, handleTouch, formIsValid } = useForm({
    initialState,
    formValidators,
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New Account</h3>
      <Input
        id="name"
        type="text"
        name="name"
        label="Full Name"
        placeholder="write ur full name"
        errorText="Name should be at least 3 chars"
        inputState={formState.name}
        onChange={handleChange}
        onBlur={handleTouch}
        minLength={3}
      />

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
        id="birthdate"
        type="date"
        name="birthdate"
        label="Birthdate"
        errorText="Please provide a valid birthdate"
        inputState={formState.birthdate}
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

      <Input
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        label="PasswordConfirm"
        errorText="Passwords must match"
        placeholder="******"
        inputState={formState.passwordConfirm}
        onChange={handleChange}
        onBlur={handleTouch}
      />

      <Button disabled={!formIsValid} onClick={handleSubmit}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
