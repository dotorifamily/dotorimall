# dotorimall v0.0.0 (23.06.11 이경진 작성)
도토리패밀리 쇼핑몰 입니다. 

# 프로젝트 환경 설정
```
npm install -g @vue/cli
// 뷰 cli 작업이 가능하도록 전역 설치
```
```
npm install
```
```
npm run serve
```

## 프로젝트 규칙 및 구조
- 폴더명
소문자로 작성
ex_ public, src, images, components 등등

- 파일명
파스칼 케이스로 작성해주시고,
Page와 Controller, Model 페이지로 나눠주시면 됩니다.
ex) LoginPage, LoginController, LoginModel 

- 변수명 (작업시)
카멜 케이스로 작성
ex) int snakeCase;

- 형상관리 규칙
기본적인 브랜치는 dev에서 branch를 새로 따와서 기능별/페이지 별로 작성하면 됩니다.   
dev에 추후 머지하는 것으로 하고 작성 완료 후 dev나 main 브랜치를 활용하여 배포 예정입니다.
로직 : dev - 새 브렌치 - dev에 머지
브랜치 : feature/lkj(영문이름)/작성 내용
커밋 규칙 : git commit -m "이름 - 추가된 내용 혹은 기능" 으로 작성하면 됩니다.
기능 단위 혹은 페이지 단위로 커밋하시면 관리하기 편하실 것 입니다.

- 프로젝트 구조
소스파일의 경우
src 내부에 폴더를 만들어서 사용.
src/components/ : 모듈화 해서 컴포넌트화 된 내용을 넣어서 사용. ex) Header.vue, Footer.vue, 기타 Template
src/pages/ : View단의 화면 Pages들을 작성 합니다. ex) LoginPage.vue, ProductsPage.vue, Cart.vue
src/controller : 컨트롤러 페이지를 작성합니다. ex) LoginController.vue
src/model : 모델 페이지를 작성합니다. ex) LoginModel.vue

이미지 파일의 경우
assets 폴더에서 새로운 폴더를 만들어서 담아서 사용합니다.
assets/common/ (공통)
assets/login/
assets/signup/
assets/products/
aseets/cart/
etc...

Router, 상태관리 등 기본적으로 있는 js 파일 등에서 추가해서 사용
ex) main.js / router.js 등등

기타 추가로 필요한 영역이 있으면 폴더 작성 후 MVC패턴 기반으로 만들어서 나아가면 됩니다.
Typescript파일의 경우 기존 .vue 파일이 있는 곳에 추가로 작성되게 작업하시면 됩니다.

- 상태관리
Vuex vs Pinia 입니다.
Pinia는 Vue 개발자가 추천하는 새로운 상태 관리 입니다.
Vuex : Options API
Pinia : Composition API (Setip API 및 Options API 둘다 지원)
Vue3가 Vue2에서 작성 스타일이 바뀌어서 Pinia와 궁합이 맞아보이는데 한 번 진행해보면 좋을 것 같습니다.  
<a href="https://velog.io/@hgoguma_124/Vue.js%EC%9D%98-%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-Pinia" alt="Pinia">Pinia보기</a>
```
npm install pinia
```

- 기타
Vue Router, TypeScript를 추가 예정
```
npm i vue-router@next --save
```
vue add typescript
```


