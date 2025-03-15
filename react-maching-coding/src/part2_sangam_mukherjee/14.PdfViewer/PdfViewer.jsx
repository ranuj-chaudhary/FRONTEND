import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: '20px',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
const PdfViewer = () => {
  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text fixed>Section #1</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFViewer style={{ height: '90vh', width: '100%' }}>
      <MyDocument />
    </PDFViewer>
  );
};

export default PdfViewer;
