import React from 'react'
import styles from "./ControlPanel.module.css";
import {Button} from "./Button";
import {PropertiesButtonsType} from "../App";

type ControlPanelPropsType = {
    propertiesButtons: PropertiesButtonsType[]
}
export const ControlPanel = (props: ControlPanelPropsType) => {
    return (
        <div className={styles.wrapperButtons}>
            {props.propertiesButtons.map(item => {
                return (
                    <Button key={item.id} title={item.title} callback={item.callback} disabled={item.disabled}/>
                )
            })}
        </div>
    )

}