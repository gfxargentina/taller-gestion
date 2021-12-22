import React from "react";
import { GetAllAparatos } from "../ui/Aparatos";
import { Navbar } from "../ui/Navbar";

export const AparatosScreen = () => {
  return (
    <div>
      <Navbar />
      <GetAllAparatos />
    </div>
  );
};
