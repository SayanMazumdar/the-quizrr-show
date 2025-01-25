import parse from 'html-react-parser';
import Option from './Option';
import { useQuiz } from '../contexts/QuizContext';

let options = [];
export default function Question() {

    const { questions, responses, dispatch, index, totalQuestions } = useQuiz();
    const { question, correct_answer, incorrect_answers } = questions.at(index);
    options = [...incorrect_answers, correct_answer];

    return (
        <div className="question">
            <p className="ques">{parse(question)}</p>
            <div className="options">
                {options.map((item, i) => <Option key={i} option={parse(item)} correct={parse(correct_answer)} response={responses.at(index)} />)}
            </div>
            <div className="footer">
                {index > 0 && <button className='btn' style={{ position: 'absolute', left: 0 }} onClick={() => dispatch({ type: 'prev' })}>Previous</button>}
                {index <= totalQuestions - 2 && <button className='btn' onClick={() => dispatch({ type: 'next' })}>Next</button>}
                {index === totalQuestions - 1 && <button className='btn' onClick={() => dispatch({ type: 'restart' })}>Play again</button>}
            </div>
        </div>
    )
}
