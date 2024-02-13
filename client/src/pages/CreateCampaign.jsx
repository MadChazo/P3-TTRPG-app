import React, { useState } from "react";
import backgroundImage from "../assets/CreateCampaign.jpg";
import { Form, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const CreateCampaign = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "vh",
          opacity: "0.7",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          zIndex: -1,
        }}
      ></div>
      <Form className="px-3">
        <Row className="gap-4 w-full py-2 justify-content-md-center">
          <Col md="auto">
            <Form.Group>
              <Form.Label className="text-white">Campaign Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                style={{ backgroundColor: "black", color: "white", boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.5)' }}
              />
            </Form.Group>
          </Col>
          <Col md="auto">
            <Form.Group>
              <Form.Label className="text-white">Module</Form.Label>
              <Form.Control
                type="text"
                name="class"
                required
                style={{ backgroundColor: "black", color: "white", boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.5)' }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center py-2">
          <Col md="auto">
            <Form.Group>
              <Form.Label className="text-white">Start Time</Form.Label>
              <Form.Select
                name="startTime"
                style={{ backgroundColor: "black", color: "white", boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.5)' }}
              >
                <option value="">Select Start Time</option>
                {Array.from({ length: 24 }, (v, i) => i).map((hour) => (
                  <option value={hour}>{hour}:00</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="auto">
            <Form.Group>
              <Form.Label className="text-white">End Time</Form.Label>
              <Form.Select
                name="endTime"
                style={{ backgroundColor: "black", color: "white",boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.5)' }}
              >
                <option value="">Select End Time</option>
                {Array.from({ length: 24 }, (v, i) => i).map((hour) => (
                  <option value={hour}>{hour}:00</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Row className="justify-content-md-center justify-content-xs-center py-2">
            <Col md="auto" xs={12} className="d-flex justify-content-center">
              <Card bg="black" text="white" style={{marginTop: "35px", boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.5)'}}>
                <Card.Body>
                  <Form.Group className="text-white">
                    <Form.Label>Days</Form.Label>
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day) => (
                      <Form.Check
                        type="checkbox"
                        label={day}
                        name="days"
                        value={day}
                      />
                    ))}
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={10}>
            <Form.Group>
              <Form.Label className="text-white">Campaign Story</Form.Label>
              <Form.Control
                as="textarea"
                rows="10"
                name="story"
                style={{ backgroundColor: "black", color: "white", boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.5)', marginBottom: "20px"}}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </main>
  );
};

export default CreateCampaign;
