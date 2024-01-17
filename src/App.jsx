import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  // load data here we give empty array to 2nd parameter as we want to load data once
  useEffect(()=>{
    fetch('http://localhost:5050/users')
    .then(res=>res.json())
    .then(data =>setUsers(data));
  },[])

  return (
    <>
      <h1>Display Users data</h1>
      <p>No of Users: {users.length}</p>
      <div>
        {
          users.map(user=><p key={user.id}>{user.id}, {user.name}, {user.email}</p>)
        }
      </div>
    </>
  )
}

export default App
