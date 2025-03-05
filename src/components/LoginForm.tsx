import React, { useRef, useState } from "react";
import { login } from "../api";
import './LoginForm.css';


export default function LoginForm({ setLogin }: { setLogin: any }) {
  const actionType = useRef<null | "signin" | "signup">(null);
  const [currentError, setCurrentError] = useState("");

  const handleSigninClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    actionType.current = "signin";
  };

  const handleSignupClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    actionType.current = "signup";
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const login_value = formData.get("login") as string
    const password = formData.get("password") as string

    if (actionType.current == "signin") {
      login(login_value, password)
        .then(() => setLogin(login_value))
        .catch(err => setCurrentError(err.response.data.detail));
    }
    else if (actionType.current == "signup") {
    }
    else {
      console.error()
    }
  };

  return (
    <pre>
      <h1>The land of Giria</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Login:<span>     </span>
          <input autoComplete="text" name="login" required>
          </input>
        </p>
        <p>
          Password:<span>  </span>
          <input autoComplete="password" name="password" type="password" required></input>
        </p>
        <p> </p>
        <p>
          <span>          </span>
          <button className="fancy_button" onClick={handleSigninClick}>Sign in</button>
        </p>
        <p>
          <span>          </span>
          <button className="fancy_button" onClick={handleSignupClick}>Sign up</button>
        </p>
        <p> </p>
        <p className="error_report">{currentError}</p>
      </form>
    </pre>
  )
}
