import { useState } from 'react'
import MoleContainer from './MoleContainer';
// import Mole from './Mole'
// import EmptySlot from './EmptySlot'
import './App.css';

function App() {
const [score, setScore] = useState(0)


  let hills= []

  for (let i = 0; i < 9; i++) {
    hills.push(<MoleContainer key={i} setScore={setScore} score={score} displayMole={displayMole} />)
  }
  return (
    <div className="App">
      <h1>React A Mole!</h1>
      {score}
      {hills}
    </div>
  );
}

export default App;
