import React from "react";
import componentHandler from "./component-handler";
import "./adaptive-card.css";

function Container({ items }) {
  return (
    <div className="adaptive-container sm-margin">
      {items.map((component) => {
        return componentHandler(component);
      })}
    </div>
  );
}

export default Container;
