#### 20210527 목 작업
관리자단 AdminLTE적용(회원관리CRUD, 게시판CRUD, 대시보드)
#### 20210526 수 작업
- 검색엔진에 최적화: 의미있는 태그를 사용했는가 <header>,<section>,<footer>,<article>태그처럼 html5부터 만들어진 태그
- 유효성 검사: validation 입력값이 제대로 된 값인지 확인하는 과정
- html5 내장된 유효성검사-required(공백체크),type="email"(이메일형식체크), type-"password"(입력값을 숨김처리), type="digits"(숫자체크)
- js로 유효성검사 - 비밀번호 확인(2개의 입력값을 체크)
- 반응형 서브페이지들 (로그인, 회원가입, 마이페이지)처리
- htm5부터는 유효성검사가 내장되어있기때문에 JS로 빈칸인지 코딩할 필요가 없음 required 속성을 태그에 집어 넣으면 끝
- 기획시,메인1 CSS 네이밍, 서브1 CSS 네이밍
- 과장/이사급이 UI를 2개파일 만듦 또는 테마포레스트 같은 디자인 UIhtml+css+js를 구매-> 기반으로 퍼블리셔,프론트개발자 CSS나 HTML 작업을 이어서 함
- 금액이 4000이상 2억 안팎인 프로젝트 자체 UI사용
- 관리자단 AdminLTE 적용 (회원관리CRUD, 게시판CRUD, 대시보드)

#### 20210525 화 작업

- css: 계층:조부 > 부 > 본인(timeline) > 자식(collapse)>손지(time-label)>증손자
- board_view.html 댓글 AdminLTE3의 UI 디자인(부트스트랩)추가 ㅇㅋ
- 반응형 서브페이지들 (로그인, 회원가입, 마이페이지)처리할 예정
- 관리자단 AdminLTE 적용 (회원관리CRUD, 게시판CRUD, 대시보드)
- 이제 스프링 프로젝트에서 5교시에 자바기초 시작예정
- 위 시작 전 이클립스에서 프로젝트 익스플로러와 패키지(폴더경로를 .으로 구분) 익스플로러 차이 확인

#### 20210524 월 작업

- 부트스트랩용어: grid(12칸)시스템 modal,xs,sm,md,la,bs-부트스트랩,fa-폰트어썸
- 팝업창: 모달창(modal-필수창:작업 후 다음으로 이동가능), 모달리스창(modalless-작업하고 상관없이 다른창으로 이동가능)
- 폰트어썸(아이콘웹폰트): 아이콘을 확대해도 깨지지 않음(벡터이미지방식의 아이콘)
- 포토샵 디자인으로 아이콘을 만들면 확대시 깨짐(스칼라방식의 아이콘)
- 부트스트랩 그리드(모눈종이) 레이아웃: 화면을 12개의 컬럼으로 분리해서 크기를 반응형으로 만든다
- row(가로줄) cols(세로칸), col-md-12(화면가로 크기를 12로 지정 -100%)
- 반응형의 화면크기: xs엑스트라스몰(~750px), sm(750px~), md미디엄(970px~), lg라지(1170px~)
- col-6(화면가로 크기를 6으로 지정 -50%)
- 시간형식(type): date(년월일),dateTime(년월일시분초),TimeStamp(년월일시분초)
- 1970년 생일: 타임스탬프가 1970년 1월1일부터 현재까지의 초를 계산한 결과 값
- 1970년 1월 1일 부터 16억2천...초가 흐른시간이 현재시간

#### 20210524 월 작업예정

- board_view.html 댓글 UI 디자인(부트스트랩)추가
- 반응형 서브페이지들 (로그인, 회원가입, 마이페이지)처리할 예정
- 관리자단 AdminLTE 적용 (회원관리CRUD, 게시판CRUD, 대시보드)
- 이클립스 헬로월드 실습 1. 다이나믹 웹 프로젝트 (jsp 만드는 방식) 만든 후 사용자단 UI 실행만 하고 삭제
- jsp(1세대 2000년) -> 서블렛(2세대 2005년 serverlt 게시판) -> 스트러츠(3세대 2010년프레임워크)-> 스프링(4세대 2013년대,프레임워크)
- 스프링(MVC)웹프로젝트 만들예정 헬로월드 1개 - 2달간 이 프로젝트로 진행
- 위 스프링 프로젝트에서 자바기초도 이것으로 실습 -> htmlUI만들 것을 jsp변경작업 들어감

#### 20210521 금 작업예정

- 반응형모바일 게시판페이지(CRUD) CSS 처리: Create(Update) = board_write.html
- 글쓰기폼: 첨부파일부분, 내용입력부분 웹에디터 추가
- 부트스트랩(AdminLTE): 제이쿼리 기반의 UI 템플릿(프레임워크)
- AdminLTE: dist(디스트리뷰트=배포), pages(더미데이터),plugins(서머노트 등)
- 대시보드파일: index.html, index2.html, ,index3.html
- board_write.html 파일에 bootstrap코이임포트 + 서머노트플러그인 임포트
- board_view.html 댓글 UI 디자인(부트스트랩) 추가할 예정
- 반응형 서브페이지들 (로그인, 회원가입, 마이페이지)처리할 예정
- 관리자단 AdminLTE 적용 (회원관리CRUD, 게시판CRUD, 대시보드)
- 톰캣(class해석) vs VS 라이브서버(아파치-html해석)
- 자바소스(.java앱.jsp웹) -> 컴파일(라인단위x-인터프리터x) -> class파일(여기에 DB자료가 동적으로 입출력이 됌)-> html 번역(WAS-톰캣) -> 크롬(IE) 화면에 렌더링 결과
- localhost 도메인 = 127.0.0.1 아이피와 바인딩되는 도메인
- 이클립스 헬로월드 실습 1. 다이나믹 웹 프로젝트 (jsp 만드는 방식) 만든 후 사용자단 UI 실행만 하고 삭제
- 백엔드 - 1. 이클립스(스프링-규모가 있는 프로젝트 개발) 2. 인텔리
  (스프링부트-규모가 작은 프로젝트)
- 2. 스프링 (MVC)웹프로젝트 만들 예정. 헬로월드 1개 - 2달간 이 프로젝트로 진행됩니다
- 위 스프링 프로젝트에서 자바 기초도 이것으로 실습할 예정, htmlUI 만들것을 jsp변경작업으로 들어감

#### 20210520 목 작업

- 메인페이지 시간이 걸리는 부분(프론트엔드): 메뉴처리, 슬라이딩 처리ㅇㅋ
- 모바일 게시판페이지(CRUD) CSS 처리: Read(list, view 페이지) ㅇㅋ
- Read -리스트형식(다중Map): board_list.html
- Read: 단일 Map형식,json형식(key1:value1,key2:value2.key3:value3...): board_view.html (회원상세보기)
- 상세보기 페이지 댓글 디자인은 부트스트랩 디자인시(관리자단 작업시) 추가할 예정
- 카멜표기법(낙타등표기법 예: .bbsListTble),\_표기법(예, .bbs_title)
- href(헤르프): hypertext reference (웹문서 참조)
- 정적(static)콘텐츠: html,css,js
- 동적(dynamic) 콘텐츠: jsp(java 스프링), py(python장고), PHP, C#(닷넷), Nodejs(익스프레스)
- (데이터|변수) 바인딩 : 정적인 콘텐츠에 동적인 데이터를 넣어주는 것(묶어주는 역할)
- 오후에 자바(스프링) 개발환경 설치예정.(이클립스: 전자정부표준프레임워크의 개발환경 설치)
- <메인페이지 시간이 걸리는 부분(백엔드): 최근갤러리, 최근공지사항 DB데이터를 출력하는 부분
- 보통 일주일정도 걸림
- 전자정부표준프레임워크를 제작한 업체: 삼성SDS LG CNS SK C&C
- 게시물 타이틀 넘치는 부분 CSS 처리함,
- 상단로고와 메뉴바 코딩 수정 필요>
- 모바일 서브페이지 CSS 스타일처리
- 테블릿 + PC용 CSS 스타일 처리
- 모바일 게시판페이지(CRUD) CSS 처리
- 테블릿 + PC용 CSS 스타일 처리
- 모바일 + 태블릿 + PC 댓글시스템 CSS + 제이쿼리 + 부트스트랩 처리
- AdminLTE(부트스트랩기반템플릿 - 반응형 툴)을 이용해서 관리자단 디자인 만들기\*\*\*
- UI 디자인 끝 ----------------------------------------------
- UI 구현 시작---------스프링 프로젝트 시작(자바+이클립스+오라클)
- UI 구현 .... 위에서 제작한 UI 디자인 이용해서 프로그램을 입히게 됩니다

#### 작업예정

