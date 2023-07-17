import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionGroup({ body }) {
  console.log(body);
  return (
    <>
      {body.map((item, index) => {
        return (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>{item?.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item?.details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
