const VEHICLE_CATALOG = [
  { id: "tata-nexon-max", make: "Tata", model: "Nexon EV Max", batteryKWh: 40.5, rangeKm: 320, efficiency: 7.9, connector: "CCS2" },
  { id: "tata-tiago", make: "Tata", model: "Tiago EV", batteryKWh: 24.0, rangeKm: 210, efficiency: 8.8, connector: "CCS2" },
  { id: "mg-zs-ev", make: "MG", model: "ZS EV", batteryKWh: 50.3, rangeKm: 380, efficiency: 7.6, connector: "CCS2" },
  { id: "hyundai-ioniq5", make: "Hyundai", model: "Ioniq 5", batteryKWh: 72.6, rangeKm: 500, efficiency: 6.9, connector: "CCS2" },
  { id: "mahindra-xuv400", make: "Mahindra", model: "XUV400 EV", batteryKWh: 39.4, rangeKm: 300, efficiency: 7.6, connector: "CCS2" },
  { id: "byd-atto3", make: "BYD", model: "Atto 3", batteryKWh: 60.5, rangeKm: 420, efficiency: 6.9, connector: "CCS2" },
  { id: "bmw-i5", make: "BMW", model: "i5 eDrive40", batteryKWh: 81.5, rangeKm: 500, efficiency: 6.1, connector: "CCS2" },
];

const CITIES = [
  "Delhi", "Jaipur", "Agra", "Chandigarh", "Mumbai", "Pune", "Nashik",
  "Goa", "Bengaluru", "Mysuru", "Chennai", "Puducherry", "Hyderabad", "Vijayawada",
];

const ROUTES = [
  { id: "delhi-jaipur", from: "Delhi", to: "Jaipur", distanceKm: 280, stops: [{ city: "Neemrana", km: 110 }, { city: "Shahpura", km: 200 }] },
  { id: "delhi-agra", from: "Delhi", to: "Agra", distanceKm: 233, stops: [{ city: "Faridabad", km: 40 }, { city: "Mathura", km: 160 }] },
  { id: "delhi-chandigarh", from: "Delhi", to: "Chandigarh", distanceKm: 245, stops: [{ city: "Panipat", km: 90 }, { city: "Ambala", km: 200 }] },
  { id: "jaipur-agra", from: "Jaipur", to: "Agra", distanceKm: 240, stops: [{ city: "Dausa", km: 60 }, { city: "Bharatpur", km: 190 }] },
  { id: "mumbai-pune", from: "Mumbai", to: "Pune", distanceKm: 150, stops: [{ city: "Khopoli", km: 65 }, { city: "Lonavala", km: 85 }] },
  { id: "mumbai-nashik", from: "Mumbai", to: "Nashik", distanceKm: 165, stops: [{ city: "Kasara", km: 90 }, { city: "Igatpuri", km: 120 }] },
  { id: "mumbai-goa", from: "Mumbai", to: "Goa", distanceKm: 460, stops: [{ city: "Mahad", km: 165 }, { city: "Chiplun", km: 250 }, { city: "Ratnagiri", km: 335 }] },
  { id: "pune-goa", from: "Pune", to: "Goa", distanceKm: 450, stops: [{ city: "Satara", km: 110 }, { city: "Kolhapur", km: 235 }, { city: "Belagavi", km: 320 }] },
  { id: "bengaluru-mysuru", from: "Bengaluru", to: "Mysuru", distanceKm: 145, stops: [{ city: "Ramanagara", km: 50 }, { city: "Mandya", km: 105 }] },
  { id: "bengaluru-chennai", from: "Bengaluru", to: "Chennai", distanceKm: 345, stops: [{ city: "Vellore", km: 200 }, { city: "Kanchipuram", km: 300 }] },
  { id: "bengaluru-goa", from: "Bengaluru", to: "Goa", distanceKm: 560, stops: [{ city: "Hubballi", km: 210 }, { city: "Belagavi", km: 320 }, { city: "Ponda", km: 500 }] },
  { id: "chennai-puducherry", from: "Chennai", to: "Puducherry", distanceKm: 162, stops: [{ city: "Mahabalipuram", km: 58 }, { city: "Marakkanam", km: 105 }] },
  { id: "hyderabad-vijayawada", from: "Hyderabad", to: "Vijayawada", distanceKm: 275, stops: [{ city: "Suryapet", km: 130 }, { city: "Khammam", km: 205 }] },
  { id: "hyderabad-bengaluru", from: "Hyderabad", to: "Bengaluru", distanceKm: 575, stops: [{ city: "Kurnool", km: 215 }, { city: "Anantapur", km: 320 }, { city: "Chikkaballapur", km: 495 }] },
  { id: "vijayawada-chennai", from: "Vijayawada", to: "Chennai", distanceKm: 445, stops: [{ city: "Ongole", km: 165 }, { city: "Nellore", km: 260 }, { city: "Tirupati", km: 350 }] },
];

function findRoute(from, to) {
  return ROUTES.find(r => (r.from === from && r.to === to) || (r.from === to && r.to === from)) || null;
}

const NETWORKS = ["Tata Power EZ Charge", "Statiq", "Zeon Charging", "Ather Grid", "ChargeZone"];
const CONNECTORS = ["CCS2", "CCS2", "CCS2", "Type 2 AC"];
const STATION_NAMES = [
  "Highway Plaza", "Metro Mall Hub", "City Center", "Ring Road Station",
  "Airport Junction", "Tech Park Charge Point", "Riverside Stop",
  "Old Town Square", "Expressway Waypoint", "Green Valley Mall",
  "Central Bus Depot", "Hillside Rest Stop"
];

function buildChargerGrid(count = 12) {
  const stations = [];
  for (let i = 0; i < count; i++) {
    const statuses = ["available", "busy", "offline"];
    stations.push({
      id: `st-${i}`,
      name: STATION_NAMES[i % STATION_NAMES.length],
      network: NETWORKS[i % NETWORKS.length],
      connector: CONNECTORS[i % CONNECTORS.length],
      powerKW: [30, 50, 60, 120, 150][i % 5],
      status: statuses[i % statuses.length],
    });
  }
  return stations;
}

