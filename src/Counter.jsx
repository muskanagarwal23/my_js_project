import { useState } from "react"
function Counter() {
    const [ Counter,setCounter]=useState(0);
    const increment = ()=>{setCounter((Counter)=>Counter+1)}
    const decrement = ()=>{setCounter((Counter)=>Counter-1)}

    return (
        <>
        <button onClick={increment}>increment</button>
        <p>{Counter}</p>
        <button onClick={decrement}>decrement</button>

        </>
    )
}

export default Counter