/* =========================================================
   스페인 가족 여행 2027 데이터
   ========================================================= */

const W = "https://thumb.wikimedia.org/wikipedia/commons/thumb/";
const U = "https://upload.wikimedia.org/wikipedia/commons/";

const TRIP = {
  title: "여유로운 스페인 가족 여행 🇪🇸",
  start: "2027-09-10T13:30:00+09:00",
  end: "2027-09-19T11:00:00+09:00",
  stay: "마드리드, 그라나다, 바르셀로나 에어비앤비 (6인 가족형 숙소)",
  members: { adult: 4, girlsMiddle3: 1, boys: 1 }, // 2가족 6인
  heroes: [
    { src: W + "3/3a/Sagrada_Familia_01.jpg/960px-Sagrada_Familia_01.jpg", file: "Sagrada_Familia_01.jpg", pos: "center" },
    { src: W + "4/47/Plaza_Mayor_de_Madrid_06.jpg/960px-Plaza_Mayor_de_Madrid_06.jpg", file: "Plaza_Mayor_de_Madrid_06.jpg", pos: "center" },
    { src: W + "d/de/Alhambra_view.jpg/960px-Alhambra_view.jpg", file: "Alhambra_view.jpg", pos: "center" },
  ],
};

const PLACES = {
  // --- 공통 숙소 (단순 표시용) ---
  airbnb_madrid: {
    type: "stay", emoji: "🏠", name: "마드리드 숙소", jp: "Madrid",
    lat: 40.4150, lng: -3.7050, area: "마드리드 중심",
    desc: "마요르 광장 인근의 6인용 아파트. 두 가족이 편안하게 지낼 수 있는 넓은 거실이 있습니다.",
    tips: ["체크인 후 근처 마트(Mercadona)에서 생수 및 간식 구매"]
  },
  airbnb_granada: {
    type: "stay", emoji: "🏠", name: "그라나다 숙소", jp: "Granada",
    lat: 37.1780, lng: -3.5950, area: "알바이신 근처",
    desc: "알함브라 궁전이 멀리 보이는 전망 좋은 테라스가 있는 숙소입니다."
  },
  airbnb_bcn: {
    type: "stay", emoji: "🏠", name: "바르셀로나 숙소", jp: "Barcelona",
    lat: 41.3880, lng: 2.1650, area: "에이샴플라 지구",
    desc: "가우디 투어 출발지와 가까운 중심가 아파트입니다."
  },

  // --- 1. 마드리드 명소 및 식당 ---
  madrid_airport: {
    type: "spot", emoji: "🛬", name: "마드리드 바라하스 공항", jp: "MAD",
    lat: 40.4719, lng: -3.5626, area: "마드리드",
    desc: "긴 비행 끝에 마드리드 도착! \n\n🚕 **다음 목적지(숙소) 이동**:\n인원이 6명이므로 공항 대형 밴(Taxi)을 1대 부르거나, 일반 택시 2대로 나누어 마요르 광장 근처 숙소로 이동합니다. (약 30분 소요)"
  },
  botin: {
    type: "food", emoji: "🥩", name: "소브리노 데 보틴 (Botín)", jp: "Sobrino de Botín",
    lat: 40.4128, lng: -3.7073, area: "마드리드",
    desc: "기네스북에 등재된 세계 최장수 식당입니다. 헤밍웨이의 단골집으로도 유명합니다.\n\n👨‍👩‍👧‍👦 **가족 추천 메뉴**:\n- 꼬치니요 아사도(Cochinillo Asado): 새끼 돼지 통구이, 겉은 바삭하고 속은 부드러워 아이들도 잘 먹습니다.\n- 마늘 수프 (Sopa de Ajo): 따뜻하게 속을 달래기 좋습니다.\n- 샹그리아 피처 (어른용)",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Sobrino_de_Botin_2.jpg"
  },
  chocolateria_san_gines: {
    type: "food", emoji: "☕", name: "산 히네스 (San Ginés)", jp: "San Ginés",
    lat: 40.4167, lng: -3.7067, area: "마드리드",
    desc: "130년이 넘은 마드리드 전통 츄로스 전문점입니다.\n\n👨‍👩‍👧‍👦 **가족 추천 메뉴**:\n- 기본 츄로스(Churros) 6개 & 진한 핫초콜릿 2~3잔 세트\n- 뽀라스(Porras, 조금 더 두꺼운 츄로스)\n핫초콜릿에 츄로스를 푹 찍어 먹으면 중학생 아이들도 아주 좋아합니다.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Chocolater%C3%ADa_San_Gin%C3%A9s%2C_Madrid_-_05.jpg"
  },
  prado: {
    type: "spot", emoji: "🎨", name: "프라도 미술관", jp: "Museo del Prado",
    lat: 40.4137, lng: -3.6921, area: "마드리드",
    desc: "고야, 벨라스케스, 엘 그레코 등 스페인 거장들의 작품이 모인 세계 3대 미술관.\n가이드 투어를 신청하면 아이들도 지루하지 않게 명작의 비하인드 스토리를 들을 수 있습니다.\n\n🚌 **다음 목적지(레티로 공원) 이동**:\n도보 약 5~10분. 미술관 관람 후 가볍게 걸어서 공원으로 갈 수 있습니다.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg"
  },
  retiro: {
    type: "spot", emoji: "🌳", name: "레티로 공원", jp: "Parque del Retiro",
    lat: 40.4173, lng: -3.6827, area: "마드리드",
    desc: "마드리드 시민들의 휴식처. 호수에서 가족끼리 나룻배를 타보거나 수정궁(Palacio de Cristal) 앞에서 가족 사진을 찍기 좋습니다.",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Parque_del_Retiro_-_Palacio_de_Cristal_03.jpg"
  },
  royal_palace: {
    type: "spot", emoji: "👑", name: "마드리드 왕궁", jp: "Palacio Real de Madrid",
    lat: 40.4179, lng: -3.7143, area: "마드리드",
    desc: "서유럽에서 가장 큰 규모를 자랑하는 화려한 왕궁입니다.\n방마다 다른 테마로 화려하게 장식되어 있어 볼거리가 풍부합니다.\n\n🚕 **다음 목적지(산 미겔 시장) 이동**:\n가족이 다함께 마드리드 골목을 구경하며 도보 약 7~10분 이동.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Palacio_Real_de_Madrid.jpg"
  },
  san_miguel: {
    type: "food", emoji: "🦐", name: "산 미겔 시장", jp: "Mercado de San Miguel",
    lat: 40.4154, lng: -3.7089, area: "마드리드",
    desc: "깔끔하고 세련된 실내 타파스 시장입니다.\n\n👨‍👩‍👧‍👦 **가족 추천 메뉴**:\n- 새우 타파스와 오징어 튀김 (Bocadillo de Calamares)\n- 신선한 과일 주스 및 하몬 이베리코 샘플러\n각자 먹고 싶은 타파스를 조금씩 사서 중앙 테이블에서 나눠 먹습니다."
  },

  // --- 교통편 (장소 카드로 활용) ---
  trans_ave: {
    type: "spot", emoji: "🚄", name: "렌페(Renfe) 고속열차", jp: "AVE",
    lat: 40.4065, lng: -3.6896, area: "마드리드 아토차 역",
    desc: "마드리드 아토차 역 출발 → 그라나다 역 도착.\n소요 시간: 약 3시간 30분.\n\n💡 **이동 팁**:\n두 가족 6인이 함께 가므로 서로 마주보는 'Mesa' 좌석 4인석 1개와 인접 2인석을 예약하여 편하게 간식(뚜론 등)을 먹으며 담소를 나누며 이동하는 것을 추천합니다.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Estaci%C3%B3n_de_Atocha_-_01.jpg"
  },
  trans_vueling: {
    type: "spot", emoji: "✈️", name: "국내선 항공 (부엘링)", jp: "Vueling",
    lat: 37.1895, lng: -3.7773, area: "그라나다 공항",
    desc: "그라나다 공항 출발 → 바르셀로나 엘 프라트 공항 도착.\n소요 시간: 약 1시간 30분.\n\n💡 **이동 팁**:\n그라나다 시내에서 공항버스를 타거나 대형 택시를 타고 공항으로 이동합니다. 기차로 바르셀로나까지 가면 6시간 이상 소요되므로 항공편 이용이 피로도를 훨씬 줄여줍니다.",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Aeropuerto_Federico_Garc%C3%ADa_Lorca_Granada-Ja%C3%A9n.jpg"
  },

  // --- 2. 그라나다 명소 및 식당 ---
  alhambra: {
    type: "spot", emoji: "🏰", name: "알함브라 궁전", jp: "Alhambra",
    lat: 37.1760, lng: -3.5881, area: "그라나다",
    desc: "이슬람 건축의 최고봉. 정교한 조각이 있는 나스르 궁전, 알카사바, 그리고 아름다운 헤네랄리페 정원.\n하루 반나절 이상을 투자해 천천히 거닐기 좋습니다. (예약 필수!)\n\n🚌 **이동 팁**:\n그라나다 시내에서 C30번 등 미니버스를 타면 궁전 입구까지 쉽게 올라갑니다.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/de/Alhambra_view.jpg"
  },
  san_nicolas: {
    type: "spot", emoji: "🌇", name: "산 니콜라스 전망대", jp: "Mirador de San Nicolás",
    lat: 37.1812, lng: -3.5927, area: "그라나다 알바이신",
    desc: "저녁 노을이 질 때 알함브라 궁전이 붉게 물드는 장관을 감상할 수 있는 최고의 뷰 포인트.\n아이들과 함께 골목길(알바이신)을 걸어 올라가며 이국적인 안달루시아 풍경을 배경으로 멋진 가족 사진을 남기세요."
  },
  bodegas_castaneda: {
    type: "food", emoji: "🍷", name: "보데가스 카스타녜다", jp: "Bodegas Castañeda",
    lat: 37.1765, lng: -3.5962, area: "그라나다",
    desc: "그라나다 특유의 타파스 문화(음료를 시키면 무료 타파스가 나옴)를 경험할 수 있는 활기찬 전통 바.\n\n👨‍👩‍👧‍👦 **가족 추천 메뉴**:\n- 타블라 카스타녜다(Tabla Castañeda): 다양한 햄과 치즈 모듬, 여럿이 나눠 먹기 좋습니다.\n- 스페인식 오믈렛(Tortilla de patatas): 아이들도 부드럽게 잘 먹는 감자 계란말이.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Tapas_in_Granada.jpg"
  },
  carmela: {
    type: "food", emoji: "🥘", name: "라 카르멜라 (La Carmela)", jp: "La Carmela",
    lat: 37.1742, lng: -3.5980, area: "그라나다",
    desc: "그라나다 중심가에 위치한 깔끔한 레스토랑. 해산물과 고기 요리가 모두 훌륭합니다.\n\n👨‍👩‍👧‍👦 **가족 추천 메뉴**:\n- 먹물 빠에야 (Arroz Negro): 해산물 향이 깊게 베인 쌀 요리.\n- 이베리코 돼지구이 (Secreto Ibérico): 입안에서 살살 녹는 고기 요리."
  },

  // --- 3. 바르셀로나 명소 및 식당 ---
  bcn_airport: {
    type: "spot", emoji: "🛫", name: "바르셀로나 공항 (귀국)", jp: "BCN",
    lat: 41.2974, lng: 2.0833, area: "바르셀로나",
    desc: "스페인 여정을 마치고 한국으로 돌아가는 공항입니다. (Tax Free 환급을 위해 여유롭게 도착하세요)"
  },
  sagrada: {
    type: "spot", emoji: "⛪", name: "사그라다 파밀리아", jp: "Sagrada Família",
    lat: 41.4036, lng: 2.1743, area: "바르셀로나",
    desc: "가우디의 미완성 대작. 빛이 쏟아지는 스테인드글라스 내부는 아이부터 어른까지 압도적인 감동을 느낄 수 있습니다.\n\n🚇 **이동 팁**:\n숙소에서 지하철 L2/L5 탑승 후 'Sagrada Família' 역 하차. 출구로 나오면 성당이 바로 눈앞에 보입니다.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Sagrada_Familia_01.jpg"
  },
  park_guell: {
    type: "spot", emoji: "🦎", name: "구엘 공원", jp: "Park Güell",
    lat: 41.4145, lng: 2.1527, area: "바르셀로나",
    desc: "가우디의 동화 같은 상상력이 발휘된 타일 장식 공원입니다. 다채로운 모자이크 도마뱀 상 앞에서 가족 사진 찰칵!\n\n🚕 **이동 팁**:\n공원은 언덕에 있으므로, 지하철 하차 후 오르막을 피하려면 버스(24번 등)를 타거나 택시 2대로 이동하는 것을 적극 권장합니다.",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Park_G%C3%BCell_01.jpg"
  },
  gothic_quarter: {
    type: "spot", emoji: "🕍", name: "고딕 지구", jp: "Barri Gòtic",
    lat: 41.3828, lng: 2.1769, area: "바르셀로나",
    desc: "중세 느낌이 물씬 나는 바르셀로나 구시가지 골목 탐험. 바르셀로나 대성당과 레이알 광장이 주요 포인트입니다."
  },
  vinitus: {
    type: "food", emoji: "🍤", name: "비니투스 (Vinitus)", jp: "Vinitus",
    lat: 41.3916, lng: 2.1627, area: "바르셀로나",
    desc: "한국인 여행객에게 특히 인기가 높고, 음식 맛이 깔끔한 바르셀로나 최고 인기 타파스 레스토랑.\n\n👨‍👩‍👧‍👦 **가족 추천 메뉴**:\n- 꿀대구 (Bacalao al alioli de miel): 달콤하고 부드러운 생선 요리 (필수 메뉴)\n- 맛조개 구이 (Navajas)\n- 소고기 안심 타파스 (Solomillo de ternera)",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Tapas_assortment.jpg"
  },
  xurreria: {
    type: "food", emoji: "🍩", name: "츄레리아 (Xurreria)", jp: "Xurreria",
    lat: 41.3824, lng: 2.1750, area: "바르셀로나",
    desc: "고딕 지구 골목에 숨겨진 유명 츄로스 테이크아웃 전문점.\n\n👨‍👩‍👧‍👦 **가족 추천 메뉴**:\n- 설탕 뿌린 기본 츄로스: 깔대기 모양 봉투에 담아 골목을 걸으며 달콤하게 당충전하기 좋습니다."
  }
};

