import { use } from "react"

export default function Users({fetchUser}){
    const users= use(fetchUser)
    return(
<div className="card ">
<h1>Users: {users.length}</h1>
{users.map((user) =>(
   <div className="card">
    <h4>Name: {user.name}</h4>
    <p>Company: {user.company.name}</p>

   </div>                
                    
))}

        </div>
    )
}