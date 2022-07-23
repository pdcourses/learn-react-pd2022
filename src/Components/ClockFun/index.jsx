import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export default function ClockFun(props) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const reset = () => {
        setTime(0);
    }
    useEffect (() => {
        if(isRunning){
            const timerId = setInterval(() => {setTime(time + props.step)}, 1000);
            return () => {
                clearInterval(timerId);
            }
        }

    }, [time, isRunning]);
    return (
        <>
        <h1>Timer {time}</h1>
        <button onClick={() => setIsRunning(true)}>start</button>
        <button onClick={reset}>reset</button>
        <button onClick={() => setIsRunning(false)}>stop</button>
        </> 
    )
}

