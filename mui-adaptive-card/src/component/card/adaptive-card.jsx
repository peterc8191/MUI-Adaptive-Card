import { Card } from "@mui/material";
import React from "react";
import componentHandler from "../component-handler";
import "./adaptive.css";

function AdaptiveCard({ body }) {
  return (
    <Card className="sm-margin">
      <div className="adaptive-card-container">
        {body.map((component) => {
          return componentHandler(component);
        })}
      </div>
    </Card>
  );
}

export default AdaptiveCard;
