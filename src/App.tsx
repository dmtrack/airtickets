import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './App/layouts/MainPage';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
