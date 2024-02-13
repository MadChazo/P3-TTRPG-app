import React, { useState } from "react";
import backgroundImage from "../assets/Create.jpg";
import CharForm from "../components/CharacterForm";
import { Container } from "react-bootstrap";

const CharCreate = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          opacity: "0.5", 
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: -1,
        }}
      ></div>
      <Container>
        <CharForm />
      </Container>
    </div>
  );
};

export default CharCreate;
