import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './App/components/Navigation';
import MainPage from './App/layouts/Mainpage';
import LoginPage from './App/layouts/LoginPage';
import LogoutUser from './App/components/LogoutUser';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/logout" element={<LogoutUser />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
