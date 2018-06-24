import React from 'react';

const Post = ({data}) => {
    const description = data.body.slice(0, 60) + '...';

    return (
        <article className="post">
            <header className="post__header">
                <h2 className="post__header__title">
                    { data.title }
                </h2>
                <h3 className="post__header__subtitle">
                    { description }
                </h3>
            </header>    
        </article>
    );
}

export default Post;