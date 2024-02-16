import { useState } from 'react'
import Base from './pages/Base'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Base/>
    </>
  )
}

export default App
