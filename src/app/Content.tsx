// this is a client component👈🏽

'use client'

import { Button } from '@/components/@common/Button/Button'
import { useState } from 'react'

export const Content = () => {
  const [result, setResult] = useState('')
  const [apiUrl, setApiUrl] = useState(
    'https://jsonplaceholder.typicode.com/todos/1',
  )
  const handleFetchData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => setResult(JSON.stringify(json)))
      .catch((error) => setResult(`데이터 가져오기 실패 : ${error}`))
  }

  const handleReset = () => {
    setApiUrl('https://jsonplaceholder.typicode.com/todos/1')
    setResult('')
  }

  return (
    <div>
      <span>요청할 API : {apiUrl}</span>
      <div>
        <input
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          style={{ width: '100%', margin: '20px' }}
        />
      </div>
      <div>
        <Button primary label="데이터 가져오기" onClick={handleFetchData} />
        <Button label="초기화" onClick={handleReset} />
      </div>
      <span>{result}</span>
    </div>
  )
}
