import React, { useState } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import axios from "axios";

const HealthcareUseCasePage: React.FC = () => {
  const [selectedDataset, setSelectedDataset] = useState("");

  const handleDatasetSelect = (dataset: string) => {
    setSelectedDataset(dataset);
  };

  const handleStartML = async () => {
    try {
      await axios.post("/api/ml/healthcare", { dataset: selectedDataset });
      // Handle success response
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Healthcare Use Case
      </Typography>
      <Typography variant="body1" gutterBottom>
        Select a dataset:
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleDatasetSelect("dataset1")}>
        Dataset 1
      </Button>
      <Button variant="contained" color="primary" onClick={() => handleDatasetSelect("dataset2")}>
        Dataset 2
      </Button>
      <Button variant="contained" color="primary" onClick={() => handleDatasetSelect("dataset3")}>
        Dataset 3
      </Button>
      {selectedDataset && (
        <Button variant="contained" color="secondary" onClick={handleStartML}>
          Start ML Process
        </Button>
      )}
    </Container>
  );
};

export default HealthcareUseCasePage;