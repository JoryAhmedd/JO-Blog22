"use client";

import { useState } from "react";

import Button from "../UiElements/Button";
import Input from "../UiElements/Input";
import { isEmail, isEmpty, minLength } from "@/helpers/validators";

import classes from "./SignUpForm.module.css";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  const [birthdate, setBirthdate] = useState("");
  const [birthdateError, setBirthdateError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      isEmpty(name) ||
      !isEmail(email) ||
      !minLength(password) ||
      password !== passwordConfirm ||
      isEmpty(birthdate)
    ) {
      if (isEmpty(name)) setNameError(true);
      if (!isEmail(email)) setEmailError(true);
      if (!minLength(password, 8)) setPasswordError(true);
      if (password !== passwordConfirm) setPasswordConfirmError(true);
      if (isEmpty(birthdate)) setBirthdateError(true);

      return;
    }

    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setBirthdate("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes["signup-form"]}>
      <h3>Sign Up</h3>

      <Input
        id="name"
        type="text"
        label="Name"
        placeholder="Enter your name"
        value={name}
        error={nameError}
        errorText="Please enter a valid name"
        onChange={(e) => {
          const { value } = e.target;
          setName(value);
          if (!isEmpty(value)) setNameError(false);
        }}
      />

      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        error={emailError}
        errorText="Please enter a valid email"
        onChange={(e) => {
          const { value } = e.target;
          setEmail(value);
          if (isEmail(value)) setEmailError(false);
        }}
      />

      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="Enter password"
        value={password}
        error={passwordError}
        errorText="Password must be at least 8 characters"
        onChange={(e) => {
          const { value } = e.target;
          setPassword(value);
          if (minLength(value)) setPasswordError(false);
        }}
      />

      <Input
        id="passwordConfirm"
        type="password"
        label="Password Confirm"
        placeholder="Confirm password"
        value={passwordConfirm}
        error={passwordConfirmError}
        errorText="Passwords do not match"
        onChange={(e) => {
          const { value } = e.target;
          setPasswordConfirm(value);
          if (value === password) setPasswordConfirmError(false);
        }}
      />

      <Input
        id="birthdate"
        type="date"
        label="Birthdate"
        value={birthdate}
        error={birthdateError}
        errorText="Please select your birthdate"
        onChange={(e) => {
          const { value } = e.target;
          setBirthdate(value);
          if (!isEmpty(value)) setBirthdateError(false);
        }}
      />

      <Button className={classes["btn"]}>Sign Up</Button>
    </form>
  );
}
