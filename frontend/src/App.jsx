import './App.css'
import Chat from './components/Chat/Chat'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  )
}

export default App
