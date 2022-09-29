import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [total, setTotal] = useState(0);

  function suma() {
    setTotal(total + 1);
  }

  function resta() {
    setTotal(total - 1);
  }

  return (
    <div className={styles.card}>
      <h1>Counter</h1>
      <button onClick={suma}>+1</button>
      <span id="count">{total}</span>
      <button onClick={resta}>-1</button>
    </div>
  );
}
