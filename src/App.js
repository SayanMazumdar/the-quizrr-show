import Header from './components/Header'
import Introduction from './components/Introduction'
import QuizStyle from './components/QuizStyle'
import Loader from './components/Loader'
import Question from './components/Question';
import Points from './components/Points'
import Review from './components/Review'
import Timer from './components/Timer'
import { useQuiz } from './contexts/QuizContext'

export default function App() {

  const { status, index } = useQuiz();

  return (
    <div className='app'>
      <Header />
      {status === 'start' && <Introduction />}
      {status === 'details' && <QuizStyle />}
      {(status === 'loading' || status === 'error') && <Loader /> }
      {status === 'ready' && <Question key={index} />}
      {status === 'ready' && <Timer />}
      {(status === 'finish' || status === 'timeUp') && <Points />}
      {status === 'review' && <Review key={index} />}
    </div>
  )
}
