/* =========================================================
   태양의 나라, 스페인 2027 — 두 가족 6인(어른 4 · 중3 딸 2) 여행 데이터
   마드리드 (IN) · 그라나다 · 바르셀로나 (OUT) | 2027.09.10(금) ~ 09.19(일)
   ========================================================= */

const W = "https://thumb.wikimedia.org/wikipedia/commons/thumb/";
const U = "https://upload.wikimedia.org/wikipedia/commons/";

const TRIP = {
  title: "태양의 나라, 스페인 여행",
  start: "2027-09-10T09:30:00+09:00",
  end: "2027-09-19T10:30:00+09:00",
  stay: "마드리드(3박) · 그라나다(2박) · 바르셀로나(3박) 6인 가족형 숙소",
  members: { adult: 4, teenGirls: 2 },
  heroes: [
    { src: W + "e/ef/SF_maig_2_cropped.jpg/960px-SF_maig_2_cropped.jpg", file: "SF_maig_2_cropped.jpg", pos: "center 40%" },
    { src: W + "d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/960px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg", file: "Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg", pos: "center 50%" },
    { src: W + "9/9b/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg/960px-Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg", file: "Palacio_Real_de_Madrid_Julio_2016_(cropped).jpg", pos: "center 50%" },
    { src: W + "b/bf/Casa_Batllo_Overview_Barcelona_Spain_cut.jpg/960px-Casa_Batllo_Overview_Barcelona_Spain_cut.jpg", file: "Casa_Batllo_Overview_Barcelona_Spain_cut.jpg", pos: "center 45%" },
  ],
};

/* ---------------------------------------------------------
   장소 (관광지 spot · 식당 food · 쇼핑 shop · 숙소 stay · 교통편 move)
   --------------------------------------------------------- */
