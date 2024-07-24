import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Diary from './pages/Diary'
import AddDiary from './pages/AddDiary' // AddDiary 컴포넌트를 임포트합니다.

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/diary" element={<Diary />} />
          <Route path="/add-diary" element={<AddDiary />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
