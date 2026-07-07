"use client";

import {
  isEmail,
  isPast,
  minLength,
  passwordsMatch,
} from "@/helpers/validators";
import { useMemo, useState } from "react";
import Input from "../UiElements/Input";
import Button from "../UiElements/Button";

const formValidators = {
  name: minLength,
  email: isEmail,
  birthdate: isPast,
  password: minLength,
  passwordConfirm: passwordsMatch,
};

const SignUp = () => {
  const [formState, setFormState] = useState({
    name: { value: "", isValid: false, touched: false },
    email: { value: "", isValid: false, touched: false },
    birthdate: { value: "", isValid: false, touched: false },
    password: { value: "", isValid: false, touched: false },
    passwordConfirm: { value: "", isValid: false, touched: false },
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        isValid: formValidators[name]({
          value,
          value2: prev.password.value,
          min: name === "name" ? 3 : name === "password" ? 6 : 0,
        }),
      },
    }));
  };

  const handleInputTouch = (e) => {
    const { name } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: { ...prev[name], touched: true },
    }));
  };

  // هل فيه واحدة منهم الفاليد بتاعها ب فولس؟
  // every: هتعدي عليهم كلهم ولازم كلهم يوافقوا الشرط
  // some: بعضهم
  const formIsValid = useMemo(
    () => Object.keys(formState).every((el) => formState[el].isValid),
    [formState],
    // القوسين اللي في الاخر دول معناهم اننا عايزاها تشتغل لما ال فورم ستيت تتغير
  );

  return (
    <form>
      <h3>Create New Account</h3>
      <Input
        id="name"
        type="text"
        name="name"
        label="Full Name"
        placeholder="write ur full name"
        errorText="Name should be at least 3 chars"
        inputState={formState.name}
        onChange={handleInputChange}
        onBlur={handleInputTouch}
      />

      <Input
        id="email"
        type="email"
        name="email"
        label="Email"
        placeholder="write an exist email"
        errorText="Please provide a valid email"
        inputState={formState.email}
        onChange={handleInputChange}
        onBlur={handleInputTouch}
      />

      <Input
        id="birthdate"
        type="date"
        name="birthdate"
        label="Birthdate"
        errorText="Please provide a valid birthdate"
        inputState={formState.birthdate}
        onChange={handleInputChange}
        onBlur={handleInputTouch}
      />

      <Input
        id="password"
        type="password"
        name="password"
        label="Password"
        errorText="Password must be at least 6 chars"
        placeholder="******"
        inputState={formState.password}
        onChange={handleInputChange}
        onBlur={handleInputTouch}
      />

      <Input
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        label="PasswordConfirm"
        errorText="Passwords must match"
        placeholder="******"
        inputState={formState.passwordConfirm}
        onChange={handleInputChange}
        onBlur={handleInputTouch}
      />

      <Button disabled={formIsValid} onClick={() => {}}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
