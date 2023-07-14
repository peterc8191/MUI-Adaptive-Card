import { Card } from "@mui/material";
import React from "react";
import componentHandler from "./component-handler";
import "./adaptive-card.css";

function AdaptiveCard({ adaptiveJson }) {
  return (
    <Card>
      <div className="adaptive-card-container">
        {adaptiveJson?.body[0].items.map((component) => {
          return componentHandler(component);
        })}
      </div>
    </Card>
  );
}

export default AdaptiveCard;
