/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Friend = ({friend}) => {
    // console.log(friend);
    return (
        <div style={{border: '2px solid tomato', padding: '10px', margin: '10px', borderRadius: '15px'}}>
            <h3>Name : {friend.name}</h3>
            <h4>Email : {friend.email}</h4>
        </div>
    );
};

export default Friend;