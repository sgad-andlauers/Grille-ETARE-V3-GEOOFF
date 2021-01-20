import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FakeWebPrevData from "../fakeData/FakeWebPrevData";
import Typography from "@material-ui/core/Typography";
import Pdf from "./exportPdf";

export default function Orders() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Historique des entreprises visités
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id entreprise</TableCell>
            <TableCell>Nom entreprise</TableCell>
            <TableCell>Adresse Postale</TableCell>
            <TableCell>Validation de la commition</TableCell>
            <TableCell> Date de validation </TableCell>
            <TableCell align="right">Export Pdf</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {FakeWebPrevData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.nom}</TableCell>
              <TableCell>{row.adressePostale}</TableCell>
              <TableCell>{row.valide}</TableCell>
              <TableCell>{row.dateValide}</TableCell>
              <TableCell align="right">
                <Pdf />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
