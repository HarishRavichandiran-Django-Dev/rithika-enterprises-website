import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Rithika Enterprises</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
