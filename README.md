# 🇪🇸 태양의 나라, 스페인 — 두 가족 여행 2027

2027.9.10(금) – 9.19(일) · 어른 4 + 중3 딸 2, 총 6명의 마드리드·세비야·바르셀로나 스페인 여행 가이드 웹페이지입니다.

일정안은 **세비야 코스(p7s)** 하나이고, 상단 세비야 코스 옆 **✈️ 항공일정** 버튼에서 인천 ⇄ 스페인 오픈조 9박·8박 TOP 10 후보를 볼 수 있습니다. 항공일정은 매주 목요일 16시(KST) 클라우드 루틴이 다시 조사해 `flights.js`를 자동으로 갱신합니다.

👉 **보기: https://hs-code97.github.io/spain/**

## 구성
- `index.html` / `style.css` / `app.js` — 모바일용 가이드 페이지
- `data.js` — **일정·장소·메뉴 데이터** (내용 수정은 이 파일만 고치면 됩니다)
- `flights.js` — **항공일정 후보 데이터** (`FLIGHT_META`, `FLIGHTS` · 주간 자동 업데이트 대상)

## 자주 고칠 부분
- 숙소 상세 주소나 위치 확정 시 `data.js` → `PLACES`의 `stay_madrid`, `stay_sevilla`, `stay_granada`, `stay_bcn`의 `lat`, `lng`, `q` 수정
- 일정 시간 및 세부 동선 변경은 `DAYS` 배열의 `time`, `title`, `text` 수정 (세비야 3일은 `PLANS` 안 `p7s`의 `s4`·`s5`·`s6`)
- 쇼핑 목록 및 준비물 체크리스트는 `DONKI`(쇼핑 미션), `PACKING`(준비물) 배열 수정

사진: Wikimedia Commons (자유 라이선스) · 지도: © OpenStreetMap contributors
