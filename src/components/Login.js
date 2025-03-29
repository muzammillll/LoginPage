import React from "react";

const Login = () => {
  return React.createElement(
    "div",
    { className: "login-container" },
    React.createElement("h2", null, "Login"),
    React.createElement(
      "form",
      { className: "login-form" },
      React.createElement("label", { htmlFor: "username" }, "Username: "),
      React.createElement("input", { type: "text", id: "username", name: "username" }),
      React.createElement("br"),
      React.createElement("label", { htmlFor: "password" }, "Password: "),
      React.createElement("input", { type: "password", id: "password", name: "password" }),
      React.createElement("br"),
      React.createElement("button", { type: "submit" }, "Submit")
    )
  );
};

export default Login;
