import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1>Welcome to the Home Page</h1>
        <Link to="/login">
          <Button variant="primary" size="lg">
            Go to Login
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
