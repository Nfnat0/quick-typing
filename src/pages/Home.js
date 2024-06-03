import React from 'react';
import { useDispatch } from 'react-redux';
import GameDescription from '../components/GameDescription';
import { startGame } from '../store/gameSlice';

const Home = () => {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(startGame());
  };

  return (
    <div>
      <GameDescription onStart={handleStart} />
    </div>
  );
};

export default Home;
