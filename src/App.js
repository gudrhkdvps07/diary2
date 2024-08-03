// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import NavBar from './components/NavBar'
// import Diary from './pages/Diary'
// import AddDiary from './pages/AddDiary'

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <NavBar />
//         <Routes>
//           <Route path="/diary" element={<Diary />} />
//           <Route path="/add-diary" element={<AddDiary />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App
// src/App.js
// src/App.js

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Diary from './pages/Diary'
import AddDiary from './pages/AddDiary'
import DetailDiary from './pages/DetailDiary'

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/diary" element={<Diary />} />
          <Route path="/add-diary" element={<AddDiary />} />
          <Route path="/detail-diary/:id" element={<DetailDiary />} />{' '}
          {/* DetailDiary 라우트 추가 */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
