import React, {useEffect, useState} from 'react';
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

    let settingsInit: SettingsType = {
        maxValue: 5,
        startValue: 0
    }
    const [settings, setSettings] = useState<SettingsType>(settingsInit)
    const [counter, setCounter] = useState(settings.startValue)
    const [error, setError] = useState('')

    useEffect(() => {
        const settingsNewInit = getSettingsFromLocalStorage(settingsInit)
        if (settingsInit === settingsNewInit) {
            return
        }
        setSettings(settingsNewInit)
        setCounter(settingsNewInit.startValue)
    }, [])

    useEffect(() => {
        if (settings.maxValue <= settings.startValue || settings.startValue < 0) {
            setError('Incorrect value!')
        }
    }, [settings])

    const getSettingsFromLocalStorage = (settings: SettingsType) => {
        const settingsRaw = localStorage.getItem('settings')
        if (settingsRaw) {
            settings = JSON.parse(settingsRaw)
        }
        return settings
    }

    const incrementHandler = () => {
        setCounter(counter => counter + 1)
    }

    const resetHandler = () => {
        setCounter(settings.startValue)
    }

    const setSettingsHandler = () => {
        localStorage.setItem('settings', JSON.stringify(settings))
        setCounter(settings.startValue)
        setError('')
    }

    const ChangeMaxValueHandler = (value: number) => {
        setSettings({...settings, maxValue: value})
        setError('enter values and press "set"')
    }
    const ChangeStartValueHandler = (value: number) => {
        setSettings({...settings, startValue: value})
        setError('enter values and press "set"')
    }

    const propertiesButtonsCounter: PropertiesButtonsType[] = [
        {
            id: v1(),
            title: 'inc',
            disabled: counter === settings.maxValue || settings.maxValue <= settings.startValue || !!error,
            callback: incrementHandler,
        },
        {
            id: v1(),
            title: 'reset',
            disabled: counter !== settings.maxValue || settings.maxValue <= settings.startValue || !!error,
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
                    ChangeMaxValueHandler={ChangeMaxValueHandler}
                    ChangeStartValueHandler={ChangeStartValueHandler}
                />
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

export default App

