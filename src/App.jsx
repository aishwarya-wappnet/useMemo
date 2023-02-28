import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UseMemo from './UseMemo';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UseMemo/>
    </div>
  )
}

export default App
