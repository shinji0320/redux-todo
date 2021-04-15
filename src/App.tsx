
import React from "react";
import styles from "./App.module.scss";
import Header from "./componets/header/Header";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
      </div>
    </div>
  );
};

export default App;
