"use client";

import styles from "./form.module.scss";
import { globalContext } from "@/app/(context)/globalContext";
import { useContext, useState } from "react";
import { validRange } from "semver";

const Form = () => {
  const {
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
  } = useContext(globalContext);

  const [isCardCompleted, setIsCardCompleted] = useState(false);

  const handleNumberChange = (e) => {
    const value = e.target.value;
    const formattedValue = value
      .replace(/\s+/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setNumber(formattedValue);
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMonthChange = (e) => {
    let value = e.target.value.substring(0, 2);
    if (value < 1) {
    } else if (value > 12) {
      value = 12;
    }
    setMonth(value);
  };

  const handleYearChange = (e) => {
    let value = e.target.value.substring(0, 2);
    const formattedValue = value
      .replace(/\s+/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setYear(formattedValue);
  };

  const handleCvcChange = (e) => {
    const value = e.target.value.substring(0, 3);
    const formattedValue = value
      .replace(/\s+/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCvc(formattedValue);
  };

  // const handleKey = (e) => {
  //   if (
  //     e.key === "Tab" ||
  //     e.key === "Enter" ||
  //     e.key === "ArrowDown" ||
  //     e.key === "ArrowUp"
  //   ) {
  //     return;
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number && name && month && year && cvc) {
      setIsCardCompleted(true);
    } else {
      setIsCardCompleted(false);
      alert("Please fill all fields");
    }
  };

  return (
    <div className={styles.container_form}>
      <label className={styles.text}>CARDHOLDER NAME</label>
      <input
        className={styles.input}
        type="text"
        placeholder="JOHN DOE"
        value={name}
        onChange={handleNameChange}
      ></input>
      <label className={styles.text}>CARD NUMBER</label>
      <input
        className={styles.input}
        type="text"
        maxLength="19"
        placeholder="0000 0000 0000 0000"
        value={number}
        onChange={handleNumberChange}
        // onKeyDown={handleKey}
      ></input>

      <div className={styles.container_date}>
        <div className={styles.date_cvc}>
          <label>EXP. DATE</label>
          <label>CVC</label>
        </div>
        <div className={styles.input_date_cvc}>
          <input
            className={styles.input_date}
            type="text"
            maxLength="2"
            placeholder="MM"
            value={month}
            onChange={handleMonthChange}
            // onKeyDown={handleKey}
          ></input>
          <input
            className={styles.input_date}
            type="text"
            maxLength="2"
            placeholder="YY"
            value={year}
            onChange={handleYearChange}
            // onKeyDown={handleKey}
          ></input>
          <input
            className={styles.input_cvc}
            type="text"
            maxLength="3"
            placeholder="***"
            value={cvc}
            onChange={handleCvcChange}
            // onKeyDown={handleKey}
          ></input>
        </div>
        <div className={styles.container_btn}>
          <button
            className={styles.button}
            type="submit"
            onClick={handleSubmit}
          >
            CONFIRM
          </button>
        </div>
      </div>
      {isCardCompleted && <p className={styles.alert}>Card completed!</p>}
    </div>
  );
};

export default Form;
