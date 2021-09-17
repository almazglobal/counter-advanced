import React from 'react'
import styles from './Button.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button className={`${styles.button} ${props.disabled ? styles.buttonDisabled : ''}`} disabled={props.disabled}
                onClick={()=> props.callback()}
        >{props.title}</button>
    )
}

