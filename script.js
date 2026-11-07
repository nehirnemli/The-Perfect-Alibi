
const suspects = [
  {
    id: "adnan",
    name: "Adnan Kaya",
    role: "GALLERY DIRECTOR",
    age: "42",
    description: "The person responsible for the gallery and its financial future.",
    statement: "As gallery director, I was responsible for the event and the security arrangements. I stayed with the guests for most of the evening. I had no reason to remove the painting. The gallery was trusted with an important loan, and I would never risk that reputation.",
    note: "Adnan had authority over gallery operations. His financial situation and private communications deserve closer attention.",
    skin: "#bd896c", hair: "#34251f", outfit: "#303a3a", bg: "#4b3930", style: "director"
  },
  {
    id: "elif",
    name: "Elif Demir",
    role: "CHIEF CURATOR",
    age: "36",
    description: "She coordinated the painting's loan, arrival, and exhibition installation.",
    statement: "I coordinated the loan of The Last Light with the private family collection, arranged its arrival with the transport team, and supervised its installation. I know the gallery's conservation procedures because that is part of my job. After the guests began leaving, I stayed near the main gallery. I did not move the painting.",
    note: "Elif coordinated the artwork's loan, arrival, and installation. Her role required her to work closely with the transport team and the gallery's conservation procedures.",
    skin: "#d7a17f", hair: "#5a3528", outfit: "#34333b", bg: "#51413a", style: "curator"
  },
  {
    id: "mert",
    name: "Mert Yılmaz",
    role: "SECURITY OFFICER",
    age: "39",
    description: "He monitored the building and had access to the camera control system.",
    statement: "I was on duty that evening. The cameras briefly went offline because of what I believed was a technical fault. I followed the usual procedure and reported the issue. I did not leave my post to interfere with the artwork.",
    note: "Mert's credentials appear in the security system log during the camera outage. His explanation should be compared with the maintenance report.",
    skin: "#95684f", hair: "#201d1b", outfit: "#252b31", bg: "#34403f", style: "security"
  },
  {
    id: "veysel",
    name: "Veysel Arslan",
    role: "ART COLLECTOR",
    age: "51",
    description: "A wealthy guest with a particular interest in the missing artwork.",
    statement: "I attended the preview as a guest. I spoke with Adnan about the gallery and its future exhibitions, but that was a private conversation. I left before the evening ended. I had no involvement in the disappearance.",
    note: "Veysel's private conversation with Adnan may have concerned more than the gallery's exhibition programme.",
    skin: "#c28d70", hair: "#a5a09a", outfit: "#3b3430", bg: "#48413b", style: "collector"
  }
];

const evidence = [
  {
    id: 1,
    title: "Financial Records",
    type: "CONFIDENTIAL DOCUMENT",
    time: "THREE WEEKS BEFORE",
    description: "A review of the gallery director's financial records reveals overdue business loans, unpaid supplier invoices, and a significant personal debt. Several payments were due shortly after the exhibition. The gallery's financial position was considerably worse than Adnan had publicly suggested.",
    finding: "Adnan had a serious financial motive. The gallery's financial situation could have made an unauthorized transaction tempting.",
    timeline: [
      ["THREE WEEKS BEFORE", "Adnan's financial records show mounting debts and overdue payments."]
    ]
  },
  {
    id: 2,
    title: "Private Correspondence",
    type: "RECOVERED MESSAGE",
    time: "TWO DAYS BEFORE",
    description: "A recovered message exchange refers to a private arrangement between Adnan Kaya and an unnamed collector. The messages discuss a transfer without the usual gallery paperwork or a public record. The artwork is never named directly.",
    quote: "“No paperwork. No public record. We settle it privately.”",
    finding: "The correspondence suggests an unauthorized private transaction. It does not, by itself, prove that the missing painting was the subject.",
    timeline: [
      ["TWO DAYS BEFORE", "Adnan exchanges messages about an undocumented private transfer."]
    ]
  },
  {
    id: 3,
    title: "Transport Inventory",
    type: "LOGISTICS RECORD",
    time: "EVENT EVENING · BEFORE CLOSING",
    description: "The gallery's transport inventory lists a padded conservation crate prepared for a scheduled handling procedure earlier that evening. The crate was stored near the conservation area. Several members of the gallery team were authorized to access transport equipment. The inventory does not identify who used the crate that evening.",
    finding: "A suitable container was available inside the gallery before the disappearance. The record does not identify a handler or establish that the crate was used to remove the painting.",
    timeline: [
      ["EARLIER THAT EVENING", "A padded conservation crate is recorded as prepared and stored near the conservation area."]
    ]
  },
  {
    id: 4,
    title: "Guest Witness Statement",
    type: "WITNESS INTERVIEW",
    time: "BEFORE THE GALLERY CLOSED",
    description: "A guest reported overhearing Adnan Kaya speaking quietly with another person near the gallery office. The witness could not identify the second person, but remembered one sentence clearly.",
    quote: "“Everything will be ready fifteen minutes after the last guest leaves.”",
    finding: "Adnan appeared to be preparing something that depended on the guests leaving.",
    timeline: [
      ["BEFORE CLOSING", "A guest overhears Adnan discussing a plan with an unidentified person."]
    ]
  },
  {
    id: 5,
    title: "Restricted Area Access Log",
    type: "ACCESS RECORD",
    time: "22:07–22:11",
    description: "The access system recorded Mert Yılmaz entering the security control room at 22:07. At 22:11, Elif Demir's staff card was used to enter the conservation corridor. Elif was the chief curator and had access to this area as part of her responsibilities for the artwork's loan, arrival, and installation. The log confirms entry only; it does not record what happened inside.",
    finding: "Two staff members entered restricted areas during the relevant period. Their movements can be compared with the other records and statements.",
    timeline: [
      ["22:07", "Mert Yılmaz enters the security control room."],
      ["22:11", "Elif Demir's staff card records entry to the conservation corridor."]
    ]
  },
  {
    id: 6,
    title: "Security System Log",
    type: "DIGITAL RECORD",
    time: "22:08–22:18",
    description: "The gallery's security system recorded a manual camera override at 22:08. The cameras were restored at 22:18. The override was performed using Mert Yılmaz's security credentials. No automatic system fault was recorded during this interval.",
    finding: "The camera outage was manually initiated, not an automatic malfunction. The timing overlaps with the restricted-area access records.",
    timeline: [
      ["22:08", "The camera system is manually overridden using Mert Yılmaz's credentials."],
      ["22:18", "The camera system is restored."]
    ]
  },
  {
    id: 7,
    title: "Maintenance Report",
    type: "OFFICIAL REPORT",
    time: "AFTER THE INCIDENT",
    description: "Mert Yılmaz's maintenance report describes the camera outage as an automatic technical failure. However, the security system log records a manual override using his credentials. The report does not mention the manual action.",
    finding: "Mert's written explanation conflicts with the system record. Someone may have asked him to create the camera blind spot and then conceal how it happened.",
    timeline: [
      ["AFTER THE INCIDENT", "Mert files a maintenance report describing an automatic fault."]
    ]
  },
  {
    id: 8,
    title: "Conservation Material Report",
    type: "PHYSICAL EXAMINATION",
    time: "THE FOLLOWING MORNING",
    description: "A later examination of the padded crate found fresh compression marks and traces of pigment consistent with contact with a framed artwork. The marks suggest that the crate may have carried a large framed object. The examination cannot establish the exact time of use, identify the person who handled it, or prove the route by which it was moved.",
    finding: "The crate may have been used to move the painting. The physical report supports the possibility of an internal transfer, but it does not identify who carried it.",
    timeline: [
      ["THE FOLLOWING MORNING", "A conservation crate is found with marks and traces consistent with contact with a framed artwork."]
    ]
  }
];

const $ = (id) => document.getElementById(id);
const inspected = new Set();
let currentEvidence = null;
let selectedVerdict = null;

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
  const target = $(id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

document.querySelectorAll("[data-screen]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.screen));
});

function portraitSVG(person) {
  const hairShapes = {
    director: `<path d="M62 92 Q55 22 116 18 Q180 15 181 91 L166 75 Q151 48 111 53 Q83 53 70 78Z" fill="${person.hair}"/>`,
    curator: `<path d="M57 100 Q42 23 112 16 Q180 13 186 90 L174 168 L155 122 L160 70 Q120 42 78 70 L76 140 L58 160Z" fill="${person.hair}"/>`,
    security: `<path d="M63 83 Q65 20 120 22 Q169 20 178 82 L161 65 Q116 44 78 67Z" fill="${person.hair}"/>`,
    collector: `<path d="M61 85 Q65 23 121 24 Q169 23 178 83 Q146 49 105 59 Q82 62 61 85Z" fill="${person.hair}"/>`
  };

  const details = person.id === "adnan"
    ? '<path d="M92 126 Q119 143 146 126" fill="none" stroke="#50362e" stroke-width="5"/>'
    : person.id === "mert"
    ? '<path d="M88 126 Q119 138 149 126" fill="none" stroke="#29201c" stroke-width="4"/>'
    : person.id === "veysel"
    ? '<path d="M88 126 Q119 136 149 126" fill="none" stroke="#62534a" stroke-width="4"/>'
    : '<path d="M91 126 Q119 139 148 126" fill="none" stroke="#754d43" stroke-width="3"/>';

  return `<svg viewBox="0 0 240 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${person.name}">
    <defs><linearGradient id="bg-${person.id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${person.bg}"/><stop offset="1" stop-color="#171615"/></linearGradient></defs>
    <rect width="240" height="280" fill="url(#bg-${person.id})"/>
    <circle cx="184" cy="49" r="62" fill="#d1ad77" opacity=".08"/>
    <path d="M34 280 Q42 202 83 190 L155 190 Q200 205 211 280Z" fill="${person.outfit}"/>
    <path d="M96 176 L143 176 L160 215 L119 245 L80 215Z" fill="${person.skin}"/>
    <ellipse cx="120" cy="112" rx="61" ry="75" fill="${person.skin}"/>
    ${hairShapes[person.style]}
    <path d="M83 105 Q96 98 108 105 M133 105 Q145 98 158 105" fill="none" stroke="#382b26" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="98" cy="115" rx="4" ry="5" fill="#211b18"/>
    <ellipse cx="145" cy="115" rx="4" ry="5" fill="#211b18"/>
    <path d="M119 116 L112 139 L124 141" fill="none" stroke="#9b6d58" stroke-width="3" stroke-linecap="round"/>
    ${details}
    <path d="M81 195 L119 228 L157 195" fill="none" stroke="#c3a16c" stroke-width="2" opacity=".55"/>
    <path d="M0 259 H240" stroke="#c3a16c" opacity=".25"/>
    <text x="14" y="271" fill="#d8c6aa" font-size="7" font-family="monospace" letter-spacing="2">CASE 001 / PERSON OF INTEREST</text>
  </svg>`;
}

function renderSuspects() {
  $("suspectGrid").innerHTML = suspects.map(person => `
    <button class="suspect-card" data-suspect="${person.id}">
      <div class="portrait">${portraitSVG(person)}</div>
      <div class="suspect-info">
        <span class="role">${person.role}</span>
        <h3>${person.name}</h3>
        <p>${person.description}</p>
        <span class="card-link">OPEN PROFILE ↗</span>
      </div>
    </button>
  `).join("");

  document.querySelectorAll("[data-suspect]").forEach(button => {
    button.addEventListener("click", () => openSuspect(button.dataset.suspect));
  });
}

function renderSuspectReference() {
  $("suspectReference").innerHTML = suspects.map(person => `
    <button class="reference-card" data-suspect="${person.id}">
      <span class="reference-portrait">${portraitSVG(person)}</span>
      <span><span class="role">${person.role}</span><strong>${person.name}</strong></span>
    </button>
  `).join("");

  $("suspectReference").querySelectorAll("[data-suspect]").forEach(button => {
    button.addEventListener("click", () => openSuspect(button.dataset.suspect));
  });
}

function openSuspect(id) {
  const person = suspects.find(item => item.id === id);
  if (!person) return;

  $("modalPortrait").innerHTML = portraitSVG(person);
  $("modalRole").textContent = `${person.role} · AGE ${person.age}`;
  $("modalName").textContent = person.name;
  $("modalStatement").textContent = `“${person.statement}”`;
  $("modalNote").textContent = person.note;
  $("suspectModal").classList.add("open");
  $("suspectModal").setAttribute("aria-hidden", "false");
}

function closeSuspect() {
  $("suspectModal").classList.remove("open");
  $("suspectModal").setAttribute("aria-hidden", "true");
}

$("closeModal").addEventListener("click", closeSuspect);
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeSuspect));

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeSuspect();
});

function isUnlocked(item) {
  return item.id === 1 || inspected.has(item.id - 1);
}

function renderEvidence() {
  $("evidenceList").innerHTML = evidence.map(item => {
    const unlocked = isUnlocked(item);
    const reviewed = inspected.has(item.id);
    const selected = currentEvidence === item.id;

    return `
      <button class="evidence-card ${selected ? "selected" : ""}" data-evidence="${item.id}" ${unlocked ? "" : "disabled"}>
        <span class="evidence-number">${String(item.id).padStart(2, "0")}</span>
        <span>
          <strong>${unlocked ? item.title : "Locked evidence"}</strong>
          <small>${unlocked ? (reviewed ? "✓ REVIEWED · " : "AVAILABLE · ") + item.type : "COMPLETE PREVIOUS FILES"}</small>
        </span>
      </button>
    `;
  }).join("");

  $("evidenceList").querySelectorAll("[data-evidence]").forEach(button => {
    button.addEventListener("click", () => openEvidence(Number(button.dataset.evidence)));
  });

  $("progressCount").textContent = `${inspected.size} / 8 FILES REVIEWED`;
  $("progressBar").style.width = `${(inspected.size / 8) * 100}%`;
  $("verdictButton").disabled = inspected.size !== evidence.length;

  $("unlockHint").textContent = inspected.size === 8
    ? "All files reviewed. You can now make your verdict."
    : `${8 - inspected.size} file(s) remain. Review each unlocked file to continue.`;

  renderTimeline();
}

function openEvidence(id) {
  const item = evidence.find(entry => entry.id === id);
  if (!item || !isUnlocked(item)) return;

  currentEvidence = id;
  inspected.add(id);

  $("evidenceDetail").innerHTML = `
    <div class="document-meta">EVIDENCE FILE ${String(item.id).padStart(2, "0")} / ${item.type} / ${item.time}</div>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    ${item.quote ? `<p class="document-quote">${item.quote}</p>` : ""}
    <div class="modal-note">
      <span>INVESTIGATIVE FINDING</span>
      <p>${item.finding}</p>
    </div>
  `;

  renderEvidence();
  $("evidenceDetail").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderTimeline() {
  const events = [];

  evidence.forEach(item => {
    if (inspected.has(item.id)) {
      item.timeline.forEach(event => {
        events.push({ time: event[0], text: event[1] });
      });
    }
  });

  if (!events.length) {
    $("timeline").innerHTML = '<p class="empty-state">Review evidence files to build the timeline.</p>';
    return;
  }

  $("timeline").innerHTML = events.map(event => `
    <div class="timeline-event">
      <time>${event.time}</time>
      <p>${event.text}</p>
    </div>
  `).join("");
}

function renderVerdictOptions() {
  $("verdictGrid").innerHTML = suspects.map(person => `
    <button class="verdict-option ${selectedVerdict === person.id ? "selected" : ""}" data-verdict="${person.id}">
      <div class="portrait">${portraitSVG(person)}</div>
      <div class="suspect-info">
        <span class="role">${person.role}</span>
        <h3>${person.name}</h3>
        <p>${person.description}</p>
      </div>
    </button>
  `).join("");

  $("verdictGrid").querySelectorAll("[data-verdict]").forEach(button => {
    button.addEventListener("click", () => {
      selectedVerdict = button.dataset.verdict;
      $("verdictError").textContent = "";
      renderVerdictOptions();
    });
  });
}

function renderReveal() {
  const correct = selectedVerdict === "elif";

  $("revealStatus").textContent = correct ? "CASE SOLVED" : "VERDICT RECORDED";

  $("revealTitle").innerHTML = correct
    ? 'You found the truth.<br><em>The painting was moved.</em>'
    : 'The evidence tells<br><em>another story.</em>';

  $("revealLead").textContent = correct
    ? "Elif Demir physically moved The Last Light. But she was not the person who planned the unauthorized sale."
    : "The person you selected was part of the story, but the evidence points to someone else as the person who physically moved the painting.";

  $("fullExplanation").innerHTML = `
    <p><strong>What really happened?</strong> Adnan Kaya, the gallery director, was in serious financial trouble. He arranged an unauthorized private sale of The Last Light to Veysel Arslan. The gallery had permission to exhibit the painting, not to sell it. Adnan planned to use the camera outage and a false theft report to conceal the transfer.</p>

    <p>Adnan instructed Mert Yılmaz, the security officer, to create a ten-minute blind spot. Mert manually disabled the cameras using his own credentials and later filed a maintenance report that falsely described the outage as an automatic fault.</p>

    <p>Veysel Arslan, the art collector, had agreed to a private purchase. He was the intended buyer, but the evidence does not show that he knew Adnan planned to report the painting as stolen. He left before the planned handover.</p>

    <p>Elif Demir, the chief curator, had coordinated the loan from the private family collection, arranged the painting's arrival with the transport team, and supervised its installation. Through her work, she knew the conservation procedures and the handling equipment. She discovered enough of Adnan's plan to understand that the painting was about to be transferred without the owner's permission.</p>

    <p><strong>Elif moved the painting into the padded conservation crate and concealed it in the conservation area.</strong> Her intention was to prevent the unauthorized sale, not to steal the artwork. However, she did not immediately report what she had done. That decision made her part of the mystery and allowed suspicion to fall on everyone.</p>

    <p>The transport inventory and material examination support the possibility that the crate was used to move a framed artwork. They do not identify the person who handled it. The answer comes from combining the access record, the statements, the planned transfer, and the physical evidence — not from one document naming Elif.</p>
  `;

  const roles = [
    {
      name: "Adnan Kaya",
      role: "GALLERY DIRECTOR · THE PLANNER",
      action: "Used his authority as director to arrange an unauthorized private sale of the painting.",
      motive: "He was facing serious debts and wanted the money from the private transaction. He planned to hide the transfer behind a false theft report."
    },
    {
      name: "Elif Demir",
      role: "CHIEF CURATOR · THE PERSON WHO MOVED IT",
      action: "Coordinated the painting's loan and arrival, then moved it into a padded conservation crate and concealed it in the conservation area.",
      motive: "She wanted to prevent the unauthorized sale and protect the artwork's return to its rightful owner. She kept her intervention secret instead of reporting the plan immediately."
    },
    {
      name: "Mert Yılmaz",
      role: "SECURITY OFFICER · THE ACCESS ENABLER",
      action: "Manually disabled the cameras using his security credentials and later filed a misleading maintenance report.",
      motive: "He followed Adnan's instruction and helped create the blind spot needed for the planned transfer."
    },
    {
      name: "Veysel Arslan",
      role: "ART COLLECTOR · THE INTENDED BUYER",
      action: "Agreed to a private purchase with Adnan and discussed an undocumented transfer.",
      motive: "He wanted to acquire the valuable artwork. The available evidence does not establish that he knew about Adnan's plan to stage a theft report or Elif's intervention."
    }
  ];

  $("rolesGrid").innerHTML = roles.map(person => `
    <article class="role-item">
      <span class="role">${person.role}</span>
      <h3>${person.name}</h3>
      <p><strong>What they did:</strong> ${person.action}</p>
      <p><strong>Why:</strong> ${person.motive}</p>
    </article>
  `).join("");
}

$("verdictButton").addEventListener("click", () => {
  if (inspected.size !== evidence.length) return;

  selectedVerdict = null;
  $("verdictError").textContent = "";
  renderVerdictOptions();
  showScreen("verdict");
});

$("submitVerdict").addEventListener("click", () => {
  if (!selectedVerdict) {
    $("verdictError").textContent = "Select a suspect before locking in your verdict.";
    return;
  }

  renderReveal();
  showScreen("reveal");
});

$("restartGame").addEventListener("click", () => {
  inspected.clear();
  currentEvidence = null;
  selectedVerdict = null;

  $("evidenceDetail").innerHTML = `
    <div class="detail-placeholder">
      <span class="detail-symbol">✳</span>
      <p>SELECT AN EVIDENCE FILE</p>
      <small>Each document reveals another part of the case.</small>
    </div>
  `;

  renderEvidence();
  showScreen("home");
});

renderSuspects();
renderSuspectReference();
renderEvidence();
