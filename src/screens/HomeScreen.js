import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