- 1달간(프론트엔드) UI 계속 진행(vs code)하면서,
- 피곤할때 자바|스프링(이클립스-egov전자정부프레임워크개발환경) 기본언어 실습진행
- 피곤할때, 오라클DB(SQL디벨러퍼개발환경) Ansi-SQL(표준 SQL)기본언어실습진행CRUD
- 2달째부터(백엔드) 주로 스프링으로 실습진행(납품용-이력서포트폴리오용)
- egov: 자바기반 ->JDK(Java Development Kit 자바개발환경) 설치확인
- JDK 실행 경로 추가
- java-version (git--version)
- 자바 오라클 자바는 8버전부터는 돈을 내야함 이슈때문에, 오픈 JDK 회사에서는 변경
- 그래서 오라클 자바8~11버전을 지우고 오픈 JDK로 변경 후 이클립스를 사용할 예정
- OPEN JDK 8JDK(egov와 100%호환됌)
- 톰캣- 이클립스에서 웹프로그램 결과를 확인하는 라이브 서버입니다.(localhost:8080)
- 라이브서버(아파치): VS code에서 HTML 결과를 확인하는 라이브 서버(localhost: 5500)
- JRE(Java Runtime Envirionment): 자바앱을 실행할떄만 사용
- JDK 설치: 개발하고 실행할때
- 점심후 웹프로젝트 1개(헬로월드)-생성 play후 지우고(버리고 나머지는 2달 후까지 계속 가져갑니다)
- 스프링프로젝트1개(헬로자바)-test 폴더에서 자바기초를 실습
- 자바에 익숙해진 후 위 스프링프로젝트를 이용해서 스프링 웹프로젝트 진행

#### 20210518(화) 작업예정

- 테블릿 메인 CSS 스타일 처리, PC용 메인 CSS 스타일처리
- 반응형 페이지의 핵심기술은 미디어쿼리 명령어 사용, 가로크기를 %로 지정 (px 고정크기가 아닌 비율로 내부 컨텐츠 크기를 지정하는 방법)
- 미디어(PC화면, 스마트폰화면, 프린터, 태블릿화면) + 쿼리(질의어-질문)
- @media 미디어 타입(screen,print 등등 -all) and (min-width:80px) {스타일구현내용}
- 태블릿은 마우스 오버 기능을 넣을 필요가 없음( 손가락으로 선택을 해서)
- 배치1: jQuery코어 임포트 이후에 사용자가 지정한 js배치를 해야함
- 배치2: reset.css, mobile.css 임포트 이후에 사용자가 지정한 tablet.css, pc.css 배치해야 레이아웃이 깨지지 않음

#### 작업 : jQyery 제이쿼리 JSON 데이터 파싱

- 외부 date.js 파일에서 json 데이터를 저장한 후 html에서 불러와서 파싱
- 외부 사이트에서 제공하는(RestAPI서버) json 데이터를 html에서 불러와 파싱
- RestAPI 서버 중 코로나19 확진자 데이터를 받아서 html애서 파싱 (데이터를 분해해서 화면에 뿌려주는 작업)
- RestrAPI 서버주소(빅데이터) : http://corona.me/getdata

#### 20210517(월) 작업예정

- 수업시작전, jsonData 파싱부분에서 append 사용에 2번 반복되는 부분 확인OK.
- 메인페이지에 자바스크립트(jQuery)적용(VS code + HTML + CSS + jQuery)
- 제이쿼리적용부분: 메뉴 ㅇㅋ, 슬라이드 이미지 3개 처리 -- 모바일 메인페이지만 마무리
- 보통 이미지 슬라이드 처리는 외부 라이브러리(Lib) 사용(니보슬라이드, 캐로셀슬라이드)
- 외부Lib 사용안하고, 우리가 만들어 볼거임 //
- 테블릿 메인 CSS 스타일 처리, PC용 메인 CSS 스타일처리
- 모바일 서브페이지 CSS 스타일처리
- 테블릿 + PC용 CSS 스타일 처리
- 모바일 게시판페이지(CRUD) CSS 처리
- 테블릿 + PC용 CSS 스타일 처리
- 모바일 + 태블릿 + PC 댓글시스템 CSS + 제이쿼리 + 부트스트랩 처리
- AdminLTE(부트스트랩기반템플릿 - 반응형 툴)을 이용해서 관리자단 디자인 만들기\*\*\*
- UI 디자인 끝 ----------------------------------------------
- UI 구현 시작---------스프링 프로젝트 시작(자바+이클립스+오라클)
- UI 구현 .... 위에서 제작한 UI 디자인 이용해서 프로그램을 입히게 됩니다

#### 20210514 금 작업예정

- 구문오류: syntex 신텍스오류(사인텍스)오류(문법오류)
- 검사기준: CSS3 , HTML5
- 사용자당 모바일 메인페이지 footer 영역 CSS 입히기
- top 상단이동 ok
- 과제 제출 준비 ok
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
