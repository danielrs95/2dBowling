import React from "react";
import Rolls from "./components/Rolls";
import Score from "./components/Score";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Container>
        <Route path='/login' component={LoginScreen} />
        <Route path='/' component={HomeScreen} exact />
      </Container>
    </Router>
  );
};

export default App;
