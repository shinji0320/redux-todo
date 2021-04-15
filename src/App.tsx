import React from "react";
import styles from "./App.module.scss";
import Header from "./componets/header/Header";
import TackForm from "./features/task/taskForm/TaskForm";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TackForm />
      </div>
    </div>
  );
};

export default App;
