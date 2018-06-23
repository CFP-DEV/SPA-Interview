import React, { Component } from 'react';
import classNames from 'classnames';

class Form extends Component {
    constructor () {
        super();

        this.state = {
            email: '',
            password: '',
            emailValidation: '',
            passwordValidation: '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        // Validation
        let emailValidation = true;
        let passwordValidation = true;

        if (!this.state.email || this.state.email.length <= 3) {
            emailValidation = false;
        }

        if (!this.state.password || this.state.password.length <= 3) {
            passwordValidation = false;
        }

        if (!emailValidation || !passwordValidation) {
            this.setState({
                emailValidation: emailValidation ? '' : `E-mail is required.`,
                passwordValidation: passwordValidation ? '' : `Password is required.`
            });
            
            return;
        }

        this.setState({
            emailValidation: '',
            passwordValidation: '',
        });
    }

    render () {
        const emailStyles = classNames({
            'form__group': true,
            'form__group--is-wrong': this.state.emailValidation.length !== 0 ? true : false
        });

        const passwordStyles = classNames({
            'form__group': true, 
            'form__group--is-wrong': this.state.passwordValidation.length !== 0 ? true : false
        });

        return (
            <form className="sign-in__form form" onSubmit={this.onSubmit}>
                <div className={emailStyles}>
                    <label htmlFor="email" className="form__label">
                        E-mail
                    </label>
                    <input type="email" className="form__input" id="email" name="email" onChange={this.onChange} value={this.state.email} />
                    { this.state.emailValidation ? <div className="form__message">{this.state.emailValidation}</div> : '' }
                </div>
                <div className={passwordStyles}>
                    <label htmlFor="password" className="form__label">
                        Password
                    </label>
                    <input type="text" className="form__input" id="password" name="password" onChange={this.onChange} value={this.state.password} />
                    { this.state.passwordValidation ? <div className="form__message">{this.state.passwordValidation}</div> : '' }
                </div>
                <div className="form__group">
                    <button type="submit" className="btn btn--is-red">
                        SIGN IN
                    </button>
                </div>
            </form>
        );
    }
}

export default Form;