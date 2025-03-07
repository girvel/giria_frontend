import React, { useEffect, useRef, useState } from "react";
import { login, fetchPlayerInfo, fetchResources } from "../model/api";
import './LoginForm.css';


export default function LoginForm({ setPlayerInfo, setResources }: { setPlayerInfo: any, setResources: any }) {
  const actionType = useRef<null | "signin" | "signup">(null);
  const [currentError, setCurrentError] = useState("");

  const loginSequence = (loginValue: string, password: string) => {
    login(loginValue, password)
      .then(async () => {
        const playerInfo = await fetchPlayerInfo();
        const resources = await fetchResources();

        setPlayerInfo(playerInfo);
        setResources(resources);
      })
      .catch(err => {
        console.error(err);
        setCurrentError(err?.response?.data?.detail ?? "Unknown error")
      });
  };

  useEffect(() => {
    if (process.env.NODE_ENV == "development") {
      loginSequence("girvel", "girvel");
    }
  });

  const handleSigninClick = (_event: React.SyntheticEvent<HTMLButtonElement>) => {
    actionType.current = "signin";
  };

  const handleSignupClick = (_event: React.SyntheticEvent<HTMLButtonElement>) => {
    actionType.current = "signup";
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const loginValue = formData.get("login") as string
    const password = formData.get("password") as string

    if (actionType.current == "signin") {
      loginSequence(loginValue, password);
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
      <form onSubmit={handleSubmit} method="dialog">
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
