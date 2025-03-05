import React from "react";

export default function LoginForm({ setLogin }: { setLogin: any }) {
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
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
          <button className="fancy_button">Login</button>
        </p>
        <p>
          <span>          </span>
          <button className="fancy_button">Sign up</button>
        </p>
      </form>
    </pre>
  )
}
