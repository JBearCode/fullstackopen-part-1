import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onclick={handleClickGood} text="Good"/>
      <Button onclick={handleClickNeutral} text="Neutral"/>
      <Button onclick={handleClickBad} text="Bad"/>
    </div>
  )
}

const Button = ({onClick, text}) => <><button onClick={onClick}>{text}</button></>

export default App