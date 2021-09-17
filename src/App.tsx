import React, {useState} from 'react';
import './App.module.css';
import {Counter} from "./components/Counter";
import {Button} from "./components/Button";
import styles from './App.module.css'

function App() {
  const MAX_VALUE = 5
  const [counter, setCounter] = useState(0)

  const incrementHandler = () => {
    setCounter(counter => counter + 1)
  }

  const resetHandler = () => {
    setCounter(0)
  }
  return (
    <div className={styles.wrapperApp}>
    <Counter counter={counter} isMaxValue={counter === MAX_VALUE}/>
      <div className={styles.wrapperButtons}>
        <Button title={'inc'} callback={incrementHandler} disabled={counter === MAX_VALUE}/>
        <Button title={'reset'} callback={resetHandler} disabled={counter !== MAX_VALUE}/>
      </div>

    </div>
  );
}

export default App;