const DAYS = [
  {
    id: "d1", date: "2027-09-10", dow: "금", label: "DAY 1",
    title: "출국 및 마드리드 도착", subtitle: "설레는 첫발",
    hue: "#3b82f6", stamina: 2,
    sunset: "20:20", temp: "15° / 25°",
    items: [
      { time: "09:00", icon: "🛫", title: "인천공항 집결", text: "두 가족 모두 공항 미팅 및 출국 수속", team: "all" },
      { time: "18:00", icon: "🛬", title: "마드리드 공항 도착", place: "madrid_airport", team: "all" },
      { time: "19:30", icon: "🏠", title: "숙소 체크인", place: "airbnb_madrid", team: "all" },
      { time: "20:30", icon: "🥘", title: "가벼운 늦은 저녁", text: "피곤한 비행 후 근처에서 간단한 저녁 식사 및 휴식", team: "all" }
    ],
    mission: ["스페인 땅 첫 발 딛기 인증샷!"]
  },
  {
    id: "d2", date: "2027-09-11", dow: "토", label: "DAY 2",
    title: "마드리드 예술과 미식", subtitle: "마드리드 구석구석",
    hue: "#2563eb", stamina: 3,
    items: [
      { time: "10:00", icon: "🎨", title: "프라도 미술관", place: "prado", team: "all" },
      { time: "13:30", icon: "🌳", title: "레티로 공원 산책", place: "retiro", team: "all" },
      { time: "15:00", icon: "🥩", title: "점심 - 보틴(Botin)", place: "botin", team: "all" },
      { time: "18:00", icon: "👑", title: "마드리드 왕궁", place: "royal_palace", team: "all" },
      { time: "20:00", icon: "🦐", title: "산 미겔 시장 타파스 투어", place: "san_miguel", team: "all" }
    ]
  },
  {
    id: "d3", date: "2027-09-12", dow: "일", label: "DAY 3",
    title: "마요르 광장 & 여유", subtitle: "마드리드 심층 탐방",
    hue: "#1d4ed8", stamina: 2,
    items: [
      { time: "10:30", icon: "🚶", title: "마요르 광장 산책", text: "느지막이 일어나 마요르 광장 골목골목 구경" },
      { time: "12:00", icon: "☕", title: "츄로스 당충전", place: "chocolateria_san_gines", team: "all" },
      { time: "15:00", icon: "🛍️", title: "마드리드 중심가 쇼핑", text: "솔(Sol) 광장 주변 자라, 마시모두띠 쇼핑 (자녀 및 어른)" }
    ]
  },
  {
    id: "d4", date: "2027-09-13", dow: "월", label: "DAY 4",
    title: "그라나다로 이동", subtitle: "안달루시아를 향해",
    hue: "#10b981", stamina: 2,
    items: [
      { time: "09:00", icon: "🏠", title: "마드리드 체크아웃", text: "아토차 역으로 이동" },
      { time: "10:30", icon: "🚄", title: "렌페(Renfe) 고속열차 탑승", place: "trans_ave", team: "all" },
      { time: "14:00", icon: "🏠", title: "그라나다 숙소 체크인", place: "airbnb_granada", team: "all" },
      { time: "15:00", icon: "🥘", title: "늦은 점심 (라 카르멜라)", place: "carmela", team: "all" },
      { time: "18:30", icon: "🌇", title: "산 니콜라스 전망대 야경", place: "san_nicolas", team: "all" }
    ]
  },
  {
    id: "d5", date: "2027-09-14", dow: "화", label: "DAY 5",
    title: "알함브라 궁전", subtitle: "그라나다의 심장",
    hue: "#059669", stamina: 3,
    items: [
      { time: "09:30", icon: "🏰", title: "알함브라 궁전 투어", place: "alhambra", team: "all" },
      { time: "14:00", icon: "🍷", title: "보데가스 카스타녜다 점심", place: "bodegas_castaneda", team: "all" },
      { time: "16:00", icon: "🚶", title: "알바이신 지구 산책", text: "가족끼리 좁은 안달루시아 골목길을 걸으며 스냅 사진 찍기" }
    ]
  },
  {
    id: "d6", date: "2027-09-15", dow: "수", label: "DAY 6",
    title: "바르셀로나로 이동", subtitle: "가우디의 도시로",
    hue: "#f59e0b", stamina: 2,
    items: [
      { time: "10:00", icon: "✈️", title: "부엘링 항공 탑승", place: "trans_vueling", team: "all" },
      { time: "12:30", icon: "🛬", title: "바르셀로나 도착", text: "숙소로 택시 이동 후 짐 맡기기" },
      { time: "14:00", icon: "🏠", title: "숙소 체크인", place: "airbnb_bcn", team: "all" },
      { time: "18:00", icon: "🍤", title: "비니투스 (Vinitus) 저녁 식사", place: "vinitus", team: "all" }
    ]
  },
  {
    id: "d7", date: "2027-09-16", dow: "목", label: "DAY 7",
    title: "가우디 투어", subtitle: "천재의 발자취",
    hue: "#d97706", stamina: 4,
    items: [
      { time: "09:00", icon: "🦎", title: "구엘 공원", place: "park_guell", team: "all" },
      { time: "13:00", icon: "🍽️", title: "점심 식사", text: "구엘 공원 근처 식당에서 간단한 샌드위치나 타파스" },
      { time: "15:00", icon: "⛪", title: "사그라다 파밀리아", place: "sagrada", team: "all" }
    ]
  },
  {
    id: "d8", date: "2027-09-17", dow: "금", label: "DAY 8",
    title: "바르셀로나 골목 & 쇼핑", subtitle: "마지막 만끽",
    hue: "#b45309", stamina: 2,
    items: [
      { time: "10:30", icon: "🕍", title: "고딕 지구 산책", place: "gothic_quarter", team: "all" },
      { time: "12:00", icon: "🍩", title: "츄레리아 당충전", place: "xurreria", team: "all" },
      { time: "15:00", icon: "🛍️", title: "귀국 쇼핑 타임", text: "올리브 오일, 국화차, 바르셀로나 유니폼(자녀용) 등 구매" }
    ]
  },
  {
    id: "d9", date: "2027-09-18", dow: "토", label: "DAY 9",
    title: "아쉬운 출국", subtitle: "Hasta Luego, España!",
    hue: "#64748b", stamina: 2,
    items: [
      { time: "10:00", icon: "🏠", title: "체크아웃 및 짐싸기", text: "빠진 물건이 없는지 확인" },
      { time: "13:00", icon: "🛫", title: "바르셀로나 공항으로 이동", place: "bcn_airport", team: "all" },
      { time: "16:00", icon: "✈️", title: "귀국 비행기 탑승", text: "길고 즐거웠던 여행의 마무리" }
    ]
  },
  {
    id: "d10", date: "2027-09-19", dow: "일", label: "DAY 10",
    title: "인천 도착", subtitle: "Home Sweet Home",
    hue: "#475569", stamina: 1,
    items: [
      { time: "11:00", icon: "🛬", title: "인천공항 도착", text: "수고하셨습니다. 일상으로 복귀!" }
    ]
  }
];

