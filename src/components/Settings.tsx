import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import { SettingsType } from '../App';
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