const PLACES = {
  /* ==================== 숙소 (STAY) ==================== */
  stay_madrid: {
    type: "stay", emoji: "🏠", name: "마드리드 숙소 (솔·마요르 광장 베이스캠프)", jp: "Puerta del Sol / Plaza Mayor, Madrid",
    img: W + "d/d2/Madrid_Plaza_Mayor_%2848733706273%29.jpg/960px-Madrid_Plaza_Mayor_%2848733706273%29.jpg", credit: "Madrid_Plaza_Mayor_(48733706273).jpg",
    imgNote: "숙소 인근 마요르 광장 전경",
    lat: 40.4162, lng: -3.7048, area: "마드리드 센트로 (1~3박)",
    desc: "마드리드 1~3일차 베이스캠프(6인용 3베드룸 아파트 또는 패밀리 커넥팅룸). 솔 광장·마요르 광장·산 미겔 시장·왕궁까지 모두 도보 5~12분 거리라 두 가족 6명이 여유롭게 오가며 쉬기 최적의 위치입니다.",
    tips: ["도착 첫날 근처 메르카도나(Mercadona) 또는 까르푸 익스프레스에서 6인분 생수·과일·하몬·아침 간식 구매", "엘리베이터 유무와 대형 캐리어 6개 보관 공간을 예약 시 최종 확인"],
    q: "Puerta del Sol Madrid",
  },
  stay_granada: {
    type: "stay", emoji: "🏠", name: "그라나다 숙소 (이사벨 라 카톨리카·대성당 인근)", jp: "Plaza Isabel la Católica, Granada",
    img: W + "2/22/Granada_-_Cathedral_Front.jpg/960px-Granada_-_Cathedral_Front.jpg", credit: "Granada_-_Cathedral_Front.jpg",
    imgNote: "숙소 인근 그라나다 대성당 광장",
    lat: 37.1758, lng: -3.5975, area: "그라나다 중심가 (4~5박)",
    desc: "그라나다 4~5일차 베이스캠프. 알바이신 언덕처럼 계단이 많은 골목 대신, 택시와 미니버스(C30·C32)가 바로 서는 평지 중심가(콜론 거리·누에바 광장 사이)에 잡아 캐리어 6개 이동이 훨씬 수월합니다.",
    tips: ["알함브라 궁전행 C30번 미니버스 정류장이 도보 2분 거리", "저녁에는 나바스 거리(Calle Navas)와 대성당 주변 타파스 바까지 도보로 안전하게 이동 가능"],
    q: "Plaza Isabel la Catolica Granada",
  },
  stay_bcn: {
    type: "stay", emoji: "🏠", name: "바르셀로나 숙소 (에이샴플라·카탈루냐 광장 인근)", jp: "Eixample / Passeig de Gràcia, Barcelona",
    img: W + "e/e3/Via_Barcelona_Casa_Mil%C3%A0.JPG/960px-Via_Barcelona_Casa_Mil%C3%A0.JPG", credit: "Via_Barcelona_Casa_Milà.JPG",
    imgNote: "숙소 인근 그라시아 거리 전경",
    lat: 41.3905, lng: 2.1665, area: "바르셀로나 에이샴플라 (6~8박)",
    desc: "바르셀로나 6~8일차 베이스캠프. 치안이 가장 안전하고 바둑판처럼 정돈된 에이샴플라(그라시아 거리 인근)에 위치해, 카사 바트요·카탈루냐 광장·비니투스 맛집까지 걸어서 다닐 수 있습니다.",
    tips: ["바르셀로나 관광세(도시세)가 1인 1박당 부과되니 체크인 시 카드 결제 준비", "귀국일 공항버스(Aerobús) 정류장(카탈루냐 광장)까지 도보 5~7분"],
    q: "Passeig de Gracia Barcelona",
  },

  /* ==================== 교통편 카드 (MOVE) ==================== */
  move_flight_in: {
    type: "move", emoji: "✈️", name: "인천(ICN) → 마드리드(MAD) 경유 항공편", jp: "Incheon → Madrid-Barajas (T4/T1)",
    img: W + "7/79/MADRID_100206_UDCI_019.jpg/960px-MADRID_100206_UDCI_019.jpg", credit: "MADRID_100206_UDCI_019.jpg",
    imgNote: "마드리드 도착 환영 전경",
    lat: 40.4719, lng: -3.5626, area: "소요 약 18~20시간 (1회 경유)",
    desc: "인천국제공항을 출발해 중동(도하/두바이/아부다비) 또는 유럽 허브 공항을 1회 경유하여 마드리드 바라하스 국제공항에 도착하는 여정입니다. 총 비행 및 환승 시간은 약 18~20시간 소요됩니다.",
    tips: [
      "중3 딸 2명과 어른 4명이 지루하지 않도록 기내 볼거리(넷플릭스 오프라인 저장)와 목베개·슬리퍼·보습 립밤을 기내용 가방에 챙기세요.",
      "경유지에서 2~3시간 환승 시 게이트 위치를 먼저 확인한 뒤 라운지나 카페에서 다리를 펴고 휴식하세요.",
      "위탁수하물 지연에 대비해 1일치 속옷과 세면도구, 상비약은 반드시 기내 반입 캐리어에 넣으세요."
    ],
    menu: {
      order: [
        "좌석 지정: 3-3-3 배열 항공기 기준 앞뒤 3석씩 2줄(창가~통로)로 나란히 사전 지정 추천",
        "환승 팁: 인천에서 수하물을 부칠 때 최종 목적지 ‘마드리드(MAD)’ 태그가 붙었는지 꼭 확인"
      ]
    },
    price: "총 약 18~20시간 소요",
    q: "Adolfo Suarez Madrid-Barajas Airport",
  },
  move_mad_airport_taxi: {
    type: "move", emoji: "🚕", name: "마드리드 공항 → 시내 숙소 (공식 정액 택시 2대)", jp: "Taxi Oficial Aeropuerto → Centro (Tarifa 33€)",
    img: W + "f/fb/2026-09-03_-_Puerta_del_Sol_in_Madrid_Spain.jpg/960px-2026-09-03_-_Puerta_del_Sol_in_Madrid_Spain.jpg", credit: "2026-09-03_-_Puerta_del_Sol_in_Madrid_Spain.jpg",
    imgNote: "마드리드 시내 중심 솔 광장 도착",
    lat: 40.4650, lng: -3.5700, area: "차량 약 25~30분 · 정액제",
    desc: "20시간의 긴 비행 후 대형 캐리어 6개를 들고 지하철·공항버스를 환승하면 가족 모두 지칩니다. 마드리드 공항에서 시내(M-30 순환도로 안쪽)까지는 어디든 ‘1대당 33유로 고정 요금(Tarifa 4)’이므로, 공식 흰색 택시 2대(3명·3명)로 나누어 숙소 문 앞까지 바로 이동합니다.",
    tips: [
      "공항 출구 밖 공식 택시 승강장(하얀색 차량에 빨간 띠)을 이용하세요 — 수하물 추가 요금이나 야간 할증이 일절 없는 33유로 정액제입니다.",
      "Uber / Cabify 앱으로 6인승 대형 밴(Van/XL) 1대를 호출해도 되지만, 큰 캐리어 6개가 다 안 실릴 수 있어 일반 택시 2대(총 66유로)가 가장 빠르고 확실합니다.",
      "1호차(아빠1+엄마1+딸1), 2호차(아빠2+엄마2+딸2)로 나누어 타고 숙소 주소를 기사님께 보여주세요."
    ],
    menu: {
      order: [
        "이동 수단: 공식 택시 2대 (3명 + 캐리어 3개씩 분승)",
        "소요 시간: 약 25~30분 (숙소 문 앞 하차)",
        "예상 비용: 대당 €33 정액 × 2대 = 총 €66 (6인 합산)"
      ]
    },
    price: "택시 2대 총 €66 (정액)",
    q: "Aeropuerto Madrid Barajas Taxi",
  },
  move_mad_metro_taxi: {
    type: "move", emoji: "🚇", name: "마드리드 시내 이동 (메트로 Multi 카드 & 택시)", jp: "Metro de Madrid / Taxi",
    img: W + "7/79/MADRID_100206_UDCI_019.jpg/960px-MADRID_100206_UDCI_019.jpg", credit: "MADRID_100206_UDCI_019.jpg",
    lat: 40.4190, lng: -3.6930, area: "소요 약 10~15분",
    desc: "숙소(솔 광장)에서 프라도 미술관·레티로 공원 등 약간 떨어진 구간을 이동할 때 이용합니다. 마드리드 지하철은 ‘Multi 카드(무기명 교통카드, 카드값 €2.50)’ 1장에 10회권(Metrobús 10회 약 €6.10~€12.20)을 충전해 6명이 돌려가며 연속으로 태그할 수 있어 매우 편리합니다!",
    tips: [
      "지하철 1장으로 6명 통과하기: 앞사람이 개찰구에 찍고 통과한 뒤 다음 사람에게 카드를 건네주면 6명 모두 한 카드로 입장 가능!",
      "미술관 관람 후 다리가 아플 때는 주저하지 말고 택시 2대(기본요금 수준, 대당 €6~€9)를 타면 6명이 지하철 요금과 큰 차이 없이 편하게 이동합니다."
    ],
    menu: {
      order: [
        "지하철: Sol 역(2호선) → Banco de España 역 또는 Retiro 역 (약 5~10분)",
        "택시/우버: 택시 2대 분승 시 대당 약 €6~€9 (약 10분 소요)"
      ]
    },
    price: "10회권 카드 공유 또는 택시 2대(약 €14)",
    q: "Banco de Espana Metro Madrid",
  },
  move_mad_to_atocha: {
    type: "move", emoji: "🚕", name: "마드리드 숙소 → 아토차 역 (택시 2대 이동)", jp: "Taxi → Estación de Madrid-Puerta de Atocha",
    img: W + "b/b5/Atocha_railway_station_5.JPG/960px-Atocha_railway_station_5.JPG", credit: "Atocha_railway_station_5.JPG",
    lat: 40.4065, lng: -3.6896, area: "소요 약 10~15분 · 아토차 역",
    desc: "그라나다행 고속열차(AVE)를 타기 위해 캐리어 6개를 싣고 마드리드 푸에르타 데 아토차(Atocha) 기차역으로 이동합니다. 아토차 역은 열차 탑승 전 간단한 수하물 엑스레이 보안검색이 있으므로 출발 40분 전에는 역에 도착해야 합니다.",
    tips: [
      "아토차 역 구내의 유명한 실내 열대 식물원 정원과 역 앞 카페에서 기차 간식(하몬 샌드위치·커피·주스)을 사서 타세요.",
      "그라나다행 AVE는 보통 ‘지상층(Planta Baja) 또는 1층 출발장’에서 탑승합니다. 전광판에서 열차 번호와 플랫폼(Vía)을 확인하세요."
    ],
    menu: {
      order: [
        "이동 수단: 숙소 앞에서 택시 2대 호출 (Uber / Cabify / FreeNow)",
        "소요 시간: 약 10~15분 (대당 약 €8~€10)",
        "도착 목표: 열차 출발 최소 40분 전 도착 (보안검색 통과)"
      ]
    },
    price: "택시 2대 총 약 €16~€20",
    q: "Estacion de Madrid Puerta de Atocha",
  },
  move_ave_granada: {
    type: "move", emoji: "🚄", name: "렌페(Renfe) AVE 고속열차: 마드리드 → 그라나다", jp: "Renfe AVE · Madrid Atocha → Granada",
    img: U + "e/ed/Trenes.jpg", credit: "Trenes.jpg",
    lat: 38.7500, lng: -3.6500, area: "소요 약 3시간 25분 · 고속열차",
    desc: "스페인 국영 고속열차 AVE를 타고 마드리드 아토차 역에서 안달루시아의 보석 그라나다 역까지 약 3시간 25분 동안 쾌적하게 달립니다. 창밖으로 끝없이 펼쳐지는 라만차 평원과 해바라기·올리브 나무 구릉지가 장관입니다.",
    tips: [
      "좌석 예약 꿀팁: 6인 가족이므로 테이블을 사이에 두고 마주 보는 ‘4인 테이블석(Mesa 4)’ 1세트 + 바로 옆 ‘2인석’으로 붙여서 예매하면 도시락과 간식을 먹으며 담소 나누기 최고입니다!",
      "렌페 티켓은 출발 60~90일 전 오픈될 때 예매하면 1인 €25~€45 수준으로 훨씬 저렴합니다.",
      "대형 캐리어는 객차 양 끝의 수하물 랙에 보관하세요 (자물쇠나 와이어락을 채워두면 더욱 안심)."
    ],
    menu: {
      order: [
        "출발/도착: 마드리드 아토차 역 → 그라나다 역 (무환승 직통)",
        "소요 시간: 약 3시간 20분 ~ 3시간 30분",
        "추천 좌석: 4인 테이블석(Mesa) + 인접 2인석 (사전 지정 필수)"
      ]
    },
    price: "1인 약 €30~€65 (사전 예매가)",
    q: "Estacion de Granada",
  },
  move_grx_station_taxi: {
    type: "move", emoji: "🚕", name: "그라나다 기차역 → 시내 숙소 (택시 2대)", jp: "Estación de Granada → Centro",
    img: W + "6/6e/202112_Granada_Station_in_daytime.jpg/960px-202112_Granada_Station_in_daytime.jpg", credit: "202112_Granada_Station_in_daytime.jpg",
    lat: 37.1840, lng: -3.6088, area: "소요 약 10분 · 택시 2대",
    desc: "그라나다 기차역에 도착해 역 앞 택시 승강장에서 택시 2대에 나누어 타고 시내 중심가 숙소로 이동합니다. 도보로는 20~25분 거리이지만 돌바닥 길에 캐리어 6개를 끌기 힘들기 때문에 택시가 정답입니다.",
    tips: [
      "기차 도착 직후에는 택시 줄이 빨리 빠지므로 기차에서 내리자마자 역 정문 밖 승강장으로 바로 나가세요.",
      "그라나다 구시가지는 일방통행과 버스 전용차로가 많으니 기사님께 숙소 정확한 주소를 보여주세요."
    ],
    menu: {
      order: [
        "이동 수단: 역 앞 공식 택시 2대 분승",
        "소요 시간: 약 8~12분",
        "예상 요금: 대당 약 €7~€10 (2대 총 약 €15~€20)"
      ]
    },
    price: "택시 2대 총 약 €16",
    q: "Estacion de tren Granada",
  },
  move_grx_minibus_albaicin: {
    type: "move", emoji: "🚌", name: "알바이신 언덕 미니버스 (C31·C32번) 또는 택시", jp: "Microbús Alhambra / Albaicín (C31 · C32)",
    img: W + "2/2f/El_Albayz%C3%ADn_panorama_%282010%29.jpg/960px-El_Albayz%C3%ADn_panorama_%282010%29.jpg", credit: "El_Albayzín_panorama_(2010).jpg",
    lat: 37.1772, lng: -3.5955, area: "소요 약 10~12분 · 미니버스/택시",
    desc: "산 니콜라스 전망대는 가파른 알바이신 언덕 꼭대기에 있습니다. 올라갈 때는 이사벨 라 카톨리카 광장이나 누에바 광장에서 귀여운 소형 미니버스(C31·C32번) 또는 택시 2대를 타고 편하게 올라가고, 내려올 때만 골목길을 천천히 걸어 내려오면 체력을 완벽히 아낄 수 있습니다!",
    tips: [
      "6명이 함께 이동할 때는 미니버스 요금(1인 €1.60 × 6명 = €9.60)과 택시 2대 요금(대당 약 €6~€7, 총 €12~€14)이 거의 비슷하므로 택시 2대가 훨씬 편하고 빠릅니다!",
      "전망대 관람 후 내려올 때는 해 질 녘 하얀 골목길(다로 강변 방향)을 따라 걸어 내려오면 약 15~20분 걸립니다."
    ],
    menu: {
      order: [
        "올라갈 때: 택시 2대(약 10분, 총 €13) 또는 C31·C32 미니버스(약 12분, 1인 €1.60)",
        "내려올 때: 알바이신 골목길 → 다로 강변(Carrera del Darro) 내리막 산책 도보 15분"
      ]
    },
    price: "1인 €1.60 (또는 택시 2대 €13)",
    q: "Plaza Nueva Granada",
  },
  move_grx_minibus_alhambra: {
    type: "move", emoji: "🚌", name: "알함브라 궁전행 미니버스 (C30·C32번) 또는 택시", jp: "Microbús C30 · Plaza Isabel la Católica → Alhambra",
    img: W + "d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/960px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg", credit: "Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",
    lat: 37.1745, lng: -3.5910, area: "소요 약 10분 · 궁전 매표소행",
    desc: "알함브라 궁전은 높은 언덕 위에 자리하고 있고, 궁전 내부에서만 3시간 이상 걸어야 하므로 올라갈 때는 무조건 차량으로 이동해야 합니다. 이사벨 라 카톨리카 광장에서 C30번 미니버스나 택시 2대를 타면 궁전 입구(매표소 또는 정의의 문)까지 10분 만에 도착합니다.",
    tips: [
      "나스르 궁전 입장 시간이 오전 일찍이라면 ‘카를로스 5세 궁전 / 정의의 문(Puerta de la Justicia)’ 정류장에서 하차하면 나스르 궁전 입구까지 가장 가깝습니다!",
      "미니버스 현금 결제 시 잔돈(동전 또는 5유로 지폐)을 미리 준비하세요."
    ],
    menu: {
      order: [
        "이동 수단: C30번 미니버스 또는 택시 2대 분승",
        "소요 시간: 약 8~10분 (언덕길 직행)",
        "하차 지점: 알함브라 매표소(Pabellón de Acceso) 또는 정의의 문(Puerta de la Justicia)"
      ]
    },
    price: "택시 2대 총 약 €14 (버스 1인 €1.60)",
    q: "Puerta de la Justicia Alhambra",
  },
  move_grx_to_airport: {
    type: "move", emoji: "🚕", name: "그라나다 시내 → 그라나다 공항(GRX) 택시 이동", jp: "Centro de Granada → Aeropuerto Federico García Lorca (GRX)",
    img: W + "6/6e/202112_Granada_Station_in_daytime.jpg/960px-202112_Granada_Station_in_daytime.jpg", credit: "202112_Granada_Station_in_daytime.jpg",
    lat: 37.1887, lng: -3.7774, area: "소요 약 25분 · 그라나다 공항",
    desc: "바르셀로나행 국내선 비행기를 타기 위해 그라나다 시내 숙소에서 페데리코 가르시아 로르카 그라나다 공항(GRX)으로 이동합니다. 공항이 아담해서 출발 1시간 30분~2시간 전에만 도착해도 수속이 매우 여유롭습니다.",
    tips: [
      "전날 저녁 숙소 호스트나 호텔 프런트에 오전 공항행 택시 2대(또는 6인승 대형 밴)를 미리 예약해 두면 아침에 훨씬 여유롭습니다.",
      "알사(ALSA) 공항버스(1인 €3, 약 40분)도 있지만 캐리어 6개를 싣고 정류장까지 이동하는 것보다 택시 2대가 훨씬 쾌적합니다."
    ],
    menu: {
      order: [
        "이동 수단: 택시 2대 (또는 사전 예약 6인승 미니밴)",
        "소요 시간: 약 20~25분",
        "예상 요금: 대당 약 €28~€32 (2대 총 약 €60)"
      ]
    },
    price: "택시 2대 총 약 €60",
    q: "Aeropuerto Federico Garcia Lorca Granada",
  },
  move_vueling_bcn: {
    type: "move", emoji: "✈️", name: "부엘링(Vueling) 국내선 항공: 그라나다 → 바르셀로나", jp: "Vueling Airlines · GRX → BCN (Terminal 1)",
    img: W + "f/ff/Vueling_A320-214_%28EC-JZQ%29_departing_Barcelona_Airport.jpg/960px-Vueling_A320-214_%28EC-JZQ%29_departing_Barcelona_Airport.jpg", credit: "Vueling_A320-214_(EC-JZQ)_departing_Barcelona_Airport.jpg",
    lat: 39.2500, lng: -0.8000, area: "비행 약 1시간 25분 · 국내선",
    desc: "그라나다에서 바르셀로나까지는 기차로 가면 6시간 30분 이상 걸리지만, 스페인 대표 항공사 부엘링(Vueling) 국내선을 타면 단 1시간 25분 만에 바르셀로나 엘 프라트 공항(T1)에 도착합니다! 두 가족 6인의 체력을 아껴주는 핵심 이동편입니다.",
    tips: [
      "수하물 규정 주의: 저비용항공(LCC)이므로 항공권 예매 시 반드시 ‘25kg 위탁수하물 포함 옵션(Optima 요금제 등)’으로 6인 모두 사전 추가하세요 (현장 추가 시 비용이 비쌉니다).",
      "국내선이라도 탑승 수속 시 여권 원본이 필요하니 여권을 손가방에 챙기세요."
    ],
    menu: {
      order: [
        "구간: 그라나다 공항(GRX) → 바르셀로나 엘 프라트 공항(BCN T1)",
        "비행 시간: 약 1시간 25분",
        "필수 체크: 위탁수하물(20~25kg) 사전 포함 예매 & 모바일 체크인"
      ]
    },
    price: "1인 약 €45~€90 (수하물 포함 기준)",
    q: "Barcelona El Prat Airport Terminal 1",
  },
  move_bcn_aerobus_taxi: {
    type: "move", emoji: "🚌", name: "바르셀로나 공항(T1) → 시내 숙소 (공항버스 또는 택시)", jp: "Aerobús A1 / Taxi Oficial → Plaça de Catalunya",
    img: W + "a/a0/BCN_AIRPORT_FROM_FLIGHT_BCN-ORY_A320_EC-MLE_%2843952944862%29.jpg/960px-BCN_AIRPORT_FROM_FLIGHT_BCN-ORY_A320_EC-MLE_%2843952944862%29.jpg", credit: "BCN_AIRPORT_FROM_FLIGHT_BCN-ORY_A320_EC-MLE_(43952944862).jpg",
    lat: 41.2974, lng: 2.0833, area: "소요 약 25~35분 · 시내 이동",
    desc: "바르셀로나 엘 프라트 공항 제1터미널(T1)에서 시내 중심(카탈루냐 광장·에이샴플라) 숙소로 이동합니다. 6명이므로 숙소 문 앞까지 바로 가는 ‘공식 검정·노랑 택시 2대’ 또는 5분 간격으로 출발하는 파란색 ‘공항버스(Aerobús A1)’ 중 선택할 수 있습니다.",
    tips: [
      "택시 2대 이용 시: 대당 약 €35~€40 (2대 총 약 €75). 숙소 문 앞까지 캐리어를 끌지 않아도 되어 가장 편합니다.",
      "에어로버스(Aerobús A1) 이용 시: 1인 편도 €7.25 (6인 총 €43.50), 카탈루냐 광장까지 약 35분 소요. 버스 내 대형 캐리어 거치대와 무료 와이파이·USB 충전기가 있습니다."
    ],
    menu: {
      order: [
        "선택 1 (추천): 공식 택시 2대 분승 → 숙소 문 앞 바로 하차 (약 25분, 총 €75)",
        "선택 2: 에어로버스 A1 탑승 → 카탈루냐 광장 하차 후 도보 (약 35분, 6인 €43.50)"
      ]
    },
    price: "택시 2대 약 €75 / 버스 6인 €43.50",
    q: "Placa de Catalunya Barcelona",
  },
  move_bcn_park_guell_taxi: {
    type: "move", emoji: "🚕", name: "숙소 → 구엘 공원 → 사그라다 파밀리아 (택시 2대 이동)", jp: "Taxi Oficial Barcelona (검정·노랑 택시)",
    img: W + "5/5d/Catalunya_Barcelona1_tango7174.jpg/960px-Catalunya_Barcelona1_tango7174.jpg", credit: "Catalunya_Barcelona1_tango7174.jpg",
    lat: 41.4080, lng: 2.1600, area: "소요 약 15분 · 언덕 직행",
    desc: "구엘 공원은 가파른 카르멜 언덕 위에 있어 지하철역(Lesseps 역)에서 내려 걸어 올라가면 20분 넘게 가파른 오르막을 올라야 합니다. 6인 가족이 아침부터 지치지 않도록 시내에서 택시 2대(또는 V24·24번 버스)를 타고 구엘 공원 정문 매표소 바로 앞까지 편안하게 이동합니다!",
    tips: [
      "구엘 공원 관람이 끝난 뒤 사그라다 파밀리아로 내려갈 때도 공원 출구 택시 승강장에서 택시 2대를 타면 10~12분(대당 약 €10~€12) 만에 성당 정문 앞에 도착합니다!",
      "바르셀로나의 검은색·노란색 공식 택시는 바가지 요금이 없고 미터기가 정확해 3명씩 2대로 나누어 타면 지하철과 비용 차이가 크지 않습니다."
    ],
    menu: {
      order: [
        "구간 1: 시내 숙소 → 구엘 공원 입구 (택시 2대, 약 15분, 대당 €12~€15)",
        "구간 2: 구엘 공원 → 사그라다 파밀리아 (택시 2대, 약 12분, 대당 €10~€12)"
      ]
    },
    price: "택시 2대 회당 총 약 €22~€28",
    q: "Park Guell Taxi Rank",
  },
  move_bcn_metro: {
    type: "move", emoji: "🚇", name: "바르셀로나 지하철 & 버스 (T-familiar 8회권)", jp: "Metro de Barcelona (T-familiar / T-casual)",
    img: W + "5/5d/Catalunya_Barcelona1_tango7174.jpg/960px-Catalunya_Barcelona1_tango7174.jpg", credit: "Catalunya_Barcelona1_tango7174.jpg",
    lat: 41.3870, lng: 2.1700, area: "소요 약 10~15분 · 대중교통",
    desc: "바르셀로나 시내(사그라다 파밀리아, 고딕 지구, 바르셀로네타 해변 등)를 이동할 때 지하철을 이용합니다. 여러 명이 한 장의 카드를 돌려가며 함께 찍을 수 있는 ‘T-familiar(8회권, 약 €10.70)’ 카드를 2장 사면 6인 가족이 총 16회 탑승할 수 있어 가성비가 최고입니다!",
    tips: [
      "주의: ‘T-casual(10회권)’은 1인 전용이라 여러 명이 돌려 찍을 수 없지만, ‘T-familiar(8회권)’는 다인 공유 전용권이라 6명이 앞사람부터 차례대로 찍고 들어갈 수 있습니다!",
      "지하철 탑승 시에는 가방을 앞으로 메고 소매치기를 항상 주의하세요."
    ],
    menu: {
      order: [
        "추천 교통권: T-familiar (8회 다인 공유권, 약 €10.70) 2장 구매 (총 16회 탑승)",
        "주요 노선: L2·L5(사그라다 파밀리아), L3(그라시아 거리·람블라스), L4(고딕 지구·바르셀로네타)"
      ]
    },
    price: "T-familiar 8회권 약 €10.70",
    q: "Passeig de Gracia Metro",
  },
  move_bcn_to_airport: {
    type: "move", emoji: "🛫", name: "바르셀로나 숙소 → 엘 프라트 공항(BCN) 이동 & 출국", jp: "Barcelona Centro → Aeropuerto BCN (T1) → Incheon",
    img: W + "a/a0/BCN_AIRPORT_FROM_FLIGHT_BCN-ORY_A320_EC-MLE_%2843952944862%29.jpg/960px-BCN_AIRPORT_FROM_FLIGHT_BCN-ORY_A320_EC-MLE_%2843952944862%29.jpg", credit: "BCN_AIRPORT_FROM_FLIGHT_BCN-ORY_A320_EC-MLE_(43952944862).jpg",
    lat: 41.2974, lng: 2.0833, area: "공항 이동 30분 + 비행 약 16~19시간",
    desc: "쇼핑으로 무거워진 캐리어를 싣고 바르셀로나 엘 프라트 공항 제1터미널(T1)로 이동합니다. 택스리펀(DIVA 키오스크 스캔 및 환급)과 마지막 공항 면세점 쇼핑을 위해 비행기 출발 3시간 30분 전에는 공항에 도착하는 것이 좋습니다.",
    tips: [
      "체크인해서 짐을 부치기 전에 반드시 1층/출발층의 ‘DIVA 택스리펀 키오스크’에서 영수증 바코드를 먼저 스캔하세요!",
      "공항 면세점에서는 하몬, 뚜론, 올리브 오일, FC 바르셀로나 공식 스토어 마지막 쇼핑이 가능합니다."
    ],
    menu: {
      order: [
        "시내 → 공항: 택시 2대(약 25~30분, 총 약 €75) 또는 카탈루냐 광장 에어로버스 A1",
        "공항 도착 목표: 출발 3시간 30분 전 (DIVA 택스리펀 → 체크인 → 면세점)"
      ]
    },
    price: "택시 2대 총 약 €75",
    q: "Barcelona Airport Terminal 1",
  },

  /* ==================== 1. 마드리드 관광지 (MADRID SPOTS) ==================== */
  puerta_del_sol: {
    type: "spot", emoji: "🐻", name: "푸에르타 델 솔 (솔 광장 & 곰 동상)", jp: "Puerta del Sol",
    img: W + "f/fb/2026-09-03_-_Puerta_del_Sol_in_Madrid_Spain.jpg/960px-2026-09-03_-_Puerta_del_Sol_in_Madrid_Spain.jpg", credit: "2026-09-03_-_Puerta_del_Sol_in_Madrid_Spain.jpg",
    lat: 40.4169, lng: -3.7035, area: "마드리드 중심 (도보권)",
    desc: "스페인 모든 도로의 시작점인 ‘0km 표지석(Kilómetro Cero)’과 마드리드의 상징인 ‘산딸기나무와 곰 동상(El Oso y el Madroño)’이 있는 활기찬 중심 광장입니다. 두 가족 6명이 스페인 여행의 시작을 알리는 첫 단체 사진을 남기기 딱 좋은 곳입니다.",
    tips: ["곰 동상 뒤꿈치를 만지면 행운이 온다는 전설이 있어요!", "바닥의 ‘Km 0’ 동판 위에 6명이 발을 모으고 위에서 아래로 발 인증샷 찍기"],
    q: "Puerta del Sol Madrid",
  },
  plaza_mayor: {
    type: "spot", emoji: "🏛️", name: "마요르 광장", jp: "Plaza Mayor de Madrid",
    img: W + "d/d2/Madrid_Plaza_Mayor_%2848733706273%29.jpg/960px-Madrid_Plaza_Mayor_%2848733706273%29.jpg", credit: "Madrid_Plaza_Mayor_(48733706273).jpg",
    lat: 40.4155, lng: -3.7074, area: "솔 광장에서 도보 5분",
    desc: "붉은 벽돌 건물과 9개의 아치형 입구로 둘러싸인 400년 역사의 아름다운 사각 광장입니다. 낮에는 거리 화가들과 노천카페가 여유롭고, 밤에는 은은한 가로등 조명이 켜져 중세 영화 속에 들어온 듯한 분위기를 자아냅니다.",
    tips: ["광장 남쪽의 ‘쿠치예로스 아치(Arco de Cuchilleros)’ 계단길이 가장 유명한 포토존입니다", "바로 옆 산 미겔 시장과 보틴 식당으로 이어지는 골목 산책 코스의 중심"],
    q: "Plaza Mayor Madrid",
  },
  royal_palace: {
    type: "spot", emoji: "👑", name: "마드리드 왕궁 & 알무데나 대성당", jp: "Palacio Real de Madrid & Catedral de la Almudena",
    img: W + "9/9b/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg/960px-Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg", credit: "Palacio_Real_de_Madrid_Julio_2016_(cropped).jpg",
    lat: 40.4179, lng: -3.7143, area: "마요르 광장에서 도보 8분",
    desc: "베르사유 궁전보다 방이 많은(3,400여 개) 서유럽 최대 규모의 화려한 왕궁입니다. 붉은 벨벳과 금빛 장식의 ‘왕좌의 방’, 스트라디바리우스 현악기 컬렉션, 웅장한 연회장 등 볼거리가 가득해 중3 딸들도 눈을 떼지 못합니다. 바로 맞은편의 알무데나 대성당과 오리엔테 광장 정원도 함께 둘러봅니다.",
    tips: ["오전 10시 오픈 시간대 온라인 사전 예매 필수 (현장 줄이 매우 깁니다)", "한국어 스마트 가이드(또는 마이리얼트립 등 한국인 가이드 투어)를 신청하면 재미가 2배!"],
    price: "일반 약 €14 (온라인 사전예약 권장)",
    q: "Palacio Real de Madrid",
  },
  prado: {
    type: "spot", emoji: "🎨", name: "프라도 미술관", jp: "Museo Nacional del Prado",
    img: W + "6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/960px-Museo_del_Prado_2016_%2825185969599%29.jpg", credit: "Museo_del_Prado_2016_(25185969599).jpg",
    lat: 40.4137, lng: -3.6921, area: "파세오 델 프라도",
    desc: "루브르, 에르미타주와 함께 세계 3대 미술관으로 꼽히는 스페인 예술의 심장입니다. 벨라스케스의 〈시녀들〉, 고야의 〈옷을 입은 마하〉와 〈1808년 5월 3일〉, 엘 그레코와 루벤스의 걸작까지 교과서에서 보던 명화들을 실제로 마주하는 감동적인 시간입니다.",
    tips: [
      "중3 딸아이들의 눈높이에 맞춰 핵심 명작 15~20점을 2시간 동안 스토리텔링으로 풀어주는 ‘프라도 소규모 가이드 투어’를 강력 추천합니다!",
      "만 18세 미만 청소년(중3 딸 2명)은 입장료 무료! (단, 온라인으로 어른 유료 티켓 예매 시 무료 청소년 티켓도 함께 발권해야 합니다)",
      "내부 사진 촬영은 엄격히 금지되어 있으니 눈으로 깊이 담아두세요."
    ],
    price: "어른 €15 / 만 18세 미만(중3) 무료",
    q: "Museo Nacional del Prado",
  },
  retiro: {
    type: "spot", emoji: "🌳", name: "레티로 공원 & 수정궁 (Palacio de Cristal)", jp: "Parque del Buen Retiro",
    img: W + "a/a0/Palacio_de_Cristal%2C_Retiro%2C_Madrid.jpg/960px-Palacio_de_Cristal%2C_Retiro%2C_Madrid.jpg", credit: "Palacio_de_Cristal,_Retiro,_Madrid.jpg",
    lat: 40.4153, lng: -3.6835, area: "프라도 미술관에서 도보 7분",
    desc: "프라도 미술관 관람 후 바로 옆 언덕을 따라 걸어 올라가면 만나는 마드리드 시민들의 초록빛 안식처(유네스코 세계문화유산)입니다. 알폰소 12세 기념비 앞 호수에서 두 가족이 보트를 타거나, 통유리로 지어진 아름다운 온실 ‘수정궁(Palacio de Cristal)’ 앞에서 인생 사진을 남깁니다.",
    tips: ["호수 보트(4인승)를 2대 빌려 두 가족 보트 경주 한 판!", "공원 내 나무 그늘 벤치와 노천 키오스크에서 시원한 레몬 맥주(클라라)나 아이스크림을 즐기며 여유를 만끽하세요."],
    price: "입장 무료",
    q: "Palacio de Cristal Retiro Madrid",
  },
  reina_sofia: {
    type: "spot", emoji: "🖼️", name: "레이나 소피아 국립미술관 (피카소 ‘게르니카’)", jp: "Museo Nacional Centro de Arte Reina Sofía",
    img: W + "b/b5/Atocha_railway_station_5.JPG/960px-Atocha_railway_station_5.JPG", credit: "Atocha_railway_station_5.JPG",
    imgNote: "미술관 바로 앞 아토차 예술 지구 전경",
    lat: 40.4079, lng: -3.6946, area: "아토차 역 맞은편",
    desc: "피카소의 세기의 걸작 〈게르니카(Guernica)〉 원본과 살바도르 달리, 호안 미로의 현대미술 작품을 소장한 미술관입니다. 가로 7.7m에 달하는 압도적인 크기의 〈게르니카〉가 주는 울림은 중학생 자녀들에게도 평생 잊지 못할 교육적·예술적 경험이 됩니다.",
    tips: ["전체를 다 보려 하지 말고 2층 206호실 〈게르니카〉와 달리·미로 전시실만 1시간 정도 집중 관람하면 피로하지 않습니다", "만 18세 미만 청소년은 무료 입장"],
    price: "어른 €12 / 만 18세 미만 무료",
    q: "Museo Reina Sofia Madrid",
  },
  gran_via: {
    type: "spot", emoji: "🛍️", name: "그란 비아 거리 & 칼라오 광장 (본고장 쇼핑)", jp: "Gran Vía, Madrid",
    img: W + "7/79/MADRID_100206_UDCI_019.jpg/960px-MADRID_100206_UDCI_019.jpg", credit: "MADRID_100206_UDCI_019.jpg",
    lat: 40.4203, lng: -3.7058, area: "솔 광장에서 도보 5분",
    desc: "‘스페인의 브로드웨이’라 불리는 마드리드 최대 번화가입니다. 웅장한 벨에포크 양식의 건축물마다 자라(Zara) 플래그십 스토어, 마시모두띠, 버쉬카, 풀앤베어, 프리모르(화장품), 레알 마드리드 공식 스토어가 들어서 있어 중3 딸들과 부모님 모두 눈이 반짝이는 쇼핑 천국입니다.",
    tips: ["엘 코르테 잉글레스(El Corte Inglés) 칼라오점 9층 ‘고메 익스피리언스(Gourmet Experience)’ 테라스에 올라가면 무료로 그란 비아와 왕궁 파노라마 뷰를 감상할 수 있어요!"],
    q: "Gran Via Madrid",
  },
  debod: {
    type: "spot", emoji: "🌅", name: "데보드 신전 (마드리드 최고의 노을 명소)", jp: "Templo de Debod",
    img: W + "c/cc/2026-09-03_-_Temple_of_Debod_in_Madrid_Spain_01.jpg/960px-2026-09-03_-_Temple_of_Debod_in_Madrid_Spain_01.jpg", credit: "2026-09-03_-_Temple_of_Debod_in_Madrid_Spain_01.jpg",
    lat: 40.4240, lng: -3.7177, area: "스페인 광장 인근 공원",
    desc: "이집트 아스완 댐 건설 당시 수몰 위기에 처한 유적을 구해준 보답으로 이집트 정부가 스페인에 통째로 기증한 기원전 2세기 실제 고대 신전입니다. 해 질 녘 수조에 비친 신전 실루엣과 신전 뒤편 전망대에서 내려다보는 마드리드 왕궁·알무데나 대성당 노을이 환상적입니다.",
    tips: ["9월 일몰 시각(20:15~20:25경) 30분 전에 도착해 공원 전망대와 신전 주변을 산책하세요", "야외 공원과 전망대는 24시간 무료 개방"],
    price: "외부 공원 및 전망대 무료",
    q: "Templo de Debod Madrid",
  },

  /* ==================== 1-B. 마드리드 추천 식당 (MADRID FOOD) ==================== */
  san_miguel: {
    type: "food", emoji: "🦐", name: "산 미겔 시장 (Mercado de San Miguel)", jp: "Mercado de San Miguel",
    img: W + "b/b3/Mercado_de_San_Miguel_2025.jpg/960px-Mercado_de_San_Miguel_2025.jpg", credit: "Mercado_de_San_Miguel_2025.jpg",
    lat: 40.4154, lng: -3.7089, area: "마요르 광장 바로 옆",
    desc: "1916년 지어진 철골과 통유리 건축물 안에 스페인 전역의 최고급 타파스 부스 30여 곳이 모인 미식 시장입니다. 각자 눈으로 보고 먹고 싶은 핀초스(꼬치 타파스), 새우구이, 하몬, 과일, 디저트를 골라 담아 즐기는 재미가 최고입니다.",
    tips: ["시장 중앙 키 높은 테이블에 어른 2명이 먼저 자리를 잡고, 나머지 가족이 부스를 돌며 음식을 사 오면 편합니다", "소매치기가 많으니 가방 지퍼 꼭 잠그기"],
    q: "Mercado de San Miguel Madrid",
    menu: {
      adult: ["🦐 감바스 & 갓 구운 해산물 꼬치(Pinchos)", "🥩 베요타 등급 하몬 이베리코 콘(Cone) & 올리브 꼬치", "🍷 시트러스 과일 듬뿍 상그리아 또는 베르무트 한 잔"],
      teen: ["🧀 모차렐라 부라타 치즈 타파스 & 연어 바게트 핀초", "🥟 바삭한 하몬·치즈 수제 크로켓(Croquetas)", "🍓 생과일 컵 & 수제 츄러스·초콜릿 디저트"],
    },
    price: "1인 약 €15~€25",
  },
  museo_del_jamon: {
    type: "food", emoji: "🥩", name: "무세오 델 하몬 (하몬 박물관 레스토랑)", jp: "Museo del Jamón (Carrera de San Jerónimo)",
    img: W + "3/35/Jamon_iberico_de_bellota_2_%28cinco_jotas%29.jpg/960px-Jamon_iberico_de_bellota_2_%28cinco_jotas%29.jpg", credit: "Jamon_iberico_de_bellota_2_(cinco_jotas).jpg",
    imgNote: "스페인 대표 이베리코 하몬 플레이트",
    lat: 40.4166, lng: -3.7012, area: "솔 광장 도보 2분",
    desc: "천장에 수백 개의 하몬 뒷다리가 주렁주렁 매달려 있는 마드리드의 명물 레스토랑입니다. 1층은 캐주얼한 바, 2층은 넓은 테이블 레스토랑(Comedor)으로 되어 있어 6인 가족이 편하게 앉아 가성비 좋게 스페인 전통 요리를 맛볼 수 있습니다.",
    tips: ["1층에서 테이크아웃으로 하몬 바게트 샌드위치(€2~€4)만 사서 간식으로 먹어도 꿀맛!", "6인 식사는 2층 테이블 좌석(Salón)으로 올라가세요"],
    q: "Museo del Jamon Carrera de San Jeronimo Madrid",
    menu: {
      adult: ["🥩 하몬 이베리코 데 베요타 샘플러 플레이트", "🍄 마늘 버섯 새우구이 & 샹그리아", "🥣 전통 갈리시아식 문어 감자 요리(Pulpo)"],
      teen: ["🥖 갓 구운 하몬 & 치즈 크루아상·바게트 샌드위치", "🍳 스페인식 감자 오믈렛(Tortilla Española)", "🍟 파타타스 브라바스(웨지감자) & 크로켓"],
    },
    price: "1인 약 €12~€22 (가성비 최고)",
  },
  botin: {
    type: "food", emoji: "🍖", name: "소브리노 데 보틴 (세계 최고령 레스토랑)", jp: "Sobrino de Botín (Desde 1725)",
    img: W + "f/ff/Casa_Bot%C3%ADn_2.JPG/960px-Casa_Bot%C3%ADn_2.JPG", credit: "Casa_Botín_2.JPG",
    lat: 40.4142, lng: -3.7080, area: "마요르 광장 남쪽 계단 아래",
    desc: "1725년에 문을 열어 기네스북에 ‘세계에서 가장 오래된 레스토랑’으로 등재된 역사적인 맛집입니다. 어니스트 헤밍웨이의 소설 《태양은 다시 떠오른다》의 마지막 장면에 등장하며, 300년 된 참나무 장작 화덕에서 구워내는 바삭하고 촉촉한 새끼 돼지 통구이(Cochinillo Asado)가 일품입니다.",
    tips: ["전 세계 여행객이 찾는 곳이므로 최소 1~2개월 전 공식 홈페이지에서 6인 테이블 사전 예약 필수!", "지하 동굴 와인셀러 좌석이나 헤밍웨이 지정석이 있는 층을 구경해 보세요"],
    q: "Sobrino de Botin Madrid",
    menu: {
      adult: ["🍖 화덕 새끼 돼지 통구이 (Cochinillo Asado) — 껍질은 과자처럼 바삭, 속살은 수육처럼 촉촉!", "🍲 보틴 전통 마늘 달걀 수프 (Sopa de Ajo)", "🍷 시원한 하우스 상그리아 피처(Jarra)"],
      teen: ["🍖 꼬치니요 아사도 (잡내가 전혀 없어 아이들이 가장 잘 먹는 메뉴)", "🍗 로스트 치킨 또는 구운 감자 곁들임", "🍮 보틴 수제 크림 카라멜 푸딩(Flan) & 아이스크림"],
    },
    price: "1인 약 €35~€50",
  },
  la_barraca: {
    type: "food", emoji: "🥘", name: "라 바라카 (80년 전통 정통 빠에야 전문점)", jp: "Restaurante La Barraca",
    img: W + "e/ed/01_Paella_Valenciana_original.jpg/960px-01_Paella_Valenciana_original.jpg", credit: "01_Paella_Valenciana_original.jpg",
    imgNote: "정통 발렌시아풍 빠에야",
    lat: 40.4201, lng: -3.6989, area: "그란 비아 인근 (초시카 거리)",
    desc: "1935년 오픈해 3대째 이어오는 마드리드 최고의 발렌시아 정통 쌀 요리(빠에야) 명가입니다. 도자기 타일로 장식된 우아하고 쾌적한 실내 공간에서 6인 가족이 대형 팬에 담긴 해산물 빠에야와 먹물 빠에야를 종류별로 시켜 나눠 먹기 완벽합니다.",
    tips: ["빠에야는 2인분 이상부터 주문 가능하니, 6명이면 ‘해산물 빠에야 2인분 + 먹물 빠에야 2인분 + 고기/야채 요리’로 시키면 양이 딱 맞습니다!", "주문할 때 ‘Poco salado(덜 짜게)’를 요청하세요"],
    q: "Restaurante La Barraca Madrid",
    menu: {
      adult: ["🥘 해산물 빠에야 (Paella Marinera) — 탱글한 새우와 홍합이 듬뿍", "🦑 오징어 먹물 빠에야 (Arroz Negro) + 알리올리 마늘 소스", "🥗 토마토 & 참치 뱃살 지중해 샐러드"],
      teen: ["🥘 먹물 빠에야에 고소한 갈릭 마요네즈(Alioli) 듬뿍 비벼 먹기", "🍗 뼈 없는 닭고기와 토끼고기가 들어간 정통 발렌시아 빠에야", "🍨 수제 레몬 소르베 & 크레마 카탈라나"],
    },
    price: "1인 약 €30~€45",
  },
  casa_labra: {
    type: "food", emoji: "🐟", name: "카사 라브라 & 라 캄파나 (솔·마요르 로컬 명물)", jp: "Casa Labra & La Campana",
    img: W + "e/e4/Ca%C3%B1a_y_Bocadillo_0628.jpg/960px-Ca%C3%B1a_y_Bocadillo_0628.jpg", credit: "Caña_y_Bocadillo_0628.jpg",
    imgNote: "마드리드 명물 오징어튀김 바게트(보카디요 데 칼라마레스)",
    lat: 40.4173, lng: -3.7046, area: "솔 광장 & 마요르 광장 바로 옆",
    desc: "1860년 문을 연 ‘카사 라브라’의 겉바속촉 대구 튀김(Tajada de Bacalao)과 대구 크로켓, 그리고 마요르 광장 옆 ‘라 캄파나’의 갓 튀긴 오징어링 바게트 샌드위치(Bocadillo de Calamares)는 마드리드 시민들의 소울푸드입니다.",
    tips: ["정식 코스 요리 대신 가볍고 빠르게 현지 로컬 간식 겸 식사를 즐기고 싶을 때 최고입니다"],
    q: "Casa Labra Madrid",
    menu: {
      adult: ["🐟 카사 라브라 명물 통대구살 튀김 (Tajada de Bacalao)", "🥖 라 캄파나 오징어링 바게트 (Bocadillo de Calamares)", "🍺 시원한 생맥주(Caña) 또는 클라라(레몬 맥주)"],
      teen: ["🥟 부드러운 대구살 크로켓 (Croquetas de Bacalao)", "🥖 갓 튀긴 오징어 튀김 샌드위치에 마요네즈 추가", "🥤 환타 오렌지/레몬 (스페인 환타는 과즙 함량이 높아 훨씬 맛있어요!)"],
    },
    price: "1인 약 €8~€15",
  },
  el_rincon_esteban: {
    type: "food", emoji: "🥩", name: "엘 린콘 데 에스테반 (전통 스페인 가정식 & 스테이크)", jp: "El Rincón de Esteban",
    img: W + "9/97/Raci%C3%B3nPulpo.jpg/960px-Raci%C3%B3nPulpo.jpg", credit: "RaciónPulpo.jpg",
    imgNote: "부드러운 갈리시아식 문어 요리(풀포)와 스테이크",
    lat: 40.4158, lng: -3.6985, area: "솔 광장·국회의사당 인근",
    desc: "친절한 서비스와 품격 있는 분위기에서 스페인 정통 육류 요리와 해산물을 즐길 수 있는 레스토랑입니다. 프라도 미술관과 솔 광장 사이에 위치해 동선이 훌륭하며, 6인 가족이 여유롭게 대화를 나누며 식사하기 좋습니다.",
    tips: ["식전 올리브와 빵이 훌륭하며, 마지막에 서비스 전통 디저트나 식후주를 내어주기도 합니다"],
    q: "El Rincon de Esteban Madrid",
    menu: {
      adult: ["🐙 풀포 아 라 가예가 (부드럽게 삶은 문어와 감자, 파프리카 오일)", "🥩 이베리코 베요타 돼지 목살 스테이크 또는 소고기 안심 스테이크", "🍷 리오하(Rioja) 레드 와인"],
      teen: ["🥩 육즙 가득 소고기 안심 스테이크(Solomillo) 미디엄 굽기", "🍤 바삭한 왕새우 튀김 & 감자튀김", "🍰 따뜻한 초콜릿 케이크 & 바닐라 아이스크림"],
    },
    price: "1인 약 €30~€45",
  },
  san_gines: {
    type: "food", emoji: "🍫", name: "초콜라테리아 산 히네스 (1894년 전통 츄러스 본점)", jp: "Chocolatería San Ginés",
    img: W + "a/ae/Chocolater%C3%ADa_%22San_Gines%22-Madrid-2009.jpg/960px-Chocolater%C3%ADa_%22San_Gines%22-Madrid-2009.jpg", credit: "Chocolatería_\"San_Gines\"-Madrid-2009.jpg",
    lat: 40.4168, lng: -3.7069, area: "솔 광장·마요르 광장 사이 골목",
    desc: "1894년 개업해 130년 넘게 사랑받는 마드리드 츄러스의 상징입니다. 설탕이나 시나몬 없이 담백하고 바삭하게 튀겨낸 츄러스(Churros)와 굵직한 포라스(Porras)를 걸쭉하고 진한 따뜻한 초콜릿 잔에 푹 찍어 먹으면 중3 딸들도 엄지를 치켜세웁니다!",
    tips: ["본점 바로 옆에 2호·3호 별관 홀과 야외 테라스가 함께 운영되어 줄이 길어도 회전율이 매우 빠릅니다", "초콜릿이 꽤 진하므로 6명이면 ‘초콜릿 4잔 + 커피/우유 2잔 + 츄러스 12~18개’로 조합하면 딱 좋습니다"],
    q: "Chocolateria San Gines Madrid",
    menu: {
      adult: ["☕ 진한 핫초콜릿 + 굵고 폭신한 포라스(Porras) 2조각 세트", "☕ 카페 콘 레체(스페인식 라떼) 곁들이기"],
      teen: ["🍫 핫초콜릿 1잔 + 바삭한 츄러스(Churros) 6개 세트", "🍦 여름·초가을 시즌에는 아이스크림 토핑 추가도 인기"],
    },
    price: "초콜릿+츄러스 6개 세트 약 €6",
  },
  valor_madrid: {
    type: "food", emoji: "🍩", name: "초콜라테리아 발로르 (스페인 왕실 초콜릿 카페)", jp: "Chocolatería Valor Madrid",
    img: W + "c/c6/Chocolate_con_churros_%2827343655726%29.jpg/960px-Chocolate_con_churros_%2827343655726%29.jpg", credit: "Chocolate_con_churros_(27343655726).jpg",
    imgNote: "진한 초콜릿과 갓 튀긴 츄러스",
    lat: 40.4189, lng: -3.7062, area: "카야오 광장 인근",
    desc: "1881년 시작된 스페인 최고급 초콜릿 브랜드 ‘발로르(Valor)’의 직영 츄러스 카페입니다. 산 히네스가 너무 붐빌 때 훨씬 넓고 쾌적한 좌석에서 다크·밀크·오렌지 초콜릿 등 취향별 농도의 초콜릿과 츄러스, 초콜릿 케이크를 즐길 수 있습니다.",
    tips: ["매장 한쪽에서 선물용 고급 발로르 초콜릿 바와 무설탕 초콜릿도 바로 구매할 수 있어요"],
    q: "Chocolateria Valor Postigo de San Martin Madrid",
    menu: {
      adult: ["☕ 다크 초콜릿(Chocolate Puro) + 수제 포라스", "☕ 에스프레소 코르타도(Cortado)"],
      teen: ["🍫 달콤한 밀크 핫초콜릿 & 츄러스", "🧇 벨기에 와플 & 초콜릿 퐁듀 또는 초콜릿 프라페"],
    },
    price: "1인 약 €6~€10",
  },
  cerveceria_catalana_mad: {
    type: "food", emoji: "🍤", name: "라테랄 (Lateral) 산타 아나 광장점", jp: "Lateral Santa Ana, Madrid",
    img: W + "6/65/Gambas_al_ajillo.jpg/960px-Gambas_al_ajillo.jpg", credit: "Gambas_al_ajillo.jpg",
    imgNote: "지글지글 끓는 감바스 알 아히요와 모던 타파스",
    lat: 40.4147, lng: -3.7008, area: "산타 아나 광장 (도보 4분)",
    desc: "마드리드의 예술가 거리 산타 아나 광장(Plaza de Santa Ana)에 위치한 세련된 모던 타파스 & 핀초스 레스토랑입니다. 테이블 간격이 넓고 음식이 자극적이지 않아 한국인 가족 여행객들의 만족도가 매우 높습니다.",
    tips: ["날씨가 선선한 저녁에는 산타 아나 광장의 야외 테라스 좌석이나 쾌적한 실내 홀 모두 좋습니다"],
    q: "Lateral Santa Ana Madrid",
    menu: {
      adult: ["🍤 감바스 알 아히요(마늘 새우 오일구이) + 바게트 빵", "🐙 구운 문어 다리와 감자 퓨레", "🍷 화이트 상그리아(Sangría de Cava)"],
      teen: ["🥩 미니 한입 수제버거 슬라이더 & 솔로미요(소안심) 핀초", "🍟 트러플 오일 감자튀김 & 치킨 스트립", "🍰 치즈케이크(Tarta de Queso)"],
    },
    price: "1인 약 €20~€30",
  },
  casa_alberto: {
    type: "food", emoji: "🥘", name: "카사 알베르토 (1827년 오픈 소꼬리찜 명가)", jp: "Casa Alberto (Desde 1827)",
    img: W + "b/b4/Croquetas_Caseras_%287068664101%29.jpg/960px-Croquetas_Caseras_%287068664101%29.jpg", credit: "Croquetas_Caseras_(7068664101).jpg",
    imgNote: "수제 하몬 크로켓과 스페인 전통 타파스",
    lat: 40.4141, lng: -3.6998, area: "후에르타스 거리 (세르반테스 집터)",
    desc: "《돈키호테》의 작가 세르반테스가 살던 건물 1층에 1827년 문을 연 유서 깊은 레스토랑입니다. 한국인의 갈비찜과 맛이 꼭 닮아 밥과 함께 먹으면 일품인 ‘라보 데 토로(소꼬리 와인찜)’와 바삭한 크로켓이 대표 메뉴입니다.",
    tips: ["안쪽 정식 레스토랑 홀을 미리 예약하면 6인 가족이 조용하고 대접받는 분위기에서 식사할 수 있습니다"],
    q: "Casa Alberto Madrid",
    menu: {
      adult: ["🍖 라보 데 토로 (Rabo de Toro, 부드러운 소꼬리 레드와인 찜)", "🦐 감바스 알 아히요 & 구운 아티초크"],
      teen: ["🥟 수제 이베리코 하몬 크로켓 (Croquetas de Jamón)", "🥩 부드러운 소고기 미트볼(Albóndigas) 토마토 스튜", "🍮 수제 토리하(스페인식 프렌치토스트 디저트)"],
    },
    price: "1인 약 €25~€40",
  },

  /* ==================== 2. 그라나다 관광지 (GRANADA SPOTS) ==================== */
  alhambra: {
    type: "spot", emoji: "🏰", name: "알함브라 궁전 & 나스르 궁전 · 헤네랄리페 정원", jp: "La Alhambra de Granada (Palacios Nazaríes & Generalife)",
    img: W + "e/ea/Patio_de_la_Acequia_%28Generalife%29_-_DSC07863_%28slightly_cropped_and_sharpened%29.jpg/960px-Patio_de_la_Acequia_%28Generalife%29_-_DSC07863_%28slightly_cropped_and_sharpened%29.jpg", credit: "Patio_de_la_Acequia_(Generalife)_-_DSC07863_(slightly_cropped_and_sharpened).jpg",
    lat: 37.1760, lng: -3.5881, area: "그라나다 사비카 언덕",
    desc: "스페인 여행의 하이라이트이자 이슬람 건축 예술의 결정체입니다. 레이스처럼 정교한 아라베스크 문양과 ‘사자의 중정(Patio de los Leones)’이 있는 나스르 궁전, 그라나다 시내가 한눈에 내려다보이는 알카사바 요새, 그리고 물소리가 시원한 여름 별궁 ‘헤네랄리페 정원’까지 약 3시간 30분 동안 천천히 감상합니다.",
    tips: [
      "⚠️ 가장 중요: 알함브라 통합권(Alhambra General)은 3개월 전 공식 사이트에서 6인 전원의 여권 번호로 즉시 예매해야 합니다!",
      "⚠️ 입장 당일 6명 전원의 ‘실물 여권 원본’을 반드시 지참해야 합니다! (사본 불가, 여권 대조 후 입장)",
      "티켓에 적힌 ‘나스르 궁전(Palacios Nazaríes) 입장 시각’에 1분이라도 늦으면 입장이 불가하므로 30분 전에는 나스르 궁전 줄에 서세요."
    ],
    price: "통합권 약 €19.09 (사전예약 및 여권 원본 필수!)",
    q: "Alhambra de Granada",
  },
  san_nicolas: {
    type: "spot", emoji: "🌇", name: "산 니콜라스 전망대 & 알바이신 지구", jp: "Mirador de San Nicolás & Albaicín",
    img: W + "d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/960px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg", credit: "Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",
    lat: 37.1811, lng: -3.5926, area: "그라나다 알바이신 언덕",
    desc: "만년설이 덮인 시에라 네바다 산맥을 배경으로 붉은 알함브라 궁전이 마주 보이는 그라나다 최고의 뷰포인트입니다. 해 질 녘 궁전이 석양빛으로 붉게 물들고 조명이 켜질 때 집시들의 통기타 선율이 어우러져 잊지 못할 감동을 선사합니다.",
    tips: ["전망대 담벼락 자리는 일몰 40분 전부터 차므로, 바로 아래 테라스 카페(엘 우에르토 데 후안 라나 등)를 예약하거나 조금 일찍 올라가세요", "내려올 때는 하얀 벽의 알바이신 골목과 다로 강변(Carrera del Darro)을 따라 산책하며 내려오면 야경이 정말 아름답습니다"],
    price: "무료",
    q: "Mirador de San Nicolas Granada",
  },
  granada_cathedral: {
    type: "spot", emoji: "⛪", name: "그라나다 대성당 & 알카이세리아 아랍 시장", jp: "Catedral de Granada & Alcaicería",
    img: W + "2/22/Granada_-_Cathedral_Front.jpg/960px-Granada_-_Cathedral_Front.jpg", credit: "Granada_-_Cathedral_Front.jpg",
    lat: 37.1764, lng: -3.5990, area: "그라나다 중심가 (도보권)",
    desc: "스페인 르네상스 건축의 걸작인 그라나다 대성당과 가톨릭 군주(이사벨 여왕과 페르난도 왕)가 잠든 왕실 예배당입니다. 바로 옆 ‘알카이세리아(Alcaicería)’ 골목은 옛 이슬람 실크 시장으로, 알록달록한 모로코풍 유리 램프와 도자기, 기념품 가게가 이어져 중3 딸들이 구경하고 사진 찍기 아주 좋습니다.",
    tips: ["알카이세리아에서 아기자기한 그라나다 석류 문양 마그넷이나 모자이크 소품을 살 때 2~3개 사면서 살짝 흥정하는 재미도 있어요", "성당 옆 비브람블라 광장(Plaza Bib-Rambla) 노천카페에서 휴식하기 좋습니다"],
    price: "외부 및 시장 무료 / 대성당 내부 €7",
    q: "Catedral de Granada",
  },

  /* ==================== 2-B. 그라나다 추천 식당 (GRANADA FOOD) ==================== */
  carmela: {
    type: "food", emoji: "🥘", name: "카르멜라 레스토랑 (La Carmela)", jp: "Restaurante Carmela, Granada",
    img: W + "e/ed/01_Paella_Valenciana_original.jpg/960px-01_Paella_Valenciana_original.jpg", credit: "01_Paella_Valenciana_original.jpg",
    imgNote: "안달루시아풍 해산물 쌀 요리와 타파스",
    lat: 37.1748, lng: -3.5972, area: "콜론 거리·누에바 광장 인근",
    desc: "그라나다 시내 중심가에 위치한 모던하고 깔끔한 안달루시아 레스토랑입니다. 전통 타파스 바에 비해 좌석이 넓고 쾌적하며, 글루텐프리 및 아이들 입맛에 맞는 퓨전 타파스와 먹물 리조또·이베리코 요리가 훌륭해 6인 가족 식사로 안성맞춤입니다.",
    tips: ["음료(맥주·콜라·주스)를 주문하면 그라나다 전통에 따라 무료 한입 타파스가 함께 나옵니다!", "구글맵 또는 홈페이지에서 6인석 사전 예약 가능"],
    q: "Restaurante Carmela Granada",
    menu: {
      adult: ["🦑 오징어 먹물 시푸드 리조또/빠에야 (Arroz Negro)", "🥩 이베리코 돼지 꽃목살 구이 (Secreto Ibérico)", "🍷 안달루시아 지역 와인 또는 틴토 데 베라노(와인+레몬소다)"],
      teen: ["🍗 바삭한 안달루시아식 치킨 텐더 & 수제 크로켓", "🍆 꿀을 곁들인 바삭한 가지 튀김 (Berenjenas con Miel — 그라나다 명물!)", "🍰 수제 초콜릿 브라우니 & 아이스크림"],
    },
    price: "1인 약 €20~€32",
  },
  los_diamantes: {
    type: "food", emoji: "🍤", name: "바 로스 디아만테스 (그라나다 해산물 타파스 1위)", jp: "Bar Los Diamantes (Plaza Nueva / Navas)",
    img: W + "4/46/TapasenBarcelona.JPG/960px-TapasenBarcelona.JPG", credit: "TapasenBarcelona.JPG",
    imgNote: "신선한 해산물 튀김과 무료 타파스",
    lat: 37.1768, lng: -3.5960, area: "누에바 광장 / 나바스 거리",
    desc: "1942년 오픈한 그라나다 최고의 해산물 튀김 타파스 전문점입니다. 음료를 시킬 때마다 무료로 나오는 해산물 타파스의 퀄리티가 놀라울 정도로 높고, 추가로 주문하는 새우·오징어·조개 요리가 비린내 없이 바삭하고 신선합니다.",
    tips: ["나바스 거리 본점보다 ‘누에바 광장점(Plaza Nueva 12)’이 훨씬 넓고 테이블 좌석이 많아 6인 가족이 앉기 좋습니다!", "오픈 시간(13:00 또는 20:00)에 맞춰 가면 대기 없이 앉을 수 있습니다"],
    q: "Bar Los Diamantes Plaza Nueva Granada",
    menu: {
      adult: ["🍤 감바스 알 아히요 & 맛조개 철판구이(Navajas)", "🦑 싱싱한 해산물 모둠 튀김 (Fritura de Pescado)", "🍺 알함브라 리제르바 1925 맥주 (그라나다 로컬 명품 맥주!)"],
      teen: ["🦑 바삭한 오징어링 튀김(Calamares Fritos) & 새우 튀김", "🍄 마늘 양송이버섯 구이 (Champiñones al Ajillo)", "🥤 무알콜 음료 시켜도 무료 타파스 1접시씩 동일 제공!"],
    },
    price: "1인 약 €15~€25",
  },
  bodegas_castaneda: {
    type: "food", emoji: "🍷", name: "보데가스 카스타녜다 (100년 전통 안달루시아 타파스)", jp: "Bodegas Castañeda",
    img: W + "4/49/Tortilla_de_patata_-_San_Sebasti%C3%A1n.jpg/960px-Tortilla_de_patata_-_San_Sebasti%C3%A1n.jpg", credit: "Tortilla_de_patata_-_San_Sebastián.jpg",
    imgNote: "스페인 전통 오믈렛과 이베리코 타파스 플레이트",
    lat: 37.1765, lng: -3.5965, area: "대성당·누에바 광장 사이",
    desc: "오크통과 하몬이 걸려 있는 그라나다에서 가장 분위기 있는 전통 타파스 레스토랑입니다. 골목 전체가 노천 테라스와 실내 홀로 운영되며, 푸짐한 온기 요리 모둠인 ‘타블라 카스타녜다(Tabla Caliente)’ 하나만 시켜도 온 가족이 든든하게 맛볼 수 있습니다.",
    tips: ["실내 테이블 또는 골목 아케이드 야외 테라스 중 6인 테이블을 안내받으세요"],
    q: "Bodegas Castaneda Granada",
    menu: {
      adult: ["🍖 타블라 카스타녜다 온기 모둠 (Tabla Caliente — 소꼬리찜·이베리코·소시지·감자 모둠)", "🍷 상그리아 & 칼리모초(와인 콜라 칵테일)"],
      teen: ["🍳 스페인식 감자 오믈렛(Tortilla) & 수제 크로켓", "🥖 따뜻한 미니 바게트 & 하몬 치즈 플래터"],
    },
    price: "1인 약 €15~€25",
  },
  jardines_zoraya: {
    type: "food", emoji: "💃", name: "하르디네스 데 소라야 (야외 정원 레스토랑 & 플라멩코)", jp: "Jardines de Zoraya, Albaicín",
    img: U + "b/b5/Red_Wine_Sangria_with_lemon%2C_lime%2C_apple%2C_and_orange_served_in_a_glass_-_Evan_Swigart.jpg", credit: "Red_Wine_Sangria_with_lemon,_lime,_apple,_and_orange_served_in_a_glass_-_Evan_Swigart.jpg",
    imgNote: "안달루시아 정원에서의 저녁 식사와 상그리아",
    lat: 37.1818, lng: -3.5916, area: "알바이신 (산 니콜라스 전망대 도보 2분)",
    desc: "산 니콜라스 전망대에서 걸어서 2분 거리에 있는 오렌지 나무와 분수가 아름다운 정원 레스토랑입니다. 품격 있는 안달루시아 코스와 단품 요리를 즐기면서 수준 높은 정통 플라멩코 공연까지 감상할 수 있어, 두 가족 6인의 그라나다 밤을 특별하게 장식해 줍니다.",
    tips: ["산 니콜라스 전망대에서 일몰을 본 직후 바로 이동하면 동선이 100점입니다", "공연 관람 포함 저녁 식사는 사전 예약 권장"],
    q: "Jardines de Zoraya Granada",
    menu: {
      adult: ["🥩 이베리코 프레사 스테이크 & 안달루시아 해산물 요리", "🍷 그라나다 와인 & 정통 플라멩코 관람"],
      teen: ["🍗 그릴 치킨 브레스트 또는 파스타·소고기 스테이크", "🍨 수제 초콜릿 디저트 & 무알콜 상그리아"],
    },
    price: "식사 1인 약 €30~€45 (공연 별도 선택)",
  },

  /* ==================== 3. 바르셀로나 관광지 (BARCELONA SPOTS) ==================== */
  sagrada: {
    type: "spot", emoji: "⛪", name: "사그라다 파밀리아 (성가족 대성당)", jp: "Basílica de la Sagrada Família",
    img: W + "e/ef/SF_maig_2_cropped.jpg/960px-SF_maig_2_cropped.jpg", credit: "SF_maig_2_cropped.jpg",
    lat: 41.4036, lng: 2.1743, area: "바르셀로나 에이샴플라",
    desc: "천재 건축가 안토니 가우디가 평생을 바친 바르셀로나의 상징입니다. 숲속의 거대한 나무 기둥을 닮은 성당 내부에 들어서면, 동쪽(푸른빛 탄생의 파사드)과 서쪽(붉은빛·황금빛 수난의 파사드) 스테인드글라스를 통과한 햇살이 성당 전체를 무지갯빛으로 물들여 어른과 아이 모두 경탄을 금치 못합니다.",
    tips: [
      "📸 인생샷 시간대: 오후 15:00~17:00 사이에 입장하면 서쪽 스테인드글라스로 해가 기울며 성당 내부가 황금빛·주황빛으로 가장 화려하게 빛납니다!",
      "공식 앱을 스마트폰에 미리 설치하고 이어폰을 챙기면 훌륭한 ‘한국어 오디오 가이드’를 무료로 들을 수 있습니다.",
      "성당 맞은편 ‘가우디 광장(Plaça de Gaudí) 연못 건너편’이 성당 전체가 한 프레임에 담기는 최고의 가족 사진 명당입니다!"
    ],
    price: "일반 €26 / 학생·청소년 할인 €24 (2개월 전 예약 필수)",
    q: "Sagrada Familia Barcelona",
  },
  park_guell: {
    type: "spot", emoji: "🦎", name: "구엘 공원 (가우디의 동화 속 모자이크 정원)", jp: "Park Güell",
    img: W + "3/33/Parc_guell_-_panoramio.jpg/960px-Parc_guell_-_panoramio.jpg", credit: "Parc_guell_-_panoramio.jpg",
    lat: 41.4145, lng: 2.1527, area: "바르셀로나 카르멜 언덕",
    desc: "가우디가 자연의 곡선과 형형색색의 깨진 타일 조각(트렌카디스 기법)으로 빚어낸 동화 같은 공원입니다. 파도처럼 구불거리는 세상에서 가장 긴 모자이크 벤치에 앉아 바르셀로나 시내와 지중해를 내려다보고, 상징인 ‘모자이크 도마뱀 분수’와 과자의 집 경비실에서 중3 딸들과 인생샷을 남깁니다.",
    tips: ["한낮에는 그늘이 적어 더울 수 있으므로 오전 09:00~09:30 첫 타임 입장을 강력 추천합니다!", "시내에서 갈 때는 체력을 아끼기 위해 택시 2대로 공원 입구(Carretera del Carmel)까지 바로 이동하세요."],
    price: "일반 €10~€18 (사전 시간지정 예매 필수)",
    q: "Park Guell Barcelona",
  },
  casa_batllo: {
    type: "spot", emoji: "🐉", name: "카사 바트요 & 카사 밀라 (그라시아 거리 가우디 산책)", jp: "Casa Batlló & Casa Milà (La Pedrera)",
    img: W + "b/bf/Casa_Batllo_Overview_Barcelona_Spain_cut.jpg/960px-Casa_Batllo_Overview_Barcelona_Spain_cut.jpg", credit: "Casa_Batllo_Overview_Barcelona_Spain_cut.jpg",
    lat: 41.3917, lng: 2.1649, area: "그라시아 거리 (숙소 도보권)",
    desc: "그라시아 거리(Passeig de Gràcia)에 나란히 자리한 가우디의 두 걸작 주택입니다. 바다와 성 조르디의 용(Dragon) 전설을 모티프로 한 ‘카사 바트요’와 채석장 바위산을 닮은 ‘카사 밀라(라 페드레라)’가 멋진 조화를 이룹니다. 밤이 되면 조명이 켜진 외관이 더욱 환상적입니다.",
    tips: [
      "카사 바트요 내부 관람 시 AR(증강현실) 태블릿과 한국어 오디오 가이드, 몰입형 미디어아트 룸이 제공되어 중3 딸들이 가장 재미있어하는 가우디 건축물입니다!",
      "카사 바트요 바로 옆의 ‘카사 아마틀예르(Casa Amatller)’ 1층 초콜릿 숍에서 선물용 틴케이스 초콜릿을 구경하는 것도 꿀팁!"
    ],
    price: "외관 감상 무료 / 내부 입장 약 €29~€35",
    q: "Casa Batllo Barcelona",
  },
  gothic_quarter: {
    type: "spot", emoji: "🕍", name: "고딕 지구 & 바르셀로나 대성당 · 비스베 다리", jp: "Barri Gòtic & Catedral de Barcelona",
    img: U + "6/6d/Barcelona_-_Carrer_del_Bisbe.jpg", credit: "Barcelona_-_Carrer_del_Bisbe.jpg",
    lat: 41.3839, lng: 2.1762, area: "바르셀로나 구시가지",
    desc: "로마 시대 성벽과 중세 시대의 돌길이 그대로 보존된 매력적인 미로 골목입니다. 웅장한 바르셀로나 대성당 광장, 해골 조각이 숨겨진 ‘비스베 다리(Pont del Bisbe)’, 왕의 광장, 그리고 가우디가 스물여섯 살 때 처음 디자인한 가스 가로등이 서 있는 ‘레이알 광장(Plaça Reial)’까지 천천히 걸으며 탐험합니다.",
    tips: ["비스베 다리 밑의 작은 해골과 단검 조각을 보면서 뒤로 걸어 소원을 빌면 이루어진다는 전설이 있어요!", "골목 곳곳에 예쁜 수제 가죽 공방, 캔들·비누 가게, 수제 사탕 가게(Papabubble)가 많아 딸들과 구경하기 최고입니다."],
    price: "산책 무료",
    q: "Pont del Bisbe Barcelona",
  },
  boqueria: {
    type: "spot", emoji: "🍓", name: "보케리아 시장 & 람블라스 거리", jp: "Mercat de la Boqueria & La Rambla",
    img: W + "9/96/Barcelona_-_Mercat_de_Sant_Josep_%28la_Boqueria%29_-_Entrance.jpg/960px-Barcelona_-_Mercat_de_Sant_Josep_%28la_Boqueria%29_-_Entrance.jpg", credit: "Barcelona_-_Mercat_de_Sant_Josep_(la_Boqueria)_-_Entrance.jpg",
    lat: 41.3817, lng: 2.1716, area: "람블라스 거리 중심",
    desc: "바르셀로나의 부엌이라 불리는 활기 넘치는 전통 식품 시장입니다. 형형색색의 열대 과일 주스, 납작복숭아, 체리, 이베리코 하몬 콘, 초콜릿, 올리브가 끝없이 펼쳐져 눈과 입이 모두 즐거운 곳입니다.",
    tips: [
      "시장 입구 첫 번째 줄보다 안쪽 통로로 조금만 더 들어가면 과일 주스와 하몬 가격이 더 저렴하고 신선합니다!",
      "일요일은 휴무이니 금요일·토요일 오전에 방문하세요."
    ],
    price: "과일주스 €2~€3 / 하몬 콘 €5~€8",
    q: "Mercat de la Boqueria Barcelona",
  },
  barceloneta: {
    type: "spot", emoji: "🏖️", name: "바르셀로네타 해변 & 포트 벨 항구 산책", jp: "Playa de la Barceloneta & Port Vell",
    img: W + "3/32/050529_Barcelona_059.jpg/960px-050529_Barcelona_059.jpg", credit: "050529_Barcelona_059.jpg",
    lat: 41.3784, lng: 2.1925, area: "바르셀로나 지중해 해변",
    desc: "야자수가 늘어선 푸른 지중해 해변과 하얀 요트들이 정박한 포트 벨(Port Vell) 항구입니다. 9월의 따사로운 지중해 햇살 아래 해변 산책로를 걷고, 모래사장 앞 노천 해산물 레스토랑에서 바닷바람을 맞으며 여유로운 오후를 보냅니다.",
    tips: ["포트 벨 항구의 물결치는 나무 다리 ‘람블라 델 마르(Rambla del Mar)’ 위에서 요트를 배경으로 가족 사진을 찍어보세요"],
    price: "무료",
    q: "Playa de la Barceloneta",
  },
  montjuic: {
    type: "spot", emoji: "⛲", name: "몬주익 마법의 분수 & 카탈루냐 미술관 전망대", jp: "Font Màgica de Montjuïc & MNAC",
    img: W + "d/de/Barcelona_-_Font_M%C3%A0gica_-_2016.jpg/960px-Barcelona_-_Font_M%C3%A0gica_-_2016.jpg", credit: "Barcelona_-_Font_Màgica_-_2016.jpg",
    lat: 41.3712, lng: 2.1517, area: "스페인 광장 (Plaça d'Espanya)",
    desc: "스페인 광장에서 카탈루냐 국립미술관(MNAC)으로 이어지는 웅장한 언덕 전망대와 분수 광장입니다. 미술관 앞 계단 테라스에 올라서면 두 개의 베네치아 탑 사이로 뻗은 대로의 야경이 한눈에 펼쳐지며, 저녁 시간 음악과 빛이 어우러지는 분수 쇼가 열립니다.",
    tips: ["카탈루냐 미술관 앞까지는 야외 에스컬레이터가 잘 설치되어 있어 힘들지 않게 올라갈 수 있습니다", "스페인 광장 바로 옆 옛 투우장을 개조한 ‘아레나스 쇼핑몰(Arenas de Barcelona)’ 옥상 전망대도 추천!"],
    price: "전망대 및 분수 관람 무료",
    q: "Font Magica de Montjuic",
  },

  /* ==================== 3-B. 바르셀로나 추천 식당 (BARCELONA FOOD) ==================== */
  vinitus: {
    type: "food", emoji: "🍯", name: "비니투스 (Vinitus · 꿀대구와 맛조개 타파스 성지)", jp: "Vinitus Barcelona",
    img: W + "4/46/TapasenBarcelona.JPG/960px-TapasenBarcelona.JPG", credit: "TapasenBarcelona.JPG",
    lat: 41.3900, lng: 2.1642, area: "에이샴플라 (카사 바트요 도보 3분)",
    desc: "바르셀로나를 찾은 한국인 가족 여행객 만족도 부동의 1위 타파스 레스토랑입니다. 달콤한 꿀과 부드러운 알리올리 소스를 얹어 오븐에 구워낸 ‘꿀대구(Bacalao al alioli de miel)’는 어른부터 중3 딸들까지 호불호 없이 모두 감탄하는 인생 메뉴입니다.",
    tips: [
      "별도 예약이 안 되는 워크인 매장이므로, 저녁 피크타임(20시) 전인 ‘17:30~18:30’ 또는 점심 ‘12:30’에 방문하면 6인 가족도 대기 시간을 크게 줄일 수 있습니다!",
      "6명이 함께 앉을 수 있는 안쪽 테이블 좌석을 요청하세요."
    ],
    q: "Vinitus Consell de Cent Barcelona",
    menu: {
      adult: ["🐟 꿀대구 구이 (Bacalao con alioli de miel) — 무조건 2접시 필수!", "🐚 철판 맛조개 구이 (Navajas a la plancha) & 미니 오징어 구이", "🍷 레몬·오렌지 과일 듬뿍 화이트 상그리아 (Sangría de Cava)"],
      teen: ["🥩 한입 소고기 안심 스테이크 핀초 (Solomillo de ternera)", "🍤 바삭한 새우 꼬치 & 미니 수제버거", "🍮 불로 달콤하게 그을린 크레마 카탈라나 (Crema Catalana)"],
    },
    price: "1인 약 €22~€35",
  },
  ciudad_condal: {
    type: "food", emoji: "🥖", name: "시우다드 콘달 (그라시아 거리 최고 인기 타파스)", jp: "Ciudad Condal",
    img: W + "1/16/Patatas_bravas_madrid.jpg/960px-Patatas_bravas_madrid.jpg", credit: "Patatas_bravas_madrid.jpg",
    imgNote: "바삭한 파타타스 브라바스와 해산물 몬타디토스",
    lat: 41.3888, lng: 2.1667, area: "람블라 데 카탈루냐 (카탈루냐 광장 도보 3분)",
    desc: "비니투스와 같은 계열의 명문 타파스 바로, 고풍스러운 실내 인테리어와 가로수길 야외 테라스가 매력적인 곳입니다. 비니투스에 줄이 길 때 바로 걸어서 4분 거리에 있는 이곳으로 가면 동일한 퀄리티의 꿀대구와 다채로운 바게트 오픈 샌드위치(Montaditos)를 맛볼 수 있습니다!",
    tips: ["입구 호스트에게 6인 인원수를 말하고 대기 명단에 이름을 올리면 생각보다 금방 자리가 납니다"],
    q: "Ciudad Condal Barcelona",
    menu: {
      adult: ["🐟 꿀대구 구이 (Bacalao) & 감바스 알 아히요", "🍄 아스파라거스·버섯 철판구이 & 샹그리아", "🍺 시원한 클라라(레몬 생맥주)"],
      teen: ["🥖 소안심 & 푸아그라 또는 연어 바게트 핀초(Montaditos)", "🥔 파타타스 브라바스(매콤 고소 감자튀김) & 하몬 크로켓", "🥐 갓 구운 미니 초콜릿 크루아상"],
    },
    price: "1인 약 €22~€35",
  },
  la_paradeta: {
    type: "food", emoji: "🦞", name: "라 파라데타 사그라다 파밀리아점 (해산물 마켓 식당)", jp: "La Paradeta Sagrada Família",
    img: W + "6/65/Gambas_al_ajillo.jpg/960px-Gambas_al_ajillo.jpg", credit: "Gambas_al_ajillo.jpg",
    imgNote: "직접 골라 바로 요리해 주는 신선한 지중해 해산물",
    lat: 41.4048, lng: 2.1765, area: "사그라다 파밀리아 도보 3분",
    desc: "사그라다 파밀리아 바로 옆에 위치한 해산물 전문 레스토랑입니다. 수산시장처럼 얼음 위에 진열된 싱싱한 새우, 랍스터, 맛조개, 오징어, 관자를 직접 눈으로 보고 무게만큼 고르면, 구이(Plancha)·튀김(Frito)·찜 중 원하는 방식으로 그 자리에서 바로 요리해 줍니다!",
    tips: ["사그라다 파밀리아 관람 전후 식사로 동선이 완벽합니다", "6인 가족이 다양한 해산물을 배불리 먹어도 가성비가 아주 뛰어납니다"],
    q: "La Paradeta Sagrada Familia Barcelona",
    menu: {
      adult: ["🦐 지중해 붉은 왕새우(Gambas) 철판 소금구이", "🐚 맛조개(Navajas) & 키조개 관자(Zamburiñas) 마늘구이", "🦑 갈리시아식 문어(Pulpo) & 화이트 와인"],
      teen: ["🦑 바삭한 오징어 튀김(Calamares a la Romana) & 새우 튀김", "🦀 해산물 빠에야 또는 크림 해산물 스튜", "🍮 푸딩 & 아이스크림"],
    },
    price: "1인 약 €20~€35",
  },
  masala73: {
    type: "food", emoji: "🍖", name: "엘 글로프 / 투로 (구엘·사그라다 인근 카탈루냐 맛집)", jp: "Braseria El Glop / Restaurant Turó",
    img: W + "e/ed/01_Paella_Valenciana_original.jpg/960px-01_Paella_Valenciana_original.jpg", credit: "01_Paella_Valenciana_original.jpg",
    imgNote: "카탈루냐 전통 화덕 구이와 빠에야",
    lat: 41.4055, lng: 2.1610, area: "그라시아 지구 (구엘 공원~사그라다 사이)",
    desc: "구엘 공원과 사그라다 파밀리아 사이에 있는 아기자기한 로컬 동네 ‘그라시아(Gràcia) 지구’의 카탈루냐 전통 레스토랑입니다. 참숯 그릴에 구운 고기 요리와 정통 해산물 빠에야, 카탈루냐식 구운 대파 요리 등을 조용하고 아늑한 분위기에서 즐길 수 있습니다.",
    tips: ["관광객 붐비는 곳을 피해 현지인들이 가는 여유로운 점심 식사를 원할 때 좋습니다"],
    q: "Braseria El Glop Joanic Barcelona",
    menu: {
      adult: ["🥘 카탈루냐식 해산물 빠에야 & 피데우아(해산물 파스타 빠에야)", "🥩 참숯 그릴 양갈비·소고기 구이 & 구운 야채"],
      teen: ["🍗 숯불 치킨 스테이크 & 부티파라(카탈루냐 수제 소시지)", "🍞 판 콘 토마테(토마토와 올리브유를 문지른 바삭한 빵)"],
    },
    price: "1인 약 €20~€30",
  },
  siete_puertas: {
    type: "food", emoji: "🥘", name: "세테 포르테스 (7 Portes · 1836년 전통 빠에야 명가)", jp: "Restaurant 7 Portes (Desde 1836)",
    img: W + "e/ed/01_Paella_Valenciana_original.jpg/960px-01_Paella_Valenciana_original.jpg", credit: "01_Paella_Valenciana_original.jpg",
    lat: 41.3822, lng: 2.1833, area: "포트 벨 항구·바르셀로네타 초입",
    desc: "1836년에 문을 열어 피카소, 호안 미로, 가브리엘 가르시아 마르케스, 체 게바라 등 역사적 인물들이 단골로 찾았던 바르셀로나 최고(最古)의 명문 레스토랑입니다. 게와 새우, 조개 껍질을 모두 발라내어 먹기 편하게 만든 시그니처 ‘파렐라다 빠에야(Paella Parellada)’가 유명합니다!",
    tips: ["껍질이 다 손질되어 나오는 ‘Paella Parellada(부자 빠에야)’를 주문하면 어른과 아이 모두 손에 묻히지 않고 우아하게 먹을 수 있습니다!", "저녁 식사는 사전 예약 필수, 주문 시 ‘Poco salado(덜 짜게)’ 요청"],
    q: "Restaurant 7 Portes Barcelona",
    menu: {
      adult: ["🥘 파렐라다 빠에야 (Paella Parellada — 껍질 손질된 해산물과 고기 특선 빠에야)", "🦞 랍스터 해산물 쌀 요리 (Arroz Caldoso con Bogavante)", "🥂 카탈루냐 전통 스파클링 와인 카바(Cava)"],
      teen: ["🍝 해산물 먹물 피데우아(Fideuà — 쌀 대신 짧은 파스타 면으로 만든 빠에야)", "🥟 바삭한 하몬·해산물 크로켓 모둠", "🍮 정통 크레마 카탈라나 & 피카소 타르트"],
    },
    price: "1인 약 €35~€55",
  },
  el_xampanyet: {
    type: "food", emoji: "🥂", name: "라 플라우타 / 엘 보른 타파스 (고딕·보른 지구 맛집)", jp: "La Flauta / Tapeo El Born",
    img: W + "b/b4/Croquetas_Caseras_%287068664101%29.jpg/960px-Croquetas_Caseras_%287068664101).jpg", credit: "Croquetas_Caseras_(7068664101).jpg",
    lat: 41.3852, lng: 2.1802, area: "고딕 지구 · 엘 보른 지구",
    desc: "고딕 지구와 피카소 미술관이 있는 엘 보른(El Born) 지구 산책 중 들르기 좋은 인기 타파스 레스토랑입니다. 얇고 바삭한 플라우타(바게트 샌드위치)와 트러플 파스타, 이베리코 폭립 등 아이들과 어른 모두 입맛에 딱 맞는 메뉴가 가득합니다.",
    tips: ["점심 오픈 시간(13:00) 조금 전에 도착하면 6명도 기다리지 않고 바로 입장할 수 있습니다"],
    q: "Tapeo El Born Barcelona",
    menu: {
      adult: ["🍖 꿀과 머스타드를 바른 이베리코 돼지 갈비(Costillas Ibéricas)", "🐙 그릴 문어 구이 & 감바스 알 아히요"],
      teen: ["🥖 바삭한 이베리코 베이컨·치즈 플라우타(Flauta) 바게트", "🍝 트러플 버섯 파스타 & 고르곤졸라 소안심 핀초", "🍮 수제 크레마 카탈라나"],
    },
    price: "1인 약 €20~€30",
  },
  xurreria: {
    type: "food", emoji: "🍩", name: "츄레리아 라이에타나 & 라 파야레사 (고딕 지구 츄러스)", jp: "Xurreria Laietana & Granja La Pallaresa",
    img: W + "c/c6/Chocolate_con_churros_%2827343655726%29.jpg/960px-Chocolate_con_churros_%2827343655726%29.jpg", credit: "Chocolate_con_churros_(27343655726).jpg",
    lat: 41.3835, lng: 2.1778, area: "고딕 지구 (대성당 도보 3분)",
    desc: "고딕 지구 산책 중 달콤하게 당 충전하기 좋은 전통 츄러스 명소입니다. 즉석에서 갓 튀겨 설탕을 솔솔 뿌려주는 ‘츄레리아 라이에타나’나, 달콤한 생크림을 핫초콜릿 위에 듬뿍 얹은 ‘수이소(Suizo)’로 유명한 1947년 전통 카페 ‘라 파야레사(페트릿사올 거리)’ 중 선택해 보세요!",
    tips: ["라 파야레사가 있는 ‘페트릿사올 거리(Carrer de Petritxol)’는 바르셀로나에서 가장 유명한 초콜릿·화랑 골목입니다!"],
    q: "Granja La Pallaresa Barcelona",
    menu: {
      adult: ["☕ 수이소 (Suizo — 진한 핫초콜릿 위에 차가운 수제 생크림 듬뿍) + 츄러스", "☕ 에스프레소 콘 레체"],
      teen: ["🍫 초콜릿 듬뿍 츄러스 또는 누텔라 채운 츄러스", "🍮 카탈루냐 전통 크레마 카탈라나 (바삭한 설탕 코팅 커스터드 크림)"],
    },
    price: "1인 약 €4~€7",
  },

  /* ==================== 쇼핑 (SHOP) ==================== */
  el_corte_ingles: {
    type: "shop", emoji: "🛍️", name: "엘 코르테 잉글레스 백화점 & 메르카도나 마트", jp: "El Corte Inglés & Mercadona (Barcelona / Madrid)",
    img: W + "5/5b/Turr%C3%B3n_de_Alicante_%28Casa_Mira%29.jpg/960px-Turr%C3%B3n_de_Alicante_%28Casa_Mira%29.jpg", credit: "Turrón_de_Alicante_(Casa_Mira).jpg",
    imgNote: "스페인 전통 아몬드 누가 과자 뚜론(Turrón)과 기념품",
    lat: 41.3879, lng: 2.1711, area: "카탈루냐 광장 (숙소 도보 5분)",
    desc: "스페인 최대 백화점 ‘엘 코르테 잉글레스(카탈루냐 광장점)’와 스페인 국민 마트 ‘메르카도나(Mercadona)’입니다. 백화점 지하 슈퍼마켓과 고메 코너에서는 보닐라 감자칩, 고급 올리브유, 비센스 뚜론, 와인을 한자리에서 쇼핑하고 택스리펀까지 원스톱으로 받을 수 있으며, 메르카도나에서는 꿀국화차와 납작복숭아, 올리브 크림을 아주 저렴하게 쓸어 담을 수 있습니다.",
    tips: [
      "엘 코르테 잉글레스 고객센터에서 외국인 여행객 전용 ‘10% 적립 리워드 카드’를 먼저 발급받으세요!",
      "일요일은 마트와 백화점이 휴무인 경우가 많으니 금요일이나 토요일에 쇼핑을 완료하세요."
    ],
    q: "El Corte Ingles Placa de Catalunya Barcelona",
    menu: {
      adult: ["🫒 엑스트라 버진 올리브유 (소용량 스프레이·틴케이스) & 발사믹", "🥩 이베리코 베요타 하몬 슬라이스 진공팩 & 리오하 와인", "🍯 오르니만스 꿀국화차 (Manzanilla con Miel)"],
      teen: ["🥔 보닐라 아 라 비스타(Bonilla) 페인트통 감자칩", "🍫 비센스(Vicens) 수제 초콜릿·아몬드 뚜론", "🧴 프리모르/메르카도나 꿀립밤 & 마티덤 앰플(엄마 선물)"],
    },
    price: "1유로부터 Tax Free 가능 (백화점/상점)",
  },
};

