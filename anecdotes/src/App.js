import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  console.log(votes);
   
  const [selected, setSelected] = useState(0);

  const handleRefreshClick = (array) => {
    setSelected(Math.floor(Math.random() * array.length));
  }

  const handleVoteClick = (selected) => {
    console.log(selected);
    const newVotes = [...votes];
    newVotes[selected] += 1
    setVotes(newVotes);
  }

  const voteMaxIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
    <h1>Anecdote of the Day</h1>
    <p>{anecdotes[selected]}</p>
    <p>{votes[selected]} Votes</p>
    <div>
    <Button name="Vote" onClick={() => handleVoteClick(selected)}/>
    <Button name="Read Another Anecdote" onClick={() => handleRefreshClick(anecdotes, selected)}/>
    </div>
    <div>
    <h1>Anecdotal Champion with {votes[voteMaxIndex]} Votes!</h1>
    <p>{anecdotes[voteMaxIndex]}</p>
    </div>
    </div>
  )
}

const Button = ({name, onClick}) => <><button type="button" onClick={onClick}>{name}</button></>

export default App