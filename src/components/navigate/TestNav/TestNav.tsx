'use client'

import { LanguageSwitcher } from 'next-export-i18n'
import { useEffect, useState } from 'react'

export const TestNav = () => {
  const [lang, setLang] = useState<string>('')
  useEffect(() => {
    setLang(getValue(localStorage.getItem('next-export-i18n-lang') || ''))
  }, [])

  return (
    <nav>
      <select
        value={lang}
        onChange={(e) => {
          const langId = getId(e.target.value)
          const switcher = document.getElementById(langId)
          if (switcher) {
            switcher.click()
            setLang(getValue(langId))
          }
        }}
      >
        <LanguageSwitcher lang="de">
          <option id="de">Deutsch</option>
        </LanguageSwitcher>
        <LanguageSwitcher lang="en">
          <option id="en">English</option>
        </LanguageSwitcher>
        <LanguageSwitcher lang="ko">
          <option id="ko">Korean</option>
        </LanguageSwitcher>
      </select>
    </nav>
  )
}

function getId(value: string) {
  switch (value) {
    case 'Deutsch':
      return 'de'
    case 'English':
      return 'en'
    case 'Korean':
      return 'ko'
    default:
      return 'en'
  }
}

function getValue(id: string) {
  switch (id) {
    case 'de':
      return 'Deutsch'
    case 'en':
      return 'English'
    case 'ko':
      return 'Korean'
    default:
      return 'English'
  }
}
