import { Form, Card, Row, Col, Container } from "react-bootstrap";
import React, { useState } from "react";

const CharForm = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Row className="gap-4 w-full py-2 justify-content-md-center">
        <Col md="auto">
          <Form.Group>
            <Card
              style={{
                backgroundColor: "grey",
                display: "inline-block",
                width: "100%",
                borderTopLeftRadius: "15px", 
                borderTopRightRadius: "15px",
                borderBottomLeftRadius: "0", 
                borderBottomRightRadius: "0",
              }}
            >
              <Card.Body style={{ padding: "5px" }}>
                <Form.Label className="text-white" style={{ display: "block", textAlign: "center" }}>Character Name</Form.Label>
              </Card.Body>
            </Card>
            <Form.Control
              style={{ backgroundColor: "black", color: "white",
              borderTopLeftRadius: "0px", 
              borderTopRightRadius: "0px",  }}
              type="text"
              name="name"
              required
            />
          </Form.Group>
        </Col>
        <Col md="auto">
          <Form.Group>
            <Card
              style={{
                backgroundColor: "grey",
                borderTopLeftRadius: "15px", 
                borderTopRightRadius: "15px",
                borderBottomLeftRadius: "0", 
                borderBottomRightRadius: "0",
              }}
            >
              <Card.Body style={{ padding: "5px" }}>
                <Form.Label className="text-white" style={{ display: "block", textAlign: "center", }}>Class</Form.Label>
              </Card.Body>
            </Card>
            <Form.Control
              style={{ backgroundColor: "black", color: "white",                
              borderTopLeftRadius: "0px", 
              borderTopRightRadius: "0px", 
             }}
              type="text"
              name="class"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      {/* <Row className="justify-content-md-center py-2">
        <Col md="auto">
          <Form.Group>
            <Card
              style={{
                backgroundColor: "grey",
                width: "100%",
                borderTopLeftRadius: "15px", 
                borderTopRightRadius: "15px",
              }}
            >
              <Card.Body style={{ padding: "5px" }}>
                <Form.Label className="text-white">Race</Form.Label>
              </Card.Body>
            </Card>
            <Form.Control
              style={{ backgroundColor: "black", color: "white" }}
              type="text"
              name="race"
            />
          </Form.Group>
        </Col>
      </Row> */}
      <Row className="justify-content-md-center">
        <Col md={10}>
          <Form.Group>
            <Card
              style={{
                backgroundColor: "grey",
                display: "inline-block",
                width: "100%",
                borderTopLeftRadius: "15px", 
                borderTopRightRadius: "15px",
                borderBottomLeftRadius: "0", 
                borderBottomRightRadius: "0",
              }}
            >
              <Card.Body style={{ padding: "5px" }}>
                <Form.Label className="text-white" style={{ display: "block", textAlign: "center" }}>Back Story</Form.Label>
              </Card.Body>
            </Card>
            <Form.Control
              style={{ backgroundColor: "black", color: "white", marginBottom: "10px",                
              borderTopLeftRadius: "0px", 
              borderTopRightRadius: "0px", 
              }}
              as="textarea"
              rows="10"
              name="story"
            />
          </Form.Group>
        </Col>
      </Row>
      <Container className="d-flex flex-column align-items-center min-vh-100 pb-5">
        <Row>
          <Col xs={12} md={6}>
            <Form.Group>
              <Card
                style={{
                  backgroundColor: "grey",
                  display: "inline-block",
                  // margin: "10px",
                  width: "100%",
                  borderTopLeftRadius: "15px", 
                  borderTopRightRadius: "15px",
                  borderBottomLeftRadius: "0", 
                  borderBottomRightRadius: "0",
                }}
              >
                <Card.Body style={{ padding: "5px" }}>
                  <Form.Label className="text-white" style={{ display: "block", textAlign: "center" }}>Strength</Form.Label>
                </Card.Body>
              </Card>
              <Form.Control
                style={{ backgroundColor: "black", color: "white", marginBottom: "10px",
                borderTopLeftRadius: "0px", 
                borderTopRightRadius: "0px", 
               }}
                type="number"
                name="strength"
                required
              />
            </Form.Group>
            <Form.Group>
              <Card
                style={{
                  backgroundColor: "grey",
                  display: "inline-block",
                  // margin: "10px",
                  width: "100%",
                  borderTopLeftRadius: "15px", 
                  borderTopRightRadius: "15px",
                  borderBottomLeftRadius: "0", 
                  borderBottomRightRadius: "0",
                }}
              >
                <Card.Body style={{ padding: "5px" }}>
                  <Form.Label className="text-white" style={{ display: "block", textAlign: "center" }}>Dexterity</Form.Label>
                </Card.Body>
              </Card>
              <Form.Control
                style={{ backgroundColor: "black", color: "white", marginBottom: "10px",
                borderTopLeftRadius: "0px", 
                borderTopRightRadius: "0px", 
               }}
                type="number"
                name="dexterity"
                required
              />
            </Form.Group>
            <Form.Group>
              <Card
                style={{
                  backgroundColor: "grey",
                  borderTopLeftRadius: "15px", 
                  borderTopRightRadius: "15px",
                  borderBottomLeftRadius: "0", 
                  borderBottomRightRadius: "0",
                }}
              >
                <Card.Body style={{ padding: "5px"  }}>
                  <Form.Label className="text-white" style={{ display: "block", textAlign: "center" }}>Constitution</Form.Label>
                </Card.Body>
              </Card>
              <Form.Control
                style={{ backgroundColor: "black", color: "white",                 
                borderTopLeftRadius: "0px", 
                borderTopRightRadius: "0px", 
                
               }}
                type="number"
                name="constitution"
                required
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group>
              <Card
                style={{
                  backgroundColor: "grey",
                  display: "inline-block",
                  // margin: "10px",
                  width: "100%",
                  borderTopLeftRadius: "15px", 
                  borderTopRightRadius: "15px",
                  borderBottomLeftRadius: "0", 
                  borderBottomRightRadius: "0",
                }}
              >
                <Card.Body style={{ padding: "5px" }}>
                  <Form.Label className="text-white" style={{ display: "block", textAlign: "center" }}>Intelligence</Form.Label>
                </Card.Body>
              </Card>
              <Form.Control
                style={{ backgroundColor: "black", color: "white", marginBottom: "10px",                borderTopLeftRadius: "0px", 
                borderTopRightRadius: "0px", 
               }}
                type="number"
                name="intelligence"
                required
              />
            </Form.Group>
            <Form.Group>
              <Card
                style={{
                  backgroundColor: "grey",
                  display: "inline-block",
                  // margin: "10px",
                  width: "100%",
                  borderTopLeftRadius: "15px", 
                  borderTopRightRadius: "15px",
                  borderBottomLeftRadius: "0", 
                  borderBottomRightRadius: "0",
                }}
              >
                <Card.Body style={{ padding: "5px" }}>
                  <Form.Label className="text-white" style={{ display: "block", textAlign: "center" }}>Wisdom</Form.Label>
                </Card.Body>
              </Card>
              <Form.Control
                style={{ backgroundColor: "black", color: "white", marginBottom: "10px",                borderTopLeftRadius: "0px", 
                borderTopRightRadius: "0px",  }}
                type="number"
                name="wisdom"
                required
              />
            </Form.Group>
            <Form.Group>
              <Card
                style={{
                  backgroundColor: "grey",
                  display: "inline-block",
                  // margin: "10px",
                  width: "100%",
                  borderTopLeftRadius: "15px", 
                  borderTopRightRadius: "15px",
                  borderBottomLeftRadius: "0", 
                  borderBottomRightRadius: "0",
                }}
              >
                <Card.Body style={{ padding: "5px" }}>
                  <Form.Label className="text-white" style={{ display: "block", textAlign: "center" }}>Charisma</Form.Label>
                </Card.Body>
              </Card>
              <Form.Control
                style={{ backgroundColor: "black", 
                color: "white",  
                borderTopLeftRadius: "0px", 
                borderTopRightRadius: "0px", 
              }}
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
