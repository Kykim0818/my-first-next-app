import { LinkProps } from 'next/link'

declare module 'next-export-i18n' {
  export function useLanguageSwitcherIsActive(): { isActive: boolean }
  export function useTranslation(): { t: (key: string) => string }

  export function useSelectedLanguage(): {
    lang: string
    setLang: (key: 'en' | 'vi') => void
  }

  export function LanguageSwitcher(props: {
    lang: string
    children?: ReactNode
  }): React.ReactElement

  export function LinkWithLocale(
    props: LinkProps & {
      children: ReactNode
    },
  ): React.ReactElement
}
