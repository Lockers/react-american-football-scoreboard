import React, { useState, useEffect, useRef } from 'react';

export const Timer = () => {

    const [time, setTime] = useState(0);
    const secondsPassed = useRef(0);
    const minutesPassed = useRef(45);

    useEffect(() => {
        setTimeout(() => {

            if (secondsPassed.current === 0) {
                minutesPassed.current = minutesPassed.current - 1;
                secondsPassed.current = 60;
            }
            secondsPassed.current = secondsPassed.current - 1;
            setTime(secondsPassed.current)
        }, 1000)
    }, [time])
    if (secondsPassed.current < 10) {
        return (
            <div className='timer'>{minutesPassed.current}{' '}:{' '}0{time}</div>
        )
    }
    if (minutesPassed.current < 10) {
        return (
            <div className='timer'>0{minutesPassed.current}{' '}:{' '}{time}</div>
        )
    }
    if (minutesPassed.current < 10 && secondsPassed.current < 10) {
        return (
            <div className='timer'>0{minutesPassed.current}{' '}:{' '}0{time}</div>
        )
    }
        return (<div className='timer'>{minutesPassed.current}{' '}:{' '}{time}</div>)
}