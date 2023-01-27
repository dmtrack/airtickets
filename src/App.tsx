import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './App/components/Navigation';
import LogOut from './App/components/LogOut';
import { MainPage } from './App/layouts/Mainpage';
import { LoginPage } from './App/layouts/LoginPage';
import { ChatPage } from './App/layouts/ChatPage';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<ChatPage />} />
                    <Route path="/logout" element={<LogOut />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
