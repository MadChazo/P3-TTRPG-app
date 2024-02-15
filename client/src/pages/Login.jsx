import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
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
      let username = userFormData.username;
      let password = userFormData.password;
      console.log(username, password);
      const response = await loginUser({ variables: { username, password } });
      console.log(response, "response");
      Auth.login(response.data.loginUser.token);
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
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)), url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container className="d-flex justify-content-center">
        <Row>
          <Col md={12}>
            {showAlert && (
              <div className="alert alert-danger">
                Halt adventurer! Your Username or Password was incorrect!
              </div>
            )}
            <Card bg="black" text="white" className="mb-3 text-center mt-5">
              <Card.Body>
                <Card.Text>
                  Welcome, brave adventurer, to QuestBook! As you step into our
                  digital realm, prepare to embark on epic quests, forge
                  alliances, and unravel mysteries. Whether you’re a seasoned
                  dungeon master or a fledgling sorcerer, this is your
                  sanctuary—a place where dragons breathe fire, taverns echo
                  with laughter, and magic pulses through every pixel.
                </Card.Text>
              </Card.Body>
            </Card>
            <Form validated={validated} onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold", color: "black" }}>
                  Username
                </Form.Label>
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
                <Form.Label style={{ fontWeight: "bold", color: "black" }}>
                  Password
                </Form.Label>
                <Form.Control
                  style={{ backgroundColor: "black", color: "white" }}
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                  required
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                style={{ boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.5)" }}
              >
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
