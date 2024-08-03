import React, { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const DiaryEditPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [diary, setDiary] = useState({ title: '', date: '', content: '' })
  const [error, setError] = useState('')

  const fetchDiary = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/diaries/${id}`)
      const data = await response.json()
      setDiary(data)
    } catch (error) {
      console.error('Error fetching diary:', error)
    }
  }, [id])

  useEffect(() => {
    fetchDiary()
  }, [fetchDiary])

  const handleChange = (e) => {
    const { name, value } = e.target
    setDiary({ ...diary, [name]: value })
  }

  const handleSaveEdit = async () => {
    try {
      // Check if a diary entry already exists for the selected date
      const checkResponse = await fetch(
        `http://localhost:3001/api/diaries?date=${diary.date}`
      )
      const existingDiary = await checkResponse.json()

      if (existingDiary.length > 0 && existingDiary[0].id !== id) {
        setError('해당 날짜에 이미 일기가 존재합니다.')
        return
      }

      // Proceed to update the diary entry
      await fetch(`http://localhost:3001/api/edit-diary/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(diary),
      })

      navigate('/')
    } catch (error) {
      console.error('Error editing diary:', error)
    }
  }

  return (
    <div className="container mt-5">
      <h2>일기 수정</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            제목
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={diary.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            날짜
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={diary.date}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            내용
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={diary.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSaveEdit}
        >
          저장
        </button>
      </form>
    </div>
  )
}

export default DiaryEditPage
