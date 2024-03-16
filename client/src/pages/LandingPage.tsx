import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";

const LandingPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Ektos AI
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Ektos AI is an innovative platform designed to tackle the pervasive issue of biases in artificial intelligence (AI) systems, particularly those used in decision-making processes.
          </Typography>
          <Button variant="contained" color="primary" href="/signup">
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Add an image or illustration */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;