import { createSlice } from '@reduxjs/toolkit';
import words from '../utils/words';

const initialState = {
  currentWord: '',
  userInput: '',
  remainingWords: words,
  correctWords: 0,
  timeLeft: 60, // 60 seconds
  isGameOver: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.currentWord = state.remainingWords[0];
      state.userInput = '';
      state.correctWords = 0;
      state.timeLeft = 60;
      state.isGameOver = false;
    },
    inputWord: (state, action) => {
      state.userInput = action.payload;
      if (action.payload === state.currentWord) {
        state.correctWords += 1;
        state.userInput = '';
        state.remainingWords = state.remainingWords.slice(1);
        state.currentWord = state.remainingWords[0] || '';
      }
    },
    decrementTime: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      } else {
        state.isGameOver = true;
      }
    },
    gameOver: (state) => {
      state.isGameOver = true;
    },
    restartGame: (state) => {
      state.currentWord = words[0];
      state.userInput = '';
      state.remainingWords = words;
      state.correctWords = 0;
      state.timeLeft = 60;
      state.isGameOver = false;
    },
  },
});

export const { startGame, inputWord, decrementTime, gameOver, restartGame } = gameSlice.actions;

export default gameSlice.reducer;
