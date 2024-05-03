'use client'

import { useAppSelector } from '@/stores/hooks'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyle'
import StyledComponentsRegistry from '../styles/registry'
import { darkTheme, theme } from '../styles/theme'

export default function StyledProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const themeColor = useAppSelector((state) => state.ui.theme)
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={themeColor === 'light' ? theme : darkTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
