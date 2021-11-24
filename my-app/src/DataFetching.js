import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/articles')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {/* make h1 in center */}
            <h1 style={{ textAlign: 'center' }}>ReactAssign4</h1>
            <ul>
                {posts.map(post => (
                    // make card with title and body
                    <div className="card" key={post.id}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: 'blue' }} >{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <p> {post.date} </p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching