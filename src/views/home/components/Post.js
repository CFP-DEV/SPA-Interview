import React from 'react';

const Post = ({data}) => {
    return (
        <article className="post">
            <footer className="post__author">
                <div className="post__author__avatar">
                    { data.userId }
                </div>
            </footer>
            <header className="post__content">
                <h2 className="post__content__title">
                    { data.title }
                </h2>
                <p className="post__content__description">
                    { data.body }
                </p>
            </header>
        </article>
    );
}

export default Post;