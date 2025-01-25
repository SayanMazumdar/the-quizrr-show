import React, { useEffect, useState } from 'react'
import { useQuiz } from '../contexts/QuizContext';

let id;
export default function Timer() {

    const { totalQuestions, dispatch } = useQuiz();
    const totalTime = totalQuestions * 5;
    const [timer, setTimer] = useState(totalTime);

    useEffect(() => {
        id = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000)

        return function () {
            clearInterval(id);
        }
    }, [])

    useEffect(() => {
        if (timer < 0) {
            clearInterval(id);
            dispatch({ type: 'timeUp' });
        }
    }, [timer, dispatch])

    return (
        <div>
            <button className='btn btn-timer' style={timer < 10 && totalTime > 10 ? {color: 'var(--color-error)'} : {}} disabled>0{timer >= 60 ? parseInt(timer / 60) : '0'}:{timer % 60 < 10 ? 0 : ''}{timer % 60}</button>
        </div>
    )
}
