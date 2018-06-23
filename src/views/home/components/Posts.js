import React from 'react';

// Components
import Post from './Post';

const Posts = ({data}) => {
    return (
        <article className="posts">
            {
                data.map(post => 
                    <Post key={post.id} data={post} />
                )
            }
        </article>
    );
}

export default Posts;