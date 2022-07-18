import React,{useState} from 'react'
import SingleQuestion from './Question'
import List from './List'
const App = () => {
  const [questions, setquestions] = useState(List)
  console.log(questions)
  return (
    <main>
    <div className='container'>
      <h3>questions and answers about login</h3>
      <section className='info'>
        {questions.map((question) => {
          return (
            <SingleQuestion key={question.id} {...question}></SingleQuestion>
          );
        })}
      </section>
    </div>
  </main>
  )
}

export default App