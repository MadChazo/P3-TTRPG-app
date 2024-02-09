import React, { useState } from "react";
import backgroundImage from '../assets/CreateCampaign.jpg'
import { Form, Row, Col } from "react-bootstrap";

const CreateCampaign = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <Form>
        <Row className="gap-4 w-full py-2 justify-content-md-center">
        <Col md="auto">
            <Form.Group>
              <Form.Label className="text-white">Campaign Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                style={{ backgroundColor: 'black', color: 'white' }}
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
                style={{ backgroundColor: 'black', color: 'white' }}
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
                style={{ backgroundColor: 'black', color: 'white' }}
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
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                <option value="">Select End Time</option>
                {Array.from({ length: 24 }, (v, i) => i).map((hour) => (
                  <option value={hour}>{hour}:00</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Row className="justify-content-md-center py-2">
            <Col md="auto">
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
                style={{ backgroundColor: 'black', color: 'white' }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </main>
  );
};

export default CreateCampaign;