import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from './thunk';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        token: '',
        isLogin: false,
        isMsg: false,
    },
    extraReducers: {
        [userLogin.pending]: state => {
            console.log('pending');
        },
        [userLogin.fulfilled]: (state, action) => {
            return {
                ...state,
                token: action.payload.data.token,
                isLogin: true,
                isMsg: false,
            };
        },
        [userLogin.rejected]: state => {
            console.log('reject');
            return {
                ...state,
                isMsg: true,
                isLogin: false,
            };
        },
    },
});

export default loginSlice.reducer;