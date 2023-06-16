import { useState } from "react";

const ScoreKeeper = () => {
    const [score, setScore] = useState({ p1Score: 0, p2Score: 0})
    const addP1Score = () => {
        const p1Score = score.p1Score + 1
        setScore((score) => {
            return {...score, p1Score}
        })
    }

    const addP2Score = () => {
        const p2Score = score.p2Score + 1
        setScore((score) => {
            return {...score, p2Score}
        })
    }

    return ( 
        <div className="score-kepeer">
            <p>Player 1: { score.p1Score }</p>
            <p>Player 2: { score.p2Score }</p>
            <button onClick={addP1Score}>+1 Player 1</button>
            <button onClick={addP2Score}>+1 Player 2</button>
        </div>
     );
}
 
export default ScoreKeeper;