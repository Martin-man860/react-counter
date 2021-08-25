import React,{useState} from "react"
import "../App.css"

function FunctionCounter(){
    const [number,setNumber] = useState(0)

    function Increasecount(){
        setNumber(number + 1)
    }
    function Decreasecount(){
        setNumber(number + 1)
    }
    return (
        <div>
        <h1 className="Screen">{number}</h1>
            <button onClick={() =>Increasecount()}>Increase value</button>
            <button onClick={() => Decreasecount()}>Decrease value</button>
    </div>
    )
 
}
 
export default FunctionCounter;
