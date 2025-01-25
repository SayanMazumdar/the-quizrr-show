import React, { createContext, useReducer } from 'react'
import { useContext } from 'react';

const QuizContext = createContext();
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
            return { ...state, status: 'ready', questions: action.payload };
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

function QuizProvider({ children }) {

    const [{ status, topic, difficulty, totalQuestions, questions, index, responses, points }, dispatch] = useReducer(reducer, initialState);
    return (
        <QuizContext.Provider
            value={{ status, topic, difficulty, totalQuestions, questions, index, responses, points, dispatch }}>
            {children}
        </QuizContext.Provider>
    )
}

function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        console.error('Context being accessed outside of Provider component');
        return
    }

    return context
}

export { QuizProvider, useQuiz }
