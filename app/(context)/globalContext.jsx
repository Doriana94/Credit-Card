"use client";

import { createContext, useState } from "react";

const globalContext = createContext();

const Context = ({ children }) => {
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("JOHN DOE");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("***");

  const value = {
    number,
    setNumber,
    name,
    setName,
    month,
    setMonth,
    year,
    setYear,
    cvc,
    setCvc,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export  {Context, globalContext};
