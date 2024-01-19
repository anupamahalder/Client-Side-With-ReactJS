import { Link, useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    // load user data 
    const user = useLoaderData();
    // handle update 
    const handleUpdateBtn = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updateUser = {name, email};
        fetch(`http://localhost:5050/users/${user._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                alert('User Updated successfully!');
            }
        })
    }
    return (
        <div>
            <Link to='/users'>Go Back to User Data</Link>
            <h3>Update Information of {user.name}</h3>
            <form onSubmit={handleUpdateBtn}
             style={{fontSize:'20px'}}>
                <input type="text" name="name" defaultValue={user?.name} placeholder="Enter Name"/><br />
                <input type="email" name="email" defaultValue={user?.email} placeholder="Enter Email"/><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;