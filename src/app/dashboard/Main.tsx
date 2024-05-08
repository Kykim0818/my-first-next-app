'use client'

import Button from '@/components/@common/Button'
import { useTranslation } from 'next-export-i18n'
import { useRouter } from 'next/navigation'

export const Main = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <main>
      <h1>{t('dashboard.title')}</h1>
      <Button
        label={t('dashboard.go_home')}
        onClick={() => router.push('/', { scroll: false })}
      />
    </main>
  )
}
