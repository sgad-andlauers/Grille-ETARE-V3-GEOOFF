import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    width: "100vh"
  },
  paper1: {
    color: "#fff",
    textAlign: "center",
    background: "#339966"
  },
  paper2: {
    color: "#fff ",
    textAlign: "center",
    background: "#FF0000"
  },
  paper3: {
    color: "#fff ",
    textAlign: "center",
    background: "#ff9900"
  },
  paper4: {
    color: "#fff",
    textAlign: "center",
    background: "#969696"
  },
  paper5: {
    color: "#fff",
    textAlign: "center",
    background: "#3366FF"
  }
}));

export default function GridInfoLevel() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="space-around"
        position="fixed"
      >
        <Grid item xs={2}>
          <Paper className={classes.paper1}>
            SAP
            <br /> 1
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper2}>
            INC
            <br /> 4
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper3}>
            RT
            <br /> 5
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper4}>
            INFRA
            <br /> +
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper5}>
            MS
            <br /> +
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
