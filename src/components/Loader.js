import { useEffect } from "react"

let ERROR_TEXT = '';

export default function Loader({ topic, difficulty, totalQues, dispatch, status }) {

  useEffect(() => {
    async function fetchQues() {
      try {
        const res = await fetch(`https://opentdb.com/api.php?amount=${totalQues}&category=${topic}&difficulty=${difficulty}&type=multiple`);

        if (!res.ok) {
          throw new Error('Something went wrong. Please refresh the page and restart');
        }

        const data = await res.json();
        //console.log(data);

        if (data.response_code === 0) {
          dispatch({ type: 'ready', payload: data.results })
        }
        else {
          switch (data.response_code) {
            case 1:
              ERROR_TEXT = 'There are not enough questions for the selected topic. Please refresh the page';
              break;
            case 2:
              ERROR_TEXT = 'Invalid parameters passed. Please refresh the page';
              break;
            default:
              ERROR_TEXT = 'Unexpected issue occured while loading questions. Please refresh the page';
          }
          dispatch({ type: 'error' });
        }
      }
      catch (error) {
        ERROR_TEXT = error.message;
        dispatch({ type: 'error' });        
      }
    };
    fetchQues();
  }, [difficulty, dispatch, topic, totalQues])

  return (
    <div className="loader">
      {status === 'loading' && <div className="custom-loader"></div>}
      {status === 'error' && <div className="errorText">{ERROR_TEXT}</div>}
    </div>
  )
}
