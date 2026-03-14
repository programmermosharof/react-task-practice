import { use } from "react"

export default function User({fetchPromise}){
    const all = use(fetchPromise);
    console.log(all);
    
    
    
    return(
        <div className="card">
            <h2>All User: {all.length}</h2>
            {all.map((user)=>(
                <div className="card">
                    <p>Name: {user.name}</p>
                    <p>Company: {user.company.name}</p>

                </div>
            ))}
   

        </div>
    )
}