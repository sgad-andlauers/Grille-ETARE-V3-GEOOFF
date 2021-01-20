import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";

import Infra from "../Components/Pages/Infra";
import Sap from "../Components/Pages/Sap";
import Inc from "../Components/Pages/Inc";
import Rt from "../Components/Pages/Rt";
import Ms from "../Components/Pages/Ms";
import Observation from "../Components/Observation";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Infra />;
    case 1:
      return <Sap />;
    case 2:
      return <Inc />;
    case 3:
      return <Rt />;
    case 4:
      return <Ms />;
    case 5:
      return <Observation />;
    default:
      return "Etape non reconnue";
  }
}

export default function HomePageMobil() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <React.Fragment>
      <Typography className={classes.instructions}>
        {getStepContent(activeStep)}
      </Typography>
      <MobileStepper
        variant="dots"
        steps={6}
        position="bottom"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </React.Fragment>
  );
}
