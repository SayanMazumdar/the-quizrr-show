import parse from 'html-react-parser';
import Option from './Option';
import { useState } from 'react';
import { useQuiz } from '../contexts/QuizContext';

let options = [];
export default function Question() {

  const { questions, dispatch, index, totalQuestions } = useQuiz();

  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const { question, correct_answer, incorrect_answers } = questions.at(index);
  options = [...incorrect_answers, correct_answer];

  return (
    <div className="question">
      <p className="ques">{parse(question)}</p>
      <div className="options">
        {options.map((item, i) => <Option key={i} option={parse(item)} selected={selected} setSelected={setSelected} submitted={submitted} correct={parse(correct_answer)}/>)}
      </div>
      <div className="footer">
        {selected && <button className='btn' onClick={() => setSubmitted(true)}>Check answer</button>}
        {(selected && index <= totalQuestions - 2) && <button className='btn' onClick={() => dispatch({type: 'nextQues', payload: [selected, (selected === parse(correct_answer) ? 10 : 0)]})}>Next</button>}
        {(selected && index > totalQuestions - 2) && <button className='btn' onClick={() => dispatch({type: 'finish', payload: [selected, (selected === parse(correct_answer) ? 10 : 0)]})}>Finish Quiz</button>}
      </div>
    </div>
  )
}
