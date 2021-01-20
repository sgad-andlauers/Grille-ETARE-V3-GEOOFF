import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    background: "#969696",
    color: "#fff"
  },
  subtitle: {
    textAlign: "center"
  }
}));
export default function Infra() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Infrasructure
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={classes.subtitle}>
        Identification
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="NomBatiment"
            name="NomBatiment"
            label="Nom du bâtiment"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="ActiviteBat"
            name="ActiviteBat"
            label="Activité du Bâtiment"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="SurfaceBat"
            type="Number"
            name="SurfaceBat"
            label="Surface du Bâtiment en m²"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="Number"
            id="NbNiveauSup"
            name="NbNiveauSup"
            label="Nombre de Niveau Supérieur"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="Number"
            id="NbNiveauInf"
            name="NbNiveauInf"
            label="Nombre Niveau Inférieur "
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="Number"
            id="HauteurBat"
            name="HauteurBat"
            label="Hauteur du Bâtiment"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="Number"
            id="HauteurStock"
            name="HauteurStock"
            label="Hauteur du Stockage"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            id="MateriauxBat"
            options={Materiaux}
            getOptionLabel={(option) => option.ref}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Matériaux de construction"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const Materiaux = [
  { ref: "Traditionnel (briques / béton)" },
  { ref: "Bois" },
  { ref: "Métal" },
  { ref: "Mixte" }
];
