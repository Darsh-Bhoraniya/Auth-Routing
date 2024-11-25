import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Button, Container, Form, Alert, Row, Col } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showHint, setShowHint] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      login(username, password);
      navigate("/dashboard"); // Redirect to the dashboard
    } else {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div style={{ backgroundColor: "#6c5ce7", minHeight: "100vh" }}>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="shadow-lg rounded" style={{ maxWidth: "800px", width: "100%" }}>
          {/* Left Section - Welcome Message */}
          <Col
            md={6}
            className="d-none d-md-flex flex-column justify-content-center align-items-center text-light"
            style={{
              backgroundColor: "#5e54ac",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <h1>Hello, Welcome!</h1>
            <p className="text-center">
              Please login to continue. Use your credentials or sign up if you don't have an account.
            </p>
          </Col>

          {/* Right Section - Login Form */}
          <Col md={6} className="bg-white p-4 rounded">
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              {/* Username */}
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text
                  className="text-primary cursor-pointer"
                  onClick={() => setShowHint(!showHint)}
                  style={{ cursor: "pointer" }}
                >
                  {showHint ? "Hide Hint" : "Show Password Hint"}
                </Form.Text>
                {showHint && <p className="text-muted">Hint: Username and password are both "admin".</p>}
              </Form.Group>

              {/* Login Button */}
              <Button variant="primary" onClick={handleLogin} className="w-100">
                Login
              </Button>
            </Form>

            <div className="text-center mt-3">
              <a href="#forgot-password" className="text-secondary">
                Forgot Password?
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
