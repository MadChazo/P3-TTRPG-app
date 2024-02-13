import { Form, Row, Col, Container } from "react-bootstrap";
import React from "react";

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

    try {
      const { data } = await addCharacter({
        variables: {
          name: characterInput.name,
          classRole: characterInput.classRole,
          backstory: characterInput.backstory,
          stats: {
            strength: characterInput.strength,
            dexterity: characterInput.dexterity,
            constitution: characterInput.constitution,
            intelligence: characterInput.intelligence,
            wisdom: characterInput.wisdom,
            charisma: characterInput.charisma,
          },
        },
      });

      setCharacterInput ("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Row className="gap-4 w-full py-2 justify-content-md-center">
        <Col md="auto">
          <Form.Group>
            <Form.Label
              className="text-white"
              style={{ display: "block", textAlign: "center" }}
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
              className="text-white"
              style={{ display: "block", textAlign: "center" }}
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
              className="text-white"
              style={{ display: "block", textAlign: "center" }}
            >
              Back Story
            </Form.Label>
            <Form.Control
              style={{
                backgroundColor: "black",
                color: "white",
                marginBottom: "10px",
                borderRadius: "10px",
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
                className="text-white"
                style={{ display: "block", textAlign: "center" }}
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
                className="text-white"
                style={{ display: "block", textAlign: "center" }}
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
                className="text-white"
                style={{ display: "block", textAlign: "center" }}
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
                className="text-white"
                style={{ display: "block", textAlign: "center" }}
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
                className="text-white"
                style={{ display: "block", textAlign: "center" }}
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
                className="text-white"
                style={{ display: "block", textAlign: "center" }}
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
      </Container>
    </Form>
  );
};

export default CharForm;