const FOOD = [
  { cat: "가족 필수 미식 (마드리드)", list: [
    { name: "빠에야 (Paella)", desc: "다같이 나눠먹기 좋은 해산물 볶음밥", img: "" },
    { name: "츄로스 & 초코라테", desc: "중3 아이도 좋아할 마드리드 전통 간식", img: "" }
  ]},
  { cat: "가족 필수 미식 (바르셀로나)", list: [
    { name: "꿀대구 (Bacalao al alioli de miel)", desc: "달콤하고 부드러워 아이들도 환호하는 맛", img: "" },
    { name: "타파스 (Tapas)", desc: "가볍게 여러 개를 시켜 맛보는 스페인식 안주/간식", img: "" }
  ]}
];

const DONKI = [
  { cat: "기념품 및 선물 (마트/백화점)", items: [
    "올리브 오일 (Extra Virgin)", 
    "뚜론 (Turron - 스페인 엿)", 
    "꿀국화차 (Manzanilla con Miel)", 
    "하몬 이베리코 진공포장", 
    "스페인 로컬 와인"
  ]},
  { cat: "의류 및 굿즈", items: [
    "자라, 마시모두띠 (스페인 로컬 브랜드)", 
    "FC 바르셀로나 굿즈", 
    "레알 마드리드 유니폼"
  ]}
];

