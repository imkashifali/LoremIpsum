import React,{useState} from 'react'
import Data from './Data'
const App = () => {
  const [count, setcount] = useState(0)
    const [text, settext] = useState([])


    const handleSubmit= (e)=>{
      e.preventDefault()
      let amount = parseInt(count)
      if(amount < 0){
        amount =1
      }
      if(amount > 8){
        amount = 8
      }
      settext(Data.slice(0,amount))
    }
  return (
    <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>paragraphs:</label>
      <input
        type='number'
        name='amount'
        id='amount'
        value={count}
        onChange={(e) => setcount(e.target.value)}
      />
      <button className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </article>
  </section>
  )
}

export default App