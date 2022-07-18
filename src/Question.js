import React,{useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title,info}) => {
  const [readMore, setreadMore] = useState(false)
  return (
    <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={()=>setreadMore(!readMore)}>
      {readMore ? <AiOutlineMinus/>:<AiOutlinePlus/>}
      </button>
      {readMore && info}
    </header>
  </article>  )
}

export default Question