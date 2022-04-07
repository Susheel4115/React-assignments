import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const employee = {
  name: "Tom",
  location: "New York",
  bloodGroup: "B+",
  age: 28,
  profileImg: "https://www.w3schools.com/howto/img_avatar.png",
};

ReactDOM.render(
  <React.StrictMode>
    <App employee={employee} />
  </React.StrictMode>,
  document.getElementById("root")
);
