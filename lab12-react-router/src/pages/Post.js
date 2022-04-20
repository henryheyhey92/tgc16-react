import axios from 'axios';
import React, { useEffect } from 'react'

export default function Post(){
    const [posts, setPosts] = useState([]);

    // useEffect has 2 arguments
    // arg 1: a call back function (aka 'effect')
    //arg 2: what will cause the arg 1 function to be called
    useEffect( () => {
        const fetchPosts = async () => {
            let response = await axios.get("");
            setPosts(response.data)
        }

        fetchPosts()
    }, [])
    //when there's changes in the line 17 array, the useEffect will trigger
    //const params = useParams();
    //const params = useQ
}
