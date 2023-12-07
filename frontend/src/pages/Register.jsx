// Register.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import userIcon from "../assets/images/user.png";

const Register = () => {
  const [user, setUser] = useState({
    cin: "",
    name: "",
    email: "",
    password: "",
    role: "", 
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3006/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // Redirect to the login page after successful registration
      navigate("/login");
    } catch (error) {
      setError("Registration failed");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="register__container">
              <div className="register__form">
                <div className="user">
                  <img src={userIcon} alt="user icon" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleRegister}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="CIN"
                      required
                      id="cin"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      id="name"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="role"
                      required
                      id="role"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn primary__btn auth__btn"
                    type="submit"
                  >
                    Register
                  </Button>
                </Form>
                {error && <p className="error-message">{error}</p>}
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
