import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <Link to='/'>Go back to HOME</Link>
            <h1>Total Users: {users.length}</h1>
            {
                users.map(user =><p key={user._id}>User Name: {user.name} and User Email: {user.email}</p>)
            }
        </div>
    );
};

export default Users;