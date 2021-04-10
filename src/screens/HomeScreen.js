import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const StartGameScreen = () => {
  return (
    <Container className='start-page d-flex'>
      <div>
        <h1>Bowling 2D</h1>
        <Link to='/login'>
          <Button type='submit' varian='primary'>
            New Game
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default StartGameScreen;
