import { useState } from 'react'

import './App.css'

function App() {
  const [gameDeck, setGameDeck] = useState([]);

  return (
    <div className="container mx-auto p-4 bgg-slate-900 h-screen w-screen">
      <h1 className='text-4xl text-center mb-4'> BlackJack</h1>
    </div>
  )
}

export default App
