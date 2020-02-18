# NextJS_prac

## NEXT.js의 기능
 - 기본적으로 서버사이드 렌더링 지원 합니다
 - 빠르게 페이지를 로드하기 위해 자동으로 코드 스플릿을 해줍니다
 - 페이지를 기반으로 간단한 클라이언트 사이드 라우팅을 제공합니다
 - 개발 환경에서 Hot Module Replacement를 지원합니다 
   (dev 모드에서 코드가 수정되면 따로 빌드하지 않아도 자동으로 적용을 시켜줍니다)
 - Express 또는 Node 서버와 함께 사용할 수 있습니다
 - Babel과 Webpack 설정을 원하는데로 수정할 수 있습니다
 
## Setup
1. node가 설치되어 있어야 한다.(프로젝트 디렉토리 생성)
2. ```npm init -y```
3. ```npm install --save react react-dom next```
4. pages 디렉토리 생성 => ```mkdir pages```
5. package.json 수정
```
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
}
```
6. dev 서버 실행 ```npm run dev```
7. localhost:3000 접속 시 404 페이지 확인 가능하다.
8. pages/index.js 생성 후 다시 브라우저에서 localhost 접속하면  Hello Next.js 확인 가능.
```
const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
```


## References
- [NextJS란?](https://slides.com/msj9121/deck/fullscreen#/)
