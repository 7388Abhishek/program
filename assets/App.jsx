import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'
import Mind from './components/Mind game'
import Snake from './components/Snake'
import Cricket from './components/Cricket'
import Poster from './components/Poster'
import Ampire from './components/Ampire'
import Fight from './components/Fight club'
import John from './components/John'
import john from './assets/john.jpg'
import Pac from './components/Pacman'
import Color from './components/Color'
import Ludo from './components/Ludo game'
import Tourism from './components/Tourism'
import Hangman from './components/Hangman'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi, This is my first Dictionary</h1>
      <div className='dice'>
        <Dice/>
      </div>
      <div className='mind game'>
        <Mind game/>
      </div>
      <div className='snake'>
        <Snake/>
      </div>
      <div className='cricketer'>
        <Cricket/>
      </div>
      <div className='poster'>
        <Poster/>
      </div>
      <div className='ampire'>
        <Ampire/>
      </div>
      <br />
      <div className='fighter'>
        <Fight />
        </div>

      <div className='john'>
        <John />
        <img src={john} />
      </div>
      <br />
      <div className='Pac'>
        <Pac />
      </div>
      <div className='colour'>
        <Color />
      </div>
      <div className='ludo gane'>
        <Ludo />
      </div>
      <div className='tour'>
        <Tourism />
      </div>
      <div className='hang'>
        <Hangman />
      </div>
   
    </>
  )
}

export default App;