/* ---------------------------------------------------------
   10일 상세 일정 (DAYS)
   - 모든 관광지는 대표 사진과 상세 설명 포함 (PLACES 연동)
   - 모든 식사 일정은 최소 2곳 이상의 추천 식당(options)과 6인 가족 맞춤 메뉴 포함
   - 도보를 제외한 모든 교통편(항공·고속열차·미니버스·지하철·택시)을 독립된 카드로 구성
   --------------------------------------------------------- */
const DAYS = [
  {
    id: "d1", date: "2027-09-10", dow: "금", label: "DAY 1",
    city: "인천 → 마드리드",
    title: "설레는 출발, 마드리드 입성",
    subtitle: "인천 출국 · 약 20시간 경유 비행 · 마드리드 체크인 & 첫 타파스",
    hue: "#f59e0b", stamina: 1,
    sunset: "20:32", temp: "28° / 16°",
    items: [
      {
        time: "09:30", icon: "🛫", badge: "✈️ 항공 이동",
        title: "인천국제공항 집결 · 마드리드행 출국 (경유 약 20시간)",
        text: "두 가족 6명(어른 4 · 중3 딸 2) 인천공항 집결! 여권, 유로 현금, 트래블카드, 스페인 알함브라·사그라다 파밀리아 예약 바우처를 최종 점검하고 마드리드로 출발합니다. 1회 경유를 포함해 약 18~20시간이 걸리는 여정이므로 기내에서 충분히 수면을 취하며 컨디션을 조절합니다.",
        place: "move_flight_in"
      },
      {
        time: "18:30", icon: "🛬",
        title: "마드리드 바라하스 국제공항 도착 · 입국심사",
        text: "스페인의 수도 마드리드 도착! 입국심사를 마치고 위탁수하물(캐리어 6개)을 찾은 뒤 터미널 밖 공식 택시 승강장으로 이동합니다. (항공편 스케줄에 따라 도착 시각은 변동될 수 있습니다)",
        place: "move_flight_in"
      },
      {
        time: "19:30", icon: "🚕", badge: "🚕 교통 카드",
        title: "[교통] 마드리드 공항 → 시내 숙소 (공식 정액 택시 2대, 약 30분)",
        text: "장거리 비행으로 지친 6인 가족이 캐리어를 끌고 환승하지 않도록, 공항 공식 정액 택시(시내 어디든 1대당 €33 고정 요금) 2대에 3명씩 나누어 타고 솔·마요르 광장 인근 숙소 문 앞까지 약 25~30분 만에 편안하게 이동합니다.",
        place: "move_mad_airport_taxi"
      },
      {
        time: "20:15", icon: "🏠",
        title: "마드리드 숙소 체크인 & 짐 풀기",
        text: "3박 4일간 머물 마드리드 중심가 베이스캠프 입실! 가볍게 세수하고 옷을 갈아입은 뒤, 첫날 저녁 식사를 위해 도보 5분 거리의 광장으로 나섭니다.",
        place: "stay_madrid"
      },
      {
        time: "20:45", icon: "🦐", badge: "🍽️ 저녁 (2곳 추천)",
        options: [
          {
            title: "저녁 추천 1: 산 미겔 시장 타파스 투어",
            text: "숙소에서 도보 5분. 화려한 조명이 켜진 유리 궁전 시장 안에서 각자 먹고 싶은 새우 핀초스, 하몬 이베리코, 크로켓, 과일, 상그리아를 골라 담으며 부담 없이 첫날 밤을 시작해요!",
            place: "san_miguel"
          },
          {
            title: "저녁 추천 2: 무세오 델 하몬 (하몬 박물관 2층 레스토랑)",
            text: "숙소에서 도보 3분. 장거리 비행 후 의자에 편하게 앉아 식사하고 싶다면 2층 레스토랑 홀에서 하몬 이베리코 플레이트, 스페인 오믈렛, 마늘 새우구이를 가성비 좋게 즐겨요!",
            place: "museo_del_jamon"
          }
        ]
      },
      {
        time: "22:00", icon: "🌙",
        title: "마요르 광장 밤 산책 후 숙소 휴식",
        text: "숙소로 돌아오는 길에 은은한 조명이 켜진 마요르 광장을 가볍게 산책하고, 시차 적응을 위해 푹 잠자리에 듭니다.",
        place: "plaza_mayor"
      }
    ],
    mission: [
      "🐻 마드리드 공항 도착 후 두 가족 6명 첫 단체 셀카 찍기",
      "🥩 스페인 본고장 하몬 이베리코 첫 입 맛보기",
      "😴 시차 적응을 위해 밤 11시 전 침대에 눕기"
    ]
  },

  {
    id: "d2", date: "2027-09-11", dow: "토", label: "DAY 2",
    city: "마드리드",
    title: "왕실의 품격과 거장의 예술",
    subtitle: "솔 광장 · 마드리드 왕궁 · 300년 전통 보틴 · 프라도 미술관 · 레티로 공원",
    hue: "#fb7185", stamina: 2,
    sunset: "20:30", temp: "27° / 15°",
    items: [
      {
        time: "09:15", icon: "🍫", badge: "☕ 아침 (2곳 추천)",
        options: [
          {
            title: "아침 추천 1: 초콜라테리아 산 히네스 (130년 전통 츄러스)",
            text: "숙소에서 도보 4분. 시차 때문에 일찍 눈이 떠지는 첫 아침! 1894년부터 이어온 마드리드 최고 명물 바삭한 츄러스와 걸쭉한 핫초콜릿으로 달콤하게 하루를 열어요.",
            place: "san_gines"
          },
          {
            title: "아침 추천 2: 초콜라테리아 발로르 (왕실 초콜릿 카페)",
            text: "산 히네스에 줄이 길거나 더 넓은 테이블 좌석을 원한다면 도보 5분 거리의 스페인 최고급 초콜릿 브랜드 ‘발로르’ 카페에서 진한 초콜릿과 포라스·와플로 여유로운 아침을!",
            place: "valor_madrid"
          }
        ]
      },
      {
        time: "10:15", icon: "🐻",
        title: "푸에르타 델 솔 (곰 동상 & 0km 표지석) → 마요르 광장 산책",
        text: "산 히네스에서 도보 3분. 아침 햇살이 비치는 솔 광장에서 ‘산딸기나무와 곰 동상’, ‘0km 표지석’ 인증샷을 남기고, 고풍스러운 마요르 광장을 가로질러 왕궁으로 천천히 걸어갑니다 (도보 약 10분).",
        place: "puerta_del_sol"
      },
      {
        time: "11:00", icon: "👑",
        title: "마드리드 왕궁 & 알무데나 대성당 내부 관람",
        text: "서유럽 최대 규모의 화려한 마드리드 왕궁 입장! 금빛과 벨벳으로 장식된 왕좌의 방, 연회장, 왕실 약국과 무기고를 둘러보고, 맞은편 알무데나 대성당과 오리엔테 광장 정원에서 왕실의 정취를 만끽합니다.",
        place: "royal_palace"
      },
      {
        time: "13:30", icon: "🍖", badge: "🍽️ 점심 (2곳 추천)",
        options: [
          {
            title: "점심 추천 1: 소브리노 데 보틴 (1725년 오픈 세계 최고령 식당)",
            text: "왕궁에서 도보 8분. 기네스북에 등재된 300년 전통 레스토랑에서 참나무 화덕에 구워 껍질은 바삭하고 속은 부드러운 ‘새끼 돼지 통구이(꼬치니요 아사도)’와 마늘 수프를 맛봅니다 (사전예약 필수).",
            place: "botin"
          },
          {
            title: "점심 추천 2: 라 바라카 (80년 전통 정통 빠에야 전문점)",
            text: "돼지고기 통구이 대신 정통 해산물 빠에야와 오징어 먹물 빠에야를 선호한다면! 우아한 타일 인테리어 홀에서 6인 가족이 다양한 빠에야를 나눠 먹어요.",
            place: "la_barraca"
          }
        ]
      },
      {
        time: "15:15", icon: "🚇", badge: "🚇 교통 카드",
        title: "[교통] 마요르 광장/솔 역 → 프라도 미술관 (지하철 2호선 또는 택시 2대, 약 12분)",
        text: "점심 식사 후 한낮의 햇살을 피해 대중교통으로 이동합니다. 솔(Sol) 역에서 지하철 2호선을 타고 방코 데 에스파냐(Banco de España) 역까지 2정거장(약 5분) 이동하거나, 택시 2대(대당 약 €7, 10분)로 프라도 미술관 고야 동상 입구 앞에 바로 내립니다.",
        place: "move_mad_metro_taxi"
      },
      {
        time: "15:45", icon: "🎨",
        title: "프라도 미술관 핵심 명작 투어",
        text: "세계 3대 미술관인 프라도에서 벨라스케스의 〈시녀들〉, 고야의 〈옷을 입은 마하〉, 엘 그레코의 명작들을 감상합니다. 중3 딸들의 눈높이에 맞춘 해설 투어(약 2시간)와 함께하면 미술관이 흥미진진한 역사 이야기터가 됩니다.",
        place: "prado"
      },
      {
        time: "18:00", icon: "🌳",
        title: "레티로 공원 산책 & 수정궁 · 호수 보트 타기",
        text: "프라도 미술관에서 도보 7분. 마드리드 왕실 정원이었던 레티로 공원 아름드리 나무 그늘을 걷고, 통유리 온실 ‘수정궁(Palacio de Cristal)’과 호수에서 두 가족이 여유로운 오후 휴식을 즐깁니다.",
        place: "retiro"
      },
      {
        time: "20:00", icon: "🍤", badge: "🍽️ 저녁 (2곳 추천)",
        options: [
          {
            title: "저녁 추천 1: 라테랄 산타 아나 (모던 타파스 & 감바스)",
            text: "낭만적인 산타 아나 광장에서 지글지글 끓는 감바스 알 아히요, 소고기 안심 핀초, 미니 수제버거 슬라이더, 화이트 상그리아로 세련된 저녁 식사를 즐겨요!",
            place: "cerveceria_catalana_mad"
          },
          {
            title: "저녁 추천 2: 카사 알베르토 (1827년 오픈 소꼬리찜 명가)",
            text: "세르반테스가 살던 역사적인 건물에서 한국인의 입맛에 딱 맞는 부드러운 ‘소꼬리 레드와인 찜(라보 데 토로)’과 수제 하몬 크로켓으로 든든한 저녁을!",
            place: "casa_alberto"
          }
        ]
      }
    ],
    mission: [
      "🦶 솔 광장 ‘Km 0’ 표지석에 6명 모두 발 모으고 사진 찍기",
      "🎨 프라도 미술관에서 각자 가장 마음에 드는 명화 1점씩 고르기",
      "🌳 레티로 공원 수정궁 앞에서 두 가족 인생샷 남기기"
    ]
  },

  {
    id: "d3", date: "2027-09-12", dow: "일", label: "DAY 3",
    city: "마드리드",
    title: "여유로운 마드리드의 일요일",
    subtitle: "피카소 ‘게르니카’ · 그란 비아 본고장 쇼핑 · 데보드 신전 노을",
    hue: "#f97316", stamina: 2,
    sunset: "20:28", temp: "27° / 15°",
    items: [
      {
        time: "10:00", icon: "🖼️",
        title: "레이나 소피아 국립미술관 — 피카소 〈게르니카〉 감상",
        text: "근교 도시로 무리하게 이동하는 대신 마드리드를 깊숙이 즐기는 날! 느긋하게 아침을 먹고 레이나 소피아 미술관으로 이동해(택시 2대 약 10분), 20세기 최고의 명작인 피카소의 〈게르니카〉와 달리·미로의 작품들을 1시간 반 동안 여유롭게 감상합니다.",
        place: "reina_sofia"
      },
      {
        time: "12:30", icon: "🐟", badge: "🍽️ 점심 (2곳 추천)",
        options: [
          {
            title: "점심 추천 1: 엘 린콘 데 에스테반 (전통 스테이크 & 문어 요리)",
            text: "솔 광장 인근의 품격 있는 레스토랑에서 입안에서 살살 녹는 갈리시아식 문어 요리(풀포)와 소고기 안심·이베리코 스테이크로 여유로운 일요일 가족 오찬을 즐깁니다.",
            place: "el_rincon_esteban"
          },
          {
            title: "점심 추천 2: 카사 라브라 & 라 캄파나 (대구튀김 & 오징어 바게트)",
            text: "1860년 전통 카사 라브라의 통대구살 튀김·크로켓과 마요르 광장 명물 오징어튀김 바게트(보카디요 데 칼라마레스)로 마드리드 로컬 미식을 캐주얼하게 맛봅니다.",
            place: "casa_labra"
          }
        ]
      },
      {
        time: "14:30", icon: "🛍️",
        title: "그란 비아 거리 산책 & 자라·레알 마드리드 스토어 쇼핑 + 낮잠 휴식",
        text: "스페인 패션의 중심지 그란 비아 거리에서 중3 딸들이 가장 기대하던 인디텍스 본고장(Zara, Bershka, Pull&Bear, Massimo Dutti)과 프리모르 뷰티숍, 레알 마드리드 공식 메가스토어 쇼핑을 즐기고, 오후에는 숙소에 들러 잠시 다리를 쉬어갑니다.",
        place: "gran_via"
      },
      {
        time: "18:30", icon: "🚇", badge: "🚇 교통 카드",
        title: "[교통] 숙소/그란 비아 → 데보드 신전 공원 (지하철 3호선 또는 택시 2대, 약 10분)",
        text: "마드리드 최고의 노을을 보러 출발! 솔(Sol) 역 또는 카야오(Callao) 역에서 지하철 3호선을 타고 플라자 데 에스파냐(Plaza de España) 역까지 2정거장(약 5분) 이동하거나 택시 2대(약 €7)로 데보드 신전 공원 입구에 내립니다.",
        place: "move_mad_metro_taxi"
      },
      {
        time: "19:00", icon: "🌅",
        title: "데보드 신전 & 전망대 황금빛 일몰 감상",
        text: "고대 이집트에서 통째로 옮겨온 신비로운 데보드 신전과 공원 전망대에서 마드리드 왕궁과 알무데나 대성당 너머로 붉게 물드는 석양을 감상하며 마드리드의 마지막 저녁을 로맨틱하게 장식합니다.",
        place: "debod"
      },
      {
        time: "20:45", icon: "🥘", badge: "🍽️ 저녁 (2곳 추천)",
        options: [
          {
            title: "저녁 추천 1: 라 바라카 (정통 해산물 & 먹물 빠에야)",
            text: "2일차에 보틴을 갔다면 오늘 저녁은 80년 전통 빠에야 명가 ‘라 바라카’에서 해산물 빠에야와 오징어 먹물 빠에야로 마드리드 피날레 만찬을!",
            place: "la_barraca"
          },
          {
            title: "저녁 추천 2: 소브리노 데 보틴 또는 산 미겔 시장",
            text: "2일차에 빠에야를 먹었다면 오늘 저녁은 300년 화덕 요리 ‘보틴’이나 산 미겔 시장에서 마드리드의 마지막 밤을 즐깁니다.",
            place: "botin"
          }
        ]
      }
    ],
    mission: [
      "🖼️ 피카소 〈게르니카〉 속 황소와 말, 전구 상징 찾아보기",
      "🛍️ 그란 비아 자라(Zara) 본고장에서 중3 딸들 가을 코디 득템하기",
      "🌅 데보드 신전 노을을 배경으로 가족 실루엣 사진 찍기"
    ]
  },

  {
    id: "d4", date: "2027-09-13", dow: "월", label: "DAY 4",
    city: "마드리드 → 그라나다",
    title: "고속열차 타고 안달루시아 그라나다로",
    subtitle: "렌페(AVE) 고속열차 · 그라나다 대성당 · 산 니콜라스 전망대 노을",
    hue: "#10b981", stamina: 2,
    sunset: "20:24", temp: "29° / 16°",
    items: [
      {
        time: "09:15", icon: "🚕", badge: "🚕 교통 카드",
        title: "[교통] 마드리드 숙소 체크아웃 → 아토차 기차역 (택시 2대, 약 15분)",
        text: "아침 식사 후 짐을 챙겨 체크아웃합니다. 캐리어 6개를 싣고 택시 2대(또는 우버)로 마드리드 푸에르타 데 아토차(Atocha) 역으로 이동해 수하물 보안검색을 통과합니다.",
        place: "move_mad_to_atocha"
      },
      {
        time: "10:35", icon: "🚄", badge: "🚄 고속열차 카드",
        title: "[교통] 렌페(Renfe) AVE 고속열차: 마드리드 → 그라나다 (약 3시간 25분)",
        text: "시속 300km로 달리는 스페인 고속열차 AVE 탑승! 끝없이 펼쳐지는 안달루시아의 올리브 나무 구릉지를 감상하며, 아토차 역에서 산 샌드위치와 커피·과일을 먹으며 두 가족이 편안하게 이동합니다.",
        place: "move_ave_granada"
      },
      {
        time: "14:00", icon: "🚕", badge: "🚕 교통 카드",
        title: "[교통] 그라나다 역 도착 → 시내 숙소 이동 (택시 2대, 약 10분)",
        text: "그라나다 기차역 도착! 역 정문 앞 택시 승강장에서 공식 택시 2대에 나누어 타고 그라나다 중심가(이사벨 라 카톨리카 광장·대성당 인근) 숙소로 10분 만에 이동해 체크인합니다.",
        place: "move_grx_station_taxi"
      },
      {
        time: "14:40", icon: "🥘", badge: "🍽️ 점심 (2곳 추천)",
        options: [
          {
            title: "점심 추천 1: 카르멜라 레스토랑 (La Carmela)",
            text: "숙소 인근 콜론 거리의 세련되고 쾌적한 레스토랑! 무료 웰컴 타파스와 함께 오징어 먹물 빠에야, 이베리코 꽃목살 구이, 그라나다 명물인 ‘꿀을 곁들인 바삭한 가지 튀김’으로 기분 좋은 첫 식사를 합니다.",
            place: "carmela"
          },
          {
            title: "점심 추천 2: 바 로스 디아만테스 (누에바 광장점)",
            text: "그라나다 해산물 타파스 부동의 1위 맛집! 음료만 시켜도 푸짐한 무료 해산물 타파스가 나오고, 바삭한 오징어·새우 튀김과 맛조개 구이가 일품입니다.",
            place: "los_diamantes"
          }
        ]
      },
      {
        time: "16:30", icon: "⛪",
        title: "그라나다 대성당 & 알카이세리아(아랍 실크 시장) 산책",
        text: "점심 후 평지로 이어진 그라나다 중심가를 여유롭게 산책합니다. 웅장한 그라나다 대성당 외관과 왕실 예배당을 둘러보고, 모로코풍 램프와 아기자기한 도자기·기념품이 가득한 ‘알카이세리아’ 골목에서 중3 딸들과 쇼핑을 즐깁니다.",
        place: "granada_cathedral"
      },
      {
        time: "19:00", icon: "🚌", badge: "🚌 교통 카드",
        title: "[교통] 시내 광장 → 산 니콜라스 전망대 (C31·C32 미니버스 또는 택시 2대, 약 10분)",
        text: "가파른 알바이신 오르막 골목을 걸어 올라가지 않고, 이사벨 라 카톨리카 광장(또는 누에바 광장)에서 귀여운 빨간 미니버스(C31·C32번) 또는 택시 2대를 타고 산 니콜라스 전망대 코앞까지 10분 만에 편하게 올라갑니다!",
        place: "move_grx_minibus_albaicin"
      },
      {
        time: "19:20", icon: "🌇",
        title: "산 니콜라스 전망대 — 붉게 물드는 알함브라 궁전 노을 & 야경",
        text: "시에라 네바다 산맥을 배경으로 우뚝 솟은 알함브라 궁전이 석양빛에 붉게 물들고 이어 황금빛 야경 조명이 켜지는 마법 같은 순간을 감상합니다. 내일 우리가 직접 걸을 알함브라 궁전을 미리 한눈에 담아봅니다.",
        place: "san_nicolas"
      },
      {
        time: "20:45", icon: "🍷", badge: "🍽️ 저녁 (2곳 추천)",
        options: [
          {
            title: "저녁 추천 1: 하르디네스 데 소라야 (알바이신 정원 레스토랑 & 플라멩코)",
            text: "산 니콜라스 전망대에서 도보 2분! 오렌지 나무가 있는 아름다운 정원 레스토랑에서 안달루시아 요리를 즐기며 정열적인 정통 플라멩코 공연을 가까이서 감상합니다.",
            place: "jardines_zoraya"
          },
          {
            title: "저녁 추천 2: 보데가스 카스타녜다 (다로 강변 산책 후 전통 타파스)",
            text: "알바이신의 하얀 골목길과 낭만적인 다로 강변(Carrera del Darro)을 따라 15분간 천천히 걸어 내려와, 100년 전통 타파스 바에서 푸짐한 온기 요리 모둠(타블라 카스타녜다)과 무료 타파스를 즐깁니다.",
            place: "bodegas_castaneda"
          }
        ]
      }
    ],
    mission: [
      "🚄 렌페(AVE) 고속열차 창밖으로 끝없는 올리브 나무 숲 구경하기",
      "🍺 그라나다의 자랑 ‘무료 타파스(음료 1잔당 요리 1접시)’ 문화 체험하기",
      "🌇 산 니콜라스 전망대에서 석양에 물든 알함브라 궁전 배경 가족사진 찍기"
    ]
  },

  {
    id: "d5", date: "2027-09-14", dow: "화", label: "DAY 5",
    city: "그라나다",
    title: "이슬람 건축의 보석, 알함브라 궁전",
    subtitle: "알함브라 나스르 궁전 · 헤네랄리페 정원 · 그라나다 미식과 여유",
    hue: "#14b8a6", stamina: 3,
    sunset: "20:23", temp: "29° / 15°",
    items: [
      {
        time: "08:50", icon: "🚌", badge: "🚌 교통 카드",
        title: "[교통] 그라나다 시내 → 알함브라 궁전 입구 (C30 미니버스 또는 택시 2대, 약 10분)",
        text: "⚠️ 출발 전 6명 전원의 ‘실물 여권 원본’과 알함브라 티켓을 꼭 확인하세요! 이사벨 라 카톨리카 광장에서 C30번 미니버스 또는 택시 2대를 타고 알함브라 궁전 언덕 위 입구(매표소/정의의 문)까지 10분 만에 편안하게 올라갑니다.",
        place: "move_grx_minibus_alhambra"
      },
      {
        time: "09:30", icon: "🏰",
        title: "알함브라 궁전 심층 관람 (나스르 궁전 · 알카사바 · 헤네랄리페)",
        text: "이슬람 건축 예술의 극치인 ‘나스르 궁전(코마레스 궁·사자의 중정)’의 정교한 조각과 타일 장식을 감상하고, 카를로스 5세 궁전과 알카사바 전망대, 시원한 분수와 꽃이 어우러진 여름 별궁 ‘헤네랄리페 정원’까지 약 3시간 30분 동안 깊이 있게 둘러봅니다.",
        place: "alhambra"
      },
      {
        time: "13:15", icon: "🚌", badge: "🚌 교통 카드",
        title: "[교통] 알함브라 궁전 → 시내 중심가 하산 (C30 미니버스 또는 택시 2대, 약 10분)",
        text: "궁전 관람으로 많이 걸었으니 내려올 때도 매표소 앞 승강장에서 C30번 미니버스나 택시 2대를 타고 시내 누에바 광장·대성당 인근으로 편하게 내려옵니다.",
        place: "move_grx_minibus_alhambra"
      },
      {
        time: "13:45", icon: "🍤", badge: "🍽️ 점심 (2곳 추천)",
        options: [
          {
            title: "점심 추천 1: 바 로스 디아만테스 (해산물 튀김 & 맛조개 구이)",
            text: "알함브라 관람 후 시원한 음료와 함께 바삭한 오징어·새우 해산물 튀김, 마늘 버섯구이, 맛조개 철판구이로 에너지를 충전합니다!",
            place: "los_diamantes"
          },
          {
            title: "점심 추천 2: 보데가스 카스타녜다 또는 카르멜라",
            text: "전날 가보지 못한 곳을 선택해 이베리코 하몬·치즈 플래터와 따뜻한 안달루시아 전통 요리로 여유로운 점심 식사를 즐깁니다.",
            place: "bodegas_castaneda"
          }
        ]
      },
      {
        time: "15:30", icon: "☕",
        title: "숙소 시에스타(낮잠 휴식) & 칼데레리아 누에바(아랍 찻집 거리) 산책",
        text: "오전 알함브라 투어로 쌓인 피로를 숙소에서 1~2시간 낮잠(시에스타)으로 개운하게 풉니다. 오후 늦게는 이국적인 아랍 찻집(Tetería)과 기념품 가게가 모인 골목을 산책하며 민트티와 달콤한 페이스트리, 젤라또를 맛봅니다.",
        place: "granada_cathedral"
      },
      {
        time: "20:00", icon: "🥘", badge: "🍽️ 저녁 (2곳 추천)",
        options: [
          {
            title: "저녁 추천 1: 카르멜라 레스토랑 (이베리코 & 해산물 빠에야)",
            text: "그라나다의 마지막 밤! 깔끔하고 아늑한 테이블에서 두 가족이 그라나다에서 가장 좋았던 순간을 이야기하며 안달루시아 특선 요리를 즐깁니다.",
            place: "carmela"
          },
          {
            title: "저녁 추천 2: 하르디네스 데 소라야 (전날 미방문 시)",
            text: "전날 밤 플라멩코 정원 레스토랑에 가지 않았다면 오늘 저녁 알바이신 정원에서 플라멩코와 함께 저녁 만찬을 즐겨도 좋습니다.",
            place: "jardines_zoraya"
          }
        ]
      }
    ],
    mission: [
      "🦁 알함브라 궁전 ‘사자의 중정’에서 12마리 사자 분수와 함께 사진 찍기",
      "🌺 헤네랄리페 정원 분수대 길에서 두 가족 인생샷 남기기",
      "🍆 그라나다 명물 ‘꿀 뿌린 가지 튀김(Berenjenas con Miel)’ 맛보기"
    ]
  },

  {
    id: "d6", date: "2027-09-15", dow: "수", label: "DAY 6",
    city: "그라나다 → 바르셀로나",
    title: "하늘길로 지중해의 도시 바르셀로나로",
    subtitle: "부엘링 국내선 항공 · 그라시아 거리 카사 바트요 · 비니투스 꿀대구",
    hue: "#3b82f6", stamina: 2,
    sunset: "20:05", temp: "26° / 18°",
    items: [
      {
        time: "09:00", icon: "🚕", badge: "🚕 교통 카드",
        title: "[교통] 그라나다 숙소 체크아웃 → 그라나다 공항(GRX) (택시 2대, 약 25분)",
        text: "전날 미리 예약해 둔 택시 2대에 캐리어 6개를 싣고 그라나다 공항으로 편안하게 이동합니다. 작은 지방 공항이라 수하물 위탁과 보안검색이 매우 빠르고 쾌적합니다.",
        place: "move_grx_to_airport"
      },
      {
        time: "11:15", icon: "✈️", badge: "✈️ 항공 카드",
        title: "[교통] 부엘링(Vueling) 국내선 항공: 그라나다(GRX) → 바르셀로나(BCN) (1시간 25분)",
        text: "기차로 6시간 반 걸리는 거리를 비행기로 단 1시간 25분 만에 점프! 지중해 해안선을 따라 날아 바르셀로나 엘 프라트 공항 제1터미널(T1)에 도착합니다.",
        place: "move_vueling_bcn"
      },
      {
        time: "13:15", icon: "🚌", badge: "🚕 교통 카드",
        title: "[교통] 바르셀로나 공항(T1) → 에이샴플라 숙소 (공식 택시 2대 또는 공항버스, 약 30분)",
        text: "수하물을 찾은 뒤 공항 밖 택시 승강장에서 검정·노랑 공식 택시 2대에 나누어 타고 숙소 문 앞까지 25~30분 만에 바로 이동합니다 (또는 파란색 에어로버스 A1을 타고 카탈루냐 광장까지 이동 가능).",
        place: "move_bcn_aerobus_taxi"
      },
      {
        time: "14:00", icon: "🏠",
        title: "바르셀로나 숙소 체크인 (또는 짐 보관)",
        text: "마지막 3박을 책임질 바르셀로나 에이샴플라·카탈루냐 광장 인근 숙소에 짐을 풀고 가벼운 옷차림으로 그라시아 거리로 나섭니다.",
        place: "stay_bcn"
      },
      {
        time: "14:30", icon: "🥖", badge: "🍽️ 점심 (2곳 추천)",
        options: [
          {
            title: "점심 추천 1: 시우다드 콘달 (Ciudad Condal)",
            text: "숙소에서 도보 4분! 바르셀로나에 도착하자마자 즐기는 환상적인 타파스 첫 끼. 부드러운 꿀대구와 바삭한 바게트 핀초스(몬타디토스), 파타타스 브라바스를 즐깁니다.",
            place: "ciudad_condal"
          },
          {
            title: "점심 추천 2: 비니투스 (Vinitus)",
            text: "숙소에서 도보 4분! 점심 피크가 살짝 지나는 오후 시간대라 대기가 짧아요. 한국인 여행객 원픽 메뉴인 꿀대구 구이와 철판 맛조개, 소고기 안심 타파스를 맛봅니다.",
            place: "vinitus"
          }
        ]
      },
      {
        time: "16:30", icon: "🐉",
        title: "그라시아 거리 가우디 산책 — 카사 바트요 & 카사 밀라",
        text: "바르셀로나에서 가장 아름다운 가로수길인 ‘그라시아 거리(Passeig de Gràcia)’를 따라 산책하며 가우디의 걸작 주택인 ‘카사 밀라(라 페드레라)’와 ‘카사 바트요’를 감상합니다. 희망 시 카사 바트요 내부 AR 투어로 가우디의 상상력 세계를 체험합니다!",
        place: "casa_batllo"
      },
      {
        time: "20:00", icon: "🍯", badge: "🍽️ 저녁 (2곳 추천)",
        options: [
          {
            title: "저녁 추천 1: 비니투스 (점심에 시우다드 콘달 방문 시)",
            text: "조명이 켜진 카사 바트요 야경을 구경한 뒤 걸어서 3분! 시원한 화이트 상그리아와 꿀대구, 맛조개 구이, 크레마 카탈라나로 바르셀로나 첫날 밤을 축배로 채웁니다.",
            place: "vinitus"
          },
          {
            title: "저녁 추천 2: 시우다드 콘달 (점심에 비니투스 방문 시)",
            text: "람블라 데 카탈루냐 가로수길의 활기찬 분위기 속에서 마늘 새우구이(감바스)와 다양한 해산물·스테이크 타파스를 즐깁니다.",
            place: "ciudad_condal"
          }
        ]
      }
    ],
    mission: [
      "✈️ 국내선 비행기 창밖으로 푸른 지중해 바다 찾기",
      "🐉 카사 바트요의 용 비늘 지붕과 해골 발코니 배경으로 인증샷",
      "🍯 바르셀로나 명물 ‘꿀대구(Bacalao con miel)’ 맛보고 평점 매기기"
    ]
  },

  {
    id: "d7", date: "2027-09-16", dow: "목", label: "DAY 7",
    city: "바르셀로나",
    title: "천재 건축가 가우디의 날",
    subtitle: "구엘 공원 · 사그라다 파밀리아 대성당 · 몬주익 언덕 분수 야경",
    hue: "#6366f1", stamina: 3,
    sunset: "20:03", temp: "26° / 18°",
    items: [
      {
        time: "09:00", icon: "🚕", badge: "🚕 교통 카드",
        title: "[교통] 숙소 → 구엘 공원 정문 매표소 (택시 2대 직행, 약 15분)",
        text: "구엘 공원은 가파른 언덕 위에 있어 지하철역에서 걸어 올라가면 아침부터 땀을 빼게 됩니다. 숙소 앞에서 검정·노랑 공식 택시 2대(대당 약 €12~€15)에 나누어 타고 구엘 공원 정문 입구 바로 앞까지 15분 만에 쾌적하게 이동합니다!",
        place: "move_bcn_park_guell_taxi"
      },
      {
        time: "09:30", icon: "🦎",
        title: "구엘 공원 관람 — 모자이크 벤치 & 도마뱀 분수",
        text: "상쾌한 아침 공기를 마시며 가우디의 동화 속 정원 산책! 파도처럼 구불거리는 모자이크 벤치에서 바르셀로나 시내와 지중해를 한눈에 내려다보고, 파도가 치는 듯한 돌기둥 회랑과 귀여운 모자이크 도마뱀 분수 앞에서 가족 사진을 남깁니다.",
        place: "park_guell"
      },
      {
        time: "11:45", icon: "🚕", badge: "🚕 교통 카드",
        title: "[교통] 구엘 공원 출구 → 사그라다 파밀리아 인근 (택시 2대, 약 12분)",
        text: "구엘 공원 출구 바로 앞 택시 승강장에서 택시 2대(대당 약 €10~€12)를 타고 점심 식당 및 사그라다 파밀리아가 있는 구역으로 12분 만에 내려옵니다.",
        place: "move_bcn_park_guell_taxi"
      },
      {
        time: "12:15", icon: "🦞", badge: "🍽️ 점심 (2곳 추천)",
        options: [
          {
            title: "점심 추천 1: 라 파라데타 사그라다 파밀리아점 (해산물 마켓 식당)",
            text: "사그라다 파밀리아 도보 3분! 얼음 위에 진열된 싱싱한 지중해 왕새우, 맛조개, 관자, 오징어를 직접 고르면 눈앞에서 철판구이와 튀김으로 요리해 주는 인기 만점 해산물 식당입니다.",
            place: "la_paradeta"
          },
          {
            title: "점심 추천 2: 엘 글로프 / 투로 (카탈루냐 전통 빠에야 & 숯불구이)",
            text: "조용하고 아늑한 테이블에서 카탈루냐 전통 해산물 빠에야와 참숯 그릴 고기 구이, 토마토 빵(판 콘 토마테)으로 든든한 정식을 즐기고 싶을 때 추천합니다.",
            place: "masala73"
          }
        ]
      },
      {
        time: "14:30", icon: "⛪",
        title: "사그라다 파밀리아 (성가족 대성당) 내부 관람 & 가우디 광장",
        text: "이번 스페인 여행의 최고 감동 포인트! 오후 햇살이 스테인드글라스를 통과해 성당 숲 기둥 전체를 무지갯빛·황금빛으로 물들이는 장관을 감상합니다. 관람 후에는 성당 맞은편 ‘가우디 광장 연못’에서 성당 전체를 배경으로 6인 가족 인생 사진을 찍습니다.",
        place: "sagrada"
      },
      {
        time: "17:00", icon: "🚇", badge: "🚇 교통 카드",
        title: "[교통] 사그라다 파밀리아 역 → 숙소 휴식 → 에스파냐 광장 (지하철 L2·L3, 약 15분)",
        text: "T-familiar(8회 다인 공유 교통카드)를 사용해 사그라다 파밀리아 역(L2)에서 숙소로 돌아와 잠시 휴식한 뒤, 저녁에 지하철(L3) 또는 택시로 스페인 광장(Plaça d'Espanya)·몬주익 언덕으로 이동합니다.",
        place: "move_bcn_metro"
      },
      {
        time: "19:30", icon: "⛲",
        title: "몬주익 마법의 분수 & 카탈루냐 국립미술관 전망대 야경",
        text: "야외 에스컬레이터를 타고 카탈루냐 국립미술관(MNAC) 테라스 전망대에 올라 바르셀로나의 탁 트인 석양과 야경, 그리고 마법의 분수 광장을 감상합니다.",
        place: "montjuic"
      },
      {
        time: "21:00", icon: "🥖", badge: "🍽️ 저녁 (2곳 추천)",
        options: [
          {
            title: "저녁 추천 1: 라 플라우타 (La Flauta · 에이샴플라 본점)",
            text: "숙소 인근 에이샴플라 중심가의 현지인·여행객 모두 사랑하는 타파스 맛집! 바삭한 플라우타 샌드위치, 이베리코 구이, 감바스, 화이트 아스파라거스 구이로 기분 좋은 저녁을!",
            place: "el_xampanyet"
          },
          {
            title: "저녁 추천 2: 아레나스 쇼핑몰 루프탑 레스토랑 (스페인 광장)",
            text: "몬주익 전망대 바로 앞 옛 투우장을 개조한 원형 쇼핑몰 옥상(360도 전망 루프탑)의 타파스·스테이크 레스토랑에서 야경을 보며 바로 저녁 식사를 즐겨도 동선이 아주 편리합니다.",
            place: "ciudad_condal"
          }
        ]
      }
    ],
    mission: [
      "🦎 구엘 공원 모자이크 도마뱀과 하이파이브 포즈로 사진 찍기",
      "🌈 사그라다 파밀리아 스테인드글라스 빛 아래에서 가족사진 남기기",
      "📸 가우디 광장 연못 건너편에서 성당 꼭대기까지 다 나오게 전신샷 찍기"
    ]
  },

  {
    id: "d8", date: "2027-09-17", dow: "금", label: "DAY 8",
    city: "바르셀로나",
    title: "중세 골목과 지중해 바다, 그리고 쇼핑",
    subtitle: "보케리아 시장 · 고딕 지구 · 바르셀로네타 해변 · 1836년 전통 빠에야 · 백화점 쇼핑",
    hue: "#8b5cf6", stamina: 2,
    sunset: "20:01", temp: "25° / 18°",
    items: [
      {
        time: "09:45", icon: "🍓",
        title: "보케리아 시장 (과일주스·하몬 간식) & 람블라스 거리 산책",
        text: "숙소에서 카탈루냐 광장을 지나 람블라스 거리로 천천히 걸어 내려갑니다(도보 10분). 활기찬 ‘보케리아 시장’에서 시원한 망고·딸기·코코넛 생과일주스와 납작복숭아, 하몬 이베리코 콘을 하나씩 들고 아침 간식 투어를 즐깁니다.",
        place: "boqueria"
      },
      {
        time: "10:45", icon: "🕍",
        title: "고딕 지구 중세 골목 탐험 — 바르셀로나 대성당 · 비스베 다리 · 레이알 광장",
        text: "중세 시대로 시간 여행을 떠난 듯한 고딕 지구 산책! 바르셀로나 대성당과 해골 조각이 있는 ‘비스베 다리’, 가우디의 첫 가로등 작품이 있는 야자수 광장 ‘레이알 광장’, 그리고 아기자기한 소품샵 골목을 여유롭게 누빕니다.",
        place: "gothic_quarter"
      },
      {
        time: "12:00", icon: "🍩", badge: "🍫 간식 (2곳 추천)",
        options: [
          {
            title: "간식 추천 1: 츄레리아 라이에타나 (갓 튀긴 설탕·초코 츄러스)",
            text: "고딕 지구 대성당 근처! 눈앞에서 동그랗게 말아 갓 튀겨낸 뜨끈하고 바삭한 츄러스와 진한 초콜릿으로 달콤하게 당을 충전합니다.",
            place: "xurreria"
          },
          {
            title: "간식 추천 2: 그란하 라 파야레사 (1947년 전통 ‘수이소’ 초콜릿 카페)",
            text: "초콜릿 골목인 페트릿사올 거리에서 핫초콜릿 위에 차가운 수제 생크림을 산처럼 얹어주는 명물 ‘수이소(Suizo)’와 크레마 카탈라나를 맛봅니다.",
            place: "xurreria"
          }
        ]
      },
      {
        time: "13:30", icon: "🥘", badge: "🍽️ 점심 (2곳 추천)",
        options: [
          {
            title: "점심 추천 1: 세테 포르테스 (7 Portes · 1836년 전통 빠에야 명가)",
            text: "고딕 지구에서 항구 쪽으로 도보 8분. 피카소와 미로가 사랑했던 190년 역사의 클래식 레스토랑에서 게와 새우 껍질을 모두 손질해 먹기 편한 시그니처 ‘파렐라다 빠에야’와 먹물 피데우아로 품격 있는 오찬을 즐깁니다!",
            place: "siete_puertas"
          },
          {
            title: "점심 추천 2: 타페오 엘 보른 (Tapeo El Born · 이베리코 갈비 & 타파스)",
            text: "피카소 미술관 옆 엘 보른 골목의 인기 맛집에서 달콤 짭조름한 꿀 머스타드 이베리코 폭립과 트러플 파스타, 오징어 먹물 크로켓을 맛봅니다.",
            place: "el_xampanyet"
          }
        ]
      },
      {
        time: "15:15", icon: "🏖️",
        title: "포트 벨 항구 & 바르셀로네타 지중해 해변 산책",
        text: "점심 식사 후 하얀 요트가 가득한 포트 벨 항구와 야자수가 늘어선 바르셀로네타 해변을 따라 푸른 지중해 바닷바람을 맞으며 산책합니다. 모래사장에서 발도 담그고 해변 카페에서 시원한 음료를 마시며 여유를 만끽합니다.",
        place: "barceloneta"
      },
      {
        time: "17:00", icon: "🚇", badge: "🚇 교통 카드",
        title: "[교통] 바르셀로네타 역 → 카탈루냐 광장 (지하철 L4 또는 택시 2대, 약 10분)",
        text: "바르셀로네타 역에서 지하철 4호선(노란색)을 타고 우르키나오나/카탈루냐 광장까지 3정거장(약 7분) 이동하거나 택시 2대(약 €9)로 카탈루냐 광장 백화점 앞에 내립니다.",
        place: "move_bcn_metro"
      },
      {
        time: "17:30", icon: "🛍️",
        title: "귀국 기념품 쇼핑 최종전 (엘 코르테 잉글레스 백화점 & 메르카도나 마트)",
        text: "내일 출국 전 마지막 쇼핑 찬스! ‘쇼핑’ 탭의 체크리스트를 보며 올리브 오일, 비센스 뚜론, 꿀국화차, 보닐라 감자칩, 하몬 진공팩, FC 바르셀로나 굿즈 등을 알차게 구매하고 택스프리(DIVA) 서류를 챙깁니다.",
        place: "el_corte_ingles"
      },
      {
        time: "20:00", icon: "🥂", badge: "🍽️ 저녁 (2곳 추천)",
        options: [
          {
            title: "저녁 추천 1: 스페인 마지막 밤 베스트 앵콜 (비니투스 / 시우다드 콘달)",
            text: "이번 여행에서 두 가족이 가장 맛있게 먹었던 타파스 메뉴들을 다시 한번 시켜 스페인에서의 마지막 밤을 화려하게 장식합니다!",
            place: "vinitus"
          },
          {
            title: "저녁 추천 2: 백화점 고메 마켓 & 하몬·치즈·상그리아 숙소 홈파티",
            text: "하루 종일 걷고 쇼핑하느라 피곤하다면, 엘 코르테 잉글레스 지하 식품관에서 최고급 베요타 하몬, 과일, 치즈, 따끈한 로티세리 치킨과 와인을 사 와서 숙소 거실에서 오붓하게 마지막 밤 파티를 열어도 최고입니다!",
            place: "el_corte_ingles"
          }
        ]
      }
    ],
    mission: [
      "💀 고딕 지구 ‘비스베 다리’ 아래 해골 조각 찾고 소원 빌기",
      "🌊 바르셀로네타 지중해 바다를 배경으로 중3 딸들 점프샷 찍기",
      "🛒 쇼핑 미션 체크리스트 빠짐없이 클리어하고 캐리어 테트리스 완성하기"
    ]
  },

  {
    id: "d9", date: "2027-09-18", dow: "토", label: "DAY 9",
    city: "바르셀로나 → 출국",
    title: "아디오스 에스파냐! 바르셀로나 출국",
    subtitle: "여유로운 브런치 · 공항 이동 · DIVA 택스리펀 · 귀국 비행기 탑승",
    hue: "#0ea5e9", stamina: 1,
    sunset: "19:59", temp: "25° / 17°",
    items: [
      {
        time: "09:30", icon: "🧳",
        title: "여유로운 아침 & 짐 최종 점검 · 체크아웃 준비",
        text: "충전기, 여권, 택스리펀(DIVA) 영수증 서류, 금고 안 귀중품이 빠지지 않았는지 꼼꼼히 확인합니다. 올리브유·와인·화장품 앰플 등 액체류는 반드시 위탁수하물 캐리어 안에 안전하게 포장해 넣으세요! (귀국 항공편 출발 시각에 맞춰 공항 이동 시각을 조정하세요)",
        place: "stay_bcn"
      },
      {
        time: "11:00", icon: "☕", badge: "🍽️ 브런치 (2곳 추천)",
        options: [
          {
            title: "아침/브런치 추천 1: 시우다드 콘달 (크루아상 & 브런치 타파스)",
            text: "공항으로 출발하기 전, 그라시아 거리 가로수길 테라스에서 갓 구운 크루아상, 스페인 오믈렛, 신선한 오렌지 주스와 커피로 여유로운 마지막 브런치를 즐깁니다.",
            place: "ciudad_condal"
          },
          {
            title: "아침/브런치 추천 2: 숙소 인근 베이커리 카페 & 백화점 9층 전망 카페",
            text: "카탈루냐 광장 엘 코르테 잉글레스 백화점 9층 전망 카페에서 바르셀로나 시내를 한눈에 내려다보며 가벼운 샌드위치와 디저트로 작별 인사를 나눕니다.",
            place: "el_corte_ingles"
          }
        ]
      },
      {
        time: "12:30", icon: "🚕", badge: "🚕 교통 카드",
        title: "[교통] 바르셀로나 숙소 → 엘 프라트 공항(BCN T1) (택시 2대 또는 에어로버스, 약 30분)",
        text: "기념품으로 무거워진 캐리어 6개를 싣고 공식 택시 2대(총 약 €75) 또는 카탈루냐 광장 에어로버스 A1을 타고 바르셀로나 엘 프라트 공항 제1터미널(T1)로 이동합니다.",
        place: "move_bcn_to_airport"
      },
      {
        time: "13:15", icon: "🧾",
        title: "DIVA 키오스크 택스리펀 스캔 → 체크인 · 면세점 쇼핑",
        text: "짐을 부치기 전 공항 출발층의 ‘DIVA 자동 키오스크’에서 면세 서류 바코드를 스캔해 승인(초록불)을 받은 뒤, 항공사 카운터에서 인천행 수하물을 부칩니다. 출국심사 후 공항 면세점에서 남은 유로 동전과 마지막 선물을 구매합니다.",
        place: "move_bcn_to_airport"
      },
      {
        time: "16:00", icon: "🛫", badge: "✈️ 항공 카드",
        title: "[교통] 바르셀로나(BCN) 출발 → 경유지 → 인천(ICN) 귀국 비행",
        text: "눈부셨던 마드리드, 그라나다, 바르셀로나의 추억을 가슴에 품고 한국으로 출발합니다! ¡Hasta luego, España! (항공편 스케줄에 따라 출발 시각 변동 가능)",
        place: "move_bcn_to_airport"
      }
    ],
    mission: [
      "🧾 바르셀로나 공항 DIVA 키오스크에서 택스리펀 바코드 초록불 띄우기",
      "🪙 남은 유로 동전으로 공항에서 초콜릿·하몬 간식 탈탈 털기"
    ]
  },

  {
    id: "d10", date: "2027-09-19", dow: "일", label: "DAY 10",
    city: "인천 도착",
    title: "다시 일상으로, 소중한 추억 저장",
    subtitle: "오전 인천국제공항 도착 · 두 가족 해산 및 휴식",
    hue: "#34d399", stamina: 1,
    sunset: "18:35", temp: "24° / 16°",
    items: [
      {
        time: "10:00", icon: "🛬",
        title: "오전 인천국제공항 도착 · 수하물 수령 및 귀가",
        text: "한국 시간으로 9월 19일(일) 오전에 인천국제공항에 무사히 도착합니다! 수하물을 찾고 두 가족 6명이 서로 수고했다는 인사를 나누며 8박 10일의 행복했던 스페인 여행을 마무리합니다. 일요일 오후 푹 쉬면서 시차를 회복하세요!",
        place: "move_flight_in"
      }
    ],
    mission: [
      "📸 기내 또는 공항에서 이번 스페인 여행 ‘각자의 원픽 순간 & 원픽 음식’ 발표하기",
      "📒 가족 단톡방에 베스트 사진 앨범 공유하기"
    ]
  }
];

/* ---------------------------------------------------------
   쇼핑 미션 체크리스트 (DONKI)
   --------------------------------------------------------- */
const DONKI = [
  {
    cat: "🫒 식료품 · 마트 필수템 (메르카도나 & 백화점)",
    items: [
      "엑스트라 버진 올리브 오일 (라치나타 소용량 틴케이스 / 스프레이형)",
      "오르니만스 꿀국화차 (Hornimans Manzanilla con Miel — 선물용 1위!)",
      "비센스(Torrons Vicens) 수제 아몬드·초콜릿 뚜론",
      "보닐라 아 라 비스타(Bonilla) 페인트통 대용량 감자칩",
      "이베리코 베요타 하몬 슬라이스 진공포장팩",
      "발로르(Valor) 고급 다크 초콜릿 & 카사 아마틀예르 틴케이스 초콜릿",
      "스페인 리오하(Rioja) 레드 와인 & 카바(Cava) 스파클링 와인"
    ]
  },
  {
    cat: "👗 패션 · 중3 딸들 취향저격 (인디텍스 본고장)",
    items: [
      "자라 (Zara) 본고장 가을 신상 자켓·니트·원피스 (한국 대비 30~40% 저렴)",
      "마시모두띠 (Massimo Dutti) 어른용 가죽·캐시미어 의류",
      "버쉬카 (Bershka) · 풀앤베어 (Pull&Bear) · 스트라디바리우스 (딸들 인기 브랜드)",
      "오이쇼 (Oysho) 파자마·라운지웨어",
      "캄퍼 (Camper) 스페인 태생 편안한 신발"
    ]
  },
  {
    cat: "💄 뷰티 · 약국 화장품 (프리모르 & 약국)",
    items: [
      "마티덤 (MartiDerm) 비타민 광채 앰플 (스페인 국민 약국 앰플)",
      "라치나타 (La Chinata) 올리브 립밤 & 핸드크림 (가성비 선물 최고)",
      "이즈딘 (ISDIN) 선크림 (유럽 약국 선크림 1위)",
      "사봉 (Sabon) 바디스크럽 & 핸드크림"
    ]
  },
  {
    cat: "⚽ 굿즈 · 도시별 기념품",
    items: [
      "FC 바르셀로나 / 레알 마드리드 공식 스토어 유니폼 & 키링·머플러",
      "가우디 모자이크 타일(트렌카디스) 컵받침 & 도마뱀 마그넷",
      "그라나다 알카이세리아 석류 문양 도자기 & 모로코풍 유리 램프",
      "프라도 미술관 뮤지엄샵 명화 엽서 & 에코백·책갈피"
    ]
  }
];

