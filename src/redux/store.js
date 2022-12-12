import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        increment(state, action) {
            return state + action.payload;
        },
        decrement(state, action) {
            return state - action.payload;
        },
    },
});

export const { increment, decrement } = contactsSlice.actions;

const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
    },
});

export const { add, remove } = filterSlice.actions;

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
});
// import {
//     configureStore,
//     getDefaultMiddleware,
//     combineReducers,
// } from '@reduxjs/toolkit';

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';
// import { contacts, filter } from './reducers';

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };

// const middleware = [
//     ...getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// ];

// const rootReducer = combineReducers({ contacts, filter });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware,
// });

// export const persistor = persistStore(store);