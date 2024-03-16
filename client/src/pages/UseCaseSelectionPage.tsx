import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const UseCaseSelectionPage: React.FC = () => {
  const history = useHistory();

  const handleUseCaseClick = (useCase: string) => {
    history.push(`/${useCase}`);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Select a Use Case
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => handleUseCaseClick("financial")}>
            Financial
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => handleUseCaseClick("healthcare")}>
            Healthcare
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => handleUseCaseClick("hr")}>
            HR
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UseCaseSelectionPage;