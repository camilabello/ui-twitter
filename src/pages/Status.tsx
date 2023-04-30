import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import camila from '../assets/camila.jpg'
import { Tweet } from "../components/Tweet"
import './Status.css';
import { FormEvent, Key, KeyboardEvent, useState } from "react"
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')

  const [answers, setAswers] = useState([
    'concordo...',
    'olha, faz sentido!',
    "Parabéns pelo progresso."
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  
  return (
    <main className="status">
      <Header title="Home" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum dolorum nobis optio mollitia impedit modi minima fugit velit, totam amet, magni culpa perferendis obcaecati. Corporis distinctio hic fuga libero?" />
      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src={camila} alt="Camila Bello" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />

        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
          </button>
      </form>


      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}