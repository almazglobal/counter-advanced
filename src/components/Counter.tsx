import React from 'react'
import styles from './Counter.module.css'

type CounterPropsType = {
    counter: number
    isMaxValue: boolean
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={styles.wrapperCounter}>
            <span className={`${styles.counter}  ${props.isMaxValue ? styles.counterMax : ''}`}>{props.counter}</span>
        </div>
    )
}