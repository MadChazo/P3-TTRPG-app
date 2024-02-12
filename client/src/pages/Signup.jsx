import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { validateEmail, validatePassword } from "../utils/auth";

const Signup = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
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
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3 formBasicEmail" controlId="usernameInput">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          value={userFormData.username}
          onChange={handleInputChange}
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
          isInvalid={!validateEmail(userFormData.email)}
        />
        <Form.Control.Feedback type="invalid">
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
          isInvalid={!validatePassword(userFormData.password)}
        />
        <Form.Control.Feedback type="invalid">
          Password must contain at least one special character, one uppercase
          letter, and one number.
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
  );
};

export default Signup;
