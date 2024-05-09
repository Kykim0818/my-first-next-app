import Button from '@/components/@common/Button'
import { render, screen } from '@testing-library/react'

describe('button tests', () => {
  it('label에 전달한 내용을 버튼이 표시한다.', () => {
    render(<Button label="test" primary />)
    const btn = screen.getByRole('button', { name: 'test' })
    expect(btn).toBeInTheDocument()
  })
  it('primary 버튼 스타일이 적용된다.', () => {
    render(<Button label="primary false" primary />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveStyle('background-color: #1ea7fd')
  })
  it('secondary 버튼 스타일이 적용된다.', () => {
    render(<Button label="primary false" primary={false} />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveStyle('background-color: white')
  })
})
