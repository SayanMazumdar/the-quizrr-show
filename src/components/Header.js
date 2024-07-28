import Quiz from '../assets/Quiz.png'

export default function Header() {
  return (
    <div className='header'>
      <img src={Quiz} alt="Quiz logo" />
      <h1>The Quizrr Show</h1>
    </div>
  )
}
