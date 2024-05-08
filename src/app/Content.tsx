// this is a client component👈🏽

'use client'

import { Button } from '@/components/@common/Button/Button'
import { actionUi } from '@/stores/features/ui/uiSlice'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import { useTranslation } from 'next-export-i18n'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const Content = () => {
  const router = useRouter()
  const theme = useAppSelector((state) => state.ui.theme)
  const dispatch = useAppDispatch()
  const [result, setResult] = useState('')
  const [apiUrl, setApiUrl] = useState(
    'https://jsonplaceholder.typicode.com/todos/1',
  )
  const { t } = useTranslation()
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

  const handleClickTheme = () => {
    if (theme === 'dark') {
      dispatch(actionUi.setTheme('light'))
      return
    }
    dispatch(actionUi.setTheme('dark'))
  }

  return (
    <div>
      <span>
        {t('home.request_api')} : {apiUrl}
      </span>
      <div>
        <input
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          style={{ margin: '20px', width: '80vw' }}
        />
      </div>
      <div>
        <Button
          primary
          label={t('home.data_retrieval')}
          onClick={handleFetchData}
        />
        <Button label={t('home.reset')} onClick={handleReset} />
        <Button label={theme} onClick={handleClickTheme} />
        <Button
          primary
          label={t('home.dashboard')}
          onClick={() => router.push('/dashboard', { scroll: false })}
        />
      </div>
      <span>{result}</span>
    </div>
  )
}
