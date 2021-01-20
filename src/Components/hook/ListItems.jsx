import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Link } from "react-router-dom";

import AssignmentIcon from "@material-ui/icons/Assignment";

export const mainListItems = (
  <div>
    <Link to="/" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText
          primary="Tableau de bord"
          style={{
            color: "black"
          }}
        />
      </ListItem>
    </Link>
    <Link to="/search" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <LocationSearchingIcon />
        </ListItemIcon>
        <ListItemText
          primary="Rechercher un Site"
          style={{
            color: "black"
          }}
        />
      </ListItem>
    </Link>
    <Link to="" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText
          primary="Fomulaire clasique"
          style={{
            color: "black"
          }}
        />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
