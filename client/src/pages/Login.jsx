import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  FormControl,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import backgroundImage from "../assets/Login.jpg";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser({ variables: { userFormData } });

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      password: "",
    });
  };

  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container className="d-flex justify-content-center">
        <Row>
          <Col md={12}>
            <Form validated={validated} onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Username</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "black", color: "white" }}
                  type="username"
                  name="username"
                  onChange={handleInputChange}
                  value={userFormData.username}
                  required
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "black", color: "white" }}
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                  required
                />
              </Form.Group>

              <Button variant="light" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Login;