/* ---------------------------------------------------------
   여행 준비물 체크리스트 (PACKING)
   --------------------------------------------------------- */
const PACKING = [
  {
    cat: "📄 필수 서류 · 예약 바우처 · 결제",
    items: [
      "여권 원본 (유효기간 6개월 이상 — 알함브라 궁전 입장 시 6명 전원 실물 필수!)",
      "여권 컬러 사본 2부 & 스마트폰 사진 저장 (평소 시내 다닐 때 지참용)",
      "해외결제 트래블 카드 (트래블월렛·트래블로그 등) + 예비 VISA/Master 신용카드",
      "유로(€) 현금 (소액권 €5·€10·€20 위주 — 미니버스·소규모 가게·팁용)",
      "사전 예약 바우처 출력/저장 (알함브라 궁전 · 사그라다 파밀리아 · 구엘 공원 · 프라도 · 렌페 AVE · 부엘링 항공)",
      "해외 여행자 보험 가입 증명서"
    ]
  },
  {
    cat: "🛡️ 안전 · 도난 방지 용품 (소매치기 예방)",
    items: [
      "스마트폰 손목 스트랩 또는 목걸이형 크로스 줄 (가장 중요!)",
      "앞으로 메는 지퍼 달린 크로스백 / 슬링백",
      "가방 지퍼 고정용 미니 옷핀 또는 S자 카라비너 고리",
      "렌페 기차 캐리어 거치대용 숫자 와이어 자물쇠"
    ]
  },
  {
    cat: "👗 9월 스페인 의류 · 패션 (초가을 날씨)",
    items: [
      "낮 시간용 가벼운 반팔·긴팔 셔츠·원피스 (한낮 25~28도)",
      "아침·저녁 및 기내/기차 냉방 대비 가디건·경량 바람막이 자켓 (일교차 10도 이상)",
      "하루 1만 보 이상 걸어도 발이 편한 검증된 운동화 2켤레",
      "강렬한 지중해·안달루시아 햇살 차단용 선글라스 & 챙 넓은 모자",
      "사그라다 파밀리아·알함브라 사진용 화사한 색감(화이트·레드·옐로우) 의상"
    ]
  },
  {
    cat: "🔌 전자기기 · 상비약 · 생활용품",
    items: [
      "보조배터리 (사진·구글맵·오디오 가이드 사용으로 배터리 소모 빠름)",
      "유무선 이어폰 (사그라다 파밀리아·프라도 한국어 오디오 가이드 청취용)",
      "유럽형 C타입 멀티탭 (스페인은 한국과 같은 220V 동그란 2구 콘센트라 별도 돼지코 없이도 대부분 호환되나 멀티탭이 있으면 편리!)",
      "유럽 로밍 또는 대용량 eSIM / 유심",
      "상비약 (소화제·진통제·지사제·멀미약·발 물집 방지 밴드·인공눈물)",
      "선크림 & 보습 립밤·수분크림 (마드리드·그라나다는 내륙이라 건조해요)",
      "접이식 장바구니 / 보조가방 (쇼핑 및 마트용)"
    ]
  }
];

