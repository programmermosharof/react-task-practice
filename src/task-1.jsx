import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
const increases = ()=>{
        setCount(count +1)
}
const decreases = ()=>{
    setCount(count -1)
}

const reset= ()=>{
    setCount(0)
}
    return(
        <div className="card">
            <h2>Counter App</h2>
            
            <h4>Count: {count}</h4>

            <button onClick={increases} className="btn">Increases</button>
            <button onClick={decreases} className="btn">Decreases</button>
            <button onClick={reset} className="btn">Reset</button>
        </div>
    )
}