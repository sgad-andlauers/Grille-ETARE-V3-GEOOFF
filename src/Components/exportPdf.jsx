import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink
} from "@react-pdf/renderer";
import FakeWebPrevData from "../fakeData/FakeWebPrevData";

export default function Pdf() {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4"
    },
    section: {
      marginTop: 20,
      margin: 10,
      padding: 10
    },
    title: {
      marginBottom: 90,
      fontSize: 24,
      textAlign: "center"
    }
  });

  // Create Document Component
  const MyDocument = () => (
    <Document>
      {FakeWebPrevData.map((row) => (
        <Page size="A4" style={styles.page} key={row.id}>
          <View style={styles.section}>
            <Text style={styles.title}>Nom de l'entreprise : {row.nom}</Text>
          </View>
          <View style={styles.section}>
            <Text>adresse de l'entreprise : {row.adressePostale}</Text>
            <Text> validation de la commition : {row.valide}</Text>
            <Text> date de validation : {row.dateValide}</Text>
            <Text> nature de l'activité : {row.activite.nature}</Text>
            <Text> type de l'activité : {row.activite.type}</Text>
            <Text>classement de l'activité : {row.activite.classement}</Text>
          </View>
        </Page>
      ))}
    </Document>
  );
  const PDF = () => (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Export to pdf"
        }
      </PDFDownloadLink>
    </div>
  );

  return (
    <div>
      <PDF />
    </div>
  );
}
// Create styles
