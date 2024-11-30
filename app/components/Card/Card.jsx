"use client";

import styles from "./card.module.scss";
import { Logo } from "../Logo/Logo";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/globalContext";

const Card = () => {
  const { number, name, month, year, cvc } = useContext(globalContext);

  return (
    <div className={styles.container_card}>
      <div className={styles.card_front}>
        <div className={styles.container_logo}>
          <Logo />
        </div>
        <div className={styles.card_info}>
          <div className={styles.info_number}>
            <p>{number}</p></div>
          <div className={styles.info_name_date}>
            <h1>{name}</h1>
            <p>
              {month}/{year}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.card_back}>
        <div className={styles.magstripe}></div>
        <div className={styles.logo_back}>
          <Logo />
        </div>
        <div className={styles.cvc_area}>
          <p>{cvc}</p>
          </div>
      </div>
    </div>
  );
};

export default Card;
