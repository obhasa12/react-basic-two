import { useState } from "react";

function generateGameBoard() {
    console.log("MAKING THE GAME BOARD")
    return Array(5000)
}

const Dumbo = () => {
    const [board, setBoard] = useState(generateGameBoard)
    return (
        <button onClick={() => setBoard("hello!")}>Click me to change</button>
    );
}
 
export default Dumbo;