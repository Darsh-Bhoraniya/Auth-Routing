import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid className="min-vh-100 bg-primary d-flex justify-content-center align-items-center">
      <Row className="w-100">
        {/* Left Column: Card with Welcome Message and Buttons */}
        <Col lg={6} className="d-flex justify-content-center">
          <Card className="shadow-lg p-4 text-center w-75" style={{ borderRadius: '15px', backgroundColor: '#212529' }}>
            <Card.Body>
              <h1 className="display-4 text-light mb-4">Welcome to BrainyBeam!</h1>
              <p className="lead text-light mb-4">
                A platform to manage your projects and track progress in real-time.
              </p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/login">
                  <Button variant="light" size="lg" className="rounded-pill">
                    Go to Login
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="success" size="lg" className="rounded-pill">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column: Placeholder Logo Image */}
        <Col lg={6} className="d-none d-lg-flex justify-content-center align-items-center">
          <img
            src="https://www.brainybeam.com/img/logo.png"
            alt="BrainyBeam Logo"
            className="img-fluid"
            style={{ maxWidth: '80%' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
