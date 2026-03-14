import { useState } from "react"

export default function ModeThem(){
    const [isDark, setIsDark] = useState(true)
    return(
        <div className={`card w ${isDark ? "dark" : "light"}` }>


            <button onClick={() => setIsDark(!isDark)} className="btn">{ isDark ? "Go Light Mode" : "Go Dark Mode" }</button>
        </div>
    )
}