import React from 'react'
import Brain from '../assets/BrainIcon.png'
import { useQuiz } from '../contexts/QuizContext'

export default function Introduction() {

    const { dispatch } = useQuiz();
    
    return (
        <div className='intro'>
            <h3>Welcome to THE QUIZRR APP!</h3>
            <div className="introText">
                <p>Lets put your Cerebral Cortex to work</p>
                <img src={Brain} alt="Brain icon" />
            </div>
            <button className='btn' onClick={() => dispatch({ type: 'details' })}>Let's go! 🚀</button>
        </div>
    )
}
