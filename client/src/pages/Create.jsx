import React, { useState } from "react";
import backgroundImage from "../assets/Create.jpg";
import CharForm from "../components/CharacterForm";



const CharCreate = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <CharForm />
    </main>
  );
};

export default CharCreate;