const CHARGING_HISTORY = [
  { date: "12 Aug 2026", station: "Neemrana Highway Plaza", vehicle: "my i5", energy: "34.2 kWh", cost: "₹410" },
  { date: "05 Aug 2026", station: "Lonavala Ring Road", vehicle: "Nexon Max", energy: "28.0 kWh", cost: "₹336" },
  { date: "29 Jul 2026", station: "Mathura City Center", vehicle: "my i5", energy: "41.5 kWh", cost: "₹498" },
  { date: "20 Jul 2026", station: "Mandya Tech Park", vehicle: "ZS EV", energy: "22.7 kWh", cost: "₹272" },
];

// ===== PAGE LOADER HIDE LOGIC =====
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("is-hidden");
    }, 400);
  }
});

setTimeout(() => {
  const loader = document.getElementById("page-loader");
  if (loader && !loader.classList.contains("is-hidden")) {
    loader.classList.add("is-hidden");
  }
}, 1000);

// ===== CURSOR ENERGY GLOW TRACKER =====
const cursorGlow = document.getElementById("cursor-glow");
if (cursorGlow) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursorGlow() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    cursorGlow.style.left = `${currentX}px`;
    cursorGlow.style.top = `${currentY}px`;
    requestAnimationFrame(renderCursorGlow);
  }
  requestAnimationFrame(renderCursorGlow);
}

