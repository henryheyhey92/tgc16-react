import React, { useState, useEffect } from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom';

export default function PostPage() {
    // useState's first argument must be
    // the default value
    const [activePost, setActivePost] = useState({userId:0})
    const [activePostId, setActivePostId] = useState(0);
    const params = useParams();
    // load in the current active post
    useEffect(() => {
        const fetchPost = async (postId) => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + activePostId);
            setActivePost(response.data)
        }

        fetchPost()
    }, [activePostId])

    useEffect(() =>{
        setActivePostId(params.postId)
    }, [])

    return (
        <React.Fragment>
            <h1>Posts</h1>

            <h2> Active Post </h2>
            <input type="text" value={activePostId} name="activePostId"
                onChange={(evt) => {
                    setActivePostId(evt.target.value)
                }}
            />
            <div class="card">
                <div class="card-title">
                    {activePost.title}
                </div>
                <p>
                    {activePost.body}
                </p>
            </div>
            <hr />
        </React.Fragment>
    );

}