"use client";

import {
  isEmail,
  isPast,
  minLength,
  passwordsMatch,
} from "@/helpers/validators";
import Input from "../UiElements/Input";
import Button from "../UiElements/Button";
import useForm from "@/hooks/useForm";
import classes from "../GlobalStyles/forms.module.css";
import { login as loginUser } from "@/actions/users";

const SignUp = ({ login }) => {
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

  if (login) {
    delete formValidators["name"];
    delete formValidators["birthdate"];
    delete formValidators["passwordConfirm"];
    delete initialState["name"];
    delete initialState["birthdate"];
    delete initialState["passwordConfirm"];
  }
  const { formState, handleChange, handleTouch, formIsValid } = useForm({
    initialState,
    formValidators,
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent refresh

    if (login) {
      try {
        const res = loginUser({
          email: formState.email.value,
          password: formState.password.value,
        });
        console.log(res);
      } catch {
        console.log(e);
      }
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes["mainForm"]}>
      <h3>{login ? "Log into your account" : "create new account"}</h3>

      {!login && (
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
      )}

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

      {!login && (
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
      )}

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

      {!login && (
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
      )}

      <div>
        <Button onClick={handleSubmit}>{login ? "Login" : "Sign Up"}</Button>
        <Button onClick={handleSubmit} href="/login">
          {login ? "Sign in" : "Login To Your Account"}
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
