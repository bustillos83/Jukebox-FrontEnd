import React from "react";

export default function SignUp() {
  const signUp = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_BACKEND_URL + "/users/signup", {
      method: "POST",
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        // console.log(resJson);
      });
  };

  return (
    <div>
      <form component={"div"} onSubmit={signUp} className="signup-form">
        <label className="username" htmlFor="username">
          Username:
        </label>
        <input type="text" id="username" name="username" />
        <br />
        <label className="email" htmlFor="email">
          Email:
        </label>
        <input type="text" id="email" name="email" />
        <br />
        <label className="password" htmlFor="password">
          Password:
        </label>
        <input type="password" id="password" name="password" />
        <br />
        <input type="submit" value="Sign Up" className="submit" />
      </form>
    </div>
  );
}
