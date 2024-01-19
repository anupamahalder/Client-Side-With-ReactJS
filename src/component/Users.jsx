import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    // Load users data 
    const loadedUsers = useLoaderData();

    // Declare a state 
    const [users, setUsers] = useState(loadedUsers);

    // handle delete function 
    const handleDelete = (_id) =>{
        // create dynamic id 
        fetch(`http://localhost:5050/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('Deleted Successfully!');
                const remaining = users.filter(user => user._id != _id);
                setUsers(remaining);
            }
        })
    }
    return (
        <div>
            <Link to='/'>Go back to HOME</Link>
            <h1>Total Users: {users.length}</h1>
            {
                users.map(user =><p key={user._id}>
                    User Name: {user.name} and 
                    User Email: {user.email} <button onClick={()=>handleDelete(user._id)}
                     style={{backgroundColor:'red', fontSize:'15px'}}>X</button></p>)
            }
        </div>
    );
};

export default Users;