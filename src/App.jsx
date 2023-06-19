import './App.css'
import Dumbo from './Dumbo'
import EmojiClicker from './EmojiClicker'
import PlayerGame from './PlayerGame'
import ScoreKeeper from './ScoreKeeper'
import Counter from './counter/Counter'

function App() {

  return (
    <>
      <h1>State Demo</h1>
      {/* <Counter /> */}
      {/* <Dumbo /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      <PlayerGame players={4} target={4}/>
    </>
  )
}

export default App
