import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/playerActions";

const HomeScreen = ({ history }) => {
  const [namePlayer1, setNamePlayer1] = useState("");
  const [namePlayer2, setNamePlayer2] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(namePlayer1, namePlayer2));
    history.push("/game");
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='player1'>
              <Form.Label>Player 1</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={namePlayer1}
                onChange={(e) => setNamePlayer1(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='player2'>
              <Form.Label>Player 2</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={namePlayer2}
                onChange={(e) => setNamePlayer2(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' varian='primary'>
              Play
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
