import React from 'react';
import './tailwind.css';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './App/store';
import ReactDOM from 'react-dom/client';

const store = setupStore();
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
