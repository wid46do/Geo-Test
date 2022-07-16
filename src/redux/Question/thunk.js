import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const startQuestion = createAsyncThunk(
    'question/startQuestion',
    async(params, { rejectWithValue }) => {
        try {
            const res = await axios.get('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple');
            console.log(res);
            return res.data.results;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);