/* =========================================================
   항공일정 후보 — 인천 ⇄ 스페인 오픈조 (성인 3인 기준)
   자동 조회 없음 — 사용자가 조사한 표를 Claude에게 주면 그 내용으로 이 파일을 갱신합니다(README 참고).
   조건: 직항 또는 1회 경유 · 중동 경유 제외 · 인천 도착 2027-09-19(일) 17:00 이전
   정렬: 9박 = 최저가순 / 8박 = 금(9/10) 출발만, 최저가순 (사용자 표의 순위 그대로)
   필드: out/back.via 가 null 이면 직항 · wait = 경유지 대기 또는 총 소요 · total = 성인 3인(한 가족) 합계
         (원, 세금·유류할증료 포함) · src = 조회 플랫폼 → 예매처 · link = 카약 검색 바로가기
   ========================================================= */
const FLIGHT_META = {
  updated: "2026-10-31", // 조사 날짜 (화면에 "10/31 조회"로 표시)
  sources: ["Kayak"],
};

const R_A = "A · 마드리드 IN / 바르셀로나 OUT", R_B = "B · 바르셀로나 IN / 마드리드 OUT";
const KAYAK = (o, r) => `https://www.kayak.co.kr/flights/${o}/${r}/3adults?sort=price_a`;
const L9A = KAYAK("ICN-MAD/2027-09-09", "BCN-ICN/2027-09-18"), L9B = KAYAK("ICN-BCN/2027-09-09", "MAD-ICN/2027-09-18");
const L8FA = KAYAK("ICN-MAD/2027-09-10", "BCN-ICN/2027-09-18"), L8FB = KAYAK("ICN-BCN/2027-09-10", "MAD-ICN/2027-09-18");
const BAG = "위탁 수하물 포함 여부는 예약 시 확인";
const BAG8 = "23kg 위탁 수하물 포함 조건으로 조회 · 예약 시 확인";

