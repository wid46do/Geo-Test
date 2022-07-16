import { createSlice } from '@reduxjs/toolkit';
import { startQuestion } from './thunk';

export const questionSlice = createSlice({
    name: 'question',
    initialState: {
        list: [{
            category: '',
            type: '',
            difficulty: '',
            question: '',
            correct_answer: '',
            incorrect_answers: []
        }],
        currentNumber: 1,
    },
    reducers: {
        updateAnswer: (state, action) => {
            const newTriviaState = {
                ...state,
                currentNumber: state.currentNumber + 1,
                list: action.payload
            };

            return newTriviaState;
        },
        resetAnswer: (state) => {
            const newTriviaState = {
                ...state,
                currentNumber: 1,
            };

            return newTriviaState;
        },
    },
    extraReducers: {
        [startQuestion.pending]: state => {
            console.log('pending');
        },
        [startQuestion.fulfilled]: (state, action) => {
            console.log(action);
            return {
                ...state,
                list: action.payload,
                error: null,
            };
        },
        [startQuestion.rejected]: state => {
            console.log('reject');
            return {
                ...state,
                error: true
            };
        },
    },
});

const {
    updateAnswer,
    resetAnswer,
} = questionSlice.actions;

export {
    updateAnswer,
    resetAnswer,
    startQuestion,
};

export default questionSlice.reducer;