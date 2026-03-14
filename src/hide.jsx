import { useState } from "react"

export default function TextHide (){
// isVisible, setIsVisible
    const [isVisible, setVisible] = useState(false)
    return(
        <div className="card">
            <h1>Show / Hide App</h1>

            {isVisible && <h2>Hello, React Learner!</h2>}

            <button className="btn" onClick={()=> setVisible(!isVisible)}>{isVisible ? "Hide Text" : "Show Text"}</button>

        </div>
    )
}