// ===== BUTTON RIPPLE EFFECT =====
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn, .navlinks__item, .auth-tab, .filter-pill");
  if (!btn) return;

  const rect = btn.getBoundingClientRect();
  const circle = document.createElement("span");
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - rect.left - radius}px`;
  circle.style.top = `${e.clientY - rect.top - radius}px`;
  circle.classList.add("ripple");

  const existingRipple = btn.querySelector(".ripple");
  if (existingRipple) existingRipple.remove();

  btn.appendChild(circle);
});

// ===== LOCALSTORAGE PERSISTENCE ENGINE =====
const STORAGE_KEYS = {
  garage: "chargewise_garage",
  trips: "chargewise_trips",
  user: "chargewise_user",
  history: "chargewise_history"
};

const SAFETY_RESERVE = 15;
const CHARGE_TO = 90;

function defaultGarage() {
  return [{ id: "default-i5", nickname: "my i5", modelId: "bmw-i5", network: "No preference" }];
}

function loadGarage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.garage);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error("Error reading garage from localStorage:", e);
  }
  return defaultGarage();
}

function saveGarage(g) {
  try {
    localStorage.setItem(STORAGE_KEYS.garage, JSON.stringify(g));
  } catch (e) {
    console.error("Error saving garage to localStorage:", e);
  }
}

function loadTrips() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.trips);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error("Error reading trips from localStorage:", e);
  }
  return [];
}

function saveTrips(t) {
  try {
    trips = t.slice(-10);
    localStorage.setItem(STORAGE_KEYS.trips, JSON.stringify(trips));
  } catch (e) {
    console.error("Error saving trips to localStorage:", e);
  }
}

function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.user);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

function saveUser(u) {
  try {
    if (u) {
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(u));
    } else {
      localStorage.removeItem(STORAGE_KEYS.user);
    }
  } catch (e) {}
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.history);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return CHARGING_HISTORY;
}

function saveHistory(h) {
  try {
    chargingHistory = h;
    localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(h));
  } catch (e) {}
}

let garage = loadGarage();
let trips = loadTrips();
let chargingHistory = loadHistory();
let editingVehicleId = null;
let activeHomeFilter = "all";
let selectedFuelType = "petrol";

function vehicleSpec(modelId) {
  return VEHICLE_CATALOG.find(v => v.id === modelId) || VEHICLE_CATALOG[0];
}

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll("[data-nav]");
const header = document.querySelector(".topbar");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mainNavlinks = document.getElementById("main-navlinks");

// Mobile menu controller
function closeMobileMenu() {
  if (mobileMenuToggle && mainNavlinks) {
    mobileMenuToggle.classList.remove("is-open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mainNavlinks.classList.remove("is-open");
  }
}

if (mobileMenuToggle && mainNavlinks) {
  mobileMenuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = mainNavlinks.classList.toggle("is-open");
    mobileMenuToggle.classList.toggle("is-open", isOpen);
    mobileMenuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", (e) => {
    if (!mainNavlinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

// Scroll Reveal observer & Counter Animation
function animateCounter(el, target, suffix = "") {
  if (!el) return;
  const start = 0;
  const duration = 1200;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    
    if (target % 1 !== 0) {
      el.textContent = (start + easeProgress * (target - start)).toFixed(1) + suffix;
    } else {
      const val = Math.floor(start + easeProgress * (target - start));
      el.textContent = val.toLocaleString('en-IN') + suffix;
    }

    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.page:not([hidden]) .panel, .page:not([hidden]) .feature-card, .page:not([hidden]) .vehicle-card, .page:not([hidden]) .charger-card, .page:not([hidden]) .dash-card, .page:not([hidden]) .hero, .page:not([hidden]) .home-section, .page:not([hidden]) .review-card, .page:not([hidden]) .about-feature-box, .page:not([hidden]) .contact-info-card, .page:not([hidden]) .reveal-up, .page:not([hidden]) .reveal-down, .page:not([hidden]) .reveal-left, .page:not([hidden]) .reveal-right, .page:not([hidden]) .reveal-scale');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        const counters = entry.target.querySelectorAll ? Array.from(entry.target.querySelectorAll('[data-counter]')) : [];
        if (entry.target.hasAttribute && entry.target.hasAttribute('data-counter')) {
          counters.push(entry.target);
        }

        counters.forEach(c => {
          if (!c.dataset.animated) {
            c.dataset.animated = "true";
            const val = parseFloat(c.dataset.counter);
            const rawText = c.textContent;
            const suffix = rawText.replace(/[0-9.]/g, '');
            animateCounter(c, val, suffix);
          }
        });
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

// Interactive Neon Mouse Spotlight Tracking on Cards
document.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll('.panel, .feature-card, .review-card, .savings-card, .vehicle-card, .charger-card, .about-feature-box, .contact-info-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Scroll navigation for About, Reviews, Contact
const scrollButtons = document.querySelectorAll("[data-scroll]");
scrollButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.scroll;
    const targetEl = document.getElementById(targetId);

    const homePage = document.getElementById("page-home");
    if (homePage && homePage.hidden) {
      goTo("home");
    }

    closeMobileMenu();

    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  });
});

// Contact Form Handler
const contactForm = document.getElementById("home-contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const successMsg = document.getElementById("contact-success");
    if (successMsg) {
      successMsg.hidden = false;
      setTimeout(() => { successMsg.hidden = true; }, 5000);
    }
    contactForm.reset();
  });
}

// Sticky Topbar, Back-to-Top and Active Scroll Spy listeners
window.addEventListener("scroll", () => {
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add("topbar--scrolled");
    } else {
      header.classList.remove("topbar--scrolled");
    }
  }

  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add("is-visible");
    } else {
      backToTopBtn.classList.remove("is-visible");
    }
  }

  // Active Section Scroll Spy for Home Page
  const homePage = document.getElementById("page-home");
  if (homePage && !homePage.hidden) {
    const sections = [
      { id: "page-home", nav: "home" },
      { id: "home-about", nav: "home-about" },
      { id: "home-reviews", nav: "home-reviews" },
      { id: "home-contact", nav: "home-contact" }
    ];

    const scrollPos = window.scrollY + 220;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = document.getElementById(sections[i].id);
      if (sec && sec.offsetTop <= scrollPos) {
        const activeNav = sections[i].nav;
        navButtons.forEach(btn => {
          if (btn.dataset.scroll === activeNav || (activeNav === "home" && btn.dataset.nav === "home")) {
            navButtons.forEach(b => b.classList.remove("is-active"));
            btn.classList.add("is-active");
          }
        });
        break;
      }
    }
  }
}, { passive: true });

const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function goTo(pageName) {
  pages.forEach(p => p.hidden = p.dataset.page !== pageName);
  navButtons.forEach(btn => btn.classList.toggle("is-active", btn.dataset.nav === pageName));
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  closeMobileMenu();

  if (pageName === "vehicles") renderVehicles();
  if (pageName === "history") renderHistoryTable();
  if (pageName === "dashboard") renderDashboard();
  if (pageName === "plan") populatePlanForm();
  if (pageName === "home") renderHomeStats();

  setTimeout(initScrollReveal, 50);
}

navButtons.forEach(btn => btn.addEventListener("click", () => goTo(btn.dataset.nav)));

const authForm = document.getElementById("auth-form");
const authNameField = document.getElementById("auth-name-field");
const authError = document.getElementById("auth-error");
const authSubmit = document.getElementById("auth-submit");
const authSwitch = document.getElementById("auth-switch");
const tabSignin = document.getElementById("tab-signin");
const tabSignup = document.getElementById("tab-signup");

let authMode = "signin";
let currentUser = null;

function setAuthMode(mode) {
  authMode = mode;
  tabSignin.classList.toggle("is-active", mode === "signin");
  tabSignup.classList.toggle("is-active", mode === "signup");
  authNameField.hidden = mode !== "signup";
  document.getElementById("auth-password").autocomplete = mode === "signin" ? "current-password" : "new-password";
  authSubmit.textContent = mode === "signin" ? "Sign in" : "Create account";
  authSwitch.innerHTML = mode === "signin"
    ? `New to ChargeWise? <button type="button" class="link-btn" id="auth-switch-btn">Create an account</button>`
    : `Already have an account? <button type="button" class="link-btn" id="auth-switch-btn">Sign in</button>`;
  document.getElementById("auth-switch-btn").addEventListener("click", () => setAuthMode(mode === "signin" ? "signup" : "signin"));
  authError.hidden = true;
}

tabSignin.addEventListener("click", () => setAuthMode("signin"));
tabSignup.addEventListener("click", () => setAuthMode("signup"));
document.getElementById("auth-switch-btn").addEventListener("click", () => setAuthMode("signup"));

function showAppShell(user) {
  currentUser = user;
  saveUser(user);
  header.hidden = false;
  document.getElementById("user-chip").hidden = false;
  document.getElementById("user-chip-name").textContent = user.name;
  document.getElementById("user-chip-avatar").textContent = user.name.trim().charAt(0) || "?";
  goTo("home");
}

authSubmit.addEventListener("click", () => {
  const email = document.getElementById("auth-email").value.trim();
  const password = document.getElementById("auth-password").value;
  const name = document.getElementById("auth-name").value.trim();

  if (!email || !password) {
    authError.textContent = "Enter an email and password to continue.";
    authError.hidden = false;
    return;
  }

  if (authMode === "signup" && !name) {
    authError.textContent = "Enter your name to create an account.";
    authError.hidden = false;
    return;
  }

  const displayName = authMode === "signup" ? name : email.split("@")[0].replace(/[._]/g, " ");
  showAppShell({ name: titleCase(displayName), email });
});

["auth-email", "auth-password", "auth-name"].forEach(id => {
  const inputEl = document.getElementById(id);
  if (inputEl) {
    inputEl.addEventListener("keydown", e => {
      if (e.key === "Enter") authSubmit.click();
    });
  }
});

document.getElementById("auth-guest-btn").addEventListener("click", () => {
  showAppShell({ name: "Guest", email: "" });
});

document.getElementById("signout-btn").addEventListener("click", () => {
  saveUser(null);
  header.hidden = true;
  document.getElementById("user-chip").hidden = true;
  goTo("signedout");
});

document.getElementById("signin-again-btn").addEventListener("click", () => {
  if (authForm) authForm.reset();
  setAuthMode("signin");
  goTo("auth");
});

function titleCase(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

// ===== ANIMATED METRICS & HOME PAGE INTERACTIVITY =====
function renderHomeStats() {
  const vCount = document.getElementById("home-stat-vehicles");
  const tCount = document.getElementById("home-stat-trips");
  if (vCount) animateCounter(vCount, garage.length);
  if (tCount) animateCounter(tCount, trips.length);

  populateHomeSimForm();
  updateSavingsCalculator();
  renderHomeChargers();
}

// ===== HOME QUICK SIMULATOR WIDGET =====
const homeSimVehicle = document.getElementById("home-sim-vehicle");
const homeSimOrigin = document.getElementById("home-sim-origin");
const homeSimDest = document.getElementById("home-sim-destination");
const homeSimBattery = document.getElementById("home-sim-battery");
const homeSimBatteryVal = document.getElementById("home-sim-battery-val");
const homeSimOutput = document.getElementById("home-sim-output");

function populateHomeSimForm() {
  if (!homeSimVehicle) return;

  homeSimVehicle.innerHTML = "";
  if (garage.length === 0) {
    homeSimVehicle.innerHTML = `<option value="">No saved vehicles</option>`;
  } else {
    garage.forEach(v => {
      const spec = vehicleSpec(v.modelId);
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = `${v.nickname} (${spec.make} ${spec.model})`;
      homeSimVehicle.appendChild(opt);
    });
  }

  const cities = routeCities();
  const preferredDefault = "Delhi";
  const ordered = cities.includes(preferredDefault)
    ? [preferredDefault, ...cities.filter(c => c !== preferredDefault)]
    : cities;

  homeSimOrigin.innerHTML = ordered.map(c => `<option value="${c}">${c}</option>`).join("");
  updateHomeSimDestinations();
}

function updateHomeSimDestinations() {
  if (!homeSimOrigin) return;
  const options = partnersFor(homeSimOrigin.value);
  homeSimDest.innerHTML = options.map(c => `<option value="${c}">${c}</option>`).join("");
  updateHomeSimResult();
}

if (homeSimOrigin) homeSimOrigin.addEventListener("change", updateHomeSimDestinations);
if (homeSimVehicle) homeSimVehicle.addEventListener("change", updateHomeSimResult);
if (homeSimDest) homeSimDest.addEventListener("change", updateHomeSimResult);
if (homeSimBattery) {
  homeSimBattery.addEventListener("input", () => {
    if (homeSimBatteryVal) homeSimBatteryVal.textContent = `${homeSimBattery.value}%`;
    updateHomeSimResult();
  });
}

function updateHomeSimResult() {
  if (!homeSimOutput) return;

  if (garage.length === 0) {
    homeSimOutput.innerHTML = `
      <div class="empty-state" style="padding:20px 0;">
        <span class="empty-state__mark">⚡</span>
        <h3>No vehicle added</h3>
        <p>Add a vehicle in your garage to preview range math instantly.</p>
      </div>`;
    return;
  }

  const vEntry = garage.find(v => v.id === homeSimVehicle.value) || garage[0];
  const spec = vehicleSpec(vEntry.modelId);
  const origin = homeSimOrigin.value;
  const dest = homeSimDest.value;
  const route = findRoute(origin, dest);
  if (!route) return;

  const startPercent = Number(homeSimBattery.value);
  const sim = simulateTrip(spec, route, startPercent);
  const finalPct = sim.finalArrivalPercent;

  const statusBadge = finalPct < 15
    ? `<span class="badge" style="background:rgba(255,107,107,0.15);color:var(--danger)">Critically Low</span>`
    : sim.needsStop
    ? `<span class="badge" style="background:rgba(255,180,84,0.15);color:var(--amber)">Stop Needed: ${sim.recommendedStop.city}</span>`
    : `<span class="badge">Non-stop Route</span>`;

  homeSimOutput.innerHTML = `
    <div class="home-sim-res__head">
      <div class="battery-gauge">
        ${batteryGaugeSvg(finalPct)}
      </div>
      <div>
        <div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-faint);text-transform:uppercase;">${route.from} → ${route.to}</div>
        <h3 style="font-size:1.3rem;margin:2px 0 4px;">Arrival Battery: ${finalPct}%</h3>
        ${statusBadge}
      </div>
    </div>
    <div class="home-sim-res__details">
      <div class="spec"><span>Distance</span><strong>${route.distanceKm} km</strong></div>
      <div class="spec"><span>Est. Energy</span><strong>${(route.distanceKm / spec.efficiency).toFixed(1)} kWh</strong></div>
      <div class="spec"><span>Est. Cost</span><strong>₹${Math.round((route.distanceKm / spec.efficiency) * 12)}</strong></div>
    </div>
  `;
}

const homeSimFullBtn = document.getElementById("home-sim-full-btn");
if (homeSimFullBtn) {
  homeSimFullBtn.addEventListener("click", () => {
    goTo("plan");
    if (homeSimVehicle && homeSimVehicle.value) planVehicleSel.value = homeSimVehicle.value;
    if (homeSimOrigin && homeSimOrigin.value) planOriginSel.value = homeSimOrigin.value;
    updateDestinationOptions();
    if (homeSimDest && homeSimDest.value) planDestSel.value = homeSimDest.value;
    if (homeSimBattery) {
      startChargeInput.value = homeSimBattery.value;
      startChargeValue.textContent = `${homeSimBattery.value}%`;
    }
  });
}

// ===== HOME EV SAVINGS CALCULATOR =====
const savingsDistanceInput = document.getElementById("savings-distance");
const savingsDistanceVal = document.getElementById("savings-distance-val");
const fuelBtnPetrol = document.getElementById("fuel-btn-petrol");
const fuelBtnDiesel = document.getElementById("fuel-btn-diesel");

if (fuelBtnPetrol && fuelBtnDiesel) {
  fuelBtnPetrol.addEventListener("click", () => {
    selectedFuelType = "petrol";
    fuelBtnPetrol.classList.add("is-active");
    fuelBtnDiesel.classList.remove("is-active");
    updateSavingsCalculator();
  });

  fuelBtnDiesel.addEventListener("click", () => {
    selectedFuelType = "diesel";
    fuelBtnDiesel.classList.add("is-active");
    fuelBtnPetrol.classList.remove("is-active");
    updateSavingsCalculator();
  });
}

if (savingsDistanceInput) {
  savingsDistanceInput.addEventListener("input", () => {
    if (savingsDistanceVal) {
      savingsDistanceVal.textContent = `${Number(savingsDistanceInput.value).toLocaleString('en-IN')} km / month`;
    }
    updateSavingsCalculator();
  });
}

function updateSavingsCalculator() {
  if (!savingsDistanceInput) return;

  const distKm = Number(savingsDistanceInput.value);

  // EV Cost: ₹8 / kWh, 7.5 km / kWh => ₹1.07 / km
  const evCostPerKm = 8.0 / 7.5;

  let fuelCostPerKm = 0;
  let fuelLabel = "";
  let fuelCo2PerKm = 0;

  if (selectedFuelType === "petrol") {
    // Petrol: ₹100 / L, 14 km/L => ₹7.14 / km
    fuelCostPerKm = 100 / 14;
    fuelLabel = "vs ₹7.14 Petrol";
    fuelCo2PerKm = 165;
  } else {
    // Diesel: ₹90 / L, 16 km/L => ₹5.63 / km
    fuelCostPerKm = 90 / 16;
    fuelLabel = "vs ₹5.63 Diesel";
    fuelCo2PerKm = 150;
  }

  const monthlyFuelCost = distKm * fuelCostPerKm;
  const monthlyEvCost = distKm * evCostPerKm;
  const monthlySavings = Math.max(0, monthlyFuelCost - monthlyEvCost);
  const yearlySavings = monthlySavings * 12;

  const yearlyDistance = distKm * 12;
  const co2OffsetTons = (yearlyDistance * fuelCo2PerKm) / 1000000;

  const mEl = document.getElementById("savings-monthly");
  const yEl = document.getElementById("savings-yearly");
  const pkEl = document.getElementById("savings-per-km");
  const compSubEl = document.getElementById("savings-comp-sub");
  const co2El = document.getElementById("savings-co2");

  if (mEl) mEl.textContent = `₹${Math.round(monthlySavings).toLocaleString('en-IN')}`;
  if (yEl) yEl.textContent = `₹${Math.round(yearlySavings).toLocaleString('en-IN')}`;
  if (pkEl) pkEl.textContent = `₹${evCostPerKm.toFixed(2)}`;
  if (compSubEl) compSubEl.textContent = fuelLabel;
  if (co2El) co2El.textContent = `${co2OffsetTons.toFixed(1)} Tons`;
}

// ===== HOME TELEMETRY & STATIONS FILTER =====
function renderHomeChargers() {
  const homeGrid = document.getElementById("home-charger-grid");
  if (!homeGrid) return;

  let filtered = chargers;
  if (activeHomeFilter === "available") {
    filtered = chargers.filter(c => c.status === "available");
  } else if (activeHomeFilter === "fast") {
    filtered = chargers.filter(c => c.powerKW >= 50);
  }

  homeGrid.innerHTML = filtered.slice(0, 6).map(st => `
    <div class="charger-card reveal-up" data-id="${st.id}">
      <div class="charger-card__top">
        <div>
          <div class="charger-card__name">${st.name}</div>
          <div class="charger-card__network">${st.network}</div>
        </div>
        <span class="charger-card__status status--${st.status}"><i class="dot dot--${st.status}"></i>${statusLabel(st.status)}</span>
      </div>
      <div class="charger-card__meta">
        <span><strong>${st.powerKW}</strong> kW</span>
        <span><strong>${st.connector}</strong></span>
      </div>
    </div>
  `).join("");
}

const homeFilterContainer = document.getElementById("home-station-filters");
if (homeFilterContainer) {
  homeFilterContainer.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      homeFilterContainer.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      activeHomeFilter = pill.dataset.filter;
      renderHomeChargers();
    });
  });
}

// ===== VEHICLE FORM LOGIC =====
const vfModel = document.getElementById("vf-model");
if (vfModel) {
  VEHICLE_CATALOG.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v.id;
    opt.textContent = `${v.make} ${v.model}`;
    vfModel.appendChild(opt);
  });

  vfModel.addEventListener("change", updateVfSpecs);
}

function updateVfSpecs() {
  if (!vfModel) return;
  const spec = vehicleSpec(vfModel.value);
  if (!spec) return;
  const bEl = document.getElementById("vf-spec-battery");
  const rEl = document.getElementById("vf-spec-range");
  const eEl = document.getElementById("vf-spec-efficiency");
  const cEl = document.getElementById("vf-spec-connector");

  if (bEl) bEl.textContent = `${spec.batteryKWh.toFixed(1)} kWh`;
  if (rEl) rEl.textContent = `${spec.rangeKm} km`;
  if (eEl) eEl.textContent = `${spec.efficiency.toFixed(1)} km/kWh`;
  if (cEl) cEl.textContent = spec.connector;
}

const vehicleFormWrap = document.getElementById("vehicle-form-wrap");
const vehicleForm = document.getElementById("vehicle-form");

function openVehicleForm(existing) {
  editingVehicleId = existing ? existing.id : null;
  document.getElementById("vf-nickname").value = existing ? existing.nickname : "";
  if (vfModel) vfModel.value = existing ? existing.modelId : VEHICLE_CATALOG[0].id;
  document.getElementById("vf-network").value = existing ? existing.network : "No preference";
  updateVfSpecs();
  vehicleFormWrap.hidden = false;
  vehicleFormWrap.scrollIntoView({ behavior: "smooth", block: "start" });
}

const addVehicleBtn = document.getElementById("add-vehicle-btn");
if (addVehicleBtn) addVehicleBtn.addEventListener("click", () => openVehicleForm(null));

const vehicleCancelBtn = document.getElementById("vehicle-form-cancel");
if (vehicleCancelBtn) {
  vehicleCancelBtn.addEventListener("click", () => {
    vehicleFormWrap.hidden = true;
  });
}

const vehicleSaveBtn = document.getElementById("vehicle-form-save");
if (vehicleSaveBtn) {
  vehicleSaveBtn.addEventListener("click", () => {
    const nickname = document.getElementById("vf-nickname").value.trim() || "My EV";
    const modelId = vfModel ? vfModel.value : VEHICLE_CATALOG[0].id;
    const network = document.getElementById("vf-network").value;

    if (editingVehicleId) {
      const v = garage.find(x => x.id === editingVehicleId);
      if (v) Object.assign(v, { nickname, modelId, network });
    } else {
      garage.push({ id: "v-" + Date.now(), nickname, modelId, network });
    }
    saveGarage(garage);
    vehicleFormWrap.hidden = true;
    renderVehicles();
    renderHomeStats();
  });
}

function renderVehicles() {
  const list = document.getElementById("vehicle-list");
  if (!list) return;
  list.innerHTML = "";
  if (garage.length === 0) {
    list.innerHTML = `<div class="panel empty-garage"><h3>Your garage is empty.</h3><p>Add a vehicle to start planning trips.</p></div>`;
    return;
  }

  garage.forEach((v, i) => {
    const spec = vehicleSpec(v.modelId);
    const card = document.createElement("article");
    card.className = "vehicle-card reveal-up";
    card.innerHTML = `
      <div class="vehicle-card__head">
        <h3>${escapeHtml(v.nickname)}</h3>
        ${i === 0 ? '<span class="badge">Default</span>' : ""}
      </div>
      <p class="vehicle-card__sub">${spec.make} ${spec.model}</p>
      <div class="vehicle-card__specs">
        <div class="spec"><span>Connector</span><strong>${spec.connector}</strong></div>
        <div class="spec"><span>Battery</span><strong>${spec.batteryKWh.toFixed(1)} kWh</strong></div>
        <div class="spec"><span>Range</span><strong>${spec.rangeKm} km</strong></div>
        <div class="spec"><span>Network</span><strong style="font-family:var(--font-body);font-size:0.85rem;">${escapeHtml(v.network)}</strong></div>
      </div>
      <div class="vehicle-card__actions">
        <button class="btn btn--outline btn--sm" data-edit="${v.id}">Edit</button>
        <button class="btn btn--danger btn--sm" data-delete="${v.id}">Delete</button>
      </div>
    `;
    list.appendChild(card);
  });

  list.querySelectorAll("[data-edit]").forEach(btn =>
    btn.addEventListener("click", () => openVehicleForm(garage.find(v => v.id === btn.dataset.edit)))
  );

  list.querySelectorAll("[data-delete]").forEach(btn =>
    btn.addEventListener("click", () => {
      if (!confirm("Remove this vehicle from your garage?")) return;
      garage = garage.filter(v => v.id !== btn.dataset.delete);
      saveGarage(garage);
      renderVehicles();
      renderHomeStats();
    })
  );
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// ===== PLAN FORM & SIMULATION =====
const planVehicleSel = document.getElementById("plan-vehicle");
const planOriginSel = document.getElementById("plan-origin");
const planDestSel = document.getElementById("plan-destination");
const startChargeInput = document.getElementById("plan-start-charge");
const startChargeValue = document.getElementById("plan-start-charge-value");

if (startChargeInput) {
  startChargeInput.addEventListener("input", () => {
    if (startChargeValue) startChargeValue.textContent = `${startChargeInput.value}%`;
  });
}

function routeCities() {
  const set = new Set();
  ROUTES.forEach(r => {
    set.add(r.from);
    set.add(r.to);
  });
  return [...set].sort();
}

function partnersFor(city) {
  return ROUTES.filter(r => r.from === city || r.to === city).map(r => (r.from === city ? r.to : r.from));
}

function populatePlanForm() {
  if (!planVehicleSel) return;
  planVehicleSel.innerHTML = "";
  if (garage.length === 0) {
    planVehicleSel.innerHTML = `<option value="">No saved vehicles</option>`;
    const hint = document.getElementById("plan-hint");
    if (hint) hint.textContent = "You don't have any vehicles yet — add one on the Vehicles page.";
  } else {
    garage.forEach(v => {
      const spec = vehicleSpec(v.modelId);
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = `${v.nickname} — ${spec.make} ${spec.model}`;
      planVehicleSel.appendChild(opt);
    });
    const hint = document.getElementById("plan-hint");
    if (hint) hint.textContent = "Battery math runs entirely in your browser using the vehicle's rated range.";
  }

  const cities = routeCities();
  const preferredDefault = "Delhi";
  const ordered = cities.includes(preferredDefault)
    ? [preferredDefault, ...cities.filter(c => c !== preferredDefault)]
    : cities;

  if (planOriginSel) {
    planOriginSel.innerHTML = ordered.map(c => `<option value="${c}">${c}</option>`).join("");
    updateDestinationOptions();
  }
}

if (planOriginSel) planOriginSel.addEventListener("change", updateDestinationOptions);

function updateDestinationOptions() {
  if (!planOriginSel || !planDestSel) return;
  const options = partnersFor(planOriginSel.value);
  planDestSel.innerHTML = options.map(c => `<option value="${c}">${c}</option>`).join("");
}

const planSubmitBtn = document.getElementById("plan-submit");
if (planSubmitBtn) {
  planSubmitBtn.addEventListener("click", () => {
    if (garage.length === 0) {
      alert("Add a vehicle first, on the Vehicles page.");
      return;
    }
    const vehicleEntry = garage.find(v => v.id === planVehicleSel.value) || garage[0];
    const spec = vehicleSpec(vehicleEntry.modelId);
    const origin = planOriginSel.value;
    const destination = planDestSel.value;
    const route = findRoute(origin, destination);
    const startPercent = Number(startChargeInput.value);
    const simulation = simulateTrip(spec, route, startPercent);

    renderTripResult(vehicleEntry, spec, route, simulation, startPercent);

    trips.push({
      label: `${origin} → ${destination}`,
      arrivalPercent: simulation.finalArrivalPercent,
      date: new Date().toISOString()
    });
    saveTrips(trips);
    renderHomeStats();
  });
}

function simulateTrip(spec, route, startPercent) {
  const maxSafeDistance = spec.rangeKm * (startPercent - SAFETY_RESERVE) / 100;

  if (route.distanceKm <= maxSafeDistance) {
    const percentUsed = (route.distanceKm / spec.rangeKm) * 100;
    const arrivalPercent = Math.round(startPercent - percentUsed);
    return {
      needsStop: false,
      recommendedStop: null,
      finalArrivalPercent: arrivalPercent,
      legs: [{ from: route.from, to: route.to, km: route.distanceKm, arrivePercent: arrivalPercent }],
    };
  }

  const reachable = route.stops.filter(s => s.km <= maxSafeDistance);
  const stop = reachable.length ? reachable[reachable.length - 1] : route.stops[0];

  const percentUsedToStop = (stop.km / spec.rangeKm) * 100;
  const arriveAtStopPercent = Math.round(startPercent - percentUsedToStop);

  const remainingKm = route.distanceKm - stop.km;
  const percentUsedLeg2 = (remainingKm / spec.rangeKm) * 100;
  const finalArrivalPercent = Math.round(CHARGE_TO - percentUsedLeg2);

  return {
    needsStop: true,
    recommendedStop: stop,
    finalArrivalPercent,
    legs: [
      { from: route.from, to: stop.city, km: stop.km, arrivePercent: arriveAtStopPercent },
      { from: stop.city, to: route.to, km: remainingKm, arrivePercent: finalArrivalPercent },
    ],
  };
}

function batteryGaugeSvg(percent) {
  const clamped = Math.max(0, Math.min(100, percent));
  const color = clamped >= 40 ? "var(--voltage)" : clamped >= 20 ? "var(--amber)" : "var(--danger)";
  const fillHeight = (clamped / 100) * 46;

  return `
    <svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="4" width="20" height="6" rx="2" fill="var(--panel-border)"/>
      <rect x="6" y="10" width="48" height="76" rx="8" fill="none" stroke="var(--panel-border)" stroke-width="3"/>
      <rect x="11" y="${81 - fillHeight}" width="38" height="${fillHeight}" rx="4" fill="${color}"/>
      <text x="30" y="52" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="13" fill="${clamped < 25 ? 'var(--text)' : '#05130B'}">${Math.round(clamped)}%</text>
    </svg>`;
}

function renderTripResult(vehicleEntry, spec, route, sim, startPercent) {
  const container = document.getElementById("plan-result");
  if (!container) return;
  const finalPct = sim.finalArrivalPercent;
  let alertHtml = "";

  if (finalPct < 15) {
    alertHtml = `<div class="alert alert--danger">⚠️ Arrival charge is critically low (${finalPct}%). Consider a longer stop or an extra charging break near the midpoint.</div>`;
  } else if (sim.needsStop) {
    alertHtml = `<div class="alert alert--warn">⚡ This route exceeds ${vehicleEntry.nickname}'s safe range on the current charge — a stop at <strong>${sim.recommendedStop.city}</strong> is recommended.</div>`;
  } else if (finalPct < 30) {
    alertHtml = `<div class="alert alert--warn">You'll arrive with ${finalPct}% battery — comfortable, but plan a charge soon after arrival.</div>`;
  } else {
    alertHtml = `<div class="alert alert--ok">✓ No charging stop needed — you'll arrive with plenty of range to spare.</div>`;
  }

  const nodes = [{ name: route.from, km: 0, percent: startPercent, isCharge: false }];
  let cumulative = 0;

  sim.legs.forEach((leg, i) => {
    cumulative += leg.km;
    nodes.push({
      name: leg.to,
      km: cumulative,
      percent: leg.arrivePercent,
      isCharge: i < sim.legs.length - 1
    });
  });

  const stopsHtml = nodes.map(node => `
    <div class="itin-stop ${node.isCharge ? "itin-stop--charge" : ""}">
      <div class="itin-stop__row">
        <span class="itin-stop__name">${node.name}</span>
        <span class="itin-stop__km">${node.km} km</span>
      </div>
      ${node.km > 0 ? `<div class="itin-stop__meta">Arrive at ~${node.percent}% battery</div>` : `<div class="itin-stop__meta">Starting at ${node.percent}% battery</div>`}
      ${node.isCharge ? `<span class="itin-stop__badge">Recommended charge stop · to ${CHARGE_TO}%</span>` : ""}
    </div>`).join("");

  container.innerHTML = `
    <div class="result-summary">
      <div class="battery-gauge">
        ${batteryGaugeSvg(finalPct)}
      </div>
      <div class="result-summary__text">
        <h3>${route.from} → ${route.to}</h3>
        <p>${route.distanceKm} km · ${vehicleEntry.nickname} (${spec.rangeKm} km rated range)</p>
      </div>
    </div>
    ${alertHtml}
    <div class="itinerary__title">Itinerary</div>
    <div class="itin-track">
      ${stopsHtml}
    </div>
  `;
}

