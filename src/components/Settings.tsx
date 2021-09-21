import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {SettingsType} from '../App';
import styles from './Settings.module.css'

type SettingsPropsType = {
    settings: SettingsType
    ChangeMaxValueHandler: (value: number) => void
    ChangeStartValueHandler: (value: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.ChangeMaxValueHandler(Number(e.currentTarget.value))
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.ChangeStartValueHandler(Number(e.currentTarget.value))
    }

    if (props.settings.maxValue <= props.settings.startValue || props.settings.startValue < 0) {

    }

    return (
        <div className={styles.wrapperSettings}>
            <label>
                max value:
                <input className={`${styles.inputSettings} ${(props.settings.maxValue <= props.settings.startValue
                    || props.settings.startValue < 0)
                    ? styles.errorInput : ''} `}
                       onChange={onChangeMaxValueHandler}
                       type="number"
                       value={props.settings.maxValue} />
            </label>
            <div>
                <label>
                    start value:
                    <input className={`${styles.inputSettings} ${(props.settings.maxValue <= props.settings.startValue 
                        || props.settings.startValue < 0) 
                        ? styles.errorInput : ''} `}
                           onChange={onChangeStartValueHandler}
                           type="number"
                           value={props.settings.startValue} />
                </label>
            </div>

        </div>

    )


};
