import { Page, View, Text, Document, StyleSheet } from "@react-pdf/renderer";
import { JSX } from "react";
import { PDFViewer } from "@react-pdf/renderer";

export default function ResumePDF() : JSX.Element {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#ffffff",
      alignItems: "center", 
      justifyContent: "center", 
    },
    section: {
      marginBottom: 20,
    },
    header: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 5,
    },
    contactInfo: {
      textAlign: "center",
      marginBottom: 20,
      fontSize: 12,
    },
    subheader: {
      fontSize: 18,
      borderBottom: "3 solid black",
      paddingBottom: 5,
      marginBottom: 15,
    },
    itemHeaderRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    itemHeader: {
      fontSize: 14,
      fontWeight: "bold",
    },
    itemSubheader: {
      fontSize: 12,
      fontStyle: "italic",
    },
    itemBody: {
      marginTop: 5,
      fontSize: 12,
    },
    listItem: {
      marginLeft: 20,
    },
  });

  return (
    <>
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text>Pratyush Rao</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
    </>
  )  
} 
// Styles