
import { Suspense } from 'react';
import './App.css'
import Counter from './task-1';
import ShowHide from './Task2ShowHide';
import ModeThem from './Them';
import Users from './Users';
import User from './user';
import TextHide from './hide';

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const fetchUsers = async() =>{
const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();


}

function App() {
  
const fetchPromise = fetchUsers();
  return (
    <>
     <h1>React Task Practice</h1>
     <Counter></Counter>
      <TextHide></TextHide>
     
     <ModeThem></ModeThem>
   
     {/* <Suspense>
      <Users fetchUser={fetchUser}></Users>
     </Suspense> */}
     <Suspense>
      <User fetchPromise={fetchPromise}></User>
     </Suspense>
     <ShowHide></ShowHide>
      
     
    </>
  )
}

export default App ;
