import React, { FC } from 'react';

import { useRegisterPageStateHook } from './register-hooks';

import './register-page.module.scss';

export const RegisterPage: FC = () => {
    const { name, onChangeName, email, onChangeEmail, password, onChangePassword } = useRegisterPageStateHook();

    return (
        <div className="Container">
            <div className="Wrapper">
                <span className="Logo">My chat</span>
                <span className="Title">Register</span>
                <input
                    type="text"
                    placeholder="name"
                    onChange={onChangeName}
                    value={name}
                />
                <input
                    type="email"
                    placeholder="email"
                    onChange={onChangeEmail}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={onChangePassword}
                    value={password}
                />
                <input required style={{ display: 'none' }} type="file" id="file" />
                <label htmlFor="file">
                    <img src="" alt="fix this" />
                    <span>Add an avatar</span>
                </label>
                <button onClick={() => console.log('register')}>
                    Sign up
                </button>
                <p>Do you have an account? Login</p>
            </div>
        </div>
    );
};
