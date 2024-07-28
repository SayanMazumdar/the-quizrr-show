import parse from 'html-react-parser';
import Option from './Option';
import { useState } from 'react';

let options = [];
export default function Question({ quesObj, dispatch, index, totalQues }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const { question, correct_answer, incorrect_answers } = quesObj;
  options = [...incorrect_answers, correct_answer];

  return (
    <div className="question">
      <p className="ques">{parse(question)}</p>
      <div className="options">
        {options.map((item, i) => <Option key={i} option={parse(item)} selected={selected} setSelected={setSelected} submitted={submitted} correct={parse(correct_answer)}/>)}
      </div>
      <div className="footer">
        {selected && <button className='btn' onClick={() => setSubmitted(true)}>Check answer</button>}
        {(selected && index <= totalQues - 2) && <button className='btn' onClick={() => dispatch({type: 'nextQues', payload: [selected, (selected === parse(correct_answer) ? 10 : 0)]})}>Next</button>}
        {(selected && index > totalQues - 2) && <button className='btn' onClick={() => dispatch({type: 'finish', payload: [selected, (selected === parse(correct_answer) ? 10 : 0)]})}>Finish Quiz</button>}
      </div>
    </div>
  )
}
