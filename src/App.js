import React, { useReducer } from 'react'
import Header from './components/Header'
import Introduction from './components/Introduction'
import QuizStyle from './components/QuizStyle'
import Loader from './components/Loader'
import Question from './components/Question';
import Points from './components/Points'
import Review from './components/Review'
import Timer from './components/Timer'

const initialState = { status: 'start', topic: 0, difficulty: 'easy', totalQuestions: 10, questions: [], index: 0, responses: [], points: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'details':
      return { ...state, status: 'details' };
    case 'loading':
      return { ...state, topic: action.payload[0], difficulty: action.payload[1], totalQuestions: action.payload[2], status: 'loading' };
    case 'error':
      return { ...state, status: 'error' };
    case 'ready':
      return { ...state, status: 'ready', questions: action.payload};
    case 'nextQues':
      return { ...state, points: state.points + action.payload[1], index: state.index + 1, responses: [...state.responses, action.payload[0]] };
    case 'finish':
      return { ...state, points: state.points + action.payload[1], responses: [...state.responses, action.payload[0]], status: 'finish' };
    case 'timeUp':
      return { ...state, status: 'timeUp' }
    case 'review':
      return { ...state, status: 'review', index: 0 };
    case 'next':
      return { ...state, index: state.index + 1 };
    case 'prev':
      return { ...state, index: state.index - 1 }
    case 'restart':
      return { ...initialState, status: 'details' }
    default:
      throw new Error('Unknown action');
  }
}

export default function App() {

  const [{ status, topic, difficulty, totalQuestions, questions, index, responses, points }, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className='app'>
      <Header />
      {status === 'start' && <Introduction dispatch={dispatch} />}
      {status === 'details' && <QuizStyle dispatch={dispatch} />}
      {(status === 'loading' || status === 'error') && <Loader topic={topic} difficulty={difficulty} totalQues={totalQuestions} dispatch={dispatch} status={status} /> }
      {status === 'ready' && <Question quesObj={questions.at(index)} dispatch={dispatch} key={index} index={index} totalQues={totalQuestions}/>}
      {status === 'ready' && <Timer totalTime={totalQuestions * 5} dispatch={dispatch} />}
      {(status === 'finish' || status === 'timeUp') && <Points points={points} totalRes={responses.length} dispatch={dispatch} status={status} totalQues={totalQuestions} />}
      {status === 'review' && <Review quesObj={questions.at(index)} dispatch={dispatch} key={index} index={index} response={responses.at(index)} totalQues={totalQuestions}/>}
    </div>
  )
}
