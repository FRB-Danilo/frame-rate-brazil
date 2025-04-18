import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Sidebar />
      <Main />
    </>
  )
}

export default App
