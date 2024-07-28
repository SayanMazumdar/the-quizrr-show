import React from 'react'
import Brain from '../assets/BrainIcon.png'

export default function Introduction({ dispatch }) {
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
