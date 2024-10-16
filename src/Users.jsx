/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setUsers(data)
        })
    },[])
    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    );
};

export default Users;