import React from 'react';
import PropTypes from 'prop-types';

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

Post.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }),
}

export default Post;