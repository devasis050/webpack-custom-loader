import React from "react";
import { createRoot } from "react-dom/client";
import styles from "./app.scss";

const App = () => {
  return (
    <div>
      <h1>Eeeeee, wow!!</h1>
      <div style={styles.box}>Box 1</div>
      <div style={styles.box2}>Box 2</div>
    </div>
  );
};

const root = createRoot(document.querySelector("#app"));

root.render(<App />);
