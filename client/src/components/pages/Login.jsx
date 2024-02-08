import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form,
  Button,
  FormControl,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import backgroundImage from '../../assets/Login.jpg'



function Login() {
    return (
      <main       style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
      }}>
        <Container className="d-flex justify-content-center">
  <Row>
    <Col md={12}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Username</Form.Label>
          <Form.Control style={{ backgroundColor: 'black', color: 'white' }} type="username"  />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control style={{ backgroundColor: 'black', color: 'white' }} type="password"  />
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
    }
    

export default Login