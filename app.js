/* ============ 태양의 나라, 스페인 — 앱 ============ */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k, d) { try { const v = localStorage.getItem("spain27:" + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("spain27:" + k, JSON.stringify(v)); } catch {} },
  };
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const gmap = q => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  const TYPE_LABEL = {
    spot: "SIGHT · 관광",
    food: "EAT · 식사",
    shop: "SHOP · 쇼핑",
    stay: "STAY · 숙소",
    move: "MOVE · 교통",
  };

  // 일정 카드의 선택지: options가 있으면 1·2번 식당, 없으면 카드 자체가 하나의 선택지
  const optsOf = it => it.options || [{ title: it.title, text: it.text || it.desc || "", place: it.place }];

  // 현재 일정안(플랜)과 그 날짜들 — 전역 DAYS 대신 플랜별 days를 사용
  let plan, DAYS;
  // 장소가 등장하는 날짜 매핑 (플랜이 바뀌면 다시 계산)
  let placeDays = {};
  // 다른 일정안에만 나오는 장소(예: 세비야 코스를 볼 때 그라나다 장소)는 지도·맛집 목록에서 숨김
  let otherPlanOnly = new Set();
  function indexPlaces() {
    placeDays = {};
    DAYS.forEach((d, i) => d.items.forEach(it => optsOf(it).forEach(o => {
      if (!o.place) return;
      (placeDays[o.place] ||= new Set()).add(i);
    })));
    otherPlanOnly = new Set();
    Object.values(PLANS).forEach(pl => pl.days.forEach(dd => dd.items.forEach(it => optsOf(it).forEach(o => {
      if (o.place && !placeDays[o.place]) otherPlanOnly.add(o.place);
    }))));
    Object.keys(PLACES).forEach(id => { if (PLACES[id].type === "stay" && !placeDays[id]) otherPlanOnly.add(id); });
  }
  // 도시별 숙박 구간 (예: 1~3박)
  function stayRanges() {
    let n = 0;
    return plan.stays.map(s => { const a = n + 1; n += s.n; return { ...s, range: `${a}~${n}박` }; });
  }

  /* ---------- 따뜻한 빛 입자 캔버스 ---------- */
  function snow() {
    const cv = $("#snow");
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W, H, flakes = [], dpr = Math.min(devicePixelRatio || 1, 2), running = true;
    function resize() {
      W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = reduce ? 0 : Math.round(Math.min(70, W * H / 14000));
      flakes = Array.from({ length: n }, () => mk(true));
    }
    function mk(any) {
      const r = Math.random() * 2.2 + .6;
      return { x: Math.random() * W, y: any ? Math.random() * H : -10, r, s: r * .25 + .15, w: Math.random() * Math.PI * 2, o: Math.random() * .4 + .2 };
    }
    function tick() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (const f of flakes) {
        f.w += .01; f.y += f.s; f.x += Math.sin(f.w) * .3;
        if (f.y > H + 5) Object.assign(f, mk(false));
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 7); ctx.fillStyle = `rgba(255,235,180,${f.o})`; ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    addEventListener("resize", resize);
    document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) tick(); });
    resize(); tick();
  }

  /* ---------- 카운트다운 ---------- */
  function countdown() {
    drawCountdown(); setInterval(drawCountdown, 30000);
  }
  function drawCountdown() {
    const el = $("#countdown"), start = new Date(plan.start), end = new Date(plan.end);
    {
      const now = new Date();
      if (now >= start && now <= end) {
        const dayIdx = todayIndex();
        el.innerHTML = `<div class="cd-msg">🇪🇸 지금 스페인 여행 중! 오늘은 ${DAYS[dayIdx]?.label || ""} · ${esc(DAYS[dayIdx]?.title || "")}</div>`;
        return;
      }
      if (now > end) { el.innerHTML = `<div class="cd-msg">📸 스페인 추억 저장 완료! ¡Hasta luego, España!</div>`; return; }
      let s = Math.floor((start - now) / 1000);
      const d = Math.floor(s / 86400); s %= 86400;
      const h = Math.floor(s / 3600); s %= 3600;
      const m = Math.floor(s / 60);
      el.innerHTML = [[`D-${d}`, "DAYS"], [String(h).padStart(2, "0"), "HOURS"], [String(m).padStart(2, "0"), "MIN"]]
        .map(([v, l]) => `<div class="cd-box"><b>${v}</b><span>${l}</span></div>`).join("");
    }
  }
  function todayIndex() {
    const t = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Madrid" });
    return DAYS.findIndex(d => d.date === t);
  }

  /* ---------- 이미지 ---------- */
  function bg(el, p) {
    if (!p) return;
    if (!p.img) { el.textContent = p.emoji; el.style.background = "linear-gradient(135deg,#cfe0f3,#eaf2fb)"; return; }
    const im = new Image();
    im.onload = () => { el.style.backgroundImage = `url("${p.img}")`; el.textContent = ""; };
    im.onerror = () => { el.textContent = p.emoji; el.style.background = "linear-gradient(135deg,#cfe0f3,#eaf2fb)"; };
    el.textContent = p.emoji;
    im.src = p.img;
  }
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target); bg(e.target, PLACES[e.target.dataset.img]);
  }), { rootMargin: "300px" }) : null;
  function lazy(root) { $$("[data-img]", root).forEach(el => io ? io.observe(el) : bg(el, PLACES[el.dataset.img])); }

  /* ---------- 개요 ---------- */
  function overview() {
    $("#overview").innerHTML = `
      <h2 class="ov-title">한눈에 보는 ${DAYS.length}일 여정 <small>${esc(plan.route)}</small></h2>
      <div class="ov-list">
        ${DAYS.map((d, i) => `
          <button class="ov-item" data-go="${i}">
            <div class="ov-date"><b>${+d.date.slice(8)}</b><small>9월 · ${d.dow}</small></div>
            <div class="ov-main"><b>${esc(d.title)}</b><span>${esc(d.subtitle)}</span></div>
            <i class="ov-dot" style="background:${d.hue};color:${d.hue}"></i>
          </button>`).join("")}
      </div>
      <p class="ov-note">${stayRanges().map(s => `${s.emoji} <b><i class="city-dot" style="background:${s.hue}"></i>${s.range} ${s.city}</b>: ${esc(s.note)}`).join("<br>")}</p>`;
    $$(".ov-item").forEach(b => b.onclick = () => { selectDay(+b.dataset.go); $("#daybarWrap").scrollIntoView({ behavior: "smooth" }); });
  }

  /* ---------- 일정 ---------- */
  let curDay = 0, team = store.get("team", "all");
  function daybar() {
    const ti = todayIndex();
    $("#daybar").innerHTML = DAYS.map((d, i) => `
      <button class="day-chip" role="tab" data-i="${i}">
        <b style="color:${d.hue}">${d.label}${i === ti ? '<span class="today">TODAY</span>' : ""}</b>
        <span>9/${+d.date.slice(8)}</span><small>${d.dow}</small>
      </button>`).join("");
    $$(".day-chip").forEach(b => b.onclick = () => selectDay(+b.dataset.i));
  }
  function selectDay(i) {
    if (i < 0 || i >= DAYS.length) i = 0;
    curDay = i;
    $$(".day-chip").forEach(b => b.classList.toggle("active", +b.dataset.i === i));
    // 데이바만 가로로 스크롤 (scrollIntoView는 페이지 세로 스크롤까지 건드려 이전/다음 날 스크롤을 끊음)
    const chip = $(".day-chip.active"), bar = $("#daybar");
    if (chip) bar.scrollTo({ left: chip.offsetLeft - bar.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2, behavior: "smooth" });
    store.set("day:" + plan.key, i);
    renderDay();
  }
  function nowItemIndex(d, items) {
    if (todayIndex() !== DAYS.indexOf(d)) return -1;
    const hm = new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/Madrid", hour: "2-digit", minute: "2-digit" });
    let idx = -1; items.forEach((it, k) => { if (it.time <= hm) idx = k; });
    return idx;
  }
  const optSel = {};
  function optBodyHTML(o) {
    const p = o.place && PLACES[o.place];
    return `
      <h4>${esc(o.title)}</h4>
      <p>${esc(o.text || o.desc || "")}</p>
      ${p ? `
        <button class="tl-place" data-open="${o.place}">
          <div class="tl-thumb" data-img="${o.place}"></div>
          <div class="tl-place-main"><b>${esc(p.name)}</b><span>${esc(p.area || "")}</span>${p.menu ? `<br><em>${p.menu.adult ? "👨‍👩‍👧 6인 가족 맞춤 추천 메뉴 보기" : "📝 이용 & 주문 팁 보기"}</em>` : `<br><em>📸 대표 사진 · 상세 정보 보기</em>`}</div>
          <span class="tl-arrow">›</span>
        </button>` : ""}`;
  }
  function bindOptTabs(card, d, items) {
    const key = card.dataset.key;
    const it = items.find(x => d.id + ":" + x.k === key);
    const opts = it.options;
    const tabs = $$(".opt-tab", card), wrap = $(".opt-wrap", card), body = $(".opt-body", card);
    const bindBody = () => {
      lazy(body);
      $$("[data-open]", body).forEach(b => b.onclick = () => openSheet(b.dataset.open));
    };
    let timer;
    function select(n, focus) {
      if (n === (optSel[key] || 0)) { if (focus) tabs[n].focus(); return; }
      optSel[key] = n;
      tabs.forEach((t, i) => {
        t.classList.toggle("active", i === n);
        t.setAttribute("aria-selected", i === n);
        t.tabIndex = i === n ? 0 : -1;
      });
      body.setAttribute("aria-labelledby", tabs[n].id);
      if (focus) tabs[n].focus();
      clearTimeout(timer);
      wrap.style.height = wrap.offsetHeight + "px";
      body.classList.add("fade");
      timer = setTimeout(() => {
        body.innerHTML = optBodyHTML(opts[n]);
        bindBody();
        wrap.style.height = body.offsetHeight + "px";
        body.classList.remove("fade");
        timer = setTimeout(() => { wrap.style.height = ""; }, 280);
      }, 130);
    }
    tabs.forEach((t, i) => {
      t.onclick = () => select(i);
      t.onkeydown = e => {
        const last = tabs.length - 1;
        const to = e.key === "ArrowRight" ? (i + 1) % tabs.length : e.key === "ArrowLeft" ? (i - 1 + tabs.length) % tabs.length
          : e.key === "Home" ? 0 : e.key === "End" ? last : -1;
        if (to < 0) return;
        e.preventDefault(); select(to, true);
      };
    });
  }

  function renderDay() {
    const d = DAYS[curDay];
    let items = d.items.map((it, k) => ({ ...it, k }));
    if (d.split) {
      if (team !== "all") items = items.filter(it => it.team === "all" || it.team === team);
      items.sort((a, b) => a.time.localeCompare(b.time) || a.k - b.k);
    }
    const nowIdx = nowItemIndex(d, items);
    const missionDone = store.get("mission:" + d.id, []);
    const stam = Math.min(3, Math.max(1, d.stamina || 2));
    const missions = d.mission || [];
    $("#dayPanel").innerHTML = `
      <div class="day-head" style="--hue:${d.hue}">
        <div class="dh-label">${d.label} · 9월 ${+d.date.slice(8)}일 (${d.dow})</div>
        <div class="dh-title">${esc(d.title)}</div>
        <div class="dh-sub">${esc(d.subtitle)}</div>
        <div class="dh-meta">
          <span>🌡️ ${esc(d.temp || "26° / 16°")}</span><span>🌇 일몰 ${esc(d.sunset || "20:20")}</span>
          <span>🚶 체력 ${"●".repeat(stam)}${"○".repeat(3 - stam)}</span>
          ${d.city ? `<span class="dh-holiday">📍 ${esc(d.city)}</span>` : ""}
        </div>
      </div>
      <div class="timeline">
        ${items.map((it, k) => {
          const opts = optsOf(it), multi = !!it.options;
          const key = d.id + ":" + it.k;
          const sel = multi ? Math.min(optSel[key] || 0, opts.length - 1) : 0;
          const badge = it.badge ? `<span class="tl-badge girls">${esc(it.badge)}</span>` : "";
          return `
          <div class="tl-item">
            <div class="tl-time"><b>${it.time}</b><div class="tl-icon">${it.icon}</div></div>
            <div class="tl-card${k === nowIdx ? " now" : ""}" ${multi ? `data-key="${key}"` : ""}>
              ${multi ? `<div class="opt-row">
                <div class="opt-tabs" role="tablist" aria-label="추천 선택지">
                  ${opts.map((o, n) => {
                    const nm = PLACES[o.place]?.name || o.title;
                    return `<button type="button" class="opt-tab${n === sel ? " active" : ""}" role="tab" id="ot-${key.replace(":", "-")}-${n}" aria-controls="op-${key.replace(":", "-")}" aria-selected="${n === sel}" tabindex="${n === sel ? 0 : -1}" data-n="${n}" title="${esc(nm)}" aria-label="${n + 1}번 ${esc(nm)}">추천 ${n + 1}</button>`;
                  }).join("")}
                </div>${badge}</div>` : badge}
              <div class="opt-wrap">
                <div class="opt-body"${multi ? ` role="tabpanel" id="op-${key.replace(":", "-")}" aria-labelledby="ot-${key.replace(":", "-")}-${sel}"` : ""}>${optBodyHTML(opts[sel])}</div>
              </div>
            </div>
          </div>`;
        }).join("")}
      </div>
      ${missions.length ? `
      <div class="mission">
        <h3>✨ 오늘의 6인 가족 미션</h3>
        ${missions.map((m, k) => `
          <label class="check"><input type="checkbox" data-m="${k}" ${missionDone.includes(k) ? "checked" : ""}><span>${esc(m)}</span></label>`).join("")}
      </div>` : ""}
      <div class="day-nav">
        <button id="prevDay" ${curDay === 0 ? "disabled" : ""}>‹ 이전 날</button>
        <button id="nextDay" ${curDay === DAYS.length - 1 ? "disabled" : ""}>다음 날 ›</button>
      </div>`;
    lazy($("#dayPanel"));
    $$("[data-open]", $("#dayPanel")).forEach(b => b.onclick = () => openSheet(b.dataset.open));
    $$(".tl-card[data-key]", $("#dayPanel")).forEach(card => bindOptTabs(card, d, items));
    $$(".mission input").forEach(cb => cb.onchange = () => {
      const done = $$(".mission input").filter(x => x.checked).map(x => +x.dataset.m);
      store.set("mission:" + d.id, done);
      if (cb.checked) toast("미션 완료! ¡Olé! 🇪🇸");
    });
    $("#prevDay").onclick = () => { selectDay(curDay - 1); scrollToDayStart(); };
    $("#nextDay").onclick = () => { selectDay(curDay + 1); scrollToDayStart(); };
  }
  // 이전/다음 날: 그날 제목 카드가 데이바 바로 아래 오도록 스크롤
  function scrollToDayStart() {
    const el = $("#dayPanel .day-head") || $("#dayPanel .tl-item");
    if (!el) return;
    const top = el.getBoundingClientRect().top + scrollY - $("#daybarWrap").offsetHeight - 8;
    scrollTo({ top, behavior: "smooth" });
  }

  /* ---------- 바텀시트 ---------- */
  const sheet = $("#sheet"), backdrop = $("#sheetBackdrop");
  let sheetOpen = false;
  function openSheet(id) {
    const p = PLACES[id]; if (!p) return;
    const days = [...(placeDays[id] || [])].map(i => DAYS[i].label);
    $("#sheetBody").innerHTML = `
      <div class="sh-img" id="shImg">${p.imgNote ? `<span class="note">${esc(p.imgNote)}</span>` : ""}</div>
      ${p.photoCredit ? `<p class="photo-credit">${esc(p.photoCredit)}</p>` : ""}
      <div class="sh-content">
        <div class="sh-type">${TYPE_LABEL[p.type] || "SIGHT · 장소"}</div>
        <h2>${esc(p.name)}</h2>
        <div class="sh-jp">${esc(p.jp || "")}</div>
        <div class="sh-meta">
          ${p.area ? `<span>📍 ${esc(p.area)}</span>` : ""}
          ${days.length ? `<span>🗓️ ${days.join(", ")}</span>` : ""}
          ${p.price ? `<span>💶 ${esc(p.price)}</span>` : ""}
        </div>
        <p>${esc(p.desc)}</p>
        ${p.menu ? `<h4>${p.menu.adult ? "🍽️ 우리 가족 맞춤 추천 메뉴" : "🍽️ 이용 & 주문 팁"}</h4>${menuHTML(p)}` : ""}
        ${p.tips?.length ? `<h4>💡 알아두면 좋은 팁</h4><ul class="sh-tips">${p.tips.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        <div class="sh-actions">
          <a class="btn dark" href="${gmap(p.q || p.jp || p.name)}" target="_blank" rel="noopener">🗺️ 구글맵 길찾기</a>
          <button class="btn light" id="shOnMap">📍 지도에서 보기</button>
        </div>
      </div>`;
    const img = $("#shImg");
    if (p.img) {
      const im = new Image();
      im.onload = () => { img.style.backgroundImage = `url("${p.img}")`; };
      im.onerror = () => { img.insertAdjacentText("beforeend", p.emoji); };
      im.src = p.img;
    } else img.insertAdjacentText("beforeend", p.emoji);
    $("#shOnMap").onclick = () => { closeSheet(); showView("map"); setTimeout(() => focusPlace(id), 350); };
    $("#sheetBody").scrollTop = 0;
    backdrop.hidden = false;
    requestAnimationFrame(() => { backdrop.classList.add("show"); sheet.classList.add("open"); });
    sheet.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (!sheetOpen) history.pushState({ sheet: 1 }, "");
    sheetOpen = true;
  }
  function closeSheet(fromPop) {
    if (!sheetOpen) return;
    sheetOpen = false;
    sheet.classList.remove("open"); backdrop.classList.remove("show");
    sheet.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => { backdrop.hidden = true; }, 300);
    if (!fromPop && history.state?.sheet) history.back();
  }
  addEventListener("popstate", () => closeSheet(true));
  backdrop.onclick = () => closeSheet();
  $("#sheetClose").onclick = () => closeSheet();
  (() => {
    let y0 = null, dy = 0;
    const body = $("#sheetBody");
    sheet.addEventListener("touchstart", e => { if (body.scrollTop <= 0) { y0 = e.touches[0].clientY; dy = 0; sheet.style.transition = "none"; } }, { passive: true });
    sheet.addEventListener("touchmove", e => { if (y0 === null) return; dy = Math.max(0, e.touches[0].clientY - y0); if (dy > 0) sheet.style.transform = `translateY(${dy}px)`; }, { passive: true });
    sheet.addEventListener("touchend", () => { if (y0 === null) return; sheet.style.transition = ""; sheet.style.transform = ""; if (dy > 110) closeSheet(); y0 = null; });
  })();

  function menuHTML(p) {
    if (!p.menu) return "";
    if (!p.menu.adult) return `<div class="menu-col a"><h5>📝 주문 & 이용 팁</h5><ul>${(p.menu.order || []).map(m => `<li>${esc(m)}</li>`).join("")}</ul></div>`;
    return `<div class="menu-grid">
      <div class="menu-col a"><h5>👨‍👩‍👧 어른 4명 추천</h5><ul>${p.menu.adult.map(m => `<li>${esc(m)}</li>`).join("")}</ul></div>
      <div class="menu-col t"><h5>🎀 중3 딸 2명 추천</h5><ul>${p.menu.teen.map(m => `<li>${esc(m)}</li>`).join("")}</ul></div>
    </div>`;
  }

  /* ---------- 맛집 ---------- */
  const FOOD_FILTERS = [
    ["all", "전체"],
    ["madrid", "👑 마드리드"],
    ["sevilla", "💃 세비야"],
    ["granada", "🏰 그라나다"],
    ["barcelona", "⛪ 바르셀로나"],
    ["sweet", "🍫 츄러스·디저트"],
  ];
  const SWEET = new Set(["san_gines", "valor_madrid", "xurreria", "granja_viader", "la_pallaresa"]);
  const SEVILLA_FOOD = new Set(["el_rinconcillo", "las_teresas", "bodega_santa_cruz", "la_brunilda", "bodeguita_romero", "las_golondrinas", "abades_triana", "lonja_barranco", "el_comercio", "la_campana", "eme_rooftop"]);
  SWEET.add("el_comercio"); SWEET.add("la_campana");
  let foodFilter = "all";
  function foodView() {
    $("#foodFilters").innerHTML = FOOD_FILTERS.map(([k, l]) => `<button class="chip" data-f="${k}">${l}</button>`).join("");
    $$("#foodFilters .chip").forEach(b => b.onclick = () => { foodFilter = b.dataset.f; renderFood(); });
    renderFood();
  }
  function renderFood() {
    const CITY_CHIP = { madrid: "마드리드", sevilla: "세비야", granada: "그라나다", barcelona: "바르셀로나" };
    $$("#foodFilters .chip").forEach(b => { const c = CITY_CHIP[b.dataset.f]; b.style.display = c && !plan.stays.some(s => s.city === c) ? "none" : ""; });
    if (CITY_CHIP[foodFilter] && !plan.stays.some(s => s.city === CITY_CHIP[foodFilter])) foodFilter = "all";
    $$("#foodFilters .chip").forEach(b => b.classList.toggle("active", b.dataset.f === foodFilter));
    const ids = Object.keys(PLACES).filter(id => PLACES[id].type === "food" && PLACES[id].menu && !otherPlanOnly.has(id)).filter(id => {
      const p = PLACES[id];
      if (foodFilter === "all") return true;
      if (foodFilter === "sweet") return SWEET.has(id);
      if (foodFilter === "madrid") return (p.area || "").includes("마드리드");
      if (foodFilter === "sevilla") return SEVILLA_FOOD.has(id);
      if (foodFilter === "granada") return (p.area || "").includes("그라나다");
      if (foodFilter === "barcelona") return (p.area || "").includes("바르셀로나");
      return true;
    }).sort((a, b) => Math.min(...(placeDays[a] || [99])) - Math.min(...(placeDays[b] || [99])));
    $("#foodList").innerHTML = ids.map(id => {
      const p = PLACES[id];
      const days = [...(placeDays[id] || [])].sort((a, b) => a - b).map(i => `<span style="background:${DAYS[i].hue};color:#0a1628">${DAYS[i].label}</span>`).join("");
      return `
      <article class="food-card">
        <div class="fc-img" data-img="${id}">
          <div class="days">${days}</div>
          ${p.price ? `<span class="price">${esc(p.price)}</span>` : ""}
          ${p.imgNote ? `<span class="note">${esc(p.imgNote)}</span>` : ""}
        </div>
        ${p.photoCredit ? `<p class="photo-credit">${esc(p.photoCredit)}</p>` : ""}
        <div class="fc-body">
          <h3>${p.emoji} ${esc(p.name)}</h3>
          <div class="fc-jp">${esc(p.jp || "")} · ${esc(p.area || "")}</div>
          <p>${esc(p.desc)}</p>
          ${menuHTML(p)}
          <div class="fc-actions">
            <button class="btn light" data-open="${id}">자세히 · 팁</button>
            <a class="btn dark" href="${gmap(p.q || p.jp || p.name)}" target="_blank" rel="noopener">🗺️ 길찾기</a>
          </div>
        </div>
      </article>`;
    }).join("");
    $$("#foodList .fc-img").forEach(el => {
      const p = PLACES[el.dataset.img]; el.removeAttribute("data-img");
      const load = () => {
        if (!p.img) return fallback();
        const im = new Image();
        im.onload = () => { el.style.backgroundImage = `url("${p.img}")`; };
        im.onerror = fallback; im.src = p.img;
      };
      const fallback = () => { el.insertAdjacentText("beforeend", p.emoji); el.style.background = "linear-gradient(135deg,#cfe0f3,#eaf2fb)"; };
      if (io) { const o = new IntersectionObserver(es => { if (es[0].isIntersecting) { o.disconnect(); load(); } }, { rootMargin: "300px" }); o.observe(el); } else load();
    });
    $$("#foodList [data-open]").forEach(b => b.onclick = () => openSheet(b.dataset.open));
  }

  /* ---------- 지도 ---------- */
  let map, markers = {}, mapFilter = "all";
  const VIEWS = {
    madrid: [[40.398, -3.725], [40.460, -3.670]],
    granada: [[37.168, -3.610], [37.190, -3.580]],
    sevilla: [[37.374, -6.010], [37.397, -5.972]],
    barcelona: [[41.365, 2.140], [41.422, 2.195]],
    all: [[36.5, -4.5], [42.0, 2.8]],
  };
  function initMap() {
    if (map || !window.L) return;
    map = L.map("map", { zoomControl: false, attributionControl: true }).fitBounds(VIEWS.all);
    L.control.zoom({ position: "topright" }).addTo(map);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    $$("#jumpRow button").forEach(b => b.onclick = () => {
      const k = b.dataset.fly;
      if (k === "all") map.flyToBounds(L.latLngBounds(Object.values(markers).map(x => x.m.getLatLng())).pad(.1), { duration: 1 });
      else if (VIEWS[k]) map.flyToBounds(VIEWS[k], { duration: 1 });
    });
    buildMarkers();
  }
  // 핀 색·날짜 필터는 플랜의 날짜에 따라 달라지므로 플랜이 바뀌면 다시 생성
  function buildMarkers() {
    Object.values(markers).forEach(x => x.m.remove());
    markers = {};
    Object.entries(PLACES).forEach(([id, p]) => {
      if (!p.lat || otherPlanOnly.has(id)) return;
      const di = [...(placeDays[id] || [])];
      const isHome = p.type === "stay";
      const color = isHome ? "#ff5a5f" : di.length ? DAYS[Math.min(...di)].hue : "#9cc6ec";
      const icon = L.divIcon({
        className: "", iconSize: [34, 34], iconAnchor: [4, 34], popupAnchor: [13, -30],
        html: `<div class="pin${isHome ? " home" : ""}" style="background:${color}"><span>${p.emoji}</span></div>`,
      });
      const m = L.marker([p.lat, p.lng], { icon, zIndexOffset: isHome ? 1000 : 0 }).addTo(map);
      m.bindPopup(`<div class="pop"><b>${p.emoji} ${esc(p.name)}</b><span>${esc(p.area || "")} ${di.map(i => DAYS[i].label).join(" · ")}</span><br><button data-pop="${id}">자세히 보기</button></div>`);
      m.on("popupopen", e => { e.popup.getElement().querySelector("[data-pop]").onclick = () => openSheet(id); });
      markers[id] = { m, days: di };
    });
    $("#mapFilters").innerHTML = [["all", "전체", "#fff"], ...DAYS.map((d, i) => [String(i), `${d.label} · ${d.title}`, d.hue])]
      .map(([k, l, c]) => `<button class="chip" data-mf="${k}"><i style="background:${c}"></i>${esc(l)}</button>`).join("");
    $$("#mapFilters .chip").forEach(b => b.onclick = () => filterMap(b.dataset.mf));
    filterMap("all");
  }
  function filterMap(k) {
    mapFilter = k;
    $$("#mapFilters .chip").forEach(b => b.classList.toggle("active", b.dataset.mf === k));
    const vis = [];
    Object.entries(markers).forEach(([id, { m, days }]) => {
      const show = k === "all" || days.includes(+k);
      if (show) { m.addTo(map); vis.push(m.getLatLng()); } else m.remove();
    });
    if (k !== "all" && vis.length) map.flyToBounds(L.latLngBounds(vis).pad(.25), { duration: .9, maxZoom: 15 });
  }
  function focusPlace(id) {
    if (!map) initMap();
    if (!map) return;
    if (mapFilter !== "all") filterMap("all");
    const mk = markers[id]; if (!mk) return;
    map.flyTo(mk.m.getLatLng(), 16, { duration: .9 });
    setTimeout(() => mk.m.openPopup(), 950);
  }

  /* ---------- 쇼핑 ---------- */
  function shopView() {
    const done = new Set(store.get("donki", []));
    const total = DONKI.reduce((a, g) => a + g.items.length, 0);
    $("#donkiList").innerHTML = DONKI.map((g, gi) => `
      <div class="list-card"><h4>${g.cat}</h4>
        ${g.items.map((it, ii) => `<label class="check"><input type="checkbox" data-k="${gi}-${ii}" ${done.has(`${gi}-${ii}`) ? "checked" : ""}><span>${esc(it)}</span></label>`).join("")}
      </div>`).join("");
    const prog = () => {
      const n = store.get("donki", []).length;
      $("#donkiProgress").innerHTML = `<p>쇼핑 미션 달성률</p><b>${n} / ${total}</b><div class="bar"><i style="width:${n / total * 100}%"></i></div>`;
    };
    $$("#donkiList input").forEach(cb => cb.onchange = () => {
      store.set("donki", $$("#donkiList input").filter(x => x.checked).map(x => x.dataset.k)); prog();
      if (cb.checked) toast("장바구니에 쏙 🛒");
    });
    prog();
  }

  /* ---------- 준비 ---------- */
  function infoView() {
    const done = new Set(store.get("pack", []));
    const total = PACKING.reduce((a, g) => a + g.items.length, 0);
    $("#packList").innerHTML = PACKING.map((g, gi) => `
      <div class="pack-group"><h4>${g.cat}</h4>
        ${g.items.map((it, ii) => `<label class="check"><input type="checkbox" data-k="${gi}-${ii}" ${done.has(`${gi}-${ii}`) ? "checked" : ""}><span>${esc(it)}</span></label>`).join("")}
      </div>`).join("");
    const cnt = () => { $("#packCount").textContent = `${store.get("pack", []).length}/${total}`; };
    $$("#packList input").forEach(cb => cb.onchange = () => { store.set("pack", $$("#packList input").filter(x => x.checked).map(x => x.dataset.k)); cnt(); });
    cnt();

    // 스페인어 발음
    $("#phrases").innerHTML = PHRASES.map((p, i) => `
      <button class="phrase" data-i="${i}"><b>${esc(p.ko)}</b><span class="jp">${esc(p.jp)}</span><small>${esc(p.read)}</small><span class="spk">🔊</span></button>`).join("");
    $$(".phrase").forEach(b => b.onclick = () => {
      const p = PHRASES[+b.dataset.i];
      if (!("speechSynthesis" in window)) return toast("이 기기는 음성 재생을 지원하지 않아요");
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(p.jp.replace(/○○/g, "Kim"));
      u.lang = "es-ES"; u.rate = .9;
      const esVoice = speechSynthesis.getVoices().find(v => v.lang?.startsWith("es"));
      if (esVoice) u.voice = esVoice;
      $$(".phrase").forEach(x => x.classList.remove("playing")); b.classList.add("playing");
      u.onend = () => b.classList.remove("playing");
      speechSynthesis.speak(u);
    });

    // 환율 (유로 € <-> 원 ₩)
    const eur = $("#fxJpy"), krw = $("#fxKrw"), rate = $("#fxRate");
    rate.value = store.get("rate", 1500);
    const r = () => (+rate.value || 1500);
    const fromE = () => { krw.value = Math.round((+eur.value || 0) * r()); };
    const fromK = () => { eur.value = Math.round((+krw.value || 0) / r() * 10) / 10; };
    eur.oninput = fromE; krw.oninput = fromK;
    rate.oninput = () => { store.set("rate", +rate.value); fromE(); };
    $("#fxQuick").innerHTML = [5, 10, 20, 50, 100].map(v => `<button data-v="${v}">€${v}</button>`).join("");
    $$("#fxQuick button").forEach(b => b.onclick = () => { eur.value = b.dataset.v; fromE(); });
    fromE();

    // 사진 출처
    $("#credits").innerHTML = creditList().map(([f, line]) =>
      `<li><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}" target="_blank" rel="noopener">${esc(f)}</a>${line ? `<br><span class="photo-credit-line">${esc(line)}</span>` : ""}</li>`).join("");
  }

  /* ---------- 항공일정 ---------- */
  function airView() {
    const legHTML = (lab, l) => `
      <div class="leg"><div class="lh">${lab} · ${l.date}</div>
        <div class="lt">
          <div class="pt"><b>${l.dep}</b><span>${l.from}</span></div>
          <div class="mid">${esc(l.wait)}<i></i>경유</div>
          <div class="pt"><b>${l.arr}<sup>+1</sup></b><span>${l.to} · ${l.arrDate}</span></div>
        </div>
      </div>`;
    const dir = f => f.out.to === "BCN" ? "BCN→MAD" : "MAD→BCN";
    $("#airCmp").innerHTML = `
      <table class="fcmp">
        <tr><th>옵션</th><th>항공사</th><th>일정</th><th>도시</th><th>1인(원)</th></tr>
        ${FLIGHTS.map(f => `
          <tr data-o="${f.id}" tabindex="0"><td><b>${f.no}</b></td><td>${f.air.replace("항공", "").replace("퍼시픽", "")}</td>
            <td>${f.trip.replace(/\(.\)/g, "").replace("~", "→")}<small>${f.nights}</small></td>
            <td>${dir(f)}</td><td>${f.pp}</td></tr>`).join("")}
      </table>`;
    $("#airList").innerHTML = FLIGHTS.map(f => `
      <article class="fo" id="fo-${f.id}">
        <div class="fh">
          <div><span class="no">${f.no} · ${f.nights}</span><h4>${f.air}</h4><div class="fare">${f.trip} · ${f.route}</div></div>
          <div class="pr"><b>₩${f.total}</b><small>3인 합산</small><small>1인 ₩${f.pp}</small></div>
        </div>
        ${legHTML("출국", f.out)}${legHTML("귀국", f.back)}
        <div class="stay">🛬 <b>${f.arrive}</b></div>
        ${f.tags.length ? `<div class="ft">${f.tags.map(([t, c]) => `<span class="fchip ${c}">${esc(t)}</span>`).join("")}</div>` : ""}
        <div class="rules"><span>🧳 위탁수하물 ${esc(f.bag)}</span></div>
        ${planOfFlight(f.id) ? `<button class="btn dark fo-plan" type="button" data-plan="${planOfFlight(f.id)}">📅 이 항공편 일정 보기 · ${esc(PLANS[planOfFlight(f.id)].name)} ${esc(PLANS[planOfFlight(f.id)].sub || "")}</button>` : ""}
      </article>`).join("");
    $$("#airList .fo-plan").forEach(b => b.onclick = e => {
      e.stopPropagation();
      applyPlan(b.dataset.plan, true);
      showView("plan");
    });
    const pick = (id, go) => {
      $$("#airCmp tr[data-o]").forEach(r => r.classList.toggle("sel", r.dataset.o === id));
      $$("#airList .fo").forEach(c => c.classList.toggle("sel", c.id === "fo-" + id));
      if (go) $("#fo-" + id).scrollIntoView({ behavior: "smooth", block: "start" });
    };
    $$("#airCmp tr[data-o]").forEach(r => {
      r.onclick = () => pick(r.dataset.o, true);
      r.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(r.dataset.o, true); } };
    });
    $$("#airList .fo").forEach(c => c.onclick = () => pick(c.id.slice(3), false));
    $("#airBtn").onclick = () => showView("air");
    $("#airBack").onclick = () => showView("plan");
  }

  /* ---------- 탭 전환 ---------- */
  function showView(v) {
    $$(".view").forEach(s => s.classList.toggle("active", s.id === "view-" + v));
    $$(".tab").forEach(t => t.classList.toggle("active", t.dataset.view === v));
    scrollTo({ top: 0, behavior: "instant" in document.documentElement.style ? "instant" : "auto" });
    if (v === "map") { initMap(); setTimeout(() => map && map.invalidateSize(), 60); }
    store.set("view", v);
  }
  $$(".tab").forEach(t => t.onclick = () => showView(t.dataset.view));

  /* ---------- 공유 / 토스트 ---------- */
  let tt;
  function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 1600); }
  $("#shareBtn").onclick = async () => {
    const data = { title: "🇪🇸 태양의 나라, 스페인 여행", text: `두 가족 6인의 스페인(${plan.stays.map(s => s.city).join("·")}) 여행 일정 · ${planTitle()} (2027.${plan.range})`, url: location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else { await navigator.clipboard.writeText(location.href); toast("링크를 복사했어요 📋"); }
    } catch {}
  };

  /* ---------- 일정안 선택 (기본 = 세비야 코스 p7s · 그라나다 코스 p7a 등은 선택해서 보기) ---------- */
  const DEFAULT_PLAN = "p7s";
  const planTitle = (p = plan) => p.name + (p.sub ? " · " + p.sub : "");
  const planOfFlight = id => Object.keys(PLANS).find(k => PLANS[k].flight === id);
  const nightsOf = p => p.stays.reduce((a, s) => a + s.n, 0);
  function planSwitch() {
    $("#planSwitch").innerHTML = `
      <div class="ps-head"><span>일정안 선택 · 모두 현지 ${nightsOf(Object.values(PLANS)[0])}박</span><em class="real">✈️ 실제 항공권</em></div>
      <div class="ps-segs" role="radiogroup" aria-label="일정안">
        ${Object.entries(PLANS).map(([k, p]) => `
          <button class="ps-seg" type="button" role="radio" data-p="${k}">
            <b><i class="ps-dot" style="background:${p.stays.find(s => s.city === p.course).hue}"></i>${esc(p.course)} 코스</b>
            <small>${esc(p.entry)}</small>
            <small>${p.badge ? `<em>${esc(p.badge)}</em> · ` : ""}${p.range}</small>
          </button>`).join("")}
      </div>`;
    $$("#planSwitch .ps-seg").forEach(b => b.onclick = () => { if (b.dataset.p !== plan.key) applyPlan(b.dataset.p, true); });
    $("#planChip").onclick = () => scrollTo({ top: 0, behavior: "smooth" });
  }
  function syncPlanUI() {
    $$("#planSwitch .ps-seg").forEach(b => {
      const on = b.dataset.p === plan.key;
      b.classList.toggle("active", on); b.setAttribute("aria-checked", on);
    });
    $("#planChip").innerHTML = `${esc(plan.chip[0])}<small>${esc(plan.chip[1])}</small>`;
    $("#heroDates").innerHTML = `<span>${plan.from[0]} <small>${plan.from[1]}</small></span><i></i><span>${plan.to[0]} <small>${plan.to[1]}</small></span>`;
    const cities = plan.stays.map(s => s.city).join(" · ");
    const hs = $("#heroSub"); if (hs) hs.textContent = "두 가족 여섯 명이 여유롭고 깊숙이 걷는 " + cities;
    $$("#jumpRow [data-city]").forEach(b => { b.style.display = plan.stays.some(s => s.city === b.dataset.city) ? "" : "none"; });
    $("#stayNote").innerHTML = `<b>🏠 6인 가족 도시별 숙소 베이스캠프</b> <small>(${esc(planTitle())})</small><br>` +
      stayRanges().map(s => `<i class="city-dot" style="background:${s.hue}"></i><b>${s.city} (${s.range})</b>: ${esc(s.home)}`).join("<br>");
  }
  function applyPlan(key, user) {
    if (!PLANS[key]) key = DEFAULT_PLAN;
    plan = PLANS[key]; plan.key = key;
    DAYS = plan.days;
    indexPlaces();
    syncPlanUI();
    drawCountdown();
    overview(); daybar();
    const ti = todayIndex();
    selectDay(ti >= 0 ? ti : user ? 0 : store.get("day:" + key, 0));
    if (map) buildMarkers();
    renderFood();
    // 링크 공유 시 같은 일정안이 열리도록 주소에 반영 (기본 일정안은 생략)
    try {
      const u = new URL(location.href);
      key === DEFAULT_PLAN ? u.searchParams.delete("plan") : u.searchParams.set("plan", key);
      history.replaceState(history.state, "", u);
    } catch {}
    if (user) {
      ["#heroDates", "#countdown", "#overview", "#dayPanel"].forEach(s => {
        const el = $(s); el.classList.remove("plan-fade"); void el.offsetWidth; el.classList.add("plan-fade");
      });
      toast(`${planTitle()} 일정으로 바꿨어요`);
    }
  }

  /* ---------- 시작 ---------- */
  (() => {
    const box = $("#heroBg"), list = TRIP.heroes;
    const slides = list.map(h => {
      const d = document.createElement("div");
      d.className = "hero-slide"; d.style.backgroundImage = `url("${h.src}")`; d.style.backgroundPosition = h.pos || "center";
      box.appendChild(d); return d;
    });
    let i = Math.floor(Math.random() * slides.length);
    slides[i].classList.add("on");
    if (slides.length < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setInterval(() => {
      if (document.hidden) return;
      slides[i].classList.remove("on"); i = (i + 1) % slides.length; slides[i].classList.add("on");
    }, 8000);
  })();
  // 기본은 세비야 코스(p7s), ?plan=p7a / p7m / p7b 링크로 열면 해당 일정안
  planSwitch();
  applyPlan(new URLSearchParams(location.search).get("plan") || DEFAULT_PLAN);
  snow(); countdown();
  foodView(); shopView(); infoView(); airView();
})();
