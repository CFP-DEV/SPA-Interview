import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// Components
import PageHeader from '../../components/PageHeader';
import Posts from './components/Posts';

class Home extends Component {
    constructor () {
        super();

        this.state = {
            posts: [],
            isFetching: true,
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    posts: res,
                    isFetching: false,
                });
            })
            .catch((err) => {
                this.setState({
                    isFetching: false,
                });
            });
    }

    render () {
        return (
            <div className="home">

                <Helmet>
                    <title>SPA | Home</title>
                </Helmet>
                
                <PageHeader title="Dashboard" subtitle="All news in one place." />

                <Posts data={this.state.posts} isFetching={this.state.isFetching} />

            </div>
        );
    }
}

export default Home;