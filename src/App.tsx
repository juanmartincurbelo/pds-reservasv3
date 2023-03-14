import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login/LogInForm';
import ForgotPassword from './components/ForgotPasswordPage/ForgotPassword';

function App() {

  const handleSubmit = () => {
    // Aquí puedes hacer lo que necesites con los datos de inicio de sesión
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={function (username: string, password: string): void {
            throw new Error('Function not implemented.');
          }} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div >


  );
}

export default App;
