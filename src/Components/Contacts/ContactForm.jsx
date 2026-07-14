"use client";

import { useState } from "react";

import Button from "../UiElements/Button";
import { isEmail, isEmpty, minLength } from "@/helpers/validators";
import Input from "../UiElements/Input";

import classes from "./ContactForm.module.css";
import useForm from "@/hooks/useForm";

const formValidators = { name: minLength, email: isEmail, subject: isEmpty };
const initialState = {
  name: { value: "", isValid: false, touched: false },
  email: { value: "", isValid: false, touched: false },
  subject: { value: "", isValid: false, touched: false },
};

export default function ContactForm() {
  const { formState, handleChange, handleTouch, formIsValid } = useForm({
    initialState,
    formValidators,
  });

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // send to an api
    if (isEmpty(name) || !isEmail(email) || !minLength(subject)) {
      if (isEmpty(name)) {
        setNameError(true);
      }

      if (!isEmail(email)) {
        setEmailError(true);
      }

      if (!minLength(subject)) {
        setSubjectError(true);
      }

      return;
    }

    setName("");
    setEmail("");
    setSubject("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes["contact-form"]}>
      <h3>Contact Us</h3>

      <Input
        id="name"
        type="text"
        name="name"
        label="Name"
        placeholder="Write a valid name!"
        inputState={formState.name}
        error={nameError}
        errorText="Please provide a valid name!"
        onChange={handleChange}
        onBlur={handleTouch}
        minLength={3}
      />

      <Input
        id="email"
        type="email"
        label="Email"
        inputState={formState.email}
        name="email"
        placeholder="Write a valid email"
        error={emailError}
        errorText="Please provide a valid email!"
        onChange={handleChange}
        onBlur={handleTouch}
      />

      <Input
        id="subject"
        type="textarea"
        name="subject"
        label="Subject"
        inputState={formState.subject}
        placeholder="Write the subject in details"
        error={subjectError}
        errorText="Subject should be at least 5 chars!"
        onChange={handleChange}
        onBlur={handleTouch}
        minLength={5}
      />

      <Button disabled={!formIsValid} className={classes["btn"]}>
        Send
      </Button>
    </form>
  );
}
