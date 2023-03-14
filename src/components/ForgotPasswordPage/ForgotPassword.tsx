import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
    return (
        <div className="forgot-password-container">
            <h1 className="forgot-password-title">¿Olvidaste tu contraseña?</h1>
            <p className="forgot-password-description">Introduce tu dirección de correo electrónico para recibir un enlace para restablecer tu contraseña.</p>
            <form className="forgot-password-form">
                <div className="forgot-password-form-group">
                    <label htmlFor="email" className="forgot-password-label">Correo electrónico</label>
                    <input type="email" name="email" id="email" className="forgot-password-input" required />
                </div>
                <button type="submit" className="forgot-password-button">Enviar</button>
            </form>
        </div>
    );
};

export default ForgotPassword;