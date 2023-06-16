import { useState } from "react";

const Counter = () => {
    const [count,  setCount] = useState(0)
    const handleClick = () => {
        setCount((count) => count + 1)
    }
    return ( 
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>+1</button>
        </div>
     );
}
 
export default Counter;