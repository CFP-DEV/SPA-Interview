import React from 'react';
import PropTypes from 'prop-types';

// Components
import Spinner from '../../../components/Spinner';
import Post from './Post';

const Posts = ({data, isFetching}) => {
    if (isFetching) {
        return <Spinner />
    }

    return (
        <section className="posts">
            {
                data.map(post => 
                    <Post key={post.id} data={post} />
                )
            }
        </section>
    );
}

Posts.propTypes = {
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default Posts;