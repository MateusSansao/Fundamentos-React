import React from "react";
import styles from "./Header.module.css";
import Logo from "../assets/rocket.svg";

function Header() {
    return(
        <header className={styles.header}>
            <img src={Logo} />
            <strong className={styles.strongWhite}>to</strong>
            <strong className={styles.strongBlue}>do</strong>
        </header>
    )
}

export default Header;