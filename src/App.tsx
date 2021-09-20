import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import styles from './App.module.css'
import {ControlPanel} from "./components/ControlPanel";
import {v1} from "uuid";
import {Settings} from './components/Settings';

export type  PropertiesButtonsType = {
    id: string
    title: string
    disabled: boolean
    callback: () => void
}
export type SettingsType = {
    maxValue: number
    startValue: number 
}

function App() {
        
    const settings: SettingsType = {
        maxValue: 5,
        startValue: 0
    } 

    const [counter, setCounter] = useState(settings.startValue)
    const [error, setError] = useState('')

    const incrementHandler = () => {
        setCounter(counter => counter + 1)
    }

    const resetHandler = () => {
        setCounter(0)
    }

    const setSettingsHandler = () => {
        setCounter(settings.startValue)
        setError('')
    }

    const changeMaxValue = (maxValue: number, startValue: number) => {
        // setSettings({...settings, maxValue: value})
        if (value <= settings.startValue) {
            setError('Incorrect value!')
        }
    }

    const changeStartValue = (value: number) => {
        // setSettings({...settings, startValue: value})
    }

    const propertiesButtonsCounter: PropertiesButtonsType[] = [
        {
            id: v1(),
            title: 'inc',
            disabled: counter === settings.maxValue,
            callback: incrementHandler,
        },
        {
            id: v1(),
            title: 'reset',
            disabled: counter !== settings.maxValue,
            callback: resetHandler,
        },
    ]

    const propertiesButtonsSettings: PropertiesButtonsType[] = [
        {
            id: v1(),
            title: 'set',
            disabled: settings.maxValue <= settings.startValue,
            callback: setSettingsHandler,
        },
    ]


    return (
        <>
            <div className={styles.wrapperApp}>
                <Settings
                    settings={settings}
                    changeMaxValue={changeMaxValue}
                    changeStartValue={changeStartValue} />
                <ControlPanel propertiesButtons={propertiesButtonsSettings} />
            </div>
            <div className={styles.wrapperApp}>
                <Counter counter={counter}
                         isMaxValue={counter === settings.maxValue}
                         error={error}
                />
                <ControlPanel propertiesButtons={propertiesButtonsCounter} />
            </div>
        </>

    )
}

export default App;
