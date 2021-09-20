import React, {ChangeEvent} from 'react';
import { SettingsType } from '../App';
import styles from './Settings.module.css'

type SettingsPropsType = {
    settings: SettingsType
    changeSettings: (settings: SettingsType) => void
}

export const Settings = (props: SettingsPropsType) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeSettings({...props.settings, props.settings.maxValue: Number(e.currentTarget.value) })
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeSettings(Number(e.currentTarget.value))
    }

    return (
        <div className={styles.wrapperSettings}>
            <label>
                max value:
                <input onChange={onChangeMaxValueHandler}
                       type="number"
                       value={props.settings.maxValue} />
            </label>
            <label>
                start value:
                <input onChange={onChangeStartValueHandler}
                       type="number"
                       value={props.settings.startValue} />
            </label>
        </div>

    )


};
