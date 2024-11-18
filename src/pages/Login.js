import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { Button, Container, Form, Alert } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      login(username, password);
      navigate('/dashboard');  // Redirect to dashboard if credentials are correct
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleLogin} block>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
