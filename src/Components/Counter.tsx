import { useState } from "react"
import "./Counter.css"

export default function Counter() {
    const [count, setCount] = useState(0);
    return(
        <div className="counter-container">
            <h1>{count}</h1>
            <button onClick={() => setCount(count => count + 1)} className="plus-button">+</button>
            <button 
                onClick={() => setCount(count => count - 1)}
                disabled = {count === 0} className="minus-button">-</button>
            <button onClick={() => setCount(0)} className="reset-button">Reset</button>
        </div>
    );
}