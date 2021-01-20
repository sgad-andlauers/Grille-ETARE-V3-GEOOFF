import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  title: {
    textAlign: "center",
    background: "#FF0000",
    color: "#fff"
  }
});

export default function Observation() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Observation
      </Typography>
      <TextareaAutosize
        rowsMax={4}
        aria-label="Observation"
        placeholder="Observation"
        id="ObservationBat"
        style={{ width: "99%" }}
        variant="outlined"
      />
    </div>
  );
}
