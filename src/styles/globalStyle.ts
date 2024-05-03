import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import { darkTheme } from './theme'

// 해당 CSS 수정시에는 새로고침 해줘야 변경사항 적용됨
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
  --font-mono: NotoSans,ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

  --textColor: ${(props) => props.theme.textColor};
  --bgColor: ${(props) => props.theme.bgColor};
  /* --background-end-rgb: 255, 255, 255; */
  
}

@media (prefers-color-scheme: dark) {
  :root {
    --textColor: ${darkTheme.textColor};
    --bgColor: ${darkTheme.bgColor};
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  transition: color linear 0.1s;
  transition: background linear 0.1s;

}

body {
  color: var(--textColor);
  background-color: var(--bgColor);
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
`
