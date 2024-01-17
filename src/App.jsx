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

  const hanldeAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // create an object of user 
    const user = {name,email};
    console.log(user);
    // form.reset();
    fetch('http://localhost:5050/users',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data =>{
      console.log(data);
    })
  }
  return (
    <>
      <h1>Display Users data</h1>
      <div>
        <h1>Add User</h1>
        <form onSubmit={hanldeAddUser}>
          <input name='name' type="text" placeholder='Enter your name' /><br /><br />
          <input name='email' type="email" placeholder='Enter your email' /> <br />
          <input type="submit" value="Add User" />
        </form>
      </div>
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
