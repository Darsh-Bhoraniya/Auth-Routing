import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useAuth } from '../components/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-5" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Welcome to the Dashboard</h2>
        <Button variant="danger" onClick={logout} block>
          Logout
        </Button>
      </div>
    </Container>
  );
};

export default Dashboard;
