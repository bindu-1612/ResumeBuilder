import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
        <p className={styles.heading}>
          Resume Builder
        </p>  
      </div>
  );
}

export default Header;