/* ---------------------------------------------------------
   스페인어 한마디 (PHRASES — 탭하면 스페인어 발음 재생)
   --------------------------------------------------------- */
const PHRASES = [
  { ko: "안녕하세요! (가장 기본 인사)", jp: "¡Hola! ¡Buenos días!", read: "올라! 부에노스 디아스!" },
  { ko: "감사합니다", jp: "¡Muchas gracias!", read: "무차스 그라시아스!" },
  { ko: "6명입니다 (식당 입장 시)", jp: "Somos seis personas.", read: "소모스 세이스 페르소나스." },
  { ko: "예약한 ○○입니다", jp: "Tengo una reserva a nombre de ○○.", read: "텡고 우나 레세르바 아 놈브레 데 ○○." },
  { ko: "이것으로 주세요 (메뉴판 가리키며)", jp: "Esto, por favor.", read: "에스또, 뽀르 파보르." },
  { ko: "덜 짜게(소금 적게) 해주세요! (필수)", jp: "Poco salado, por favor.", read: "뽀꼬 살라도, 뽀르 파보르." },
  { ko: "탄산 없는 생수 주세요", jp: "Agua sin gas, por favor.", read: "아구아 신 가스, 뽀르 파보르." },
  { ko: "계산서 부탁합니다", jp: "La cuenta, por favor.", read: "라 꾸엔따, 뽀르 파보르." },
  { ko: "택스프리(면세 서류) 되나요?", jp: "¿Tienen Tax Free, por favor?", read: "띠에넨 딱스 프리, 뽀르 파보르?" },
  { ko: "화장실이 어디에 있나요?", jp: "¿Dónde está el baño?", read: "돈데 에스따 엘 바뇨?" },
  { ko: "여기로 가주세요 (택시에서 주소 보여주며)", jp: "A esta dirección, por favor.", read: "아 에스따 디렉시온, 뽀르 파보르." },
  { ko: "사진 좀 찍어주시겠어요?", jp: "¿Nos puede tomar una foto, por favor?", read: "노스 뿌에데 또마르 우나 포또, 뽀르 파보르?" },
  { ko: "정말 맛있어요! 최고예요!", jp: "¡Está riquísimo! ¡Muy bueno!", read: "에스따 리끼시모! 무이 부에노!" },
  { ko: "안녕히 계세요, 또 만나요!", jp: "¡Adiós! ¡Hasta luego!", read: "아디오스! 아스따 루에고!" },
];

/* ---------------------------------------------------------
   사진 출처 (Wikimedia Commons)
   --------------------------------------------------------- */
function creditList() {
  const seen = new Map(TRIP.heroes.map(h => [h.file, ""]));
  Object.values(PLACES).forEach(p => p.credit && seen.set(p.credit, p.photoCredit || ""));
  return [...seen];
}
