import React from "react";
import { Col, Row } from "react-bootstrap";
import Rolls from "../components/Rolls";
import Score from "../components/Score";

const GameScreen = () => {
  return (
    <Row>
      <Col className='mt-2'>
        <Rolls />
        <Score />
      </Col>
    </Row>
  );
};

export default GameScreen;
