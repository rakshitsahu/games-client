import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.css'
import Background from './tic-tac-toe/components/Background';
import Grid from './tic-tac-toe/components/Grid';
import Player from './tic-tac-toe/components/Player';
import Loading from './components/Loading';
import GameOver from './tic-tac-toe/components/PopUp';
import PopUp from './tic-tac-toe/components/PopUp';
enum GameState{
  Unloaded,
  GameStart,
  GamePlay,
  GameOver
}

function App() {
  const loadingRef = useRef(null);
  const [gameState , setGameState] = useState(GameState.GameStart)

  useEffect( () => {
 
    return () => {
      console.log('Component unmounted or dependencies changed');
    };
  }, [gameState]);
  const dummyImage = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
  
  return (
    <div className='bg-black h-screen w-screen flex items-center justify-center relative'>
    <Background>
      <div className='grid grid-cols-2 w-full h-[6rem]'>
        <Player name='Rakshit' minutes={1} seconds={30} avatar={dummyImage} trophies={0} isOpponent={false} />
        <Player name='Divyansh' minutes={1} seconds={30} avatar={dummyImage} trophies={0} isOpponent={true} />
      </div>
      <div className='w-full h-full flex justify-center items-center'>
      <Grid side= {3}/>
      </div>
    </Background>
    {
      gameState == GameState.Unloaded && <Loading />  
    }
    <PopUp description='You Won'  heading='You Won'/>
    </div>
  );
}

export default App;
