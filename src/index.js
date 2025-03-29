import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Import "client" from ReactDOM
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot
root.render(React.createElement(App));
