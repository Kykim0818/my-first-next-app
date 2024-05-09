## My first Next app boilerplate

## Description

- Next 프레임워크를 사용한 프로젝트 초기 설정 목적
- 재사용 목적
- 현재 static build option 적용 (default : output 라인 삭제)

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

Licensed under the MIT License, Copyright © 2024

See LICENSE for more information.
