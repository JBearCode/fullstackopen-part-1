import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  const getAverage = (good, neutral, bad, all) => {
    return (((good * 1) + (neutral * 0) + (bad * -1)) / all);
  }

  const getPercent = (good, all) => {
    let number = ((good / all) * 100);
    return number + " %";
  }

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
      <Button onClick={handleClickGood} text="Good"/>
      <Button onClick={handleClickNeutral} text="Neutral"/>
      <Button onClick={handleClickBad} text="Bad"/>
      <h1>Statistics</h1>
      <Statistic name="Good" number={good}/>
      <Statistic name="Neutral" number={neutral}/>
      <Statistic name="Bad" number={bad}/>
      <Statistic name="All" number={all}/>
      <Statistic name="Average" number={getAverage(good, neutral, bad, all)}/>
      <Statistic name="Positive" number={getPercent(good, all)}/>
    </div>
  )
}

const Button = ({onClick, text}) => <><button onClick={onClick}>{text}</button></>

const Statistic = (props) => {
  return (
    <>
      <p>{props.name} {props.number}</p>
    </>
  )
}

export default App