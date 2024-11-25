import React from "react";
import { Container, ProgressBar, Navbar, Nav, Row, Col, Button, Card } from "react-bootstrap";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import { FaGithub, FaCode } from "react-icons/fa"; // Import icons

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function to clear authentication
    navigate("/login"); // Redirect user to the login page
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-danger text-light p-3">
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="text-light">
              <img
                src="https://via.placeholder.com/40" // Replace with your logo URL
                alt="Logo"
                className="me-2"
              />
              BrainyBeam
            </h4>
            <nav>
              <a href="#github" className="text-light me-3">
                GitHub
              </a>
              <a href="#twitter" className="text-light">
                Twitter
              </a>
            </nav>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container className="my-4">
        <Row>
          {/* Profile Section */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body className="text-center">
                <img
                  src="https://via.placeholder.com/150" // Replace with user profile picture URL
                  alt="Profile"
                  className="rounded-circle mb-3"
                  style={{ width: "120px", height: "120px" }}
                />
                <h5>Darsh Bhoraniya</h5>
                <p className="text-muted">Full Stack Developer</p>
                <p className="text-muted">Rajkot, Gujarat</p>
                <Button variant="primary" className="mb-3">
                  Message
                </Button>
                <div className="d-flex flex-column">
                  <a
                    href="https://github.com/Darsh-Bhoraniya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaGithub className="me-2" /> GitHub: Darsh_Bhoraniya
                  </a>
                  <a
                    href="https://leetcode.com/u/Darsh_Bhoraniya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaCode className="me-2" /> LeetCode
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* User Details and Project Status */}
          <Col md={8}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h5>Full Name</h5>
                <p>Darsh Bhoraniya</p>
                <h5>Email</h5>
                <p>darshpatel269@gmail.com</p>
                <h5>Phone</h5>
                <p>8160071270</p>
                <h5>Address</h5>
                <p>Rajkot, Gujarat</p>
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </Card.Body>
            </Card>
            <Row>
              <Col md={6}>
                <Card className="shadow-sm mb-4">
                  <Card.Body>
                    <h6>Project Status</h6>
                    <p>Web Design</p>
                    <ProgressBar now={80} label="80%" />
                    <p className="mt-2">Database</p>
                    <ProgressBar now={60} label="60%" />
                    <p className="mt-2">One Page</p>
                    <ProgressBar now={90} label="90%" />
                    <p className="mt-2">Mobile Template</p>
                    <ProgressBar now={70} label="70%" />
                    <p className="mt-2">Backend API</p>
                    <ProgressBar now={50} label="50%" />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="shadow-sm mb-4">
                  <Card.Body>
                    <h6>Instruction</h6>
                    <ul>
                      <li>Step 1: Login to access the Dashboard.</li>
                      <li>Step 2: Without Login can`t access Dashboard</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center bg-danger text-light py-3">
        <Container>
          <p className="mb-0">© Darsh Bhoraniya, 2024. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Dashboard;
