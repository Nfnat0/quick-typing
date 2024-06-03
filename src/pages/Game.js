import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import WordDisplay from '../components/WordDisplay';
import Results from '../components/Results';
import { inputWord, decrementTime, restartGame, gameOver } from '../store/gameSlice';

const Game = () => {
  const dispatch = useDispatch();
  const {
    currentWord,
    userInput,
    remainingWords,
    correctWords,
    timeLeft,
    isGameOver,
  } = useSelector((state) => state.game);

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      const timer = setTimeout(() => dispatch(decrementTime()), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      dispatch(gameOver());
    }
  }, [timeLeft, isGameOver, dispatch]);

  const handleInputChange = (input) => {
    dispatch(inputWord(input));
  };

  const handleRestart = () => {
    dispatch(restartGame());
  };

  if (isGameOver) {
    return <Results correctWords={correctWords} totalWords={words.length} onRestart={handleRestart} />;
  }

  return (
    <div>
      <Typography variant="h6">Time left: {timeLeft}s</Typography>
      <Typography variant="h6">Remaining words: {remainingWords.length}</Typography>
      <WordDisplay word={currentWord} userInput={userInput} onInputChange={handleInputChange} />
    </div>
  );
};

export default Game;
