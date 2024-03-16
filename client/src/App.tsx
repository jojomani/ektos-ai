import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import UseCaseSelectionPage from "./pages/UseCaseSelectionPage";
import FinancialUseCasePage from "./pages/FinancialUseCasePage";
import HealthcareUseCasePage from "./pages/HealthcareUseCasePage";
import HRUseCasePage from "./pages/HRUseCasePage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/use-cases" component={UseCaseSelectionPage} />
        <Route path="/financial" component={FinancialUseCasePage} />
        <Route path="/healthcare" component={HealthcareUseCasePage} />
        <Route path="/hr" component={HRUseCasePage} />
      </Switch>
    </Router>
  );
};

export default App;