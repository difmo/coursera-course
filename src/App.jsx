import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <Routes>
            <Route element={<Layout />}>
            
            <Route path="/" element={<Home />} />

            
            </Route>

            </Routes>

    </>
  )
}

export default App