const PACKING = [
  { cat: "필수 서류 및 공용", items: ["여권", "여행자 보험", "가족 공용 비상약", "유로 환전액", "트래블월렛/로그 카드"] },
  { cat: "개인 물품 (자녀 포함)", items: ["선글라스", "스마트폰 충전기", "편안한 운동화", "모자/선크림", "유럽용 멀티 어댑터"] }
];

const PHRASES = [
  { ko: "안녕하세요", jp: "¡Hola!", read: "올라!" },
  { ko: "감사합니다", jp: "¡Gracias!", read: "그라시아스!" },
  { ko: "이것 부탁합니다", jp: "Esto, por favor.", read: "에스또, 뽀르 파보르." },
  { ko: "계산해 주세요", jp: "La cuenta, por favor.", read: "라 꾸엔따, 뽀르 파보르." },
  { ko: "맛있어요!", jp: "¡Qué rico!", read: "께 리꼬!" }
];

// 사진 저작권 출처 자동 취합 (img, src 등에 있는 U, W URL)
function creditList() {
  const m = new Map();
  const add = (url, credit) => {
    if (!url) return;
    let name = credit;
    if (!name) {
      const match = url.match(/([^\/]+)$/);
      if (match) name = decodeURIComponent(match[1]).replace(/_/g, " ");
      else return;
    }
    m.set(name, "");
  };
  TRIP.heroes.forEach(h => add(h.src, h.file));
  Object.values(PLACES).forEach(p => add(p.img, p.credit));
  return Array.from(m.entries());
}
