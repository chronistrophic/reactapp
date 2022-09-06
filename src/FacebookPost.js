import React from "react";
import './App.css';

function Post(props) {
    return (
        <div className="Post">
            <h2>{props.author}</h2>
            <h6>{props.description}</h6>
            <button>Like</button>
            <button>Dislike</button>
        </div>
    )
}

export default Post;