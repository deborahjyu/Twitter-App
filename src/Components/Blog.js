import React from "react";

const Blog = props => {
    return (
    <div>
        <p class= "title">{props.title}</p>
        <p class= "author">{props.author}</p>
        <p class= "content">{props.content}</p>
    </div>
    );
};
export default Blog;