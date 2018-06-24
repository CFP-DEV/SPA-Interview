import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// Components
import PageHeader from '../../components/PageHeader';

class Profile extends Component {
    render () {
        return (
            <div className="profile">

                <Helmet>
                    <title>SPA | Profile</title>
                </Helmet>
            
                <PageHeader title="Profile" subtitle="Manage your data." />

                <form className="profile__form form">
                    <div className="form__group">
                        <label htmlFor="email" className="form__label">
                            E-mail
                        </label>
                        <input type="email" className="form__input" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="phone" className="form__label">
                            Phone Number
                        </label>
                        <input type="text" className="form__input" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="location" className="form__label">
                            Location
                        </label>
                        <input type="text" className="form__input" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="location" className="form__label">
                            First Name
                        </label>
                        <input type="text" className="form__input" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="location" className="form__label">
                            Last Name
                        </label>
                        <input type="text" className="form__input" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="location" className="form__label">
                            Login
                        </label>
                        <input type="text" className="form__input" />
                    </div>
                    <div className="form__group">
                        <button type="submit" className="btn btn--is-red">
                            Save
                        </button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Profile;