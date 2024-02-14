import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from "../assets/createChar.jpg";
import {Navigate} from "react-router-dom";

import Auth from '../utils/auth';

const Profile = () => {
    if (!Auth.loggedIn()) {
        return <Navigate to="/login"/>
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: "0.58", 
                zIndex: -1,
            }}></div>
            <Container fluid className="d-flex justify-content-center align-items-start" style={{ zIndex: 0, flex: 1 }}>
                <Row>
                    <Col className="text-center">
                        <main>
                            <h1>My Characters</h1>
                            <Button variant="dark" href="/create" style={{ boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.5)' }}>Create Character</Button>{' '}
                        </main>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile;