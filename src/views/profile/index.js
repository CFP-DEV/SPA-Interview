import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// Components
import PageHeader from '../../components/PageHeader';

class Profile extends Component {
    constructor () {
        super();

        this.state = {
            email: '',
            phone: '',
            location: '',
            firstName: '',
            lastName: '',
            login: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        // Update User's Info
        localStorage.setItem('user', JSON.stringify(this.state));
    }

    componentDidMount () {
        if (localStorage.getItem('user')) {
            let user = JSON.parse(localStorage.getItem('user'));

            this.setState({
                email: user.email,
                phone: user.phone ? user.phone : '',
                location: user.location ? user.location : '',
                firstName: user.firstName ? user.firstName : '',
                lastName: user.lastName ? user.lastName : '',
                login: user.login ? user.login : ''
            });
        }
    }

    render () {
        return (
            <section className="profile">

                <Helmet>
                    <title>SPA | Profile</title>
                </Helmet>
            
                <PageHeader title="Profile" subtitle="Manage your data." />

                <form className="profile__form form" onSubmit={this.onSubmit}>
                    <div className="form__group">
                        <label htmlFor="email" className="form__label">
                            E-mail
                        </label>
                        <input type="email" className="form__input" id="email" name="email" onChange={this.onChange} value={this.state.email} />
                    </div>
                    <div className="form__group">
                        <label htmlFor="phone" className="form__label">
                            Phone Number
                        </label>
                        <input type="text" className="form__input" id="phone" name="phone" onChange={this.onChange} value={this.state.phone} />
                    </div>
                    <div className="form__group">
                        <label htmlFor="location" className="form__label">
                            Location
                        </label>
                        <input type="text" className="form__input" id="location" name="location" onChange={this.onChange} value={this.state.location} />
                    </div>
                    <div className="form__group">
                        <label htmlFor="firstName" className="form__label">
                            First Name
                        </label>
                        <input type="text" className="form__input" id="firstName" name="firstName" onChange={this.onChange} value={this.state.firstName} />
                    </div>
                    <div className="form__group">
                        <label htmlFor="lastName" className="form__label">
                            Last Name
                        </label>
                        <input type="text" className="form__input" id="lastName" name="lastName" onChange={this.onChange} value={this.state.lastName} />
                    </div>
                    <div className="form__group">
                        <label htmlFor="login" className="form__label">
                            Login
                        </label>
                        <input type="text" className="form__input" id="login" name="login" onChange={this.onChange} value={this.state.login} />
                    </div>
                    <div className="form__group">
                        <button type="submit" className="btn btn--is-red">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}

export default Profile;