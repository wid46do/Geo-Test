import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userLogin = createAsyncThunk(
    'login/userLogin',
    async(params, { rejectWithValue }) => {
        try {
            const respon = await axios.post('https://nawar-api.herokuapp.com/api/v1/auth/login', params.data)
            return respon.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);