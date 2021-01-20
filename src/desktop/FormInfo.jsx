//import de librairie
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

//import du projet
import FakeWebPrevData from "../fakeData/FakeWebPrevData";
import DialogBoxDeskTop from "./DialogBoxDesktop";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  Bat: {
    marginTop: theme.spacing(3)
  },
  formContainer: {
    borderBottom: "2px dotted red"
  }
}));

export default function FormInfo() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [selectedWebprev, setSelectedWebprev] = useState(null);
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleInputChange = (event, value, reason) => {
    if (reason === "select-option") {
      setSelectedWebprev(value);
    } else if (reason === "clear") {
      setSelectedWebprev(null);
    }
  };
  const name = state.checkedA ? (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="nomEnreprise"
            name="nomEnreprise"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
    </div>
  ) : null;
  const adresse = state.checkedB ? (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="adresse"
            name="adresse"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
    </div>
  ) : null;
  const longitude = state.checkedC ? (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            type="number"
            id="longitude"
            name="longitude"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
    </div>
  ) : null;
  const latitude = state.checkedC ? (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            type="number"
            id="latitude"
            name="latitude"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
    </div>
  ) : null;
  const natureActivite = state.checkedD ? (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="natureActivite"
            name="natureActivite"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
    </div>
  ) : null;
  const typeActivite = state.checkedD ? (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="typeActivite"
            name="typeActivite"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
    </div>
  ) : null;
  const classementActivite = state.checkedD ? (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="ClassementActivite"
            name="ClassementActivite"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
      </Grid>
    </div>
  ) : null;

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid className={classes.root}>
          <Autocomplete
            id="combo-box-demo"
            options={FakeWebPrevData}
            getOptionLabel={(option) => option.nom}
            style={{ width: 350 }}
            onChange={(event, value, reason) =>
              handleInputChange(event, value, reason)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Rechercher dans la base de données"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid className={classes.root}>
          <IconButton color="secondary" aria-label="valide" component="span">
            <CheckIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="newItem" component="span">
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
      <br />
      <br />
      <div id="newItem" className={classes.newItem}></div>
      {selectedWebprev && (
        <div>
          <Typography variant="h6" gutterBottom>
            Informations Générales de {selectedWebprev.nom}
          </Typography>
          <Grid
            container
            spacing={2}
            className={classes.formContainer}
            key={selectedWebprev.id}
          >
            <Grid item xs={4} sm={6}>
              <Typography variant="subtitle1" gutterBottom>
                Nom de l'entreprise
              </Typography>
              <Typography>
                <Link href="#" onClick={preventDefault}>
                  {selectedWebprev.nom}
                </Link>
              </Typography>
              <div>{name}</div>
            </Grid>
            <Grid item xs={5}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    name="checkedA"
                    value="yes"
                    checked={state.checkedA}
                    onChange={handleChange}
                  />
                }
              />
            </Grid>
            <Grid item xs={4} sm={6}>
              <Typography variant="subtitle1" gutterBottom>
                Adresse Postale
              </Typography>
              <Typography>
                <Link href="#" onClick={preventDefault}>
                  {selectedWebprev.adressePostale}
                </Link>
              </Typography>
              <div>{adresse}</div>
            </Grid>
            <Grid item xs={5}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    name="checkedB"
                    value="yes"
                    checked={state.checkedB}
                    onChange={handleChange}
                  />
                }
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="subtitle1" gutterBottom>
                Longitude
              </Typography>
              <Typography>
                <Link href="#" onClick={preventDefault}>
                  {selectedWebprev.coordonnees.x}
                </Link>
              </Typography>
              <div>{longitude}</div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="subtitle1" gutterBottom>
                Latitude
              </Typography>
              <Typography>
                <Link href="#" onClick={preventDefault}>
                  {selectedWebprev.coordonnees.y}
                </Link>
              </Typography>
              <div>{latitude}</div>
            </Grid>
            <Grid item xs={5}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    name="checkedC"
                    value="yes"
                    checked={state.checkedC}
                    onChange={handleChange}
                  />
                }
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Typography variant="subtitle1" gutterBottom>
                Nature de l'activité
              </Typography>
              <Typography>
                <Link href="#" onClick={preventDefault}>
                  {selectedWebprev.activite.nature}
                </Link>
              </Typography>
              <div>{natureActivite}</div>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Typography variant="subtitle1" gutterBottom>
                Type de l'activité
              </Typography>
              <Typography>
                <Link href="#" onClick={preventDefault}>
                  {selectedWebprev.activite.type}
                </Link>
              </Typography>
              <div>{typeActivite}</div>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Typography variant="subtitle1" gutterBottom>
                Classement de l'activité
              </Typography>
              <Typography>
                <Link href="#" onClick={preventDefault}>
                  {selectedWebprev.activite.classement}
                </Link>
              </Typography>
              <div>{classementActivite}</div>
            </Grid>
            <Grid item xs={5}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    name="checkedD"
                    value="yes"
                    checked={state.checkedD}
                    onChange={handleChange}
                  />
                }
              />
            </Grid>
          </Grid>
          <div className={classes.Bat}>
            <DialogBoxDeskTop />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
