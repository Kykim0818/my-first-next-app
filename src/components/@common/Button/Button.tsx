import styled, { CSSProp, css } from 'styled-components'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const variants = primary ? VARIANTS.primary : VARIANTS.secondary
  const sizes = SIZES[size]
  return (
    <S
      {...props}
      $variants={variants}
      $sizes={sizes}
      backgroundColor={backgroundColor}
    >
      {label}
    </S>
  )
}
const S = styled.button<{
  $variants: CSSProp
  $sizes: CSSProp
  backgroundColor: CSSProp
}>`
  // common
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  //

  ${(props) => props.$variants}
  ${(props) => props.$sizes}
  background-color: ${(props) => props.backgroundColor};
`

const VARIANTS = {
  primary: css`
    color: white;
    background-color: #1ea7fd;
  `,
  secondary: css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `,
}

const SIZES = {
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
}
