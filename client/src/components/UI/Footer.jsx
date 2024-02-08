import React from "react";
import { FaGithub } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="d-flex justify-content-center p-5">
            <Row className="justify-content-between pt-6">
                <Col xs="auto">
                    <div className="d-flex flex-column align-items-center">
                        <div>Madison Chazo</div>
                        <a href="https://github.com/MadChazo" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="cursor-pointer" size={50} />
                        </a>
                    </div>
                </Col>
                <Col xs="auto">
                    <div className="d-flex flex-column align-items-center">
                        <div>Na Ram Park</div>
                        <a href="https://github.com/narampark" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="cursor-pointer" size={50} />
                        </a>
                    </div>
                </Col>
                <Col xs="auto">
                    <div className="d-flex flex-column align-items-center">
                        <div>David Caldarone</div>
                        <a href="https://github.com/caldardn" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="cursor-pointer" size={50} />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer