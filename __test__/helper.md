## Jest 관련 작성 도움

- 서버 컴포넌트는 JEST 지원안함 - 작성X

#### 스타일 검사

- expect(btn).toHaveStyle('background-color: #1ea7fd')

#### 라이브러리 함수 모킹

```
// 미리 설정
jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {},
    // return mock for push method
    push: jest.fn(),
    // ... add the props or methods you need
  }),
}))

// 테스트
it('button clicked test', () => {
    const btn = screen.getByRole('button', { name: 'Return to Homepage' })
    fireEvent.click(btn)
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    expect(require('next/navigation').useRouter().push).toHaveBeenCalledWith(
      '/',
      {
        scroll: false,
      },
    )
  })
```

위에서 eslint 경고 제거용 문구 대체 방법

```
// 미리 설정
const mockRouterPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {},
    // return mock for push method
    push: (arg1: unknown, arg2: unknown) => mockRouterPush(arg1, arg2),
    // ... add the props or methods you need
  }),
}))

// 테스트
it('button clicked test', () => {
    const btn = screen.getByRole('button', { name: 'Return to Homepage' })
    fireEvent.click(btn)
    expect(mockRouterPush).toHaveBeenCalledWith('/', {
      scroll: false,
    })
  })
```
