import { useState } from "react";

function PlayerGame({players = 4, target = 10}) {
    const [scores, setScores] = useState(new Array(players).fill(0))
    
    // const addScore = (id) => {
    //     setScores((score) => {
    //         const newScore = [...score]
    //         newScore[id] += 1;
    //         return newScore
    //     })
    // }

    const addScore = (id) => {
        setScores((score) => {
            return score.map((score, i) => {
                if(i === id) return score + 1;
                return score;
            })
        })
    }

    const resetButton = () => {
        setScores((scored) => {
            return scored.map((score) => {
                return score = 0;
            })
        })
    }

    return ( 
        <div className="palyer-game">
          <ul>
            {scores.map((score, i) => {
                return (
                    <li key={i} >
                        Player {i + 1}: {score}
                        <button disabled={score === target} onClick={() => addScore(i)}>+1</button>
                        {score === target && "WINNER"}
                    </li>
                )
            })}
          </ul>
          <button onClick={resetButton}>Reset</button>
        </div>
     );
}

export default PlayerGame;