import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { questions } from './Data/questions'

function App() {
  const [count, setCount] = useState(0)
  let [showAns, setShowAns] = useState(questions[0].id)
  return(
    <>
      <h2>Frequently Asked Questions (FAQs)
      </h2>
      <div className='faqouter'>


        {questions.map((faqItem, i)=> {
          return (
            <div className='faqItem'>
              <h2 onClick={()=>setShowAns(faqItem.id)}>{faqItem.term}</h2>
              <p className={ showAns == faqItem.id ? 'showans' : ''}>{faqItem.definition}</p>
            </div>
          )
        })}
        
      </div>
      
    </>
  )
}

export default App
