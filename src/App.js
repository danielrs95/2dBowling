import React from "react";
import Rolls from "./components/Rolls";
import Score from "./components/Score";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Container>
        <Route path='/' component={HomeScreen} />
      </Container>
    </Router>
  );
};

export default App;
