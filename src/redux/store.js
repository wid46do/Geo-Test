import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import questionSlice from './Question';
import loginSlice from './Login';
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    question: questionSlice,
    login: loginSlice
});
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["question", "login"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);
export { store, persistor };