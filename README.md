## My First Next App (Export Static)

![](https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white)
![](https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white)
![](https://img.shields.io/badge/REACT-61DAFB?style=flat&logo=REACT&logoColor=black)
![](https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=Storybook&logoColor=white)
![](https://img.shields.io/badge/Jest-C21325?style=flat&logo=Jest&logoColor=white)
![](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white)
![](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white)

## Description

- Next 프레임워크를 사용한 프로젝트 초기 설정 목적
- 재사용 목적
- 해당 프로젝트를 Template으로 사용
- 특정 상황(폐쇄망 및 유지보수 용이 목적)을 위한 static build option 적용 (default : output 라인 삭제)

  ```mjs
  /** @type {import('next').NextConfig} */

  const nextConfig = {
    output: 'export', // build 파일을 외부 static으로 뽑을 떄 추가하는 옵션, 미사용시 라인 주석 또는 제거 필요
    compiler: {
      styledComponents: true,
    },
  }

  export default nextConfig
  ```

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Required](#required)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Start Project](#start-project)
- [Test with Jest](#test-with-jest)
- [Storybook](#storybook)
- [Build](#build)

## Features

- Next.js App Router 이용
- Static Export 환경에서 i18n 적용 (next-export-i18n)
- styled-components Theme 적용 (Dark,Light)
- 폴더 구조 구성
- Storybook 초기 예제 코드 추가
- Jest 예제 코드 추가

## Install

- npm 기준으로 package-lock.json이 포함되어 있습니다.

```bash
npm install
```

## Getting Started

```bash
// development 환경에서 실행
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Required

- Node.js >= 18.17
- npm (Node Package Manager)

## Getting Started

### Installation

- **npm** 기준으로 package-lock.json이 포함되어 있습니다.
- npm 으로 버전 관리

### Start Project

```bash
// development 환경에서 실행
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Test with Jest

```bash
# [] 생략 시 전체 테스트 : npm run test Button.test.tsx
npm run test [*.test.ts/tsx]
# or
yarn test [*.test.ts/tsx]
# or
pnpm test [*.test.ts/tsx]
# or
bun test [*.test.ts/tsx]
```

## Storybook

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
# or
bun destorybookv
```

## Build

**Static 빌드 설정 되어 있습니다.**

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

<br/>
<a href="#top">⬆ Back to Top</a>
