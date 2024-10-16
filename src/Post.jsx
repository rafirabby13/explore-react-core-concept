/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Post = () => {
    const [post , setPost]=useState([])
    useEffect(()=>{
        const posts= async ()=>{
            const api = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await api.json()
            setPost(data)

        }
        posts()
    },[])
    return (
        <div>
            <h3>Post Post Post : {post.length}</h3>
        </div>
    );
};

export default Post;