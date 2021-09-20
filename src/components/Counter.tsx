import React from 'react'
import styles from './Counter.module.css'

type CounterPropsType = {
    counter: number
    isMaxValue: boolean
    error: string
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={styles.wrapperCounter}>
            {props.error
                ? <span className={`${styles.error}`}>{props.error}</span>
                :
                <span className={`${styles.counter}  ${props.isMaxValue ? styles.counterMax : ''}`}>{props.counter}</span>
            }
        </div>
    )
}