import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1 className="display-3">Rithika Enterprises</h1>
            <p className="lead">
              We specialize in infrastructure design using metal.
            </p>
            <Button variant="primary" size="lg" className="mt-4">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;