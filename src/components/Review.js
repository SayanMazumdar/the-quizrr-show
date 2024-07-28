import parse from 'html-react-parser';
import Option from './Option';

let options = [];
export default function Question({ quesObj, dispatch, index, response, totalQues }) {

    const { question, correct_answer, incorrect_answers } = quesObj;
    options = [...incorrect_answers, correct_answer]

    return (
        <div className="question">
            <p className="ques">{parse(question)}</p>
            <div className="options">
                {options.map((item, i) => <Option key={i} option={parse(item)} correct={parse(correct_answer)} response={response}/>)}
            </div>
            <div className="footer">
                {index > 0 && <button className='btn' style={{position: 'absolute', left: 0}} onClick={() => dispatch({ type: 'prev' })}>Previous</button>}
                {index <= totalQues - 2 && <button className='btn' onClick={() => dispatch({ type: 'next' })}>Next</button>}
                {index === totalQues - 1 && <button className='btn' onClick={() => dispatch({ type: 'restart' })}>Play again</button>}
            </div>
        </div>
    )
}
