"use client";

import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState({
    value: "",
    isValid: false,
    touched: false,
  });

  const [email, setEmail] = useState({
    value: "",
    isValid: false,
    touched: false,
  });

  const [birthdate, setBirthdate] = useState({
    value: "",
    isValid: false,
    touched: false,
  });

  const [password, setPassword] = useState({
    value: "",
    isValid: false,
    touched: false,
  });

  const [passwordConfirm, setPasswordConfirm] = useState({
    value: "",
    isValid: false,
    touched: false,
  });

  // change

  const handleNameChange = (e) => {
    setName({
      value: e.target.value,
      touched: name.touched,
      isValid: e.target.value.trim().length >= 3,
    });
  };

  const handleEmailChange = (e) => {
    setEmail({
      value: e.target.value,
      touched: email.touched,
      isValid: e.target.value.includes("@"),
    });
  };

  const handleBirthdateChange = (e) => {
    setBirthdate({
      value: e.target.value,
      touched: birthdate.touched,
      isValid: e.target.value !== "",
    });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    setPassword({
      value: e.target.value,
      touched: password.touched,
      isValid: newPassword.length >= 8,
    });
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm({
      value: e.target.value,
      touched: passwordConfirm.touched,
      isValid: e.target.value === password.value,
    });
  };

  // Touched

  const handleNameTouched = () => {
    setName((prev) => ({ ...prev, touched: true }));
  };

  const handleEmailTouched = () => {
    setEmail((prev) => ({ ...prev, touched: true }));
  };

  const handleBirthdateTouched = () => {
    setBirthdate((prev) => ({ ...prev, touched: true }));
  };

  const handlePasswordTouched = () => {
    setPassword((prev) => ({ ...prev, touched: true }));
  };

  const handlePasswordConfirmTouched = () => {
    setPasswordConfirm((prev) => ({
      ...prev,
      touched: true,
    }));
  };

  return (
    <form>
      <h3>Create New Account</h3>

      <div>
        <label>Full Name</label>
        <input
          type="text"
          value={name.value}
          onChange={handleNameChange}
          onBlur={handleNameTouched}
        />

        <p>
          {!name.isValid && name.touched
            ? "Name should be at least 3 chars"
            : ""}
        </p>
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email.value}
          onChange={handleEmailChange}
          onBlur={handleEmailTouched}
        />

        <p>
          {!email.isValid && email.touched
            ? "Please provide a valid email"
            : ""}
        </p>
      </div>

      <div>
        <label>Birthdate</label>
        <input
          type="date"
          value={birthdate.value}
          onChange={handleBirthdateChange}
          onBlur={handleBirthdateTouched}
        />

        <p>
          {!birthdate.isValid && birthdate.touched
            ? "Please provide a birthdate"
            : ""}
        </p>
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password.value}
          onChange={handlePasswordChange}
          onBlur={handlePasswordTouched}
        />

        <p>
          {!password.isValid && password.touched
            ? "Password should be at least 8 chars"
            : ""}
        </p>
      </div>

      <div>
        <label>Password Confirm</label>
        <input
          type="password"
          value={passwordConfirm.value}
          onChange={handlePasswordConfirmChange}
          onBlur={handlePasswordConfirmTouched}
        />

        <p>
          {!passwordConfirm.isValid && passwordConfirm.touched
            ? "Passwords don't match"
            : ""}
        </p>
      </div>
    </form>
  );
}
