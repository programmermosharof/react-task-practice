import { useState } from "react"

export default function ShowHide (){
const [isVisible, setIsVisible] = useState(false)



    return(
        <div className="card">
            <h2>Show / Hide Text</h2>
            
            {isVisible && <h3>Hello, React Learner!</h3>}
            <button onClick={() => setIsVisible(!isVisible)} className="btn">{isVisible ? "Hide" : "Show"}</button>
        </div>

      
    )
}