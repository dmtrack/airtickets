import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './App/components/Navigation';
import MainPage from './App/layouts/Mainpage';
import LoginPage from './App/layouts/LoginPage';
import Logout from './App/components/Logout';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
