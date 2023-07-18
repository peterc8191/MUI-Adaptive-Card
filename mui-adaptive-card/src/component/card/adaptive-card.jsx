import { Card } from "@mui/material";
import React from "react";
import componentHandler from "../component-handler";
import "../adaptive.css";

function AdaptiveCard({ body, ...props }) {
  return (
    <Card className="sm-margin" {...props}>
      <div className="adaptive-card-container">
        {body.map((component) => {
          return componentHandler(component);
        })}
      </div>
    </Card>
  );
}

export default AdaptiveCard;