const FLIGHTS = [
  /* ---------- 9박 · 9/9(목) 출발 → 9/18(토) 귀국 ---------- */
  { id: "n9-01", group: "9박", rank: 1, pattern: "A", route: R_A, trip: "9/9(목)~9/18(토)",
    out:  { date: "9/9(목)", airline: "중국동방항공", from: "ICN", dep: "16:20", to: "MAD", arr: "08:40", arrDate: "9/10(금)", via: "상하이", wait: "총 23h20m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "BCN", dep: "10:05", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h15m" },
    total: 4371156, src: "카약 → 트립닷컴 / 핀에어 공식홈", bag: BAG, link: L9A, tags: [["💰 9박 최저가", "good"]] },
  { id: "n9-02", group: "9박", rank: 2, pattern: "A", route: R_A, trip: "9/9(목)~9/18(토)",
    out:  { date: "9/9(목)", airline: "중국동방항공", from: "ICN", dep: "16:15", to: "MAD", arr: "08:40", arrDate: "9/10(금)", via: "상하이", wait: "총 23h25m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "BCN", dep: "10:05", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h15m" },
    total: 4371156, src: "카약 → 트립닷컴 / 마이트립", bag: BAG, link: L9A, tags: [] },
  { id: "n9-03", group: "9박", rank: 3, pattern: "A", route: R_A, trip: "9/9(목)~9/18(토)",
    out:  { date: "9/9(목)", airline: "중국동방항공", from: "ICN", dep: "12:55", to: "MAD", arr: "08:40", arrDate: "9/10(금)", via: "상하이", wait: "총 26h45m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "BCN", dep: "10:05", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h15m" },
    total: 4371156, src: "카약 → 트립닷컴 / 고투게이트", bag: BAG, link: L9A, tags: [] },
  { id: "n9-04", group: "9박", rank: 4, pattern: "A", route: R_A, trip: "9/9(목)~9/18(토)",
    out:  { date: "9/9(목)", airline: "캐세이퍼시픽", from: "ICN", dep: "20:05", to: "MAD", arr: "09:15", arrDate: "9/10(금)", via: "홍콩", wait: "총 20h10m" },
    back: { date: "9/18(토)", airline: "캐세이퍼시픽", from: "BCN", dep: "13:00", to: "ICN", arr: "12:40", arrDate: "9/19(일)", via: "홍콩", wait: "총 16h40m" },
    total: 4871400, src: "카약 → 캐세이퍼시픽 공식홈 / 하나투어", bag: BAG, link: L9A, tags: [["✈️ 왕복 같은 항공사 · 공식홈 예매 가능", "good"]] },
  { id: "n9-05", group: "9박", rank: 5, pattern: "A", route: R_A, trip: "9/9(목)~9/18(토)",
    out:  { date: "9/9(목)", airline: "캐세이퍼시픽", from: "ICN", dep: "08:00", to: "MAD", arr: "21:55", arrDate: "9/9(목)", via: "홍콩", wait: "총 20h55m" },
    back: { date: "9/18(토)", airline: "캐세이퍼시픽", from: "BCN", dep: "13:00", to: "ICN", arr: "12:40", arrDate: "9/19(일)", via: "홍콩", wait: "총 16h40m" },
    total: 4871400, src: "카약 → 캐세이퍼시픽 공식홈 / 인터파크", bag: BAG, link: L9A, tags: [["✈️ 왕복 같은 항공사 · 공식홈 예매 가능", "good"], ["🌙 마드리드 당일 밤 도착", ""]] },
  { id: "n9-06", group: "9박", rank: 6, pattern: "A", route: R_A, trip: "9/9(목)~9/18(토)",
    out:  { date: "9/9(목)", airline: "캐세이퍼시픽", from: "ICN", dep: "15:10", to: "MAD", arr: "09:15", arrDate: "9/10(금)", via: "홍콩", wait: "총 25h05m" },
    back: { date: "9/18(토)", airline: "캐세이퍼시픽", from: "BCN", dep: "13:00", to: "ICN", arr: "12:40", arrDate: "9/19(일)", via: "홍콩", wait: "총 16h40m" },
    total: 4871400, src: "카약 → 캐세이퍼시픽 공식홈 / 트립닷컴", bag: BAG, link: L9A, tags: [["✈️ 왕복 같은 항공사 · 공식홈 예매 가능", "good"]] },
  { id: "n9-07", group: "9박", rank: 7, pattern: "A", route: R_A, trip: "9/9(목)~9/18(토)",
    out:  { date: "9/9(목)", airline: "캐세이퍼시픽", from: "ICN", dep: "13:40", to: "MAD", arr: "09:15", arrDate: "9/10(금)", via: "홍콩", wait: "총 26h35m" },
    back: { date: "9/18(토)", airline: "캐세이퍼시픽", from: "BCN", dep: "13:00", to: "ICN", arr: "12:40", arrDate: "9/19(일)", via: "홍콩", wait: "총 16h40m" },
    total: 4871400, src: "카약 → 캐세이퍼시픽 공식홈 / 하나투어", bag: BAG, link: L9A, tags: [["✈️ 왕복 같은 항공사 · 공식홈 예매 가능", "good"]] },
  { id: "n9-08", group: "9박", rank: 8, pattern: "A", route: R_A, trip: "9/9(목)~9/18(토)",
    out:  { date: "9/9(목)", airline: "캐세이퍼시픽", from: "ICN", dep: "20:05", to: "MAD", arr: "09:15", arrDate: "9/10(금)", via: "홍콩", wait: "총 20h10m" },
    back: { date: "9/18(토)", airline: "캐세이퍼시픽", from: "BCN", dep: "13:00", to: "ICN", arr: "14:05", arrDate: "9/19(일)", via: "홍콩", wait: "총 18h05m" },
    total: 4928400, src: "카약 → 캐세이퍼시픽 공식홈", bag: BAG, link: L9A, tags: [["✈️ 왕복 같은 항공사 · 공식홈 예매 가능", "good"]] },
  { id: "n9-09", group: "9박", rank: 9, pattern: "A", route: R_A, trip: "9/9(목)~9/18(토)",
    out:  { date: "9/9(목)", airline: "중국남방항공", from: "ICN", dep: "16:45", to: "MAD", arr: "08:00", arrDate: "9/10(금)", via: "베이징 다싱", wait: "총 22h15m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "BCN", dep: "10:05", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h15m" },
    total: 5144700, src: "카약 → 트립닷컴 / 중국남방항공 공식홈", bag: BAG, link: L9A, tags: [] },
  { id: "n9-10", group: "9박", rank: 10, pattern: "B", route: R_B, trip: "9/9(목)~9/18(토)",
    out:  { date: "9/9(목)", airline: "중국동방항공", from: "ICN", dep: "16:20", to: "BCN", arr: "08:05", arrDate: "9/10(금)", via: "상하이", wait: "총 22h45m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "MAD", dep: "10:15", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h05m" },
    total: 5324991, src: "카약 → 트립닷컴 / 핀에어 공식홈", bag: BAG, link: L9B, tags: [] },

  /* ---------- 8박 · 9/10(금) 출발 → 9/18(토) 귀국 (목요일 출발 제외) ---------- */
  { id: "n8-01", group: "8박", rank: 1, pattern: "A", route: R_A, trip: "9/10(금)~9/18(토)",
    out:  { date: "9/10(금)", airline: "중국남방항공", from: "ICN", dep: "16:45", to: "MAD", arr: "08:00", arrDate: "9/11(토)", via: "베이징 다싱", wait: "총 22h15m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "BCN", dep: "10:05", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h15m" },
    total: 5094051, src: "카약 → 트립닷컴 / 마이트립", bag: BAG8, link: L8FA, tags: [["💰 8박 최저가", "good"]] },
  { id: "n8-02", group: "8박", rank: 2, pattern: "A", route: R_A, trip: "9/10(금)~9/18(토)",
    out:  { date: "9/10(금)", airline: "중국남방항공", from: "ICN", dep: "15:15", to: "MAD", arr: "08:00", arrDate: "9/11(토)", via: "광저우", wait: "총 23h45m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "BCN", dep: "10:05", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h15m" },
    total: 5094051, src: "카약 → 트립닷컴 / 핀에어 공식홈", bag: BAG8, link: L8FA, tags: [] },
  { id: "n8-03", group: "8박", rank: 3, pattern: "B", route: R_B, trip: "9/10(금)~9/18(토)",
    out:  { date: "9/10(금)", airline: "루프트한자", from: "ICN", dep: "11:35", to: "BCN", arr: "22:50", arrDate: "9/10(금)", via: "뮌헨", wait: "총 18h15m" },
    back: { date: "9/18(토)", airline: "LOT 폴란드항공", from: "MAD", dep: "09:10", to: "ICN", arr: "09:45", arrDate: "9/19(일)", via: "바르샤바", wait: "총 17h35m" },
    total: 5202900, src: "카약 → 루프트한자 공식홈 / 트립닷컴", bag: BAG8, link: L8FB, tags: [["⭐ 추천 · 유럽 항공사", "good"], ["🌙 바르셀로나 당일 밤 도착", "good"], ["🛬 인천 09:45 조기 도착", "good"]] },
  { id: "n8-04", group: "8박", rank: 4, pattern: "B", route: R_B, trip: "9/10(금)~9/18(토)",
    out:  { date: "9/10(금)", airline: "루프트한자", from: "ICN", dep: "11:35", to: "BCN", arr: "22:50", arrDate: "9/10(금)", via: "뮌헨", wait: "총 18h15m" },
    back: { date: "9/18(토)", airline: "LOT 폴란드항공", from: "MAD", dep: "08:05", to: "ICN", arr: "09:45", arrDate: "9/19(일)", via: "바르샤바", wait: "총 18h40m" },
    total: 5202900, src: "카약 → 루프트한자 공식홈 / 하나투어", bag: BAG8, link: L8FB, tags: [["⭐ 추천 · 유럽 항공사", "good"], ["🌙 바르셀로나 당일 밤 도착", "good"]] },
  { id: "n8-05", group: "8박", rank: 5, pattern: "A", route: R_A, trip: "9/10(금)~9/18(토)",
    out:  { date: "9/10(금)", airline: "중국동방항공", from: "ICN", dep: "16:15", to: "MAD", arr: "08:40", arrDate: "9/11(토)", via: "상하이", wait: "총 23h25m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "BCN", dep: "10:05", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h15m" },
    total: 5339940, src: "카약 → 트립닷컴 / 핀에어 공식홈", bag: BAG8, link: L8FA, tags: [] },
  { id: "n8-06", group: "8박", rank: 6, pattern: "A", route: R_A, trip: "9/10(금)~9/18(토)",
    out:  { date: "9/10(금)", airline: "중국동방항공", from: "ICN", dep: "14:30", to: "MAD", arr: "08:40", arrDate: "9/11(토)", via: "상하이", wait: "총 25h10m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "BCN", dep: "10:05", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h15m" },
    total: 5339940, src: "카약 → 트립닷컴 / 고투게이트", bag: BAG8, link: L8FA, tags: [] },
  { id: "n8-07", group: "8박", rank: 7, pattern: "B", route: R_B, trip: "9/10(금)~9/18(토)",
    out:  { date: "9/10(금)", airline: "루프트한자", from: "ICN", dep: "11:35", to: "BCN", arr: "22:50", arrDate: "9/10(금)", via: "뮌헨", wait: "총 18h15m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "MAD", dep: "10:15", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h05m" },
    total: 5761800, src: "카약 → 루프트한자 공식홈 / 핀에어 공식홈", bag: BAG8, link: L8FB, tags: [["🌙 바르셀로나 당일 밤 도착", "good"]] },
  { id: "n8-08", group: "8박", rank: 8, pattern: "A", route: R_A, trip: "9/10(금)~9/18(토)",
    out:  { date: "9/10(금)", airline: "상하이항공·동방항공", from: "ICN", dep: "18:25", to: "MAD", arr: "08:40", arrDate: "9/11(토)", via: "상하이 푸둥", wait: "총 21h15m" },
    back: { date: "9/18(토)", airline: "핀에어", from: "BCN", dep: "10:05", to: "ICN", arr: "11:20", arrDate: "9/19(일)", via: "헬싱키", wait: "총 18h15m" },
    total: 5921796, src: "카약 → 트립닷컴 / 마이트립", bag: BAG8, link: L8FA, tags: [] },
  { id: "n8-09", group: "8박", rank: 9, pattern: "B", route: R_B, trip: "9/10(금)~9/18(토)",
    out:  { date: "9/10(금)", airline: "중국동방항공", from: "ICN", dep: "16:15", to: "BCN", arr: "08:05", arrDate: "9/11(토)", via: "상하이", wait: "총 22h50m" },
    back: { date: "9/18(토)", airline: "중국동방항공", from: "MAD", dep: "11:05", to: "ICN", arr: "11:55", arrDate: "9/19(일)", via: "상하이", wait: "총 17h50m" },
    total: 6114300, src: "카약 → 중국동방항공 공식홈 / 트립닷컴", bag: "23kg 위탁 수하물 2개 포함(동방항공 스페인 노선) · 예약 시 확인", link: L8FB, tags: [["✈️ 왕복 같은 항공사 · 공식홈 예매 가능", "good"]] },
  { id: "n8-10", group: "8박", rank: 10, pattern: "B", route: R_B, trip: "9/10(금)~9/18(토)",
    out:  { date: "9/10(금)", airline: "중국동방항공", from: "ICN", dep: "14:30", to: "BCN", arr: "08:05", arrDate: "9/11(토)", via: "상하이", wait: "총 24h35m" },
    back: { date: "9/18(토)", airline: "중국동방항공", from: "MAD", dep: "11:05", to: "ICN", arr: "11:55", arrDate: "9/19(일)", via: "상하이", wait: "총 17h50m" },
    total: 6114300, src: "카약 → 중국동방항공 공식홈 / 인터파크", bag: "23kg 위탁 수하물 2개 포함(동방항공 스페인 노선) · 예약 시 확인", link: L8FB, tags: [["✈️ 왕복 같은 항공사 · 공식홈 예매 가능", "good"]] },
];
