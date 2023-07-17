import React from "react";
import componentHandler from "./component-handler";
import "./adaptive.css";

function Adaptive({ adaptiveJson }) {
  return (
    <>
      {adaptiveJson?.body.map((component) => {
        return componentHandler(component);
      })}
    </>
  );
}

export default Adaptive;
