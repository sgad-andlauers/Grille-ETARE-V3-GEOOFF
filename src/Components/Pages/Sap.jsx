import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useLocalStorage } from "../hook/useLocalStorage";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    background: "#339966",
    color: "#fff"
  },
  subtitle: {
    textAlign: "center"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    justify: "center"
  }
}));

export default function Sap() {
  // local storage
  const [inputFields, setInputFields] = useLocalStorage("SAP", [
    {
      id: "sap1",
      effectifBat: "",
      propMaxPersPub: "Maximum Personnels",
      cibleIndirect: ""
    }
  ]);
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "effectifBat") {
      values[index].effectifBat = event.target.value;
    } else if (event.target.name === "propMaxPersPub") {
      values[index].propMaxPersPub = event.target.value;
    } else {
      values[index].cibleIndirect = event.target.value;
    }
    setInputFields(values);
  };

  // end local storage
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Secours à Personnes
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={classes.subtitle}>
        Quantité
      </Typography>
      {inputFields.map((inputField, index) => (
        <Grid container spacing={3} key={inputField.id}>
          <Grid item xs={12} sm={4}>
            <form>
              <TextField
                type="number"
                name="effectifBat"
                id="effectifBat"
                label="Effectif du bâtiment"
                min="1"
                variant="outlined"
                value={inputField.effectifBat}
                onChange={(event) => handleInputChange(index, event)}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </form>
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Proportion: maximum de personnel ou maximum de public
              </FormLabel>
              <RadioGroup
                aria-label="propMaxPersPub"
                name="propMaxPersPub"
                value={inputField.propMaxPersPub}
                onChange={(event) => handleInputChange(index, event)}
              >
                <FormControlLabel
                  value="Maximum Personnels"
                  control={<Radio />}
                  label="Maximum Personnels"
                />
                <FormControlLabel
                  value="Maximum Public"
                  control={<Radio />}
                  label="Maximum Public"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="selectCiblesIndirects">
                cibels Indirectes
              </InputLabel>
              <Select
                labelId="selectCiblesIndirects"
                name="cibleIndirect"
                id="selectCiblesIndirects"
                value={inputField.cibleIndirect}
                onChange={(event) => handleInputChange(index, event)}
                label="cibles Indirectes"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"ZUDàP"}>
                  Zone urbaine dense à proximmité
                </MenuItem>
                <MenuItem value={"ZUFDàP"}>
                  Zone urbaine de faible densité à proximité
                </MenuItem>
                <MenuItem value={"ZI"}>Zone industrialisée</MenuItem>
                <MenuItem value={"ZNU"}>Zone non urbanisée</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      ))}
      <Typography variant="subtitle1" gutterBottom className={classes.subtitle}>
        Qualité
      </Typography>
    </React.Fragment>
  );
}
