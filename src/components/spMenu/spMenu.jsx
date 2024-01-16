import React, { useState } from "react";
import clsx from "clsx";
import styles from "./spMenu.module.scss";
import SpMenuList from "../spMenuList/spMenuList";

export default function SpMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => {
          toggleMenu();
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <span>Menu</span>
      </button>
      <div
        className={clsx({
          [styles.overlay]: true,
          [styles.active]: menuOpen,
        })}
      >
        <button className={styles.close} onClick={() => toggleMenu()}>
          <div></div>
        </button>
        <div className={styles.listWrap}>
          <SpMenuList />
        </div>
      </div>
    </div>
  );
}
