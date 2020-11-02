import React from "react";
import { Inputs, Buttons } from "../Styles/forms";

export const Input = (props) => {
  return (
    <>
      <Inputs>
        <input type="text" placeholder="" />
        <label>{props.label}</label>
        <span className="focus-border"></span>
        <script>console.log("Hello");</script>
      </Inputs>
    </>
  );
};

export const Button = (props) => {
  return (
    <>
      <Buttons {...props}></Buttons>
    </>
  );
};
