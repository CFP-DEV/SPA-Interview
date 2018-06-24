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
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    posts: res,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render () {
        return (
            <div className="home">

                <Helmet>
                    <title>SPA | Home</title>
                </Helmet>
                
                <PageHeader title="Dashboard" subtitle="All news in one place." />

                <Posts data={this.state.posts} />

            </div>
        );
    }
}

export default Home;