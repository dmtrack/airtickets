import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './slices/tickets.slice';

const rootReducer = combineReducers({
    tickets: ticketsReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
