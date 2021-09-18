import React, {useState} from 'react';
import './App.module.css';
import {Counter} from "./components/Counter";
import styles from './App.module.css'
import {ControlPanel} from "./components/ControlPanel";
import {v1} from "uuid";

export type  PropertiesButtonsType = {
    id: string
    title: string
    disabled: boolean
    callback: () => void
}

function App() {
    const MAX_VALUE = 5
    const [counter, setCounter] = useState(0)

    const incrementHandler = () => {
        setCounter(counter => counter + 1)
    }

    const resetHandler = () => {
        setCounter(0)
    }
    const propertiesButtons: PropertiesButtonsType[] = [
        {
            id: v1(),
            title: 'inc',
            disabled: counter === MAX_VALUE,
            callback: incrementHandler,
        },
        {
            id: v1(),
            title: 'reset',
            disabled: counter !== MAX_VALUE,
            callback: resetHandler,
        },
    ]

    return (
        <div className={styles.wrapperApp}>
            <Counter counter={counter} isMaxValue={counter === MAX_VALUE}/>
            <ControlPanel propertiesButtons={propertiesButtons}/>
        </div>
    )
        ;
}

export default App;
