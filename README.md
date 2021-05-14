#### 작업예정 : jQyery 제이쿼리 JSON 데이터 파싱
- 외부 date.js 파일에서 json 데이터를 저장한 후 html에서 불러와서 파싱
- 외부 사이트에서 제공하는(RestAPI서버) json 데이터를 html에서 불러와 파싱
- RestAPI 서버 중 코로나19 확진자 데이터를 받아서 html애서 파싱 (데이터를 분해해서 화면에 뿌려주는 작업)
- RestrAPI 서버주소(빅데이터) : http://corona.me/getdata

#### 20210514 금 작업예정

- 사용자당 모바일 메인페이지 footer 영역 CSS 입히기
- 과제 제출 준비
- 메인페이지에 자바스크립트(jQuery)적용- 메뉴,슬라이드이미지 처리, top 상단이동 
- 8교시에 과제물 다음카페로 전송<<<>>>
- 메인페이지에 자바스크립트(jquery)적용, -메뉴, 슬라이드 이미지 관리, top상단이동  

#### : jQuery 제이쿼리 JSON 데이터 파싱

- 외부 data.js 파일에서 json데이터를 저장한 후 html에서 불러와서 파싱
- 외부 사이트에서 제공하는(RestAPI서버) json데이터를 html에서 불러와서 파싱
- RestAPI서버 중 코로나19 확진자 데이터를 받아서 html에서 파싱(데이터를 분해해서 화면에 뿌려주는 작업)
- RestAPI서버(빅데이터) 주소: http://coroname.me/getdata

#### 20210513(목) 작업내역

- 픽사베이 이미지 3개: 로고 1개, 슬라이드 이미지 1개 , Noimage 1개 받고 경로 적어놓기
- 로고 : https://pixabay.com/ko/photos/%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%95%A0%EC%99%84-%EB%8F%99%EB%AC%BC-%EC%82%AC%EC%8A%AC-%EB%8F%99%EB%AC%BC-323262/
- 슬라이드 : https://pixabay.com/ko/photos/%ED%95%98%EC%9D%B4%ED%82%B9-%EA%B0%9C-%EC%9E%90%EC%97%B0-%ED%92%8D%EA%B2%BD-%EB%8F%99%EB%AC%BC-4591419/
- Noimage : https://pixabay.com/ko/vectors/%ED%81%AC%EB%A1%9C%EC%8A%A4-%EC%82%AD%EC%A0%9C-%EC%A0%9C%EA%B1%B0-%EC%B7%A8%EC%86%8C-296507/
- 작업폴더를 나누는 이유: 시청(관공서), 대학, 기업의 웹프로그램(사이트) 제작 할때, 1년간 무상 유지보수 이후 2천, 리뉴얼 4천 비용이 책정
- home폴더 기존작업물, 리뉴얼 home에 덮어쓰는 방식이 아니고,
- 리뉴얼 할때 home2022 폴더에 작업을 하게 됌
- 제이쿼리 코어 다운받기: 1.min버전(압축-속도가 빠름),일반버전(개발-속도 일반적)
- jQuery 미처리 작업은 다음주에
- 오늘부터는 모바일 메인페이지 1개 만들어서 과제물로 제출 -> 스프링에서 프로그램 입히는 소스로 사용하게 됌
- 애니데스크(독일산): 팀뷰어(독일산)
- html5.html, css.html, jshtml
- jquery 기본구조만 실습

#### 20210512 수 작업내역

- git clone 으로 프로젝트를 가져온 경우 아래 내용을 추가해줘야 함
- git config --list 확인해서 user.name, user.email 없으면 아래 추가
- 터미널에서 아래 2가지 생성
- git config --local user.name 영문이름
- git config --local user.eamail 영문이메일
- 프로젝트를 1명만 제작하는 경우가 없기 떄문에 2명이상일떄 소스 수정한 사람 확인용

#### 20210511 화 작업내역

- 로렘 입숨 한글: http://guny.kr/stuff/klorem/#/table-html
- 로렘 입숨 영어: https://www.websiteplanet.com/ko/webtools/lorem-ipsum/
- URL경로(path): /루트, / test/html5.html
- html5의 레이아웃 구조 제작합니다.
- 서버: 응답하는 프로그램-response - 아파치, 톰캣서버
- 클라이언트: 요청하는 프로그램=request = 웹브라우저
- HTML은 마크업이 태그로 구성됩니다.<의미있는문자>...<의미있는문자>
- http:// 127.0.0.1:80[8080(스프링기반),9000(오라클),5500,6500]
- PC의 네트워크 내부주소(공통): 127.0.0.1 = localhost
- 고유주소; yahoo.com(도메인) == 74.6.143.25(IP주소)=고유값;주민번호
- IP 주소버전: IPv4, IPv6
- HTML 버전: HTML5, HTML4.01(구버전)
-

#### 20210510(월요일) 작업내역

- 업로드 절차: 1. 커밋(commit) 2. 푸시(push)
- 다운로드 절차: 1.풀(pull) - 교실에서 작업한 결과를 집에서 이어서 작업할 때
- 레포지토리(저장소) 초기화: git init
- 개발PC(html)와 깃 저장소와 연결
- 포트의 역할이 트랜드로 많이 사용 됌
- 포트(port): 포트번호로 서비스를 만드는 것이 트렌드
- 이전에는 80 포트에 모든 서비스 묶어놓았음
- 모든 서비스를 개별로 분리하는 트렌드가 있음.: 마이크로 서비스 = RestAPI로 구현이 됌
- 같은 도메인이라도 (http://naver.com:1234/네이버 인증서비스 개발)
- 외부 인원(네이버 직원이 아닌) 위 포트기준으로 제작한 서비스를 갖다가 이용
- html : Hyper Text MarkUp Language 태그를 사용하는 언어
- md : MarkDown Lanunage 태그를 사용하지 않는 언어
