import React, { useState } from 'react'
import GK from '../assets/GeneralKnowledge.png'
import Computers from '../assets/Computers.jpg'
import Maths from '../assets/Maths.jpg'
import Sports from '../assets/Sports.jpg'
import Art from '../assets/Art.jpeg'

export default function QuizStyle({ dispatch }) {

  const [topic, setTopic] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const [totalQuestions, setTotalQuestions] = useState(10);

  return (
    <div className='details'>
      <p>Select a topic for the quiz</p>
      <div className="quizTopics">
        <div className="topic" style={topic === 9 ? { transform: 'translate(0, -5px)', boxShadow: '0px 0px 10px 3px var(--color-theme)' } : {}} onClick={() => setTopic(9)}>
          <div className="overlay">General Knowledge</div>
          <img src={GK} alt="General Knowledge" />
        </div>
        <div className="topic" style={topic === 18 ? { transform: 'translate(0, -5px)', boxShadow: '0px 0px 10px 3px var(--color-theme)' } : {}} onClick={() => setTopic(18)}>
          <div className="overlay">Computers</div>
          <img src={Computers} alt="Computers" />
        </div>
        <div className="topic" style={topic === 19 ? { transform: 'translate(0, -5px)', boxShadow: '0px 0px 10px 3px var(--color-theme)' } : {}} onClick={() => setTopic(19)}>
          <div className="overlay">Maths</div>
          <img src={Maths} alt="Maths" />
        </div>
        <div className="topic" style={topic === 21 ? { transform: 'translate(0, -5px)', boxShadow: '0px 0px 10px 3px var(--color-theme)' } : {}} onClick={() => setTopic(21)}>
          <div className="overlay">Sports</div>
          <img src={Sports} alt="Sports" />
        </div>
        <div className="topic" style={topic === 25 ? { transform: 'translate(0, -5px)', boxShadow: '0px 0px 10px 3px var(--color-theme)' } : {}} onClick={() => setTopic(25)}>
          <div className="overlay">Arts</div>
          <img src={Art} alt="Art" />
        </div>
      </div>
      <div className="quizDifficulty">
        <label htmlFor="difficultyLevel">Select Difficulty</label>
        <select name="difficulty" id="difficultyLevel" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="totalQues">
        <label htmlFor="questionNo">Select no. of questions</label>
        <input type="range" id="questionNo" onChange={(e) => setTotalQuestions(e.target.value)} min={1} max={30} value={totalQuestions} />
        <p>{totalQuestions}</p>
      </div>
      <button className='btn' onClick={() => dispatch({ type: 'loading', payload: [topic, difficulty, totalQuestions] })}>Start Quiz</button>
    </div>   
  )
}
