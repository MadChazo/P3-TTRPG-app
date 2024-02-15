import { Form, Row, Col, Container, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_CHARACTER } from "../utils/mutations";
import { QUERY_CHARACTERS, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const CharForm = () => {
  const [characterInput, setCharacterInput] = useState("");

  const [addCharacter, { error }] = useMutation(ADD_CHARACTER, {
    refetchQueries: [QUERY_CHARACTERS, "getCharacters", QUERY_ME, "me"],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCharacterInput({
      ...characterInput,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Input: ", characterInput);
    console.log("Auth: ", Auth.getProfile());
    characterInput.strength = parseInt(characterInput.strength);
    characterInput.dexterity = parseInt(characterInput.dexterity);
    characterInput.constitution = parseInt(characterInput.constitution);
    characterInput.intelligence = parseInt(characterInput.intelligence);
    characterInput.wisdom = parseInt(characterInput.wisdom);
    characterInput.charisma = parseInt(characterInput.charisma);
    try {
      const { data } = await addCharacter({
        variables: {
          ...characterInput,
          user: Auth.getProfile().data._id,
        },
      });

      setCharacterInput("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <Form onSubmit={handleFormSubmit}>
          <Row className="gap-4 w-full py-2 justify-content-md-center">
            <Col md="auto">
              <Form.Group>
                <Form.Label
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Character Name
                </Form.Label>
                <Form.Control
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "10px",
                  }}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  required
                />
              </Form.Group>
            </Col>
            <Col md="auto">
              <Form.Group>
                <Form.Label
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Class
                </Form.Label>
                <Form.Control
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "10px",
                  }}
                  onChange={handleInputChange}
                  type="text"
                  name="classRole"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md={10}>
              <Form.Group>
                <Form.Label
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Back Story
                </Form.Label>
                <Form.Control
                  style={{
                    backgroundColor: "black",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  onChange={handleInputChange}
                  as="textarea"
                  rows="10"
                  name="backstory"
                />
              </Form.Group>
            </Col>
          </Row>
          <Container className="d-flex flex-column align-items-center min-vh-100 pb-5">
            <Row>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Strength
                  </Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginBottom: "10px",
                      borderRadius: "10px",
                    }}
                    onChange={handleInputChange}
                    type="number"
                    name="strength"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Dexterity
                  </Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginBottom: "10px",
                      borderRadius: "10px",
                    }}
                    onChange={handleInputChange}
                    type="number"
                    name="dexterity"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Constitution
                  </Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "10px",
                    }}
                    onChange={handleInputChange}
                    type="number"
                    name="constitution"
                    required
                  />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Intelligence
                  </Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginBottom: "10px",
                      borderRadius: "10px",
                    }}
                    onChange={handleInputChange}
                    type="number"
                    name="intelligence"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Wisdom
                  </Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginBottom: "10px",
                      borderRadius: "10px",
                    }}
                    onChange={handleInputChange}
                    type="number"
                    name="wisdom"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Charisma
                  </Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "10px",
                    }}
                    onChange={handleInputChange}
                    type="number"
                    name="charisma"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button
              variant="dark"
              type="submit"
              style={{ boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.5)" }}
            >
              Create
            </Button>
          </Container>
        </Form>
      ) : (
        <Card bg="dark" text="white" className="mb-3">
          <Card.Body>
            <Card.Text>
              You need to be logged in to create a character. Please{" "}
              <Link to="/login">login</Link> or <Link to="/signup">signup</Link>
              .
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default CharForm;
