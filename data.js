/* =========================================================
   태양의 나라, 스페인 2027 — 두 가족 6인(어른 4 · 중3 딸 2) 여행 데이터
   마드리드 (IN) · 세비야 · 바르셀로나 (OUT) | 2027.09.10(금) ~ 09.19(일)
   (기본 일정안 p7s = 세비야 코스 · 그라나다 코스 p7a 등은 일정안 선택에서 그대로 볼 수 있음)
   ========================================================= */

const W = "https://thumb.wikimedia.org/wikipedia/commons/thumb/";
const U = "https://upload.wikimedia.org/wikipedia/commons/";

const TRIP = {
  title: "태양의 나라, 스페인 여행",
  start: "2027-09-10T17:50:00+09:00",
  end: "2027-09-19T10:50:00+09:00",
  stay: "마드리드(2박) · 세비야(2박) · 바르셀로나(3박) 6인 가족형 숙소",
  members: { adult: 4, teenGirls: 2 },
  heroes: [
    { src: W + "e/ef/SF_maig_2_cropped.jpg/960px-SF_maig_2_cropped.jpg", file: "SF_maig_2_cropped.jpg", pos: "center 40%" },
    { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg/960px-Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", file: "Plaza de España (Sevilla) - 01.jpg", pos: "center 55%" },
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
    lat: 40.4162, lng: -3.7048, area: "마드리드 센트로",
    desc: "마드리드 베이스캠프(6인용 3베드룸 아파트 또는 패밀리 커넥팅룸). 솔 광장·마요르 광장·산 미겔 시장·왕궁까지 모두 도보 5~12분 거리라 두 가족 6명이 여유롭게 오가며 쉬기 최적의 위치입니다.",
    tips: ["도착 첫날 근처 메르카도나(Mercadona) 또는 까르푸 익스프레스에서 6인분 생수·과일·하몬·아침 간식 구매", "엘리베이터 유무와 대형 캐리어 6개 보관 공간을 예약 시 최종 확인"],
    q: "Puerta del Sol Madrid",
  },
  stay_granada: {
    type: "stay", emoji: "🏠", name: "그라나다 숙소 (이사벨 라 카톨리카·대성당 인근)", jp: "Plaza Isabel la Católica, Granada",
    img: W + "2/22/Granada_-_Cathedral_Front.jpg/960px-Granada_-_Cathedral_Front.jpg", credit: "Granada_-_Cathedral_Front.jpg",
    imgNote: "숙소 인근 그라나다 대성당 광장",
    lat: 37.1758, lng: -3.5975, area: "그라나다 중심가",
    desc: "그라나다 베이스캠프. 알바이신 언덕처럼 계단이 많은 골목 대신, 택시와 미니버스(C30·C32)가 바로 서는 평지 중심가(콜론 거리·누에바 광장 사이)에 잡아 캐리어 6개 이동이 훨씬 수월합니다.",
    tips: ["알함브라 궁전행 C30번 미니버스 정류장이 도보 2분 거리", "저녁에는 나바스 거리(Calle Navas)와 대성당 주변 타파스 바까지 도보로 안전하게 이동 가능"],
    q: "Plaza Isabel la Catolica Granada",
  },
  stay_bcn: {
    type: "stay", emoji: "🏠", name: "바르셀로나 숙소 (에이샴플라·카탈루냐 광장 인근)", jp: "Eixample / Passeig de Gràcia, Barcelona",
    img: W + "e/e3/Via_Barcelona_Casa_Mil%C3%A0.JPG/960px-Via_Barcelona_Casa_Mil%C3%A0.JPG", credit: "Via_Barcelona_Casa_Milà.JPG",
    imgNote: "숙소 인근 그라시아 거리 전경",
    lat: 41.3905, lng: 2.1665, area: "바르셀로나 에이샴플라",
    desc: "바르셀로나 베이스캠프. 치안이 가장 안전하고 바둑판처럼 정돈된 에이샴플라(그라시아 거리 인근)에 위치해, 카사 바트요·카탈루냐 광장·비니투스 맛집까지 걸어서 다닐 수 있습니다.",
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

  /* =====================================================================
     세비야 (SEVILLA) — 그라나다 대신 세비야를 넣은 일정안(p7s)에서 사용
     ===================================================================== */
  stay_sevilla: {
    type: "stay", emoji: "🏠", name: "세비야 숙소 (대성당·살바도르 광장 인근)", jp: "Centro / Barrio de Santa Cruz, Sevilla",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Casas_%28Barrio_Santa_Cruz%29.jpg/960px-Casas_%28Barrio_Santa_Cruz%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Casas (Barrio Santa Cruz).jpg",
    imgNote: "숙소 인근 산타 크루스 골목",
    lat: 37.3893, lng: -5.9926, area: "세비야 센트로 (대성당 도보 5분)",
    desc: "세비야 베이스캠프. 대성당과 살바도르 광장 사이(프랑코스 거리·알팔파 광장 주변)에 잡으면 알카사르·대성당·시에르페스 쇼핑 거리·라스 세타스가 모두 걸어서 5~10분입니다. 세비야 구시가지는 평지라 알바이신 같은 언덕이 없고, 6명이 걷기에 훨씬 편합니다.",
    tips: [
      "산타 크루스 지구 안쪽 골목은 차가 못 들어가요. 택시가 문 앞까지 오는 큰길가(콘스티투시온 대로·프랑코스 거리·알팔파 광장 주변) 숙소가 캐리어 6개에 유리합니다",
      "9월 중순 세비야는 낮 최고 32°C 안팎이라 에어컨과 엘리베이터 유무를 예약 전에 꼭 확인하세요",
      "6인이면 3베드룸 아파트 또는 호텔 트리플룸 2개. 9월은 성수기라 일찍 예약할수록 좋습니다"
    ],
    q: "Plaza del Salvador Sevilla",
  },

  /* ---------- 세비야 교통 카드 ---------- */
  move_ave_sevilla: {
    type: "move", emoji: "🚄", name: "AVE 고속열차: 마드리드 → 세비야", jp: "Renfe AVE · Madrid Puerta de Atocha → Sevilla Santa Justa",
    img: U + "e/ed/Trenes.jpg", credit: "Trenes.jpg",
    lat: 38.7000, lng: -4.2000, area: "소요 약 2시간 40분 · 직통 고속열차",
    desc: "스페인 최초의 고속철 노선(1992년 개통)으로 마드리드 아토차 역에서 세비야 산타 후스타 역까지 환승 없이 약 2시간 40분입니다. 그라나다행(약 3시간 25분)보다 45분 짧고, 하루 20편 이상 다녀서 시간 선택이 훨씬 자유롭습니다. 코르도바를 지나며 창밖으로 올리브 구릉지가 이어집니다.",
    tips: [
      "2026년 10월 시간표 기준 오전 직통편 예: 10:00→12:41, 10:40→13:21, 11:25→14:04, 12:00→14:39. 2027년 9월 시간표는 출발 2~3개월 전에 열리니 그때 10시 전후 편으로 예매하세요",
      "렌페(AVE) 외에 이리요(iryo)·위고(OUIGO)도 같은 구간을 달립니다. 세 회사 가격을 비교하면 1인 €20~€30대 표도 나옵니다 (트레인라인·오미오 앱에서 한 번에 비교)",
      "6인이면 마주 보는 4인 테이블석 + 옆 2인석으로 좌석을 지정하세요",
      "아토차 역은 탑승 전 수하물 보안검색이 있어 출발 30분 전까지 도착해야 여유롭습니다"
    ],
    menu: {
      order: [
        "출발/도착: 마드리드 푸에르타 데 아토차 → 세비야 산타 후스타 (직통)",
        "소요 시간: 약 2시간 39분 ~ 2시간 45분",
        "운행: 첫차 06:55경 ~ 막차 21:00경, 하루 20편 이상",
        "추천 좌석: 4인 테이블석 + 인접 2인석 (사전 지정)"
      ]
    },
    price: "1인 약 €30~€70 (일찍 예매할수록 저렴)",
    q: "Estacion de Sevilla Santa Justa",
  },
  move_svq_station_taxi: {
    type: "move", emoji: "🚕", name: "산타 후스타 역 → 세비야 숙소 (택시 2대)", jp: "Estación de Santa Justa → Centro",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Estaci%C3%B3n_de_Sevilla_Santa_Justa_001.jpg/960px-Estaci%C3%B3n_de_Sevilla_Santa_Justa_001.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Estación de Sevilla Santa Justa 001.jpg",
    lat: 37.3920, lng: -5.9756, area: "소요 약 10분 · 택시 2대",
    desc: "산타 후스타 역 정문 앞 택시 승강장에서 2대에 나눠 타고 구시가지 숙소로 이동합니다. 걸으면 25분 정도인데 한낮 더위에 캐리어 6개를 끌기는 무리라 택시가 맞습니다.",
    tips: [
      "세비야 택시는 미터 요금에 산타 후스타 역 출발 추가요금 €3.70이 붙습니다 (2026년 공시 요금)",
      "구시가지는 일방통행이 많아요. 숙소 주소를 화면으로 보여주고, 차가 못 들어가는 골목이면 가장 가까운 큰길에서 내려 걷습니다"
    ],
    menu: {
      order: [
        "이동 수단: 역 앞 공식 택시 2대 분승 (3명 + 3명)",
        "소요 시간: 약 8~12분",
        "예상 요금: 대당 약 €10~€13 (역 추가요금 €3.70 포함)"
      ]
    },
    price: "택시 2대 총 약 €20~€26",
    q: "Estacion de Sevilla Santa Justa",
  },
  move_svq_city_taxi: {
    type: "move", emoji: "🚕", name: "세비야 시내 이동 (택시 2대 · 도보)", jp: "Taxi en Sevilla · Centro ↔ Plaza de España",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Puente_de_Triana_%28Sevilla%29_01.jpg/960px-Puente_de_Triana_%28Sevilla%29_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Puente de Triana (Sevilla) 01.jpg",
    lat: 37.3822, lng: -5.9940, area: "시내 어디든 5~10분 · 택시 2대",
    desc: "세비야 구시가지는 평지에 볼거리가 모여 있어 대부분 걸어서 다닙니다. 다만 한낮과 늦은 오후 햇볕이 강해서 스페인 광장처럼 20분 넘게 걸어야 하는 곳은 택시 2대로 이동하는 편이 체력에 좋습니다.",
    tips: [
      "흰색 차체에 노란 대각선 띠가 공식 택시입니다. 길에서 잡거나 Free Now·Cabify 앱으로 부르면 됩니다",
      "시내 구간은 미터 요금으로 대당 €6~€9 정도. 최소 요금은 평일 낮 €4.62입니다",
      "대성당에서 스페인 광장까지 걷는다면 산 텔모 궁전 → 마리아 루이사 공원 그늘길로 약 20분"
    ],
    menu: {
      order: [
        "숙소 → 스페인 광장: 택시 약 8분",
        "스페인 광장 → 쿠나 거리(플라멩코 공연장): 택시 약 10분",
        "대성당 → 트리아나 다리: 걸어서 약 15분 (강변 산책로)"
      ]
    },
    price: "택시 2대 1회 약 €12~€18",
    q: "Puerta de Jerez Sevilla",
  },
  move_svq_to_airport: {
    type: "move", emoji: "🚕", name: "세비야 숙소 → 세비야 공항(SVQ) (정액 택시 2대)", jp: "Sevilla Centro → Aeropuerto de Sevilla (SVQ)",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Seville_San_Pablo_Airport_Terminal_-_April_2018.jpg/960px-Seville_San_Pablo_Airport_Terminal_-_April_2018.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Seville San Pablo Airport Terminal - April 2018.jpg",
    lat: 37.4180, lng: -5.8931, area: "소요 약 20~25분 · 정액 택시",
    desc: "세비야 공항은 시내에서 약 10km로 가깝고, 택시 요금이 정액제라 흥정할 필요가 없습니다. 이른 아침이라 숙소에 전날 미리 택시 2대 예약을 부탁해 두세요.",
    tips: [
      "2026년 공시 정액 요금: 평일 07:00~21:00 €26, 그 외 시간·주말·공휴일 €29 (대당). 07:00 이전 탑승이면 €29입니다",
      "전화·앱 호출 시 픽업 지점까지의 미터 요금이 조금 더 붙을 수 있습니다",
      "공항버스(EA)는 편도 €4·약 35분이지만 정류장까지 캐리어를 끌어야 해서 6인에게는 택시가 낫습니다"
    ],
    menu: {
      order: [
        "이동 수단: 정액 택시 2대 (전날 숙소에 예약 요청)",
        "소요 시간: 약 20~25분",
        "요금: 대당 €26 (평일 낮) / €29 (이른 아침·야간·주말)"
      ]
    },
    price: "택시 2대 총 약 €52~€58",
    q: "Aeropuerto de Sevilla",
  },
  move_vueling_svq_bcn: {
    type: "move", emoji: "✈️", name: "부엘링 국내선: 세비야 → 바르셀로나", jp: "Vueling · SVQ → BCN (Terminal 1)",
    img: W + "f/ff/Vueling_A320-214_%28EC-JZQ%29_departing_Barcelona_Airport.jpg/960px-Vueling_A320-214_%28EC-JZQ%29_departing_Barcelona_Airport.jpg", credit: "Vueling_A320-214_(EC-JZQ)_departing_Barcelona_Airport.jpg",
    lat: 39.3000, lng: -1.8000, area: "비행 약 1시간 45분 · 국내선 직항",
    desc: "세비야에서 바르셀로나는 기차로 5시간 반 이상이라 비행기가 정답입니다. 부엘링 직항이 하루 5~6편 있어 그라나다 출발보다 시간 선택 폭이 넓습니다. 바르셀로나 엘 프라트 공항 T1에 도착합니다.",
    tips: [
      "2026년 10월 시간표 기준 부엘링 직항: 06:40, 07:35, 09:40(VY2211, 11:25 도착), 13:40(15:25 도착), 15:25. 이 일정은 09:40편 기준입니다",
      "세비야 아침을 더 즐기고 싶으면 13:40편도 가능합니다. 대신 바르셀로나 도착일 오후가 2시간쯤 짧아집니다",
      "기본 요금은 작은 기내 가방만 포함입니다. 6명 모두 위탁수하물(23~25kg)이 포함된 요금제로 예매하세요. 공항에서 추가하면 훨씬 비쌉니다",
      "라이언에어도 같은 구간을 운항합니다 (12:55 출발편 등). 수하물 포함 총액으로 비교하세요",
      "국내선이어도 탑승 때 여권 확인을 하니 손가방에 넣어 두세요"
    ],
    menu: {
      order: [
        "구간: 세비야 공항(SVQ) → 바르셀로나 엘 프라트(BCN T1)",
        "비행 시간: 약 1시간 40~45분",
        "필수 체크: 위탁수하물 포함 요금제 + 모바일 체크인"
      ]
    },
    price: "1인 약 €50~€110 (수하물 포함 · 일찍 예매 기준)",
    q: "Barcelona El Prat Airport Terminal 1",
  },

  /* ---------- 세비야 관광지 ---------- */
  alcazar: {
    type: "spot", emoji: "🏰", name: "세비야 알카사르 (레알 알카사르 왕궁)", jp: "Real Alcázar de Sevilla",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Patio_de_las_Doncellas_%28Alc%C3%A1zar_de_Sevilla%29.jpg/960px-Patio_de_las_Doncellas_%28Alc%C3%A1zar_de_Sevilla%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Patio de las Doncellas (Alcázar de Sevilla).jpg",
    lat: 37.3831, lng: -5.9902, area: "세비야 산타 크루스 (대성당 맞은편)",
    desc: "지금도 스페인 왕실이 쓰는, 유럽에서 가장 오래된 현역 왕궁입니다. 14세기 페드로 1세가 이슬람 장인들을 불러 지은 ‘무데하르 궁전’은 알함브라 나스르 궁전과 같은 계보의 아라베스크 장식으로 가득합니다. ‘소녀의 중정’, 황금 돔이 있는 ‘대사의 방’, 그리고 오렌지 나무와 공작이 있는 넓은 정원까지 2시간 반 정도 천천히 둘러봅니다. 드라마 ‘왕좌의 게임’ 도른 궁전 촬영지라 딸들이 사진 찍기에도 좋습니다.",
    tips: [
      "⚠️ 공식 사이트(alcazarsevilla.org)에서 날짜·입장 시각을 지정해 미리 예매하세요. 표는 보통 2개월 전쯤 열리고, 9월 오전 시간대는 일찍 매진됩니다",
      "더위와 단체 관광객을 피하려면 문 여는 09:30 첫 타임이 가장 좋습니다 (4~9월 09:30~19:00)",
      "입장 때 신분증으로 표를 확인하니 6명 모두 여권을 가져가세요. 13~30세 학생 할인 표를 샀다면 학생증(국제학생증)도 필요합니다",
      "입구는 대성당 쪽 ‘사자의 문(Puerta del León)’. 예매 시각 10~15분 전에 줄을 서세요",
      "정원 안쪽 ‘마리아 데 파디야의 목욕탕’(지하 저수조)은 사진이 가장 잘 나오는 곳입니다"
    ],
    price: "일반 €15.50 · 13~30세 학생 €8 · 13세 이하 무료 (온라인 예매 수수료 별도)",
    q: "Real Alcazar de Sevilla",
  },
  sevilla_cathedral: {
    type: "spot", emoji: "⛪", name: "세비야 대성당 & 히랄다 탑", jp: "Catedral de Sevilla & La Giralda",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Giralda_cath%C3%A9drale_tour_Seville_Espagne.jpg/960px-Giralda_cath%C3%A9drale_tour_Seville_Espagne.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Giralda cathédrale tour Seville Espagne.jpg",
    lat: 37.3858, lng: -5.9931, area: "세비야 센트로",
    desc: "세계에서 가장 큰 고딕 성당입니다. 네 왕이 관을 멘 콜럼버스의 묘, 황금 1.5톤을 썼다는 중앙 제단, 오렌지 나무 중정을 본 뒤 히랄다 탑에 오릅니다. 히랄다는 원래 이슬람 사원의 첨탑이라 계단이 아니라 완만한 경사로 35개로 되어 있어, 높이 약 70m 전망대까지 생각보다 수월하게 올라갑니다. 꼭대기에서 세비야 구시가지가 한눈에 들어옵니다.",
    tips: [
      "관람 시간: 월~토 10:45~19:00, 일 14:30~19:00 (매표 18:00 마감). 온라인으로 시간 지정 예매하면 줄을 서지 않습니다",
      "표에 히랄다 탑과 살바도르 성당 입장이 포함됩니다",
      "히랄다는 올라가는 데 15분쯤. 종이 15분마다 울리니 전망대에서 놀라지 마세요",
      "어깨와 무릎이 드러나는 옷은 입장이 제한될 수 있어 얇은 겉옷을 챙기세요"
    ],
    price: "온라인 €13 (현장 €14) · 25세 이하 학생 €7 · 13세 이하 무료",
    q: "Catedral de Sevilla",
  },
  plaza_espana_sev: {
    type: "spot", emoji: "🚣", name: "스페인 광장 & 마리아 루이사 공원", jp: "Plaza de España & Parque de María Luisa",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg/960px-Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Plaza de España (Sevilla) - 01.jpg",
    lat: 37.3772, lng: -5.9869, area: "세비야 남쪽 (대성당에서 택시 8분)",
    desc: "1929년 박람회를 위해 지은 반원형 광장으로, 세비야에서 가장 사진이 잘 나오는 곳입니다. 건물을 따라 스페인 48개 주를 그린 타일 벤치가 늘어서 있고, 운하에서는 노 젓는 배를 탈 수 있습니다. 영화 ‘스타워즈 에피소드 2’의 나부 행성 촬영지이기도 합니다. 해가 기울면 붉은 벽돌과 타일이 황금빛으로 물듭니다.",
    tips: [
      "입장 무료, 예약 없음. 4~10월은 08:00~24:00 개방",
      "운하 보트: 노 젓는 배 4인승 약 €6(35분) + 보증금 €4. 6명이면 2척으로 나눠 타세요. 운영 시간은 선착장에서 확인",
      "타일 벤치는 주 이름 가나다(알파벳) 순서입니다. 마드리드·그라나다·바르셀로나 벤치를 찾아 사진을 남겨 보세요",
      "그늘이 적어 한낮은 피하고, 17시 이후에 가는 것이 좋습니다. 물을 꼭 챙기세요",
      "아케이드 아래에서 플라멩코 버스킹을 자주 합니다"
    ],
    price: "입장 무료 · 보트 1척 약 €6",
    q: "Plaza de España Sevilla",
  },
  setas: {
    type: "spot", emoji: "🍄", name: "라스 세타스 (메트로폴 파라솔) 전망대", jp: "Setas de Sevilla (Metropol Parasol)",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Metropol_Parasol_Plaza_de_la_Encarnaci%C3%B3n_1.jpg/960px-Metropol_Parasol_Plaza_de_la_Encarnaci%C3%B3n_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Metropol Parasol Plaza de la Encarnación 1.jpg",
    lat: 37.3933, lng: -5.9917, area: "엔카르나시온 광장 (숙소에서 도보 5분)",
    desc: "버섯 모양의 세계 최대급 목조 구조물입니다. 엘리베이터로 올라가 물결치는 지붕 위 산책로를 걸으며 대성당과 히랄다가 보이는 세비야 야경을 360도로 봅니다. 밤에는 지붕 전체에 조명 쇼 ‘오로라(Aurora)’가 켜져 낮과 전혀 다른 분위기입니다.",
    tips: [
      "09:30부터 자정 넘어서까지 운영 (마지막 입장 00:15경). 오로라 조명 쇼는 4~10월 21:30경부터",
      "입장권에 전망대 + 몰입형 영상 ‘필링 세비야’ + 오로라 조명이 포함됩니다",
      "일몰 시간대는 온라인 예매가 빨리 마감돼요. 저녁 식사 후 22시쯤 가면 한결 여유롭습니다",
      "지하에는 로마 시대 유적 박물관(안티콰리움)이 있습니다"
    ],
    price: "일반 약 €16부터",
    q: "Setas de Sevilla",
  },
  santa_cruz: {
    type: "spot", emoji: "🍊", name: "산타 크루스 지구 골목 산책", jp: "Barrio de Santa Cruz",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Casas_%28Barrio_Santa_Cruz%29.jpg/960px-Casas_%28Barrio_Santa_Cruz%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Casas (Barrio Santa Cruz).jpg",
    lat: 37.3846, lng: -5.9893, area: "알카사르 뒤편 (옛 유대인 지구)",
    desc: "알카사르 성벽 뒤로 이어지는 하얀 골목 미로입니다. 오렌지 나무가 있는 ‘도냐 엘비라 광장’, 성벽을 따라 걷는 ‘물의 골목(Callejón del Agua)’, 두 사람이 겨우 지나가는 ‘키스 골목(Calle de los Besos)’을 지나 무리요 정원까지 20~30분이면 충분합니다. 골목이 좁아 한낮에도 그늘이 집니다.",
    tips: [
      "알카사르 출구(파티오 데 반데라스)로 나오면 바로 산타 크루스 지구로 이어집니다",
      "길을 잃어도 괜찮아요. 히랄다 탑이 보이는 쪽이 대성당입니다",
      "기념품은 골목 초입 가게보다 트리아나 도자기 가게나 시에르페스 거리가 종류도 많고 가격도 낫습니다"
    ],
    price: "무료",
    q: "Plaza de Doña Elvira Sevilla",
  },
  triana: {
    type: "spot", emoji: "🌉", name: "트리아나 다리 & 과달키비르 강변 노을", jp: "Puente de Isabel II (Triana) & Calle Betis",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Puente_de_Triana_anochecer.jpg/960px-Puente_de_Triana_anochecer.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Puente de Triana anochecer.jpg",
    lat: 37.3862, lng: -6.0026, area: "트리아나 (대성당에서 도보 15분)",
    desc: "강 건너 트리아나는 플라멩코와 도자기의 고향입니다. 이사벨 2세 다리(트리아나 다리)를 건너 알록달록한 집이 늘어선 베티스 거리 강변에 서면, 강 건너편 황금의 탑과 히랄다 탑 뒤로 해가 지는 세비야 최고의 노을을 볼 수 있습니다.",
    tips: [
      "9월 중순 일몰은 20:30경. 20:00쯤 다리 위나 베티스 거리 강변에 자리를 잡으세요",
      "다리 초입 ‘트리아나 시장(Mercado de Triana)’은 신선식품 가게가 월~토 09:00~15:00이라 저녁에는 대부분 닫습니다",
      "베티스 거리 식당은 전망값이 붙어 비싼 편이에요. 식사는 골목 안쪽 타파스 바에서, 강변에서는 음료 한 잔만 추천합니다"
    ],
    price: "무료",
    q: "Puente de Isabel II Sevilla",
  },

  /* ---------- 세비야 쇼핑 · 공연 ---------- */
  ceramica_ruiz: {
    type: "shop", emoji: "🏺", name: "세라미카 루이스 (트리아나 도자기 가게)", jp: "Cerámica Ruiz · Calle San Jorge 27, Triana",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Cer%C3%A1mica_Triana_001.jpg/960px-Cer%C3%A1mica_Triana_001.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Cerámica Triana 001.jpg",
    lat: 37.3859, lng: -6.0044, area: "트리아나 산 호르헤 거리",
    desc: "트리아나 다리를 건너면 바로 나오는 산 호르헤 거리는 세비야 타일·도자기 가게가 모인 골목입니다. 그중 세라미카 루이스는 손으로 그린 접시, 타일, 컵받침, 작은 종지처럼 캐리어에 넣기 좋은 소품이 많아 기념품 고르기에 알맞습니다.",
    tips: [
      "작은 타일 마그넷·컵받침은 €3~€8, 손그림 접시는 €15~€40 정도",
      "깨지지 않게 포장을 부탁하세요: “¿Me lo puede envolver para viajar?”",
      "같은 거리와 알파레리아 거리, 안티야노 캄포스 거리에 도자기 가게가 서너 곳 더 있어 함께 둘러보기 좋습니다",
      "근처 ‘트리아나 도자기 센터(Centro Cerámica Triana, 안티야노 캄포스 14)’는 옛 가마를 볼 수 있는 작은 박물관 (화~토, 월요일 휴관)"
    ],
    price: "소품 €3~ · 접시 €15~€40",
    q: "Ceramica Ruiz Calle San Jorge 27 Sevilla",
  },
  sierpes_tetuan: {
    type: "shop", emoji: "🛍️", name: "시에르페스·테투안 거리 쇼핑", jp: "Calle Sierpes & Calle Tetuán",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Lonas%2C_Calle_Sierpes%2C_Sevilla%2C_Espa%C3%B1a%2C_2015.JPG/960px-Lonas%2C_Calle_Sierpes%2C_Sevilla%2C_Espa%C3%B1a%2C_2015.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Lonas, Calle Sierpes, Sevilla, España, 2015.JPG",
    lat: 37.3912, lng: -5.9949, area: "세비야 센트로 (숙소에서 도보 5분)",
    desc: "세비야에서 가장 번화한 보행자 쇼핑 거리 두 곳이 나란히 달립니다. 테투안 거리에는 자라·풀앤베어·스트라디바리우스 같은 인디텍스 브랜드가, 시에르페스 거리에는 화장품 편집숍 프리모르와 부채·만티야 같은 전통 가게가 모여 있습니다. 한낮에는 거리 위에 큰 차양막을 쳐서 그늘이 지고, 매장 안은 에어컨이 시원해 시에스타 시간에 딸들과 다니기 좋습니다.",
    tips: [
      "🎀 프리모르(Primor) 시에르페스점: Calle Sierpes 72, 월~토 09:30~21:30. 마티덤 앰플·향수·립 제품이 한국보다 훨씬 쌉니다",
      "👗 자라·버쉬카·스트라디바리우스: 테투안 거리와 두케 광장 주변에 모여 있어요",
      "🏬 엘 코르테 잉글레스 두케 광장점: 꼭대기 층 ‘고메 익스피리언스’ 테라스에서 시내 전망을 볼 수 있습니다",
      "🧾 Tax Free 매장에서는 여권을 보여주고 DIVA 서류를 받아 두세요 (바르셀로나 공항에서 한꺼번에 처리)",
      "대부분의 체인 매장은 시에스타 없이 21시 넘어서까지 엽니다"
    ],
    price: "구경 무료",
    q: "Calle Sierpes Sevilla",
  },
  casa_memoria: {
    type: "spot", emoji: "💃", name: "카사 데 라 메모리아 (정통 플라멩코 공연)", jp: "Casa de la Memoria · Calle Cuna 6",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Sevilla_flamenco_19496136099_3e8d453006_o.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "Sevilla flamenco 19496136099 3e8d453006 o.jpg",
    lat: 37.3922, lng: -5.9935, area: "세비야 센트로 쿠나 거리",
    desc: "플라멩코의 본고장 세비야에서 가장 평이 좋은 소극장 공연입니다. 16세기 저택 안 100석 남짓한 공간에서 마이크 없이 노래·기타·춤을 바로 눈앞에서 봅니다. 식사나 술을 끼워 팔지 않고 약 1시간 공연에만 집중하는 곳이라 중3 딸들과 보기에도 알맞습니다.",
    tips: [
      "공연은 매일 19:30·21:00 (시즌에 따라 18:00·22:30 추가). 좌석이 적어 공식 사이트(casadelamemoria.es)에서 미리 예매하세요",
      "자유석이라 30분 전에 가서 줄을 서면 앞줄에 앉을 수 있습니다",
      "공연 중 사진·영상 촬영은 금지이고, 마지막 앙코르 때만 허용됩니다",
      "매진이면 대안: 플라멩코 무용 박물관(Museo del Baile Flamenco, 19:00 공연 약 €20~€25) 또는 라 카사 델 플라멩코(산타 크루스, 19:00·20:30)"
    ],
    price: "1인 약 €22~€25 (학생·어린이 할인 있음 · 예매 시 확인)",
    q: "Casa de la Memoria Calle Cuna 6 Sevilla",
  },

  /* ---------- 세비야 식당 ---------- */
  el_rinconcillo: {
    type: "food", emoji: "🍷", name: "엘 린콘시요 (1670년 창업 · 세비야에서 가장 오래된 바)", jp: "El Rinconcillo · Calle Gerona 40",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/El_Rinconcillo.jpg/960px-El_Rinconcillo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "El Rinconcillo.jpg",
    imgNote: "350년 된 타일 벽과 하몬이 걸린 바",
    lat: 37.3942, lng: -5.9887, area: "세비야 센트로 (라스 세타스 도보 4분)",
    desc: "1670년에 문을 연 세비야에서 가장 오래된 타파스 바입니다. 천장에 하몬이 매달린 앞쪽 바에서는 지금도 종업원이 계산을 나무 바 위에 분필로 적습니다. 바 뒤편에 테이블 식당이 따로 있어 6명이 앉아서 식사할 수 있습니다.",
    tips: [
      "매일 13:00~01:30 영업 (월요일에도 엽니다). 뒤편 식당은 23:30에 주문 마감",
      "6인 테이블은 공식 사이트(elrinconcillo.es)나 전화(+34 954 22 31 83)로 미리 예약하세요",
      "앞쪽 바는 서서 먹는 자리라 분위기만 보고, 식사는 테이블에서 하는 것이 편합니다"
    ],
    q: "El Rinconcillo Calle Gerona 40 Sevilla",
    menu: {
      adult: ["🥬 에스피나카스 콘 가르반소스 (시금치 병아리콩 볶음 · 이 집 간판 메뉴)", "🐟 파비아스 데 바칼라오 (대구 튀김)", "🥩 카리야다 (이베리코 볼살 조림) & 하몬 이베리코", "🍷 만사니야 또는 피노 셰리 한 잔"],
      teen: ["🧆 크로케타스 데 하몬 (하몬 크로켓)", "🥩 솔로미요 (돼지 안심 구이) & 감자튀김", "🍅 살모레호 (차가운 토마토 크림 수프)", "🥤 틴토 데 베라노 대신 레몬 탄산(Fanta Limón)"],
    },
    price: "1인 약 €20~€30",
  },
  las_teresas: {
    type: "food", emoji: "🍖", name: "라스 테레사스 (1870년 창업 · 하몬 바)", jp: "Bar Las Teresas · Calle Santa Teresa 2",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Plato_de_jamon_iberico_2014.jpg/960px-Plato_de_jamon_iberico_2014.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Plato de jamon iberico 2014.jpg",
    imgNote: "손으로 썬 하몬 이베리코",
    lat: 37.3853, lng: -5.9885, area: "산타 크루스 지구",
    desc: "산타 크루스 골목 안, 천장 가득 하몬이 걸린 오래된 바입니다. 주문하면 그 자리에서 손으로 썰어 주는 하몬 이베리코 데 베요타가 유명하고, 골목에 테이블이 있어 앉아서 먹을 수 있습니다.",
    tips: [
      "매일 10:00~24:00 영업 (월요일에도 엽니다)",
      "타파 1접시 €3~€7. 여러 개 시켜 나눠 먹기 좋습니다",
      "점심 13:30 전에 가면 골목 테이블을 잡기 쉽습니다"
    ],
    q: "Bar Las Teresas Calle Santa Teresa 2 Sevilla",
    menu: {
      adult: ["🍖 하몬 이베리코 데 베요타 (손으로 썬 도토리 하몬)", "🥬 에스피나카스 콘 가르반소스 (시금치 병아리콩)", "🧀 케소 만체고 & 셰리 와인"],
      teen: ["🍅 살모레호 (토마토 크림 수프 + 하몬 가루)", "🧆 크로케타스 & 토르티야 (감자 오믈렛)", "🥖 판 콘 토마테 (토마토 바게트)"],
    },
    price: "1인 약 €15~€25",
  },
  bodega_santa_cruz: {
    type: "food", emoji: "🥪", name: "보데가 산타 크루스 ‘라스 콜룸나스’ (몬타디토 바)", jp: "Bodega Santa Cruz Las Columnas · Calle Rodrigo Caro 1",
    /* 사진 미정: 이모지로 표시 */
    lat: 37.3861, lng: -5.9912, area: "대성당 뒤편 (히랄다 도보 2분)",
    desc: "히랄다 탑 바로 뒤, 기둥이 있는 모퉁이의 서서 먹는 바입니다. 세비야 사람들처럼 바에 붙어 서서 작은 샌드위치(몬타디토)와 맥주 한 잔을 시키면 종업원이 계산을 바 위에 분필로 적어 둡니다. 음식보다 분위기를 맛보는 곳이라 15~20분 가볍게 들르기에 좋습니다.",
    tips: [
      "의자가 거의 없는 스탠딩 바입니다. 6명이 제대로 앉아 먹으려면 추천 1(라스 테레사스)로",
      "주문은 바에서 큰 소리로. 나갈 때 “La cuenta, por favor” 하면 분필 계산을 지워 줍니다",
      "타파 1개 €2.5~€4로 세비야에서도 싼 편"
    ],
    q: "Bodega Santa Cruz Las Columnas Sevilla",
    menu: {
      adult: ["🥪 몬타디토 데 프링가 (삶은 고기를 으깨 넣은 따뜻한 미니 샌드위치)", "🍆 베렌헤나스 콘 미엘 (꿀 뿌린 가지 튀김)", "🍺 카냐 (생맥주 작은 잔)"],
      teen: ["🥪 몬타디토 데 로모 (돼지 등심 미니 샌드위치)", "🥔 토르티야 데 파타타스 (감자 오믈렛)", "🥤 콜라·오렌지 주스"],
    },
    price: "1인 약 €8~€12",
  },
  la_brunilda: {
    type: "food", emoji: "🍽️", name: "라 브루닐다 (모던 타파스 인기 1순위)", jp: "La Brunilda Tapas · Calle Galera 5",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Risotto_ai_funghi_porcini.JPG/960px-Risotto_ai_funghi_porcini.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Risotto ai funghi porcini.JPG",
    imgNote: "버섯 리소토 (참고 이미지)",
    lat: 37.3876, lng: -5.9988, area: "엘 아레날 (대성당에서 도보 8분)",
    desc: "세비야에서 줄이 가장 긴 모던 타파스 집입니다. 전통 재료를 요즘 스타일로 풀어낸 요리가 한 접시 €5~€12로 부담 없고, 간이 세지 않아 한국 입맛에도 잘 맞습니다. 밝고 깔끔한 실내에 테이블이 있어 6명이 앉아서 먹을 수 있습니다.",
    tips: [
      "화~토 13:00~16:00 / 20:30~00:30, 일 13:00~16:00, 월요일 휴무",
      "예약은 전화로만 받습니다 (+34 954 22 04 81). 숙소 직원에게 6인 예약을 부탁하면 편합니다",
      "예약을 못 했다면 문 여는 13:00 정각에 가세요. 10분만 늦어도 대기가 깁니다"
    ],
    q: "La Brunilda Tapas Calle Galera 5 Sevilla",
    menu: {
      adult: ["🍄 리소토 데 이디아사발 이 세타스 (훈제 치즈 버섯 리소토)", "🦆 콘피 데 파토 (당근 크림을 곁들인 오리 콩피)", "🥗 염소 치즈 무화과 샐러드", "🍷 리베라 델 두에로 레드 와인"],
      teen: ["🍔 미니 소고기 버거 (Hamburguesa de buey)", "🥔 파타타스 브라바스", "🍰 초콜릿 디저트 · 프렌치토스트(Torrija)"],
    },
    price: "1인 약 €20~€30",
  },
  bodeguita_romero: {
    type: "food", emoji: "🥖", name: "보데기타 로메로 (프링가 샌드위치 원조)", jp: "Bodeguita Romero · Calle Harinas 10",
    /* 사진 미정: 이모지로 표시 */
    lat: 37.3869, lng: -5.9962, area: "엘 아레날 (대성당에서 도보 5분)",
    desc: "1939년부터 한 가족이 운영해 온 전통 타파스 바입니다. 세비야 명물 ‘몬타디토 데 프링가’가 가장 맛있는 집으로 꼽히고, 부드러운 이베리코 볼살 조림(카리야다)도 유명합니다.",
    tips: [
      "화~토 12:00~16:00 / 20:00~23:30, 일 12:00~16:00, 월요일 휴무",
      "타파 1접시 €3~€6. 주문이 빨리 돌아가니 메뉴를 미리 정하고 들어가세요",
      "테이블 수가 적어 12:30~13:00에 가야 6명 자리를 잡기 쉽습니다"
    ],
    q: "Bodeguita Romero Calle Harinas 10 Sevilla",
    menu: {
      adult: ["🥪 몬타디토 데 프링가 (약 €3.50 · 꼭 주문)", "🥩 카리야다 이베리카 (이베리코 볼살 조림)", "🥔 파파스 알리냐스 (참치를 얹은 차가운 감자 샐러드)"],
      teen: ["🥪 몬타디토 데 프링가 & 로모 샌드위치", "🧆 크로케타스", "🍟 감자튀김을 곁들인 솔로미요 (돼지 안심)"],
    },
    price: "1인 약 €15~€20",
  },
  las_golondrinas: {
    type: "food", emoji: "🍄", name: "라스 골론드리나스 (트리아나 타파스 명가)", jp: "Bar Las Golondrinas · Pagés del Corro 76 / Antillano Campos 26",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Solomillo_al_whisky.JPG/960px-Solomillo_al_whisky.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Solomillo al whisky.JPG",
    imgNote: "세비야식 돼지 안심 구이 (참고 이미지)",
    lat: 37.3855, lng: -6.0061, area: "트리아나",
    desc: "트리아나 사람들이 줄 서서 먹는 타파스 바입니다. 철판에 구운 돼지 안심을 빵에 올린 ‘푼타 데 솔로미요’와 마늘 소스를 얹은 양송이 구이가 대표 메뉴이고, 타일로 장식한 실내가 트리아나다운 분위기입니다.",
    tips: [
      "가게가 두 곳입니다. 원조(안티야노 캄포스 26)는 작고 서서 먹는 분위기, 2호점(파헤스 델 코로 76)은 넓고 예약을 받아 6명은 2호점이 맞습니다",
      "영업 12:00~16:00 / 20:00~24:00. 휴무일은 출처마다 달라(일요일 또는 월요일) 방문 전 구글맵에서 확인하세요",
      "타파 1접시 €3~€5. 20:30 전에 가면 대기가 짧습니다"
    ],
    q: "Bar Las Golondrinas Pages del Corro 76 Sevilla",
    menu: {
      adult: ["🥩 푼타 데 솔로미요 (돼지 안심 구이 · 꼭 주문)", "🍄 참피뇨네스 아 라 플란차 (마늘 파슬리 양송이 구이)", "🦑 치피로네스 (꼴뚜기 구이)", "🍺 크루스캄포 생맥주 (세비야 로컬 맥주)"],
      teen: ["🥩 푼타 데 솔로미요 (빵 위에 올린 안심)", "🐟 파비아스 데 바칼라오 (대구 튀김)", "🥔 파타타스 알리올리 (마늘 마요 감자)"],
    },
    price: "1인 약 €15~€25",
  },
  abades_triana: {
    type: "food", emoji: "🌇", name: "아바데스 트리아나 (강변 통유리 전망 레스토랑)", jp: "Abades Triana · Calle Betis 69",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Calle_Betis_de_noche.jpg/960px-Calle_Betis_de_noche.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Calle Betis de noche.jpg",
    imgNote: "베티스 거리에서 본 황금의 탑과 히랄다",
    lat: 37.3829, lng: -6.0000, area: "트리아나 베티스 거리 강변",
    desc: "과달키비르 강 위로 통유리가 나 있어 황금의 탑과 히랄다 탑 야경을 보며 식사하는 레스토랑입니다. 타파스 바보다 격식 있는 코스·단품 요리를 내는 곳이라, 세비야 마지막 밤을 분위기 있게 보내고 싶을 때 좋습니다.",
    tips: [
      "매일 13:00~16:00 / 20:00~24:00",
      "예약 필수. 예약할 때 창가 테이블을 요청하세요: “Mesa junto a la ventana, por favor”",
      "가격대가 높으니(1인 €40~€70) 분위기를 원할 때만. 가볍게 먹으려면 추천 1(라스 골론드리나스)로"
    ],
    q: "Abades Triana Calle Betis 69 Sevilla",
    menu: {
      adult: ["🐟 오늘의 생선 구이 또는 아로스(쌀 요리)", "🥩 이베리코 프레사·소고기 안심 스테이크", "🍷 안달루시아 화이트 와인"],
      teen: ["🥩 소고기 안심 스테이크 & 감자", "🍝 파스타 또는 리소토", "🍫 초콜릿 디저트"],
    },
    price: "1인 약 €40~€70",
  },
  lonja_barranco: {
    type: "food", emoji: "🍤", name: "론하 델 바랑코 시장 (강변 푸드홀)", jp: "Mercado Lonja del Barranco",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Mercado_de_la_Lonja_del_Barranco.JPG/960px-Mercado_de_la_Lonja_del_Barranco.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Mercado de la Lonja del Barranco.JPG",
    imgNote: "철골 유리로 지은 옛 어시장 건물",
    lat: 37.3878, lng: -6.0018, area: "트리아나 다리 옆 강변 (엘 아레날)",
    desc: "19세기 철골 유리 건물(에펠의 설계로 알려져 있습니다)을 고친 푸드홀입니다. 스무 곳 넘는 매대에서 해산물 튀김, 하몬, 빠에야, 크로켓, 버거, 디저트를 각자 골라 와 한 테이블에서 먹습니다. 입맛이 다른 6명이 메뉴를 통일할 필요가 없어 편합니다.",
    tips: [
      "매일 영업하고 중간 휴식 시간이 없어, 월요일이나 식사 시간이 어긋났을 때 대안으로 좋습니다 (영업시간은 방문 전 확인)",
      "강변 야외 테라스 자리는 해 질 무렵이 가장 좋습니다",
      "매대마다 따로 계산합니다. 자리를 먼저 잡고 두세 명씩 번갈아 주문하세요"
    ],
    q: "Mercado Lonja del Barranco Sevilla",
    menu: {
      adult: ["🍤 페스카이토 프리토 (안달루시아식 생선·오징어 튀김 모둠)", "🍖 하몬 이베리코 & 치즈 플레이트", "🥘 아로스 네그로 (먹물 쌀 요리)", "🍷 틴토 데 베라노 (레드 와인 + 레몬 탄산)"],
      teen: ["🧆 크로케타스 모둠 (하몬·치즈·버섯)", "🍔 미니 버거 · 감자튀김", "🍦 젤라토 · 츄러스"],
    },
    price: "1인 약 €15~€25",
  },
  el_comercio: {
    type: "food", emoji: "🍩", name: "바르 엘 코메르시오 (1904년 창업 · 츄러스)", jp: "Bar El Comercio · Calle Lineros 9",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Churros_and_chocolate.jpg/960px-Churros_and_chocolate.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Churros and chocolate.jpg",
    imgNote: "세비야식 굵은 츄러스와 초콜라테",
    lat: 37.3905, lng: -5.9920, area: "세비야 센트로 (살바도르 광장 옆)",
    desc: "1904년부터 같은 자리를 지키는 타일 장식 바입니다. 주문하면 바로 튀겨 주는 세비야식 츄러스는 마드리드 것보다 굵고 속이 폭신합니다. 진한 초콜라테에 찍어 먹는 세비야의 아침 식사입니다.",
    tips: [
      "월~토 07:30~21:00, 일요일 휴무",
      "츄러스 5개 한 접시 약 €2.50. 6명이면 츄러스 3~4접시 + 초콜라테 3잔 정도",
      "대성당 관람객이 몰리는 11시 전에 가면 줄이 짧습니다. 서서 먹는 카운터가 가장 빠릅니다"
    ],
    q: "Bar El Comercio Calle Lineros 9 Sevilla",
    menu: {
      adult: ["🍩 추로스 콘 초콜라테", "☕ 카페 콘 레체", "🥪 몬타디토 데 하몬 (하몬 미니 샌드위치)"],
      teen: ["🍩 추로스 + 진한 초콜라테 (찍어 먹기)", "🍊 수모 데 나랑하 (생오렌지 주스)"],
    },
    price: "1인 약 €4~€7",
  },
  la_campana: {
    type: "food", emoji: "🧁", name: "콘피테리아 라 캄파나 (1885년 창업 · 과자점 카페)", jp: "Confitería La Campana · Calle Sierpes 1",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Sevilla_-_Confiter%C3%ADa_La_Campana_2.jpg/960px-Sevilla_-_Confiter%C3%ADa_La_Campana_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Sevilla - Confitería La Campana 2.jpg",
    imgNote: "시에르페스 거리 초입의 라 캄파나",
    lat: 37.3930, lng: -5.9953, area: "시에르페스 거리 초입",
    desc: "1885년에 문을 연 세비야의 대표 과자점입니다. 모더니즘 양식 진열장에 세비야 전통 과자와 케이크가 가득하고, 거리 쪽 테라스에 앉아 커피와 함께 먹을 수 있습니다. 예쁜 카페를 좋아하는 분에게 권하는 곳입니다.",
    tips: [
      "매일 08:00~22:00",
      "안쪽 스탠딩 카운터가 가장 빠르고, 테라스 자리는 자릿값이 조금 붙습니다",
      "선물용으로는 ‘예마스 세비야나스(달걀 노른자 과자)’와 ‘폴보로네스’ 상자가 좋습니다"
    ],
    q: "Confiteria La Campana Calle Sierpes 1 Sevilla",
    menu: {
      adult: ["☕ 카페 콘 레체 + 세비야 전통 과자 한 조각", "🥐 토스타다 (올리브유·토마토 토스트)", "🍮 토시노 데 시엘로 (달걀 푸딩)"],
      teen: ["🍰 조각 케이크 · 밀푀유", "🍦 수제 아이스크림 (여름철)", "🍫 초콜라테 & 크루아상"],
    },
    price: "1인 약 €5~€9",
  },
  eme_rooftop: {
    type: "food", emoji: "🍹", name: "EME 카테드랄 루프톱 (히랄다 정면 전망 테라스)", jp: "La Terraza del EME · Calle Alemanes 27",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/La_Giralda%2C_Seville%2C_Spain_-_Sep_2009.jpg/960px-La_Giralda%2C_Seville%2C_Spain_-_Sep_2009.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "La Giralda, Seville, Spain - Sep 2009.jpg",
    imgNote: "히랄다 탑 (참고 이미지)",
    lat: 37.3866, lng: -5.9931, area: "대성당 바로 앞",
    desc: "대성당 북쪽 길 건너 호텔 옥상 테라스입니다. 히랄다 탑과 대성당 지붕이 손에 닿을 듯 가까워 세비야에서 전망이 가장 좋은 카페·바로 꼽힙니다. 대성당 관람을 마치고 올라가 음료 한 잔과 함께 쉬어 가기 좋습니다.",
    tips: [
      "호텔 로비에서 엘리베이터로 올라갑니다. 숙박객이 아니어도 이용할 수 있어요",
      "전망값이 포함돼 음료가 비쌉니다 (무알콜 음료 €6~€9, 칵테일 €14~€18 정도). 식사는 하지 말고 한 잔만",
      "해 질 무렵에는 자리가 금방 차요. 18:30~19:00쯤이 비교적 여유롭습니다",
      "만석이면 대안: 길 건너 도냐 마리아 호텔 옥상 테라스 (같은 히랄다 전망)"
    ],
    q: "EME Catedral Mercer Hotel Sevilla",
    menu: {
      adult: ["🍹 틴토 데 베라노 · 칵테일 · 카바 한 잔", "☕ 아이스 커피 (Café con hielo)"],
      teen: ["🍋 무알콜 모히토 · 레모네이드", "🍊 생오렌지 주스"],
    },
    price: "1인 약 €7~€18 (음료 1잔)",
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
        text: "한국 시간으로 9월 19일(일) 오전에 인천국제공항에 무사히 도착합니다! 수하물을 찾고 두 가족 6명이 서로 수고했다는 인사를 나누며 9박 10일의 행복했던 스페인 여행을 마무리합니다. 일요일 오후 푹 쉬면서 시차를 회복하세요!",
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
   일정안 (PLANS) — 실제 항공권이 있는 현지 7박 일정 3가지를 비교
   p7a 추천 마드리드 IN (기본) · p7m 마드리드 IN (저녁 도착) · p7b 바르셀로나 IN
   기존 DAYS(d1~d10)를 템플릿으로 복제·패치해 재사용하고, 날짜·요일·DAY 번호는 mkPlan이 자동으로 매김
   --------------------------------------------------------- */
Object.assign(PLACES, {
  move_flight_in_bcn: {
    ...PLACES.move_flight_in,
    name: "인천(ICN) → 바르셀로나(BCN) 경유 항공편", jp: "Incheon → Barcelona-El Prat (T1)",
    img: PLACES.move_bcn_aerobus_taxi.img, credit: PLACES.move_bcn_aerobus_taxi.credit, imgNote: "바르셀로나 엘 프라트 공항",
    lat: 41.2974, lng: 2.0833, area: "소요 약 25시간 (아부다비 1회 경유)",
    desc: "인천국제공항을 출발해 아부다비를 1회 경유하여 바르셀로나 엘 프라트 공항에 도착하는 여정입니다(에티하드 EY0827 · EY0113 기준). 아부다비 환승 대기가 약 7시간 45분으로 길어 총 약 24~25시간이 걸립니다.",
    menu: { order: [
      "좌석 지정: 3-3-3 배열 항공기 기준 앞뒤 3석씩 2줄(창가~통로)로 나란히 사전 지정 추천",
      "환승 팁: 인천에서 수하물을 부칠 때 최종 목적지 ‘바르셀로나(BCN)’ 태그가 붙었는지 꼭 확인"
    ] },
    price: "총 약 24~25시간 소요",
    q: "Barcelona El Prat Airport Terminal 1",
  },
  move_vueling_grx: {
    ...PLACES.move_vueling_bcn,
    name: "부엘링(Vueling) 국내선 항공: 바르셀로나 → 그라나다", jp: "Vueling Airlines · BCN (Terminal 1) → GRX",
    desc: "바르셀로나에서 그라나다까지는 기차로 6시간 30분 이상 걸리지만, 부엘링(Vueling) 국내선을 타면 약 1시간 30분 만에 그라나다 공항(GRX)에 도착합니다! 두 가족 6인의 체력을 아껴주는 핵심 이동편입니다.",
    menu: { order: [
      "구간: 바르셀로나 엘 프라트 공항(BCN T1) → 그라나다 공항(GRX)",
      "비행 시간: 약 1시간 30분",
      "필수 체크: 위탁수하물(20~25kg) 사전 포함 예매 & 모바일 체크인"
    ] },
    q: "Aeropuerto Federico Garcia Lorca Granada",
  },
  move_grx_airport_in: {
    ...PLACES.move_grx_to_airport,
    name: "그라나다 공항(GRX) → 시내 숙소 택시 이동", jp: "Aeropuerto Federico García Lorca (GRX) → Centro de Granada",
    area: "소요 약 25분 · 택시 2대",
    desc: "그라나다 공항에 도착하면 터미널 앞 택시 승강장에서 택시 2대에 나누어 타고 시내 중심가(이사벨 라 카톨리카 광장·대성당 인근) 숙소로 약 25분 만에 이동합니다. 작은 공항이라 수하물이 빨리 나와요.",
    tips: [
      "그라나다 공항 택시는 시내까지 정액에 가까운 요금(대당 약 €30)이라 바가지 걱정이 없습니다.",
      "알사(ALSA) 공항버스(1인 €3, 약 40분)도 있지만 캐리어 6개를 생각하면 택시 2대가 훨씬 편합니다."
    ],
    menu: { order: [
      "이동 수단: 공항 앞 공식 택시 2대 분승",
      "소요 시간: 약 20~25분",
      "예상 요금: 대당 약 €28~€32 (2대 총 약 €60)"
    ] },
    q: "Plaza Isabel la Catolica Granada",
  },
  move_ave_madrid: {
    ...PLACES.move_ave_granada,
    name: "렌페(Renfe) AVE 고속열차: 그라나다 → 마드리드", jp: "Renfe AVE · Granada → Madrid Atocha",
    desc: "스페인 국영 고속열차 AVE를 타고 그라나다 역에서 마드리드 아토차 역까지 약 3시간 25분 동안 쾌적하게 달립니다. 창밖으로 안달루시아의 올리브 나무 구릉지와 라만차 평원이 펼쳐집니다.",
    menu: { order: [
      "출발/도착: 그라나다 역 → 마드리드 아토차 역 (무환승 직통)",
      "소요 시간: 약 3시간 20분 ~ 3시간 30분",
      "추천 좌석: 4인 테이블석(Mesa) + 인접 2인석 (사전 지정 필수)"
    ] },
    q: "Estacion de Madrid Puerta de Atocha",
  },
  move_mad_to_airport: {
    ...PLACES.move_bcn_to_airport,
    name: "마드리드 숙소 → 바라하스 공항(MAD) 이동 & 출국", jp: "Madrid Centro → Aeropuerto Madrid-Barajas → Incheon",
    img: PLACES.move_flight_in.img, credit: PLACES.move_flight_in.credit, imgNote: "",
    lat: 40.4719, lng: -3.5626, area: "공항 이동 30분 + 비행 약 17시간",
    desc: "쇼핑으로 무거워진 캐리어를 싣고 마드리드 바라하스 공항으로 이동합니다. 시내 → 공항도 공식 택시 정액 요금(대당 €33)이 적용돼요. 택스리펀(DIVA 키오스크 스캔)과 체크인을 위해 출발 3시간 전에는 공항에 도착하세요.",
    tips: [
      "체크인해서 짐을 부치기 전에 반드시 출발층의 ‘DIVA 택스리펀 키오스크’에서 영수증 바코드를 먼저 스캔하세요!",
      "에티하드 항공의 출발 터미널은 항공권 안내에서 꼭 다시 확인하세요."
    ],
    menu: { order: [
      "시내 → 공항: 공식 택시 2대 (약 25~30분, 대당 €33 정액)",
      "공항 도착 목표: 출발 3시간 전 (DIVA 택스리펀 → 체크인 → 면세점)"
    ] },
    price: "택시 2대 총 €66 (정액)",
    q: "Adolfo Suarez Madrid-Barajas Airport",
  },
});

const PLANS = (() => {
  const DAY = Object.fromEntries(DAYS.map(d => [d.id, d]));
  const DOW = ["일", "월", "화", "수", "목", "금", "토"];
  const copy = o => JSON.parse(JSON.stringify(o));
  // 기존 날 복제 → 필드 덮어쓰기 → 아이템 패치
  const V = (id, set, fx) => { const d = Object.assign(copy(DAY[id]), set); if (fx) fx(d.items, d); return d; };
  // 기존 날의 아이템 1개 복제 (+ 필드 덮어쓰기)
  const I = (id, k, set) => Object.assign(copy(DAY[id].items[k]), set);
  const sub = (o, a, b) => { o.text = o.text.replace(a, b); return o; };
  // 도시별 색: 그날 밤 머무는 도시 기준 (이동일은 도착 도시, 출국일은 출발 도시, 귀국일은 슬레이트)
  const CITY_HUE = { 마드리드: "#fb7185", 그라나다: "#34d399", 세비야: "#f59e0b", 바르셀로나: "#60a5fa" };
  const HOME_HUE = "#94a3b8";
  const cityHue = city => {
    const [a, b] = city.split("→").map(s => s.trim());
    const c = !b ? a : b === "출국" ? a : b;
    const k = Object.keys(CITY_HUE).find(n => c.includes(n));
    return k ? CITY_HUE[k] : HOME_HUE;
  };
  // 첫 날짜부터 하루씩 날짜·요일·DAY 번호·도시 색 매기기
  const mkPlan = (first, p) => {
    const t0 = Date.parse(first + "T12:00:00Z");
    p.days.forEach((d, i) => {
      const t = new Date(t0 + i * 864e5);
      d.date = t.toISOString().slice(0, 10); d.dow = DOW[t.getUTCDay()]; d.label = "DAY " + (i + 1);
      d.hue = cityHue(d.city);
    });
    return p;
  };
  const STAY = {
    madrid: { emoji: "👑", city: "마드리드", home: "솔 광장 · 마요르 광장 인근 6인용 아파트" },
    granada: { emoji: "🏰", city: "그라나다", home: "이사벨 라 카톨리카 광장 인근 숙소" },
    sevilla: { emoji: "💃", city: "세비야", home: "대성당 · 살바도르 광장 인근 숙소 (구시가지 평지)" },
    barcelona: { emoji: "⛪", city: "바르셀로나", home: "카탈루냐 광장 · 에이샴플라 중심가 숙소" },
  };
  const stay = (k, n, note) => ({ ...STAY[k], n, note, hue: CITY_HUE[STAY[k].city] });

  const granViaNight = {
    time: "21:45", icon: "🌃",
    title: "그란 비아 밤 산책 (선택)",
    text: "저녁 식사 후 기운이 남았다면 숙소에서 도보 5분 거리의 그란 비아 거리로! 화려한 조명이 켜진 메트로폴리스 빌딩과 카야오 광장 전광판을 구경하고, 밤늦게까지 여는 자라·프리모르 매장을 가볍게 둘러봅니다.",
    place: "gran_via"
  };
  const etihadOut = (to, fl) => ({
    time: "01:35", icon: "🛫", badge: "✈️ 항공 이동",
    title: `인천 출국 (9/10 금요일 밤 22:30 집결) · 아부다비 경유 → ${to}`,
    text: `금요일 밤 22:30 인천공항 집결 → 토요일 새벽 01:35 에티하드 항공(${fl})으로 출발합니다. 아부다비에서 약 7시간 45분 환승 대기가 있으니 라운지·수면 공간 이용이나 기내 숙면 계획을 미리 세워두세요. 여권, 유로 현금, 트래블카드, 알함브라·사그라다 파밀리아 예약 바우처를 최종 점검!`,
    place: to === "바르셀로나" ? "move_flight_in_bcn" : "move_flight_in"
  });
  const arriveHome = (id) => V("d10", { id }, its => {
    its[0].time = "10:50";
    its[0].text = "한국 시간으로 9월 19일(일) 오전 10:50 인천국제공항에 무사히 도착합니다! 수하물을 찾고 두 가족 6명이 서로 수고했다는 인사를 나누며 현지 7박의 행복했던 스페인 여행을 마무리합니다. 일요일 오후 푹 쉬면서 시차를 회복하세요!";
  });
  const earlyOut = (city) => {
    const mad = city === "마드리드";
    const place = mad ? "move_mad_to_airport" : "move_bcn_to_airport";
    return [
      { time: "06:30", icon: "🧳",
        title: "이른 기상 · 짐 최종 점검 & 체크아웃",
        text: "10:45 출발이라 아침이 빠듯해요. 전날 밤 미리 싸 둔 캐리어를 최종 점검합니다. 충전기, 여권, 택스리펀(DIVA) 영수증 서류, 금고 안 귀중품을 확인하고, 올리브유·와인·앰플 등 액체류는 위탁수하물 캐리어 안에 넣으세요!",
        place: mad ? "stay_madrid" : "stay_bcn" },
      { time: "07:15", icon: "🚕", badge: "🚕 교통 카드",
        title: mad ? "[교통] 마드리드 숙소 → 바라하스 공항(MAD) (정액 택시 2대, 약 30분)" : "[교통] 바르셀로나 숙소 → 엘 프라트 공항(BCN T1) (택시 2대, 약 30분)",
        text: mad ? "숙소 앞에서 공식 택시 2대(시내 → 공항도 대당 €33 정액)에 캐리어 6개를 나눠 싣고 바라하스 공항으로 이동합니다. 아침 출근 시간 전이라 도로가 비교적 한산해요." : "숙소 앞에서 공식 택시 2대(총 약 €75)에 캐리어 6개를 나눠 싣고 엘 프라트 공항 제1터미널(T1)로 이동합니다. 이른 아침이라 에어로버스보다 택시가 확실해요.",
        place },
      { time: "07:45", icon: "🧾",
        title: "DIVA 키오스크 택스리펀 스캔 → 체크인 · 공항 아침 식사",
        text: `짐을 부치기 전 출발층 ‘DIVA 자동 키오스크’에서 면세 서류 바코드를 스캔해 승인(초록불)을 받은 뒤, 에티하드 카운터에서 인천행 수하물을 부칩니다. 출국심사 후 공항 카페에서 크루아상·오렌지 주스로 아침을 먹고 남은 유로로 마지막 쇼핑!`,
        place },
      { time: "10:45", icon: "🛫", badge: "✈️ 항공 카드",
        title: `[교통] ${city}(${mad ? "MAD" : "BCN"}) 10:45 출발 → 아부다비 → 인천(ICN)`,
        text: `에티하드 ${mad ? "EY0102" : "EY0112"} · EY0822로 아부다비를 거쳐 한국으로! 눈부셨던 마드리드, 그라나다, 바르셀로나의 추억을 가슴에 품고 출발합니다. ¡Hasta luego, España!`,
        place },
    ];
  };

  /* ---------- 현지 7박 · 그라나다 코스 · 마드리드 IN (EY823·EY101 / EY112·EY822) — 세비야 코스(p7s)의 원본 ---------- */
  const p7a = mkPlan("2027-09-10", {
    name: "현지 7박", sub: "그라나다 코스 · 마드리드 IN", range: "9.10–9.19", chip: ["7박", "그라나다"], flight: "n7-3",
    from: ["9.10", "금"], to: ["9.19", "일"],
    start: "2027-09-10T17:50:00+09:00", end: "2027-09-19T10:50:00+09:00",
    route: "그라나다 코스 · 마드리드 IN · 바르셀로나 OUT",
    stays: [
      stay("madrid", 2, "토요일 아침 도착 · 왕궁 · 레티로 · 프라도 · 게르니카 · 그란 비아 · 데보드 노을"),
      stay("granada", 2, "렌페(AVE) 이동 · 알함브라 궁전 · 알바이신 산 니콜라스 노을 · 무료 타파스 투어"),
      stay("barcelona", 3, "부엘링 항공 이동 · 가우디 투어(사그라다 파밀리아·구엘·바트요·밀라) · 고딕지구 & 바르셀로네타 · 토요일 아침 출국"),
    ],
    days: [
      {
        id: "e1", city: "인천 → 마드리드",
        title: "설레는 출발, 아부다비 경유 마드리드로",
        subtitle: "금요일 저녁 인천 출국 · 에티하드 EY823 · 아부다비 환승",
        stamina: 1, sunset: "19:04", temp: "26° / 18°",
        items: [
          { time: "14:50", icon: "🧳",
            title: "인천국제공항 제1터미널 집결 · 체크인",
            text: "두 가족 6명(어른 4 · 중3 딸 2) 인천공항 T1 집결! 에티하드 카운터에서 캐리어 6개를 최종 목적지 ‘마드리드(MAD)’로 부치고, 여권, 유로 현금, 트래블카드, 알함브라·사그라다 파밀리아 예약 바우처를 최종 점검합니다.",
            place: "move_flight_in" },
          { time: "17:50", icon: "🛫", badge: "✈️ 항공 카드",
            title: "[교통] 에티하드 EY823: 인천(ICN T1) → 아부다비(AUH) (9시간 45분)",
            text: "에어버스 A350-1000으로 아부다비까지 약 9시간 45분. 기내 와이파이와 개인 모니터, USB 충전이 되니 보조배터리는 넉넉히! 기내식 후에는 시차 적응을 위해 최대한 잠을 청합니다.",
            place: "move_flight_in" },
          { time: "22:35", icon: "🌙",
            title: "아부다비 자이드 국제공항(AUH 터미널 A) 도착 · 환승 대기 3시간 50분",
            text: "같은 터미널 A에서 마드리드행으로 갈아탑니다. 환승 게이트를 먼저 확인한 뒤 라운지나 조용한 휴식 공간에서 다리를 펴고 쉬어요. 세면도구로 가볍게 씻으면 다음 비행이 훨씬 개운합니다.",
            place: "move_flight_in" },
        ],
        mission: [
          "📸 인천공항 출국장에서 두 가족 6명 출발 단체 사진 찍기",
          "😴 첫 비행기에서 최소 4시간 이상 자기 (시차 적응 준비)"
        ],
      },
      {
        id: "e2", city: "마드리드",
        title: "아침에 도착! 왕실의 품격과 거장의 예술",
        subtitle: "08:10 마드리드 도착 · 솔 광장 · 마드리드 왕궁 · 보틴 · 레티로 공원 · 프라도 미술관",
        stamina: 3, sunset: "20:30", temp: "27° / 15°",
        items: [
          { time: "02:25", icon: "🛫", badge: "✈️ 항공 카드",
            title: "[교통] 에티하드 EY101: 아부다비(AUH) → 마드리드(MAD T4) (7시간 45분)",
            text: "보잉 787-9로 마드리드까지 약 7시간 45분. 한밤중 출발이라 탑승하자마자 바로 잠들어 도착 후 하루를 온전히 쓸 체력을 아껴둡니다.",
            place: "move_flight_in" },
          { time: "08:10", icon: "🛬",
            title: "마드리드 바라하스 공항 제4터미널(T4) 도착 · 입국심사",
            text: "스페인의 수도 마드리드 도착! 입국심사를 마치고 위탁수하물(캐리어 6개)을 찾은 뒤 터미널 밖 공식 택시 승강장으로 이동합니다.",
            place: "move_flight_in" },
          I("d1", 2, { time: "09:15" }),
          { time: "10:00", icon: "🏠",
            title: "마드리드 숙소 짐 맡기기 (얼리 체크인 요청)",
            text: "체크인 시간 전이라 캐리어를 먼저 맡기고(예약 시 얼리 체크인·짐 보관 가능 여부 미리 확인), 가볍게 세수만 하고 바로 마드리드 첫 아침을 먹으러 나섭니다.",
            place: "stay_madrid" },
          I("d2", 0, { time: "10:30" }),
          I("d2", 1, { time: "11:30" }),
          I("d2", 2, { time: "12:15" }),
          I("d2", 3, { time: "14:00" }),
          { time: "15:30", icon: "😴",
            title: "숙소 체크인 & 시에스타 (밤샘 비행 회복)",
            text: "밤샘 비행 후 오전 일정까지 소화했으니 숙소에 체크인해 1~2시간 낮잠으로 체력을 회복합니다. 스페인 사람들처럼 늦은 오후부터 다시 시작!",
            place: "stay_madrid" },
          sub(I("d2", 4, { time: "17:15", title: "[교통] 솔 역 → 레티로 공원 · 프라도 미술관 (지하철 2호선 또는 택시 2대, 약 12분)" }), "점심 식사 후 한낮의 햇살을 피해 대중교통으로 이동합니다.", "낮잠 후 개운하게 다시 출발합니다."),
          I("d2", 6, { time: "17:30" }),
          sub(I("d2", 5, { time: "18:30" }), "세계 3대 미술관인 프라도에서", "세계 3대 미술관인 프라도에서(월~토 18:00~20:00 무료 입장 시간 — 대기줄이 길면 유료 시간 지정 예매 추천)"),
          I("d2", 7, { time: "20:30" }),
        ],
        mission: DAY.d2.mission.slice(),
      },
      V("d3"), V("d4"), V("d5"), V("d6"), V("d7"), V("d8"),
      V("d9", { id: "e9", subtitle: "이른 아침 공항 이동 · DIVA 택스리펀 · 10:45 EY112 아부다비 경유 귀국" }, (its, d) => { d.items = earlyOut("바르셀로나"); }),
      arriveHome("e10"),
    ],
  });

  /* ---------- 현지 7박 · 마드리드 IN 저녁 도착 (항공 후보 현지 7박 1번) ---------- */
  const p7m = mkPlan("2027-09-11", {
    name: "현지 7박", sub: "마드리드 IN · 저녁 도착", range: "9.11–9.19", chip: ["7박", "MAD 저녁"], flight: "n7-1",
    from: ["9.11", "토"], to: ["9.19", "일"],
    start: "2027-09-11T01:35:00+09:00", end: "2027-09-19T10:50:00+09:00",
    route: "마드리드 IN · 바르셀로나 OUT",
    stays: [
      stay("madrid", 2, "토요일 저녁 도착 · 일요일 하루 왕궁 · 프라도 · 레티로 핵심 탐방"),
      stay("granada", 2, "렌페(AVE) 이동 · 알함브라 궁전 · 산 니콜라스 노을 · 무료 타파스"),
      stay("barcelona", 3, "부엘링 이동 · 가우디 투어 · 고딕지구 & 바르셀로네타 · 토요일 아침 출국"),
    ],
    days: [
      V("d1", { id: "m1", subtitle: "토요일 새벽 인천 출국 · 아부다비 경유 · 저녁 마드리드 도착 & 늦은 타파스" }, its => {
        its[0] = etihadOut("마드리드", "EY0827 · EY0103");
        its[1].time = "19:40"; sub(its[1], "(항공편 스케줄에 따라 도착 시각은 변동될 수 있습니다)", "(EY0103 기준 19:40 도착)");
        its[2].time = "20:40";
        its[3].time = "21:15"; sub(its[3], "3박 4일간", "2박 3일간");
        its[4].time = "21:45"; sub(its[4].options[0], "부담 없이 첫날 밤을", "스페인 사람들처럼 늦은 저녁으로 첫날 밤을");
        its[5].time = "23:00";
      }),
      V("d2", {}, its => its.push(copy(granViaNight))),
      V("d4"), V("d5"), V("d6"), V("d7"), V("d8"),
      V("d9", { id: "m8", subtitle: "이른 아침 공항 이동 · DIVA 택스리펀 · 10:45 아부다비 경유 귀국" }, (its, d) => { d.items = earlyOut("바르셀로나"); }),
      arriveHome("m9"),
    ],
  });

  /* ---------- 현지 7박 · 바르셀로나 IN (항공 후보 현지 7박 2번) ---------- */
  const p7b = mkPlan("2027-09-11", {
    name: "현지 7박", sub: "바르셀로나 IN", range: "9.11–9.19", chip: ["7박", "BCN IN"], flight: "n7-2",
    from: ["9.11", "토"], to: ["9.19", "일"],
    start: "2027-09-11T01:35:00+09:00", end: "2027-09-19T10:50:00+09:00",
    route: "바르셀로나 IN · 마드리드 OUT",
    stays: [
      stay("barcelona", 3, "토요일 저녁 도착 · 가우디 투어 · 카사 바트요 · 고딕지구 & 바르셀로네타"),
      stay("granada", 2, "부엘링 항공 이동 · 알함브라 궁전 · 산 니콜라스 노을 · 무료 타파스"),
      stay("madrid", 2, "렌페(AVE) 이동 · 왕궁 · 데보드 노을 · 프라도 · 그란 비아 쇼핑 마무리 · 토요일 아침 출국"),
    ],
    days: [
      {
        id: "b1", city: "인천 → 바르셀로나",
        title: "설레는 출발, 지중해의 바르셀로나로",
        subtitle: "토요일 새벽 인천 출국 · 아부다비 경유 · 저녁 바르셀로나 도착 & 그라시아 거리 야경",
        hue: "#f59e0b", stamina: 1, sunset: "20:10", temp: "27° / 19°",
        items: [
          etihadOut("바르셀로나", "EY0827 · EY0113"),
          { time: "19:15", icon: "🛬",
            title: "바르셀로나 엘 프라트 공항(T1) 도착 · 입국심사",
            text: "지중해의 도시 바르셀로나 도착! 입국심사를 마치고 위탁수하물(캐리어 6개)을 찾은 뒤 터미널 밖 택시 승강장으로 이동합니다. (EY0113 기준 19:15 도착)",
            place: "move_flight_in_bcn" },
          I("d6", 2, { time: "20:15", title: "[교통] 바르셀로나 공항(T1) → 에이샴플라 숙소 (공식 택시 2대, 약 30분)" }),
          { time: "20:50", icon: "🏠",
            title: "바르셀로나 숙소 체크인 & 짐 풀기",
            text: "3박 동안 머물 에이샴플라·카탈루냐 광장 인근 숙소 입실! 가볍게 씻고 옷을 갈아입은 뒤, 스페인식 늦은 저녁을 먹으러 도보 4분 거리의 타파스 바로 나섭니다.",
            place: "stay_bcn" },
          I("d6", 4, { time: "21:30", badge: "🍽️ 저녁 (2곳 추천)", options: [
            { title: "저녁 추천 1: 시우다드 콘달 (Ciudad Condal)", text: "숙소에서 도보 4분! 바르셀로나 첫날 밤, 부드러운 꿀대구와 바삭한 몬타디토스, 파타타스 브라바스로 장거리 비행의 피로를 달랩니다. 밤 늦게까지 열어 늦은 도착에도 걱정 없어요.", place: "ciudad_condal" },
            { title: "저녁 추천 2: 비니투스 (Vinitus)", text: "숙소에서 도보 4분! 한국인 여행객 원픽 메뉴인 꿀대구 구이와 철판 맛조개, 소고기 안심 타파스에 시원한 상그리아로 여행의 시작을 축하합니다.", place: "vinitus" },
          ] }),
          { time: "22:45", icon: "🌙",
            title: "그라시아 거리 밤 산책 — 조명 켜진 카사 바트요 & 카사 밀라",
            text: "숙소로 돌아오는 길에 은은한 조명이 비추는 카사 바트요의 용 비늘 지붕과 카사 밀라의 물결 외관을 감상하고, 시차 적응을 위해 일찍 잠자리에 듭니다.",
            place: "casa_batllo" },
        ],
        mission: [
          "🐉 첫날 밤 조명 켜진 카사 바트요 앞에서 두 가족 6명 첫 단체 셀카 찍기",
          "🍯 바르셀로나 명물 ‘꿀대구(Bacalao con miel)’ 맛보고 평점 매기기",
          "😴 시차 적응을 위해 자정 전 침대에 눕기"
        ],
      },
      V("d7", { id: "b2" }, its => {
        sub(its[4], "이번 스페인 여행의 최고 감동 포인트!", "이번 스페인 여행의 최고 감동 포인트! (일요일은 오전 미사가 있어 관람이 10:30 이후 시작되니 오후 시간 예약이 딱 좋아요)");
      }),
      V("d8", { id: "b3", title: "카사 바트요와 중세 골목, 지중해 바다", subtitle: "카사 바트요 · 보케리아 시장 · 고딕 지구 · 바르셀로네타 · 1836년 전통 빠에야" }, (its, d) => {
        its.unshift({ time: "09:00", icon: "🐉",
          title: "카사 바트요 내부 관람 (오픈 입장) & 카사 밀라 외관",
          text: "숙소에서 도보 5분. 오픈 시간에 맞춰 입장하면 덜 붐벼요! 바다 속을 닮은 계단과 창문, 용 비늘 지붕까지 가우디의 상상력을 AR 오디오 가이드로 체험하고, 같은 거리의 카사 밀라(라 페드레라) 물결 외관도 함께 감상합니다.",
          place: "casa_batllo" });
        its[1].time = "10:30"; sub(its[1], "숙소에서 카탈루냐 광장을 지나", "카사 바트요에서 카탈루냐 광장을 지나");
        its[2].time = "11:15";
        its[3].time = "12:15";
        its[7].title = "바르셀로나 쇼핑 (자라·FC 바르셀로나 스토어 · 엘 코르테 잉글레스)";
        its[7].text = "카탈루냐 광장 주변에서 인디텍스 매장, FC 바르셀로나 공식 스토어, 비센스 뚜론, 엘 코르테 잉글레스 백화점을 둘러봅니다. 택스프리(DIVA) 서류는 마지막 출국지인 마드리드 공항에서 한꺼번에 처리하니 잘 모아두세요!";
        its[8].options[0].title = "저녁 추천 1: 바르셀로나 마지막 밤 베스트 앵콜 (비니투스 / 시우다드 콘달)";
        its[8].options[0].text = "바르셀로나에서 가장 맛있게 먹었던 타파스 메뉴들을 다시 한번 시켜 지중해 도시에서의 마지막 밤을 장식합니다!";
        its[8].options[1].text = "하루 종일 걷느라 피곤하다면, 엘 코르테 잉글레스 지하 식품관에서 하몬, 과일, 치즈, 로티세리 치킨을 사 와서 숙소 거실에서 오붓하게 홈파티를 열어도 최고입니다!";
        d.mission = [
          "🐉 카사 바트요 옥상 용 비늘 지붕 앞에서 인증샷 찍기",
          "💀 고딕 지구 ‘비스베 다리’ 아래 해골 조각 찾고 소원 빌기",
          "🌊 바르셀로네타 지중해 바다를 배경으로 중3 딸들 점프샷 찍기"
        ];
      }),
      {
        id: "b4", city: "바르셀로나 → 그라나다",
        title: "하늘길로 안달루시아 그라나다로",
        subtitle: "부엘링 국내선 항공 · 그라나다 대성당 · 산 니콜라스 전망대 노을",
        hue: "#10b981", stamina: 2, sunset: "20:21", temp: "29° / 16°",
        items: [
          { time: "08:45", icon: "🚕", badge: "🚕 교통 카드",
            title: "[교통] 바르셀로나 숙소 체크아웃 → 엘 프라트 공항(BCN T1) (택시 2대, 약 30분)",
            text: "아침 식사 후 체크아웃하고 숙소 앞에서 공식 택시 2대(총 약 €75)에 캐리어 6개를 싣고 공항 제1터미널로 이동합니다. 국내선이라도 수하물 위탁 때문에 출발 1시간 30분 전 도착이 안전해요.",
            place: "move_bcn_aerobus_taxi" },
          { time: "10:40", icon: "✈️", badge: "✈️ 항공 카드",
            title: "[교통] 부엘링(Vueling) 국내선 항공: 바르셀로나(BCN) → 그라나다(GRX) (약 1시간 30분)",
            text: "기차로 6시간 반 걸리는 거리를 비행기로 단 1시간 30분 만에 점프! 지중해 해안선을 따라 날아 안달루시아의 그라나다 공항에 도착합니다.",
            place: "move_vueling_grx" },
          { time: "12:30", icon: "🚕", badge: "🚕 교통 카드",
            title: "[교통] 그라나다 공항(GRX) → 시내 숙소 (택시 2대, 약 25분) · 체크인",
            text: "공항 앞 택시 승강장에서 택시 2대에 나누어 타고 그라나다 중심가(이사벨 라 카톨리카 광장·대성당 인근) 숙소로 이동해 짐을 풉니다.",
            place: "move_grx_airport_in" },
          I("d4", 3, { time: "13:45" }),
          I("d4", 4, { time: "16:00" }),
          I("d4", 5), I("d4", 6), I("d4", 7),
        ],
        mission: [
          "✈️ 국내선 비행기 창밖으로 푸른 지중해 해안선 찾기",
          "🍺 그라나다의 자랑 ‘무료 타파스(음료 1잔당 요리 1접시)’ 문화 체험하기",
          "🌇 산 니콜라스 전망대에서 석양에 물든 알함브라 궁전 배경 가족사진 찍기"
        ],
      },
      V("d5"),
      {
        id: "b6", city: "그라나다 → 마드리드",
        title: "고속열차 타고 왕의 도시 마드리드로",
        subtitle: "렌페(AVE) 고속열차 · 마드리드 왕궁 · 솔 & 마요르 광장 · 데보드 신전 노을",
        hue: "#fb7185", stamina: 2, sunset: "20:22", temp: "27° / 15°",
        items: [
          { time: "08:20", icon: "🚕", badge: "🚕 교통 카드",
            title: "[교통] 그라나다 숙소 체크아웃 → 그라나다 역 (택시 2대, 약 10분)",
            text: "아침 식사 후 짐을 챙겨 체크아웃하고, 택시 2대로 그라나다 기차역에 도착해 수하물 보안검색을 통과합니다. 역 카페에서 기차 간식(샌드위치·과일·커피)도 챙겨요.",
            place: "move_grx_station_taxi" },
          { time: "09:05", icon: "🚄", badge: "🚄 고속열차 카드",
            title: "[교통] 렌페(Renfe) AVE 고속열차: 그라나다 → 마드리드 (약 3시간 25분)",
            text: "시속 300km 고속열차 AVE 탑승! 안달루시아의 올리브 나무 구릉지와 라만차 평원을 지나 스페인의 수도 마드리드 아토차 역으로 편안하게 이동합니다.",
            place: "move_ave_madrid" },
          { time: "12:30", icon: "🚕", badge: "🚕 교통 카드",
            title: "[교통] 아토차 역 → 솔·마요르 광장 숙소 (택시 2대, 약 15분) · 짐 맡기기",
            text: "아토차 역 정문 택시 승강장에서 택시 2대(대당 약 €8~€10)로 숙소까지 이동해 체크인(또는 짐 보관)합니다.",
            place: "move_mad_to_atocha" },
          I("d2", 3, { time: "13:15" }),
          I("d2", 2, { time: "15:00" }),
          { time: "17:30", icon: "🐻",
            title: "푸에르타 델 솔 (곰 동상 & 0km 표지석) · 마요르 광장 · 산 히네스 츄러스 간식",
            text: "왕궁에서 마요르 광장을 지나 솔 광장까지 천천히 걸으며(도보 약 12분) ‘산딸기나무와 곰 동상’, ‘0km 표지석’ 인증샷을 남기고, 130년 전통 산 히네스에서 츄러스와 핫초콜릿으로 당을 충전합니다.",
            place: "puerta_del_sol" },
          I("d3", 3, { time: "19:15", title: "[교통] 솔 광장 → 데보드 신전 공원 (지하철 3호선 또는 택시 2대, 약 10분)" }),
          sub(I("d3", 4, { time: "19:40" }), "마드리드의 마지막 저녁을", "마드리드의 첫 저녁을"),
          I("d2", 7, { time: "21:00" }),
        ],
        mission: [
          "🚄 AVE 창밖으로 라만차 평원의 풍차·올리브 숲 찾아보기",
          "🦶 솔 광장 ‘Km 0’ 표지석에 6명 모두 발 모으고 사진 찍기",
          "🌅 데보드 신전 노을을 배경으로 가족 실루엣 사진 찍기"
        ],
      },
      {
        id: "b7", city: "마드리드",
        title: "거장의 예술과 마드리드 쇼핑 피날레",
        subtitle: "프라도 미술관 · 레티로 공원 · 그란 비아 쇼핑 · 스페인 마지막 밤",
        hue: "#f97316", stamina: 2, sunset: "20:20", temp: "27° / 15°",
        items: [
          I("d2", 0, { time: "09:00" }),
          sub(I("d2", 4, { time: "10:00", title: "[교통] 솔 역 → 프라도 미술관 (지하철 2호선 또는 택시 2대, 약 12분)" }), "점심 식사 후 한낮의 햇살을 피해 대중교통으로 이동합니다.", "아침 식사 후 개관 시간에 맞춰 이동합니다."),
          I("d2", 5, { time: "10:15" }),
          I("d2", 6, { time: "12:30" }),
          I("d3", 1, { time: "14:00" }),
          sub(I("d3", 2, { time: "15:45", title: "그란 비아 쇼핑 최종전 — 자라·레알 마드리드 스토어 · 엘 코르테 잉글레스" }), "오후에는 숙소에 들러 잠시 다리를 쉬어갑니다.", "프레시아도스 거리의 엘 코르테 잉글레스 백화점에서 올리브 오일·뚜론·하몬 등 귀국 기념품까지 한 번에! 택스프리(DIVA) 서류를 꼭 챙기세요."),
          { time: "18:30", icon: "🧳",
            title: "숙소 휴식 & 캐리어 테트리스",
            text: "내일 아침 일찍 출국하니 오늘 저녁 전에 쇼핑한 물건을 캐리어에 미리 정리해 둡니다. 액체류는 위탁수하물에, 택스리펀 서류는 손가방에!",
            place: "stay_madrid" },
          (() => { const o = I("d3", 5, { time: "20:00" }); o.options.forEach(x => { x.text = x.text.replace("2일차에", "어제").replace("마드리드 피날레 만찬을!", "스페인 마지막 밤 만찬을!").replace("마드리드의 마지막 밤을", "스페인의 마지막 밤을"); }); return o; })(),
        ],
        mission: [
          "🎨 프라도 미술관에서 각자 가장 마음에 드는 명화 1점씩 고르기",
          "🛍️ 그란 비아 자라(Zara) 본고장에서 중3 딸들 가을 코디 득템하기",
          "🛒 쇼핑 미션 체크리스트 빠짐없이 클리어하고 캐리어 테트리스 완성하기"
        ],
      },
      {
        id: "b8", city: "마드리드 → 출국",
        title: "아디오스 에스파냐! 마드리드 출국",
        subtitle: "이른 아침 공항 이동 · DIVA 택스리펀 · 10:45 아부다비 경유 귀국",
        hue: "#0ea5e9", stamina: 1, sunset: "20:18", temp: "26° / 14°",
        items: earlyOut("마드리드"),
        mission: [
          "🧾 마드리드 공항 DIVA 키오스크에서 택스리펀 바코드 초록불 띄우기",
          "🪙 남은 유로 동전으로 공항에서 초콜릿·하몬 간식 탈탈 털기"
        ],
      },
      arriveHome("b9"),
    ],
  });


  /* ---------- 현지 7박 · 세비야 코스 (그라나다 → 세비야 교체 · EY823·EY101 / EY112·EY822) — 기본 일정 ---------- */
  // 그라나다 코스(p7a)와 같은 날을 복제하면서 문구 속 도시 이름만 세비야 코스에 맞게 바꿈
  const sev = d => JSON.parse(JSON.stringify(d).replace(/알함브라·사그라다 파밀리아/g, "알카사르·사그라다 파밀리아").replace(/마드리드, 그라나다, 바르셀로나/g, "마드리드, 세비야, 바르셀로나"));
  const p7s = mkPlan("2027-09-10", {
    name: "현지 7박", sub: "세비야 코스 · 마드리드 IN", badge: "⭐추천", range: "9.10–9.19", chip: ["7박", "세비야"], flight: "n7-3",
    from: ["9.10", "금"], to: ["9.19", "일"],
    start: "2027-09-10T17:50:00+09:00", end: "2027-09-19T10:50:00+09:00",
    route: "세비야 코스 · 마드리드 IN · 바르셀로나 OUT",
    stays: [
      stay("madrid", 2, "토요일 아침 도착 · 왕궁 · 레티로 · 프라도 · 게르니카 · 그란 비아 · 데보드 노을"),
      stay("sevilla", 2, "AVE 2시간 40분 · 알카사르 · 대성당 히랄다 탑 · 스페인 광장 · 플라멩코 · 트리아나 노을"),
      stay("barcelona", 3, "부엘링 항공 이동 · 가우디 투어(사그라다 파밀리아·구엘·바트요·밀라) · 고딕지구 & 바르셀로네타 · 토요일 아침 출국"),
    ],
    days: [
      sev(p7a.days[0]), sev(p7a.days[1]), V("d3"),

      /* ===== DAY 4 · 9/13(월) 마드리드 → 세비야 ===== */
      {
        id: "s4", city: "마드리드 → 세비야",
        title: "고속열차 타고 안달루시아 세비야로",
        subtitle: "AVE 2시간 40분 · 산타 크루스 타파스 · 스페인 광장 · 정통 플라멩코 · 세타스 야경",
        stamina: 2, sunset: "20:34", temp: "32° / 19°",
        items: [
          I("d4", 0, { time: "09:00" }),
          { time: "10:00", icon: "🚄", badge: "🚄 고속열차 카드",
            title: "[교통] AVE 고속열차: 마드리드 아토차 → 세비야 산타 후스타 (약 2시간 40분)",
            text: "시속 300km 고속열차로 세비야까지 환승 없이 달립니다. 아토차 역에서 산 샌드위치와 커피를 먹으며 창밖 올리브 구릉지를 구경하다 보면 금방 도착해요. (예: 10:00 출발 → 12:41 도착)",
            place: "move_ave_sevilla" },
          { time: "12:45", icon: "🚕", badge: "🚕 교통 카드",
            title: "[교통] 산타 후스타 역 → 세비야 숙소 (택시 2대, 약 10분)",
            text: "역 정문 앞 승강장에서 택시 2대에 3명씩 나눠 타고 대성당 인근 숙소로 이동합니다. 체크인 전이면 캐리어만 먼저 맡기고 점심을 먹으러 나섭니다.",
            place: "move_svq_station_taxi" },
          { time: "13:15", icon: "🏠",
            title: "세비야 숙소 짐 맡기기",
            text: "2박 동안 머물 세비야 베이스캠프에 도착! 캐리어 6개를 맡기고 가벼운 차림으로 바꿉니다. 세비야는 마드리드보다 4~5도 더우니 모자와 선글라스, 물을 챙기세요.",
            place: "stay_sevilla" },
          { time: "13:40", icon: "🍖", badge: "🍽️ 점심 (2곳 추천)",
            options: [
              { title: "점심 추천 1: 라스 테레사스 (산타 크루스 골목의 하몬 바)",
                text: "숙소에서 걸어서 5분. 천장 가득 하몬이 걸린 오래된 바의 골목 테이블에 앉아 손으로 썬 하몬 이베리코, 시금치 병아리콩 볶음, 차가운 살모레호로 세비야 첫 끼를 시작합니다. 월요일에도 엽니다.",
                place: "las_teresas" },
              { title: "점심 추천 2: 보데가 산타 크루스 ‘라스 콜룸나스’ (서서 먹는 몬타디토 바)",
                text: "히랄다 탑 바로 뒤. 세비야 사람들처럼 바에 서서 따뜻한 프링가 미니 샌드위치와 꿀 뿌린 가지 튀김을 가볍게 먹습니다. 계산을 바 위에 분필로 적어 주는 모습이 볼거리예요.",
                place: "bodega_santa_cruz" },
            ] },
          { time: "15:15", icon: "😴",
            title: "숙소 체크인 & 시에스타 (가장 더운 시간 피하기)",
            text: "15~17시는 세비야에서 햇볕이 가장 강한 시간입니다. 현지인처럼 숙소에서 에어컨을 켜고 1시간 반쯤 쉬었다가 해가 기울면 다시 나갑니다.",
            place: "stay_sevilla" },
          { time: "17:15", icon: "🚕", badge: "🚕 교통 카드",
            title: "[교통] 숙소 → 스페인 광장 (택시 2대, 약 8분)",
            text: "걸으면 20분 넘게 걸리는 거리라 택시 2대로 광장 입구까지 바로 갑니다. 대당 €6~€9 정도예요.",
            place: "move_svq_city_taxi" },
          { time: "17:30", icon: "🚣",
            title: "스페인 광장 — 운하 보트 타기 & 48개 주 타일 벤치",
            text: "세비야에서 가장 화려한 광장입니다. 4인승 보트 2척을 빌려 운하를 한 바퀴 돌고, 타일 벤치에서 마드리드·바르셀로나 칸을 찾아 사진을 남깁니다. 18시가 넘으면 벽돌 건물이 황금빛으로 물들기 시작해요.",
            place: "plaza_espana_sev" },
          { time: "19:00", icon: "🚕", badge: "🚕 교통 카드",
            title: "[교통] 스페인 광장 → 쿠나 거리 플라멩코 공연장 (택시 2대, 약 10분)",
            text: "광장 앞 대로에서 택시 2대를 잡아 센트로 쿠나 거리로 이동합니다. 자유석이라 공연 20~30분 전에 도착하면 앞자리에 앉을 수 있어요.",
            place: "move_svq_city_taxi" },
          { time: "19:30", icon: "💃",
            title: "카사 데 라 메모리아 — 정통 플라멩코 공연 (약 1시간)",
            text: "플라멩코의 본고장에서 보는 진짜 공연! 100석 남짓한 작은 무대에서 마이크 없이 울리는 기타와 노래, 바닥을 구르는 발소리를 코앞에서 느낍니다. 식사 없이 공연만 보는 곳이라 중3 딸들과 보기에도 좋습니다.",
            place: "casa_memoria" },
          { time: "20:45", icon: "🍷", badge: "🍽️ 저녁 (2곳 추천)",
            options: [
              { title: "저녁 추천 1: 엘 린콘시요 (1670년 창업, 세비야에서 가장 오래된 바)",
                text: "공연장에서 걸어서 6분. 350년 된 타일 벽 아래 뒤편 테이블 식당에서 이 집 간판 메뉴인 시금치 병아리콩 볶음, 대구 튀김, 이베리코 볼살 조림을 나눠 먹습니다. 6인 테이블은 미리 예약하세요.",
                place: "el_rinconcillo" },
              { title: "저녁 추천 2: 론하 델 바랑코 시장 (강변 푸드홀)",
                text: "각자 먹고 싶은 것이 다르다면 강변 푸드홀로! 해산물 튀김, 하몬, 먹물 쌀 요리, 크로켓, 버거를 매대에서 골라 와 한 테이블에서 먹습니다. 공연장에서 택시로 7분, 걸어서 15분입니다.",
                place: "lonja_barranco" },
            ] },
          { time: "22:15", icon: "🍄",
            title: "라스 세타스 전망대 야경 & 오로라 조명 쇼 (선택)",
            text: "기운이 남았다면 엘 린콘시요에서 걸어서 4분 거리의 라스 세타스로! 물결치는 지붕 위 산책로에서 조명이 켜진 대성당과 히랄다를 내려다봅니다. 피곤하면 광장에서 조명만 구경하고 숙소로 돌아가도 충분해요.",
            place: "setas" },
        ],
        mission: [
          "🚣 스페인 광장 운하에서 두 가족 보트 경주 한 판 하기",
          "💃 플라멩코 공연에서 ‘올레(¡Olé!)’ 한 번 외쳐 보기",
          "🥬 세비야 명물 ‘시금치 병아리콩 볶음’ 맛보고 별점 매기기"
        ],
      },

      /* ===== DAY 5 · 9/14(화) 세비야 ===== */
      {
        id: "s5", city: "세비야",
        title: "왕궁과 대성당, 그리고 트리아나의 노을",
        subtitle: "츄러스 아침 · 알카사르 · 산타 크루스 골목 · 대성당 히랄다 탑 · 루프톱 카페 · 트리아나 노을",
        stamina: 3, sunset: "20:33", temp: "32° / 19°",
        items: [
          { time: "08:30", icon: "🍩", badge: "☕ 아침 (2곳 추천)",
            options: [
              { title: "아침 추천 1: 바르 엘 코메르시오 (1904년 전통 츄러스)",
                text: "숙소에서 걸어서 3분. 주문하면 바로 튀겨 주는 굵고 폭신한 세비야식 츄러스를 진한 초콜라테에 찍어 먹습니다. 마드리드 산 히네스와 어느 쪽이 더 맛있는지 비교해 보세요!",
                place: "el_comercio" },
              { title: "아침 추천 2: 콘피테리아 라 캄파나 (1885년 전통 과자점 카페)",
                text: "시에르페스 거리 초입의 예쁜 과자점. 테라스에 앉아 카페 콘 레체와 세비야 전통 과자, 토마토 토스트로 여유로운 아침을 먹습니다.",
                place: "la_campana" },
            ] },
          { time: "09:30", icon: "🏰",
            title: "세비야 알카사르 — 무데하르 궁전 & 왕실 정원 (약 2시간 30분)",
            text: "문 여는 09:30 첫 타임으로 입장해 선선하고 한적할 때 궁전부터 봅니다. 레이스 같은 아라베스크 장식의 ‘소녀의 중정’, 황금 돔 ‘대사의 방’을 지나 공작이 돌아다니는 오렌지 정원을 천천히 걷습니다. 6명 모두 여권을 꼭 가져가세요.",
            place: "alcazar" },
          { time: "12:00", icon: "🍊",
            title: "산타 크루스 지구 골목 산책 (도냐 엘비라 광장 · 물의 골목)",
            text: "알카사르 출구로 나오면 바로 이어지는 하얀 골목 미로입니다. 오렌지 나무 광장과 성벽을 따라 난 ‘물의 골목’, 두 사람이 겨우 지나가는 ‘키스 골목’을 그늘 따라 걸으며 점심 식당 쪽으로 이동합니다.",
            place: "santa_cruz" },
          { time: "13:00", icon: "🍽️", badge: "🍽️ 점심 (2곳 추천)",
            options: [
              { title: "점심 추천 1: 라 브루닐다 (세비야 모던 타파스 인기 1순위)",
                text: "대성당에서 걸어서 8분. 훈제 치즈 버섯 리소토, 오리 콩피, 미니 소고기 버거처럼 간이 세지 않은 모던 타파스를 여러 접시 시켜 나눠 먹습니다. 전화 예약을 해 두거나 문 여는 13:00 정각에 도착하세요.",
                place: "la_brunilda" },
              { title: "점심 추천 2: 보데기타 로메로 (프링가 샌드위치 원조)",
                text: "대성당에서 걸어서 5분. 1939년부터 이어 온 전통 타파스 바에서 세비야 명물 프링가 샌드위치와 입에서 녹는 이베리코 볼살 조림을 먹습니다.",
                place: "bodeguita_romero" },
            ] },
          { time: "14:45", icon: "🛍️",
            title: "시에스타 또는 시에르페스·테투안 거리 쇼핑 (프리모르 · 자라)",
            text: "가장 더운 시간이라 두 팀으로 나눠도 좋아요. 쉬고 싶은 사람은 숙소에서 낮잠, 딸들은 차양막이 쳐진 쇼핑 거리로! 프리모르 시에르페스점(Calle Sierpes 72)에서 화장품을, 테투안 거리 자라·버쉬카에서 옷을 구경하고 라 캄파나에서 간식을 먹습니다.",
            place: "sierpes_tetuan" },
          { time: "17:00", icon: "⛪",
            title: "세비야 대성당 & 히랄다 탑 전망대 (약 1시간 30분)",
            text: "세계에서 가장 큰 고딕 성당에서 콜럼버스의 묘와 황금 제단을 보고, 경사로 35개를 따라 히랄다 탑에 올라 세비야 구시가지를 내려다봅니다. 늦은 오후라 단체 관광객이 빠져 한결 여유롭습니다. (19:00 폐장)",
            place: "sevilla_cathedral" },
          { time: "18:40", icon: "🍹", badge: "☕ 카페",
            title: "EME 카테드랄 루프톱 — 히랄다를 마주 보는 옥상 테라스",
            text: "방금 올라갔던 히랄다 탑을 이번에는 옥상 테라스에서 정면으로 바라봅니다. 시원한 음료 한 잔과 함께 30~40분 쉬어 가는 시간. 예쁜 카페를 좋아하는 분들이 가장 좋아할 자리입니다.",
            place: "eme_rooftop" },
          { time: "19:30", icon: "🏺",
            title: "트리아나 다리 건너 도자기 골목 — 세라미카 루이스",
            text: "강변 산책로를 따라 15분 걸어 트리아나 다리를 건넙니다. 다리 끝 산 호르헤 거리의 세라미카 루이스(Calle San Jorge 27)에서 손그림 타일 컵받침이나 작은 접시를 기념품으로 고릅니다.",
            place: "ceramica_ruiz" },
          { time: "20:10", icon: "🌇",
            title: "베티스 거리 강변 — 황금의 탑과 히랄다 너머 노을",
            text: "알록달록한 집이 늘어선 베티스 거리 강변에 서서, 강 건너 황금의 탑과 히랄다 탑이 석양에 물드는 세비야 최고의 노을을 봅니다. 일몰은 20:33경입니다.",
            place: "triana" },
          { time: "20:45", icon: "🍄", badge: "🍽️ 저녁 (2곳 추천)",
            options: [
              { title: "저녁 추천 1: 라스 골론드리나스 (트리아나 타파스 명가)",
                text: "트리아나 사람들이 줄 서서 먹는 집. 빵 위에 올린 돼지 안심 구이 ‘푼타 데 솔로미요’와 마늘 양송이 구이를 꼭 주문하세요. 6명이면 넓고 예약이 되는 2호점(파헤스 델 코로 76)으로 갑니다.",
                place: "las_golondrinas" },
              { title: "저녁 추천 2: 아바데스 트리아나 (강변 통유리 전망 레스토랑)",
                text: "세비야 마지막 밤을 분위기 있게 보내고 싶다면! 강 위로 난 통유리 창가에서 조명이 켜진 황금의 탑과 히랄다를 보며 식사합니다. 창가 자리로 미리 예약하세요.",
                place: "abades_triana" },
            ] },
          { time: "22:15", icon: "🚕", badge: "🚕 교통 카드",
            title: "[교통] 트리아나 → 숙소 (택시 2대, 약 8분) · 짐 싸기",
            text: "내일 아침 일찍 공항으로 가야 하니 택시로 바로 돌아와 캐리어를 미리 싸 둡니다. 숙소에 내일 07:15 택시 2대 예약을 부탁해 두세요.",
            place: "move_svq_city_taxi" },
        ],
        mission: [
          "🏰 알카사르 정원에서 공작새 찾아 사진 찍기",
          "🔔 히랄다 탑 경사로 35개를 세면서 꼭대기까지 오르기",
          "🌇 트리아나 강변에서 노을 배경 두 가족 단체 사진 남기기"
        ],
      },

      /* ===== DAY 6 · 9/15(수) 세비야 → 바르셀로나 ===== */
      {
        id: "s6", city: "세비야 → 바르셀로나",
        title: "하늘길로 지중해의 도시 바르셀로나로",
        subtitle: "부엘링 국내선 09:40 · 그라시아 거리 카사 바트요 · 비니투스 꿀대구",
        stamina: 2, sunset: "20:02", temp: "26° / 19°",
        items: [
          { time: "07:15", icon: "🚕", badge: "🚕 교통 카드",
            title: "[교통] 세비야 숙소 체크아웃 → 세비야 공항(SVQ) (정액 택시 2대, 약 25분)",
            text: "전날 예약해 둔 택시 2대에 캐리어 6개를 나눠 싣고 공항으로 갑니다. 정액 요금이라 대당 €26(평일 07시 이후)입니다. 아침은 공항 카페에서 크루아상과 커피로 간단히!",
            place: "move_svq_to_airport" },
          { time: "09:40", icon: "✈️", badge: "✈️ 항공 카드",
            title: "[교통] 부엘링 국내선: 세비야(SVQ) → 바르셀로나(BCN) (약 1시간 45분)",
            text: "기차로 5시간 반 넘게 걸리는 거리를 1시간 45분 만에! 11:25경 바르셀로나 엘 프라트 공항 T1에 도착합니다. 창가 자리에 앉으면 지중해 해안선이 보여요.",
            place: "move_vueling_svq_bcn" },
          I("d6", 2, { time: "12:00" }),
          { time: "12:45", icon: "🏠",
            title: "바르셀로나 숙소 짐 맡기기 (얼리 체크인 요청)",
            text: "3박 동안 머물 바르셀로나 베이스캠프 도착! 체크인 시간 전이라 캐리어를 먼저 맡기고 점심을 먹으러 나섭니다.",
            place: "stay_bcn" },
          I("d6", 4, { time: "13:15" }),
          { time: "15:00", icon: "😴",
            title: "숙소 체크인 & 휴식 (이른 아침 이동 회복)",
            text: "새벽같이 움직였으니 체크인 후 1시간쯤 쉬어 갑니다. 바르셀로나 관광세는 체크인 때 카드로 결제해요.",
            place: "stay_bcn" },
          I("d6", 5, { time: "16:30" }),
          I("d6", 6, { time: "20:00" }),
        ],
        mission: DAY.d6.mission.slice(),
      },

      V("d7"), V("d8"), sev(p7a.days[8]), sev(p7a.days[9]),
    ],
  });

  return { p7s, p7a, p7m, p7b };
})();

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
      "세비야 트리아나 손그림 타일·도자기 소품 (세라미카 루이스)",
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
      "여권 원본 (유효기간 6개월 이상 — 세비야 알카사르 입장·국내선 탑승 때 6명 전원 실물 필요!)",
      "여권 컬러 사본 2부 & 스마트폰 사진 저장 (평소 시내 다닐 때 지참용)",
      "해외결제 트래블 카드 (트래블월렛·트래블로그 등) + 예비 VISA/Master 신용카드",
      "유로(€) 현금 (소액권 €5·€10·€20 위주 — 미니버스·소규모 가게·팁용)",
      "사전 예약 바우처 출력/저장 (세비야 알카사르 · 세비야 대성당 · 플라멩코 공연 · 사그라다 파밀리아 · 구엘 공원 · 프라도 · AVE 고속열차 · 부엘링 항공)",
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
      "사그라다 파밀리아·스페인 광장 사진용 화사한 색감(화이트·레드·옐로우) 의상"
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
      "선크림 & 보습 립밤·수분크림 (마드리드·세비야는 내륙이라 건조하고 햇볕이 강해요)",
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

/* ---------- 항공일정 후보 (미확정 · 가격순 · 총액은 3인 합산) ---------- */
const R_MB = "인천→마드리드 / 바르셀로나→인천", R_BM = "인천→바르셀로나 / 마드리드→인천";
const FLIGHTS = [
  { id: "f01", no: "01", air: "동방항공", nights: "7박8일", trip: "9/11(토)~9/18(토)", route: R_MB,
    out:  { date: "9/11(토)", from: "ICN", dep: "18:25", to: "MAD", arr: "08:40", arrDate: "9/12(일)", wait: "상하이 4h" },
    back: { date: "9/18(토)", from: "BCN", dep: "10:55", to: "ICN", arr: "13:30", arrDate: "9/19(일)", wait: "상하이 3h40m" },
    arrive: "9/19(일) 13:30 인천 도착", bag: "23kg × 2개 (총 46kg)", pp: "1,297,900", total: "3,893,700",
    tags: [["💰 최저가", "good"], ["🧳 수하물 2개", "good"]] },
  { id: "f02", no: "02", air: "에티하드항공", nights: "7박8일", trip: "9/11(토)~9/18(토)", route: R_MB,
    out:  { date: "9/11(토)", from: "ICN", dep: "17:50", to: "MAD", arr: "08:10", arrDate: "9/12(일)", wait: "아부다비 3h55m" },
    back: { date: "9/18(토)", from: "BCN", dep: "10:45", to: "ICN", arr: "10:50", arrDate: "9/19(일)", wait: "아부다비 약 2h" },
    arrive: "9/19(일) 10:50 인천 도착", bag: "23kg × 1개", pp: "1,518,700", total: "4,556,100", tags: [] },
  { id: "f03", no: "03", air: "에티하드항공", nights: "7박8일", trip: "9/11(토)~9/18(토)", route: R_BM,
    out:  { date: "9/11(토)", from: "ICN", dep: "17:50", to: "BCN", arr: "07:35", arrDate: "9/12(일)", wait: "아부다비 3h55m" },
    back: { date: "9/18(토)", from: "MAD", dep: "10:45", to: "ICN", arr: "10:50", arrDate: "9/19(일)", wait: "아부다비 약 2h" },
    arrive: "9/19(일) 10:50 인천 도착", bag: "23kg × 1개", pp: "1,524,200", total: "4,572,600", tags: [] },
  { id: "f04", no: "04", air: "캐세이퍼시픽", nights: "7박8일", trip: "9/11(토)~9/18(토)", route: R_MB,
    out:  { date: "9/11(토)", from: "ICN", dep: "20:05", to: "MAD", arr: "09:15", arrDate: "9/12(일)", wait: "홍콩 2h40m" },
    back: { date: "9/18(토)", from: "BCN", dep: "13:00", to: "ICN", arr: "12:40", arrDate: "9/19(일)", wait: "홍콩 2h" },
    arrive: "9/19(일) 12:40 인천 도착", bag: "23kg × 1개", pp: "1,543,900", total: "4,631,700", tags: [] },
  { id: "f05", no: "05", air: "캐세이퍼시픽", nights: "7박8일", trip: "9/10(금)~9/17(금)", route: R_BM,
    out:  { date: "9/10(금)", from: "ICN", dep: "20:05", to: "BCN", arr: "08:35", arrDate: "9/11(토)", wait: "홍콩 2h30m" },
    back: { date: "9/17(금)", from: "MAD", dep: "12:25", to: "ICN", arr: "12:40", arrDate: "9/18(토)", wait: "홍콩 2h30m" },
    arrive: "9/18(토) 12:40 인천 도착", bag: "23kg × 1개", pp: "1,560,800", total: "4,682,400", tags: [] },
  { id: "n7-3", no: "06", air: "에티하드항공", nights: "8박9일", trip: "9/10(금)~9/18(토)", route: R_MB,
    out:  { date: "9/10(금)", from: "ICN", dep: "17:50", to: "MAD", arr: "08:10", arrDate: "9/11(토)", wait: "아부다비 3h55m" },
    back: { date: "9/18(토)", from: "BCN", dep: "10:45", to: "ICN", arr: "10:50", arrDate: "9/19(일)", wait: "아부다비 약 2h" },
    arrive: "9/19(일) 10:50 인천 도착", bag: "23kg × 1개", pp: "1,567,200", total: "4,701,600",
    tags: [["⭐ 추천 일정(세비야 코스)과 같은 항공편", "good"]] },
  { id: "f07", no: "07", air: "캐세이퍼시픽", nights: "7박8일", trip: "9/10(금)~9/17(금)", route: R_BM,
    out:  { date: "9/10(금)", from: "ICN", dep: "15:10", to: "BCN", arr: "08:35", arrDate: "9/11(토)", wait: "홍콩 4h10m" },
    back: { date: "9/17(금)", from: "MAD", dep: "12:25", to: "ICN", arr: "12:40", arrDate: "9/18(토)", wait: "홍콩 2h30m" },
    arrive: "9/18(토) 12:40 인천 도착", bag: "23kg × 1개", pp: "1,608,000", total: "4,824,000", tags: [] },
  { id: "f08", no: "08", air: "에티하드항공", nights: "7박8일", trip: "9/10(금)~9/17(금)", route: R_MB,
    out:  { date: "9/10(금)", from: "ICN", dep: "17:50", to: "MAD", arr: "08:10", arrDate: "9/11(토)", wait: "아부다비 3h55m" },
    back: { date: "9/17(금)", from: "BCN", dep: "10:45", to: "ICN", arr: "10:50", arrDate: "9/18(토)", wait: "아부다비 약 2h" },
    arrive: "9/18(토) 10:50 인천 도착", bag: "23kg × 1개", pp: "1,616,600", total: "4,849,800", tags: [] },
  { id: "f09", no: "09", air: "에티하드항공", nights: "8박9일", trip: "9/10(금)~9/18(토)", route: R_BM,
    out:  { date: "9/10(금)", from: "ICN", dep: "17:50", to: "BCN", arr: "07:35", arrDate: "9/11(토)", wait: "아부다비 3h55m" },
    back: { date: "9/18(토)", from: "MAD", dep: "10:45", to: "ICN", arr: "10:50", arrDate: "9/19(일)", wait: "아부다비 약 2h" },
    arrive: "9/19(일) 10:50 인천 도착", bag: "23kg × 1개", pp: "1,679,300", total: "5,037,900", tags: [] },
  { id: "f10", no: "10", air: "에미레이트항공", nights: "7박8일", trip: "9/11(토)~9/18(토)", route: R_BM,
    out:  { date: "9/11(토)", from: "ICN", dep: "23:55", to: "BCN", arr: "13:25", arrDate: "9/12(일)", wait: "두바이 3h30m" },
    back: { date: "9/18(토)", from: "MAD", dep: "15:25", to: "ICN", arr: "17:00", arrDate: "9/19(일)", wait: "두바이 3h35m" },
    arrive: "9/19(일) 17:00 인천 도착", bag: "25kg × 1개", pp: "1,891,900", total: "5,675,700", tags: [] },
];