// ===== CHARGERS TELEMETRY & HISTORY =====
let chargers = buildChargerGrid(12);

function renderChargerGrid() {
  const grid = document.getElementById("charger-grid");
  if (!grid) return;
  grid.innerHTML = chargers.map(st => `
    <div class="charger-card reveal-up" data-id="${st.id}">
      <div class="charger-card__top">
        <div>
          <div class="charger-card__name">${st.name}</div>
          <div class="charger-card__network">${st.network}</div>
        </div>
        <span class="charger-card__status status--${st.status}"><i class="dot dot--${st.status}"></i>${statusLabel(st.status)}</span>
      </div>
      <div class="charger-card__meta">
        <span><strong>${st.powerKW}</strong> kW</span>
        <span><strong>${st.connector}</strong></span>
      </div>
    </div>
  `).join("");
}

function statusLabel(s) {
  return { available: "Available", busy: "In use", offline: "Offline" }[s] || s;
}

function tickChargerTelemetry() {
  const changeCount = 1 + Math.floor(Math.random() * 3);

  for (let i = 0; i < changeCount; i++) {
    const idx = Math.floor(Math.random() * chargers.length);
    const weighted = Math.random();
    chargers[idx].status = weighted < 0.55 ? "available" : weighted < 0.85 ? "busy" : "offline";
  }

  renderChargerGrid();
  renderHomeChargers();
  updateDashboardOnlineStat();
}

setInterval(tickChargerTelemetry, 3500);

function renderHistoryTable() {
  renderChargerGrid();
  const tbody = document.querySelector("#history-table tbody");
  if (!tbody) return;
  tbody.innerHTML = chargingHistory.map(h => `
    <tr><td>${escapeHtml(h.date)}</td><td>${escapeHtml(h.station)}</td><td>${escapeHtml(h.vehicle)}</td><td>${escapeHtml(h.energy)}</td><td>${escapeHtml(h.cost)}</td></tr>
  `).join("");
}

// ===== SESSION MODAL HANDLERS =====
const sessionModalOverlay = document.getElementById("session-modal-overlay");
const logSessionBtn = document.getElementById("log-session-btn");
const sessionModalClose = document.getElementById("session-modal-close");
const sessionCancel = document.getElementById("session-cancel");
const sessionForm = document.getElementById("session-form");
const sessionVehicleSel = document.getElementById("session-vehicle");

function openSessionModal() {
  if (!sessionModalOverlay) return;

  if (sessionVehicleSel) {
    sessionVehicleSel.innerHTML = "";
    if (garage.length === 0) {
      sessionVehicleSel.innerHTML = `<option value="Custom EV">Custom EV</option>`;
    } else {
      garage.forEach(v => {
        const opt = document.createElement("option");
        opt.value = v.nickname;
        opt.textContent = v.nickname;
        sessionVehicleSel.appendChild(opt);
      });
    }
  }

  const todayStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const dateInput = document.getElementById("session-date");
  if (dateInput) dateInput.value = todayStr;

  sessionModalOverlay.hidden = false;
}

function closeSessionModal() {
  if (sessionModalOverlay) sessionModalOverlay.hidden = true;
}

if (logSessionBtn) logSessionBtn.addEventListener("click", openSessionModal);
if (sessionModalClose) sessionModalClose.addEventListener("click", closeSessionModal);
if (sessionCancel) sessionCancel.addEventListener("click", closeSessionModal);

if (sessionForm) {
  sessionForm.addEventListener("submit", e => {
    e.preventDefault();
    const station = document.getElementById("session-station").value.trim();
    const vehicle = sessionVehicleSel ? sessionVehicleSel.value : "EV";
    const energy = parseFloat(document.getElementById("session-energy").value) || 0;
    const cost = parseInt(document.getElementById("session-cost").value, 10) || 0;
    const date = document.getElementById("session-date").value.trim() || "Today";

    chargingHistory.unshift({
      date,
      station,
      vehicle,
      energy: `${energy.toFixed(1)} kWh`,
      cost: `₹${cost}`
    });

    saveHistory(chargingHistory);
    renderHistoryTable();
    closeSessionModal();
    sessionForm.reset();
  });
}

function updateDashboardOnlineStat() {
  const el = document.getElementById("dash-online");
  const dashPage = document.getElementById("page-dashboard");
  if (!el || (dashPage && dashPage.hidden)) return;
  const online = chargers.filter(c => c.status === "available").length;
  el.innerHTML = `${online}<span class="dash-card__of">/ ${chargers.length}</span>`;
}

function renderDashboard() {
  const vEl = document.getElementById("dash-vehicles");
  const tEl = document.getElementById("dash-trips");
  if (vEl) vEl.textContent = garage.length;
  if (tEl) tEl.textContent = trips.length;
  updateDashboardOnlineStat();

  const avgEff = garage.length
    ? (garage.reduce((sum, v) => sum + vehicleSpec(v.modelId).efficiency, 0) / garage.length).toFixed(1) + " km/kWh"
    : "—";

  const effEl = document.getElementById("dash-efficiency");
  if (effEl) effEl.textContent = avgEff;

  const barsEl = document.getElementById("dash-bars");
  const emptyEl = document.getElementById("dash-bars-empty");

  if (barsEl && emptyEl) {
    if (trips.length === 0) {
      barsEl.innerHTML = "";
      emptyEl.style.display = "block";
    } else {
      emptyEl.style.display = "none";
      barsEl.innerHTML = trips.map(t => {
        const pct = Math.max(4, Math.min(100, t.arrivalPercent));
        const cls = pct < 20 ? "danger" : pct < 40 ? "warn" : "";
        return `
          <div class="bar">
            <div class="bar__fill ${cls}" style="height:${pct}%"></div>
            <div class="bar__label">${t.arrivalPercent}%</div>
          </div>`;
      }).join("");
    }
  }
}

// ===== INITIALIZATION =====
renderChargerGrid();
renderHomeChargers();
setTimeout(initScrollReveal, 100);

const savedUser = loadUser();
if (savedUser) {
  showAppShell(savedUser);
} else {
  if (header) header.hidden = true;
  goTo("auth");
}