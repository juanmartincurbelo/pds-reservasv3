import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogin(username, password);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-header">Log In</h1>
            <div className="login-input-container">
                <label htmlFor="username-input" className="login-label">
                    Username:
                </label>
                <input
                    type="text"
                    id="username-input"
                    value={username}
                    onChange={handleUsernameChange}
                    className="login-input"
                    required
                />
            </div>
            <div className="login-input-container">
                <label htmlFor="password-input" className="login-label">
                    Password:
                </label>
                <input
                    type="password"
                    id="password-input"
                    value={password}
                    onChange={handlePasswordChange}
                    className="login-input"
                    required
                />
            </div>

            <p>¿Olvidaste tu contraseña? <a href="/forgot-password">Restablecerla aquí</a></p>

            <button type="submit" className="login-button">
                Log In
            </button>
        </form>
    );
};

export default Login;