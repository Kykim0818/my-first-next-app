import { Main } from '@/app/dashboard/Main'
import { fireEvent, render, screen } from '@testing-library/react'

const mockRouterPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {},
    // return mock for push method
    push: (arg1: unknown, arg2: unknown) => mockRouterPush(arg1, arg2),
    // ... add the props or methods you need
  }),
}))

// useTranlation en mock
jest.mock('next-export-i18n', () => ({
  useTranslation: jest.fn().mockImplementation(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const translations: any = {
      en: {
        home: {
          request_api: 'API to request',
          reset: 'Initialization',
          dashboard: 'Dashboard',
          data_retrieval: 'Data retrieval',
        },
        dashboard: {
          title: 'Hello, Dashboard Page!',
          go_home: 'Return to Homepage',
        },
      },
    }
    return {
      t: (key: string) => {
        const value = key
          .split('.')
          .reduce(
            (previous, current) => (previous && previous[current]) || null,
            translations.en,
          )
        const translation = value || key
        return translation
      },
    }
  }),
}))
// setup a new mocking function for push method

describe('Main', () => {
  let a = ''
  beforeEach(() => {
    render(<Main />)
  })
  it('renders a heading', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
  it('renders proper label', () => {
    const btn = screen.getByRole('button', { name: 'Return to Homepage' })
    expect(btn).toBeInTheDocument()
  })
  it('button clicked test', () => {
    const btn = screen.getByRole('button', { name: 'Return to Homepage' })
    fireEvent.click(btn)
    expect(mockRouterPush).toHaveBeenCalledWith('/', {
      scroll: false,
    })
  })
})
