import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";

const App = () => {
  return (
    <Router>
      <Container>
        <Route path='/game' component={GameScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/' component={HomeScreen} exact />
      </Container>
    </Router>
  );
};

export default App;
