# Book curator

Book curation App with React and ES6.

## Pages
- https://yhsol.github.io/bookcurator

## Screens(Route)
- Home (Header Title)
- Count
- Date
- Detail (with Videos, Similar, Comments)
- Search

## API Verbs
- popular, upcoming, search, detail

## Container-Presenter Pattern
- Routes Directory -> each Route Directory and index.js

## Section
- screen layout

## 컴포넌트간의 사용 방법
- 컴포넌트 전체의 컨트롤은 App.js 에서 하지만 각각의 라우트들 역시 컨테이너, 프레젠터로 구성되어 있으며 각각의 컨테이너는 index.js 를 통해 export 되므로 서로 다른 프레젠터 컴포넌트에서 필요한 해당 컨테이너를 가져다 쓸 수 있다.

- SearchPresneter 에 CountContainer 를 넣으면 기본적으로 검색 페이지가 보이고, 검색 결과가 나타나며 그 아래 CountContainer 를 출력할 수 있다.