import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-12 text-center font-sans font-normal">
      <button
        onClick={() => setCount(count + 1)}
        className="mx-2 rounded-md bg-green-200 px-4"
      >
        Welcome to Vite + Tailwind CSS <span className='font-bold font-sans'> {count}</span>
      </button>
      {count === 0 ? "Not clicked yet": null}
    </div>
  )
}

export default App
