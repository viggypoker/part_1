import { useState } from "react"

const Button =({onClick,text}) => {
      
    return (
      <button onClick={onClick}>{text}</button>
    )
}

const Stat = ({text,number}) => {

    return (
      <tr>
        <td>{text}</td>
        <td>{number}</td>
      </tr>
    )
}

const Statistics = ({good, neutral, bad, all}) => {

  if(all===0){
    return(
      <div>No feedback given</div>
    )


  }
  return (
    
      <table>
        <tbody>
        <Stat text="good" number={good} />
        <Stat  text="neutral" number={neutral}/>
        <Stat  text="bad" number={bad}/>
        <Stat text="all" number={all} />
        <Stat text="average" number={(good + (-1*bad))/all}  />
        <Stat text="positive" number={(good) /all +"%"}  />
        </tbody>
      </table>
    
  )

}


const App =() =>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = () => setGood(good+1);
  const setToNeutral = () => setNeutral(neutral+1);
  const setToBad = () => setBad(bad+1);
  const all = good+neutral+bad;


  return (
    <div>
        <h1>give feedback</h1>
        <Button onClick={setToGood} text="good" /> 
        <Button  onClick={setToNeutral} text="neutral"/> 
        <Button  onClick={setToBad} text="bad"/> 
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} all={all}/>

    </div>
  )
}


export default App
