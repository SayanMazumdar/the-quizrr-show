import React from 'react';
import Congrats from '../assets/Congrats.png';
import Timeup from '../assets/Timeup.jpg'
import { useQuiz } from '../contexts/QuizContext';

export default function Points() {

    const { points, totalRes, dispatch, status, totalQues } = useQuiz();
    
    return (
        <>
            <div className='points'>
                <img src={status === 'finish' ? `${Congrats}` : `${Timeup}`} alt="Congrats trophy" />
                {status === 'timeUp' && <h4 style={{ color: 'var(--color-error)', marginBottom: '1rem' }}>Time is up!!</h4>}
                <h3>You scored</h3>
                <h2>{points} out of {totalQues * 10} points</h2>
                {status === 'finish' && <h4>Quiz completed successfully!</h4>}
                <p>You attempted <span style={{ color: 'var(--color-theme)' }}>{totalRes} {totalRes > 1 ? 'questions' : 'question'}</span> and from that <span style={{ color: 'var(--color-correct)' }}>{points / 10} {points / 10 > 1 ? 'answers were' : 'answer was'} correct</span></p>
            </div>
            <div className="btns">
                <button className="btn" onClick={() => dispatch({ type: 'review' })}>Review</button>
                <button className='btn' onClick={() => dispatch({ type: 'restart' })}>Play again</button>
            </div>
        </>
    )
}
