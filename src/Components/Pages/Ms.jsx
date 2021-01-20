import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    background: "#3366FF",
    color: "#fff"
  },
  subtitle: {
    textAlign: "center"
  }
}));
export default function Homepage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Moyens de secours
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={classes.subtitle}>
        Dispositifs d'extinctions
      </Typography>
    </React.Fragment>
  );
}
