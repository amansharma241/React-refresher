import { useState } from "react";
import styles from './Counter.module.css'

const Counter = () => {
  const [count,setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count=>count+1);
  }
  const handleDecrement = () => {
    setCount(count=>count-1);
  }
  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className={styles.container}>
    <div className={styles.titleDiv}>Counter</div>
    {count}
    <div className={styles.buttonContainer}>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
    </div>

  </div>
  )
}

export default Counter