import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/AddDiary.css'

function AddDiary() {
  const [date, setDate] = useState('')
  const [title, setTitle] = useState('')
  const [oneLine, setOneLine] = useState('')
  const [diaryContent, setDiaryContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 날짜 확인 API 호출
    try {
      const checkResponse = await fetch(
        `http://localhost:3000/api/checkDiary?date=${date}`
      )
      const checkData = await checkResponse.json()

      if (checkData.exists) {
        alert('해당 날짜에 이미 작성된 일기가 있습니다.')
        return
      }
    } catch (error) {
      console.error('Error checking diary:', error)
      alert('일기 확인 중 오류가 발생했습니다.')
      return
    }

    const diaryData = {
      date,
      title,
      oneLine,
      diaryContent,
    }

    //일기저장 api
    try {
      const response = await fetch('http://localhost:3000/api/addDiary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(diaryData),
      })

      if (response.ok) {
        alert('일기가 성공적으로 저장되었습니다.')
        // 입력 필드 초기화
        setDate('')
        setTitle('')
        setOneLine('')
        setDiaryContent('')
      } else {
        alert('일기 저장에 실패했습니다.')
      }
    } catch (error) {
      console.error('Error saving diary:', error)
      alert('일기 저장 중 오류가 발생했습니다.')
    }
  }

  return (
    <>
      <br />
      <div className="addContainer container mt-5 border border-secondary rounded-3 p-5 pb-7 shadow p-3 text-center">
        <h1 className="titleName display-4 mt-4 fw-bold">
          <i className="addSpan bi bi-book"></i>
          오늘의 <span className="addSpan"> 일기</span>
        </h1>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="formdiv mb-3">
            <label htmlFor="DiaryAddDate" className="form-label">
              오늘 날짜
            </label>
            <input
              type="date"
              className="form-control"
              id="DiaryAddDate"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="formdiv mb-3">
            <label htmlFor="DiaryTitle" className="form-label">
              일기 제목
            </label>
            <input
              type="text"
              className="form-control"
              id="DiaryTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="formdiv mb-3">
            <label htmlFor="DiaryOneLine" className="form-label">
              한줄평
            </label>
            <input
              type="text"
              className="form-control"
              id="DiaryOneLine"
              value={oneLine}
              onChange={(e) => setOneLine(e.target.value)}
            />
          </div>
          <div className="formdiv mb-3">
            <label htmlFor="todayDiary" className="form-label">
              오늘의 일기
            </label>
            <textarea
              className="form-control"
              id="todayDiary"
              rows="3"
              placeholder="오늘의 일기를 적어보세요."
              value={diaryContent}
              onChange={(e) => setDiaryContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="Addbtn btn">
            저장하기
          </button>
        </form>
      </div>
      <div className="wise">
        <span className="wiseSpan">일기</span>를 쓴다는 것은 누구도 보지 않을
        책에 헌신할 만큼 자신의 삶이{' '}
        <span className="wiseSpan">가치가 있다</span>고 판단하는 것이다. <br />
        <br />-<span className="wiseSpan">아주 작은 반복의 힘</span>, 로버트
        마우어
      </div>
      <br />
      <br />
      <br />
    </>
  )
}

export default AddDiary
