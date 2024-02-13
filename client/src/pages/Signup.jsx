import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { validateEmail, validatePassword } from "../utils/auth";
import Container from "react-bootstrap/Container";
import { main } from "@popperjs/core";
import backgroundImage from "../assets/signup.jpg";

const Signup = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState(false);
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    setTouched(true);
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);
    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data, "response");
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main
    style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)), url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
    }}
    >
    <Container className="d-flex justify-content-center">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3 formBasicEmail" controlId="usernameInput">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={userFormData.username}
            onChange={handleInputChange}
            style={{ backgroundColor: "black", color: "white" }}
          />
        </Form.Group>

        <Form.Group className="mb-3 formBasicEmail" controlId="emailInput">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={userFormData.email}
            onChange={handleInputChange}
            isInvalid={touched && !validateEmail(userFormData.email)}
            style={{ backgroundColor: "black", color: "white" }}
          />
          <Form.Control.Feedback type="invalid" style={{ color: '#000' }}>
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={userFormData.password}
            onChange={handleInputChange}
            isInvalid={touched && !validatePassword(userFormData.password)}
            style={{ backgroundColor: "black", color: "white" }}
          />
          <Form.Control.Feedback type="invalid"style={{ color: '#000' }}>
            Password must contain at least one special character, one uppercase
            letter, and one number.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="dark" type="submit" style={{ boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.5)' }}>
          Signup
        </Button>
      </Form>
    </Container>
    </main>
  );
};

export default Signup;