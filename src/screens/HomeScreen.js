import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId='player1'>
              <Form.Label>Player 1</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='player2'>
              <Form.Label>Player 2</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
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
