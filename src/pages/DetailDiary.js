// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import '@fortawesome/fontawesome-free/css/all.css' // FontAwesome 사용
// import '../styles/DetailDiary.css' // 스타일 파일

// function DetailDiary() {
//   const [details, setDetails] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:3000/api/details')
//       .then((response) => response.json())
//       .then((data) => setDetails(data))
//       .catch((error) => console.error('Error fetching data:', error))
//   }, [])

//   return (
//     <div className="container mt-5 border border-secondary rounded-3 p-5 pb-7 shadow p-3 mb-5">
//       <div className="header-container d-flex justify-content-between align-items-center">
//         <h1 className="detailH1 display-4 mt-4 fw-bold">
//           <i
//             className="fa-solid fa-magnifying-glass"
//             style={{ color: '#9ad6a8' }}
//           ></i>
//           그날의 일기 <span style={{ color: '#9ad6a8' }}>Detail</span>
//         </h1>
//         <Link
//           to="/diary"
//           className="linkToDiary btn mt-4 mb-2 text-white text-decoration-none"
//           style={{ backgroundColor: '#9ad6a8 !important' }}
//         >
//           홈으로
//         </Link>
//       </div>
//       <div id="book-detail" className="down">
//         {details.map((detail, index) => (
//           <div key={index} className="detail-item">
//             <h2>{detail.title}</h2>
//             <p>{detail.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default DetailDiary

// src/pages/DetailDiary.js

// src/pages/DetailDiary.js
//.
//.
//.

// import React, { useEffect, useState } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import '@fortawesome/fontawesome-free/css/all.css' // FontAwesome 사용
// import '../styles/DetailDiary.css' // 스타일 파일

// function DetailDiary() {
//   const { id } = useParams() // URL에서 id 파라미터 가져오기
//   const [detail, setDetail] = useState(null)

//   useEffect(() => {
//     fetch(`http://localhost:3000/api/details/${id}`)
//       .then((response) => response.json())
//       .then((data) => setDetail(data))
//       .catch((error) => console.error('Error fetching data:', error))
//   }, [id])

//   if (!detail) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="container mt-5 border border-secondary rounded-3 p-5 pb-7 shadow p-3 mb-5">
//       <div className="header-container d-flex justify-content-between align-items-center">
//         <h1 className="detailH1 display-4 mt-4 fw-bold">
//           <i
//             className="fa-solid fa-magnifying-glass"
//             style={{ color: '#9ad6a8' }}
//           ></i>
//           그날의 일기 <span style={{ color: '#9ad6a8' }}>Detail</span>
//         </h1>
//         <Link
//           to="/diary"
//           className="linkToDiary btn mt-4 mb-2 text-white text-decoration-none"
//           style={{ backgroundColor: '#9ad6a8 !important' }}
//         >
//           홈으로
//         </Link>
//       </div>
//       <div id="book-detail" className="down">
//         <div className="detail-item">
//           <h2>{detail.title}</h2>
//           <p>{detail.content}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DetailDiary

import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.css' // FontAwesome 사용
import '../styles/DetailDiary.css' // 스타일 파일

function DetailDiary() {
  // 하드코딩된 데이터
  const detail = {
    title: '일기의 제목',
    content: '이것은 일기의 내용입니다.',
  }

  return (
    <div className="container mt-5 border border-secondary rounded-3 p-5 pb-7 shadow p-3 mb-5">
      <div className="header-container d-flex justify-content-between align-items-center">
        <h1 className="detailH1 display-4 mt-4 fw-bold">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: '#9ad6a8' }}
          ></i>
          그날의 <span style={{ color: '#9ad6a8' }}> 일기</span>
        </h1>
        <Link
          to="/diary"
          className="linkToDiary btn mt-4 mb-2 text-white text-decoration-none"
          style={{ backgroundColor: '#9ad6a8 !important' }}
        >
          홈으로
        </Link>
      </div>
      <div id="book-detail" className="down">
        <div className="detail-item">
          <h2 className="mb-3 fw-bold fs-3">{detail.title}</h2>
          <p>{detail.content}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailDiary
