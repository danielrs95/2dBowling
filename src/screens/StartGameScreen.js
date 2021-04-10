import React from "react";
import { Button } from "react-bootstrap";

const StartGameScreen = () => {
  return (
    <div className='home-container'>
      <h1>Bowling 2D</h1>
      <Button type='submit' varian='primary'>
        New Game
      </Button>
    </div>
  );
};

export default StartGameScreen;
