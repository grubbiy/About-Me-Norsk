"use strict";

const translations = {
  no: {
    "nav.aria": "Hovedmeny",
    "nav.about": "Om",
    "nav.projects": "Prosjekt",
    "nav.skills": "Ferdigheiter",
    "nav.experience": "Erfaring",
    "nav.lab": "Lab",
    "nav.contact": "Kontakt",
    "toggle.themeAria": "Bytt tema",
    "toggle.langAria": "Bytt språk",
    "toggle.themeLight": "Lys",
    "toggle.themeDark": "Mørk",
    "hero.eyebrow": "Om meg",
    "hero.tagline": "Student IT • Cybersecurity • Zig • Homelab/Proxmox",
    "hero.intro": "IT-student med fokus på læring, trygg teknologi og praktiske demoar.",
    "hero.helper": "AI er eit verktøy eg brukar for å bygge raskt og lære betre.",
    "hero.photoAlt": "Profilbilde av Vegard Laland",
    "cta.github": "GitHub",
    "cta.projects": "Prosjekt",
    "cta.contact": "Kontakt",
    "reality.text": "Eg byggjer raskt med AI-hjelp, og brukar det aktivt for å lære. Prosjekta under har tydeleg status (idé / planlagt / prototype / i arbeid).",
    "section.about.title": "Om",
    "section.about.subtitle": "Kort, ærleg oversikt over kva eg kan og kva eg lærer no.",
    "about.p1": "Eg er ein motivert IT-student som likar cybersikkerheit, logging/monitorering og små lab-demoar. Eg er open om at eg framleis byggjer grunnleggande ferdigheiter.",
    "about.p2": "AI-verktøy gir meg tempo og læring, men eg jobbar aktivt med å forstå kjernen i det eg byggjer. Eg er nysgjerrig, lærer raskt og er svært motivert.",
    "about.li1": "Zig er eit læringsprosjekt; mykje av øvingskoden er skriven av meg.",
    "about.li2": "Nettverk: grunnleggande forståing (ikkje ekspert).",
    "about.li3": "Proxmox/VMs: får meir og meir kontroll og erfaring.",
    "about.li4": "Logging/monitorering: kan setje opp med AI-hjelp, framleis i læring.",
    "section.projects.title": "Prosjekt",
    "section.projects.subtitle": "Status er ærleg: fleire idear er planlagt eller ikkje starta enno.",
    "projects.techFocus": "Teknisk fokus",
    "projects.nextSteps": "Neste steg",
    "projects.miniSoc.title": "Mini-SOC AI",
    "projects.miniSoc.status": "Planlagt / ikkje starta",
    "projects.miniSoc.desc": "Framtidig Mini-SOC demo for å samle loggar, lage AI-samandrag og enkle hendingsrapportar i ein trygg, read-only lab.",
    "projects.miniSoc.tech1": "Logginnsamling (lab) og grunnleggande parsing",
    "projects.miniSoc.tech2": "AI-oppsummering og prioritering",
    "projects.miniSoc.tech3": "Rapportmal og tidslinjevising",
    "projects.miniSoc.next1": "Skissere datamodell og loggformat",
    "projects.miniSoc.next2": "Bygge ein liten dummy-datastraum",
    "projects.pentest.title": "Pentest AI Killer",
    "projects.pentest.status": "Planlagt / ikkje starta",
    "projects.pentest.desc": "Konsept for ein etisk, lab-only assistent som hjelper med sjekklister, dokumentasjon og rapportering i kontrollerte miljø.",
    "projects.pentest.tech1": "Etisk rammeverk og avgrensa scope",
    "projects.pentest.tech2": "Rapportering og risikovurdering",
    "projects.pentest.tech3": "Trygge lab-scenario",
    "projects.pentest.next1": "Definere brukstilfelle og grenser",
    "projects.pentest.next2": "Lage ein safe demo utan skade",
    "projects.vfe.title": "VOD/eSports analysis app (VFE)",
    "projects.vfe.status": "Prototype (AI-generert)",
    "projects.vfe.desc": "Dette vart i stor grad generert av AI; mi rolle var å styre/orkestrere, teste og definere krav. Det er ein tidleg prototype for analyse av VOD og statistikk.",
    "projects.vfe.tech1": "Agent-orkestrering og kravstyring",
    "projects.vfe.tech2": "Metadata-tagging og analyseflyt",
    "projects.vfe.tech3": "Frontend-prototype og UX",
    "projects.vfe.next1": "Rydde scope og dokumentere beslutningar",
    "projects.vfe.next2": "Teste mot ekte brukarbehov",
    "projects.hastevpn.title": "HasteVPN",
    "projects.hastevpn.status": "Konsept / design-idé",
    "projects.hastevpn.desc": "Konsept for ei VPN-marknadsplass med enkel onboarding og tydelege sikkerheitsval. Ikkje bygd, berre design-idéar.",
    "projects.hastevpn.tech1": "Onboarding-flyt og tillit",
    "projects.hastevpn.tech2": "Sikkerheitskrav og vurderingar",
    "projects.hastevpn.tech3": "Brukaroppleving og ansvar",
    "projects.hastevpn.next1": "Skissere brukarreise og risiko",
    "projects.hastevpn.next2": "Sjekke kva som krev compliance",
    "section.skills.title": "Ferdigheiter",
    "section.skills.subtitle": "Komfortnivå og kort forklaring for kvar ferdigheit.",
    "skills.ai.name": "AI-assistert utvikling",
    "skills.ai.desc": "Brukar AI dagleg for å lære og bygge raskare.",
    "skills.zig.name": "Zig",
    "skills.zig.desc": "Læringsprosjekt; mykje eigenkoding i Zig.",
    "skills.linux.name": "Linux (Arch)",
    "skills.linux.desc": "Dagleg bruk, grunnleggande drift og feilsøking.",
    "skills.proxmox.name": "Proxmox/VMs",
    "skills.proxmox.desc": "Får meir og meir kontroll på VM-oppsett.",
    "skills.network.name": "Nettverk",
    "skills.network.desc": "Grunnleggande forståing av adressering og routing.",
    "skills.logging.name": "Logging/monitorering",
    "skills.logging.desc": "Kan setje opp med AI-hjelp, lærer vidare.",
    "skills.web.name": "Web fundamentals",
    "skills.web.desc": "HTML/CSS/JS basics, byggjer enkle sider.",
    "levels.beginner": "Nybegynnar",
    "levels.developing": "Utviklande",
    "levels.comfortable": "Komfortabel",
    "section.experience.title": "Erfaring",
    "section.experience.subtitle": "Trygg, ikkje-sensitiv oversikt.",
    "exp.green.time": "No – pågåande",
    "exp.green.title": "IT Student – Green Mountain",
    "exp.green.desc": "Praktisk læring, IT-oppgåver og innblikk i profesjonelt miljø. Ingen interne detaljar.",
    "exp.school.time": "2025 – pågåande",
    "exp.school.title": "VG2 IT – Gand vidaregåande skule",
    "exp.school.desc": "Skuleløp med fokus på IT-grunnlag og praktiske oppgåver.",
    "exp.avinor.time": "2023 • 1 veke",
    "exp.avinor.title": "Driftsteknikar (jobbuke) – Avinor, Sola flyplass",
    "exp.avinor.desc": "Assisterte med IT-drift og feilsøking i profesjonelt miljø.",
    "section.lab.title": "Skule-lab i Proxmox",
    "section.lab.subtitle": "Labben er bygd for kursarbeid og læring, ikkje som enterprise-homelab.",
    "lab.desc": "Dette er ei skule-lab i Proxmox der eg testar grunnleggande drift, trygging og monitorering i kontrollerte oppsett.",
    "lab.stackTitle": "Stack (høgt nivå)",
    "lab.stack1": "pfSense for routing og segmentering",
    "lab.stack2": "TrueNAS for lagring og deling",
    "lab.stack3": "Windows Server/AD (lab)",
    "lab.stack4": "Ubuntu-tenester og enkle automasjonar",
    "lab.stack5": "Logg-pipeline og AI-verktøy-eksperiment",
    "section.contact.title": "Kontakt",
    "section.contact.subtitle": "Enkle knappar, ingen skjema.",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn (placeholder)",
    "contact.email": "E-post (placeholder)",
    "contact.placeholder": "Placeholder",
    "footer.note": "Laga for GitHub Pages. Statusmerkingar er meinte å vere ærlege."
  },
  en: {
    "nav.aria": "Main navigation",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.lab": "Lab",
    "nav.contact": "Contact",
    "toggle.themeAria": "Toggle theme",
    "toggle.langAria": "Toggle language",
    "toggle.themeLight": "Light",
    "toggle.themeDark": "Dark",
    "hero.eyebrow": "About me",
    "hero.tagline": "IT Student • Cybersecurity • Zig • Homelab/Proxmox",
    "hero.intro": "IT student focused on learning, safe tech, and practical demos.",
    "hero.helper": "AI is a tool I use to build faster and learn better.",
    "hero.photoAlt": "Portrait of Vegard Laland",
    "cta.github": "GitHub",
    "cta.projects": "Projects",
    "cta.contact": "Contact",
    "reality.text": "I build fast with AI help, and use it actively to learn. The projects below have clear status labels (idea / planned / prototype / in progress).",
    "section.about.title": "About",
    "section.about.subtitle": "Short, honest overview of what I can do and what I am learning now.",
    "about.p1": "I am a motivated IT student who likes cybersecurity, logging/monitoring, and small lab demos. I am open about still building my fundamentals.",
    "about.p2": "AI tools give me speed and learning, but I work actively to understand the core of what I build. I am curious, learn fast, and stay highly motivated.",
    "about.li1": "Zig is a learning project; much of the practice code is written by me.",
    "about.li2": "Networking: basic understanding (not an expert).",
    "about.li3": "Proxmox/VMs: getting more and more confident.",
    "about.li4": "Logging/monitoring: can set up with AI help, still learning.",
    "section.projects.title": "Projects",
    "section.projects.subtitle": "Honest status: several ideas are planned or not started yet.",
    "projects.techFocus": "Tech focus",
    "projects.nextSteps": "Next steps",
    "projects.miniSoc.title": "Mini-SOC AI",
    "projects.miniSoc.status": "Planned / not started",
    "projects.miniSoc.desc": "Future Mini-SOC demo concept to collect logs, create AI summaries, and simple incident reports in a safe, read-only lab.",
    "projects.miniSoc.tech1": "Log collection (lab) and basic parsing",
    "projects.miniSoc.tech2": "AI summarization and prioritization",
    "projects.miniSoc.tech3": "Report templates and timeline view",
    "projects.miniSoc.next1": "Sketch data model and log formats",
    "projects.miniSoc.next2": "Build a small dummy data stream",
    "projects.pentest.title": "Pentest AI Killer",
    "projects.pentest.status": "Planned / not started",
    "projects.pentest.desc": "Concept for an ethical, lab-only assistant to help with checklists, documentation, and reporting in controlled environments.",
    "projects.pentest.tech1": "Ethical framework and scoped boundaries",
    "projects.pentest.tech2": "Reporting and risk assessment",
    "projects.pentest.tech3": "Safe lab scenarios",
    "projects.pentest.next1": "Define use cases and limits",
    "projects.pentest.next2": "Create a safe demo without harm",
    "projects.vfe.title": "VOD/eSports analysis app (VFE)",
    "projects.vfe.status": "Prototype (AI-generated)",
    "projects.vfe.desc": "This was largely generated by AI; my role was to orchestrate, test, and define requirements. It is an early prototype for VOD analysis and stats.",
    "projects.vfe.tech1": "Agent orchestration and requirements",
    "projects.vfe.tech2": "Metadata tagging and analysis flow",
    "projects.vfe.tech3": "Frontend prototype and UX",
    "projects.vfe.next1": "Tighten scope and document decisions",
    "projects.vfe.next2": "Test against real user needs",
    "projects.hastevpn.title": "HasteVPN",
    "projects.hastevpn.status": "Concept / design idea",
    "projects.hastevpn.desc": "Concept for a VPN marketplace with simple onboarding and explicit security choices. Not built, only design ideas.",
    "projects.hastevpn.tech1": "Onboarding flow and trust",
    "projects.hastevpn.tech2": "Security requirements and evaluation",
    "projects.hastevpn.tech3": "User experience and accountability",
    "projects.hastevpn.next1": "Sketch user journey and risk",
    "projects.hastevpn.next2": "Check what would need compliance",
    "section.skills.title": "Skills",
    "section.skills.subtitle": "Comfort level and short context for each skill.",
    "skills.ai.name": "AI-assisted development",
    "skills.ai.desc": "Use AI daily to learn and build faster.",
    "skills.zig.name": "Zig",
    "skills.zig.desc": "Learning project; lots of self-written Zig practice code.",
    "skills.linux.name": "Linux (Arch)",
    "skills.linux.desc": "Daily use, basic operations and troubleshooting.",
    "skills.proxmox.name": "Proxmox/VMs",
    "skills.proxmox.desc": "Getting more confident with VM setups.",
    "skills.network.name": "Networking",
    "skills.network.desc": "Basic understanding of addressing and routing.",
    "skills.logging.name": "Logging/monitoring",
    "skills.logging.desc": "Can set up with AI assistance, still learning.",
    "skills.web.name": "Web fundamentals",
    "skills.web.desc": "HTML/CSS/JS basics for simple sites.",
    "levels.beginner": "Beginner",
    "levels.developing": "Developing",
    "levels.comfortable": "Comfortable",
    "section.experience.title": "Experience",
    "section.experience.subtitle": "Safe, non-sensitive overview.",
    "exp.green.time": "Now – ongoing",
    "exp.green.title": "IT Student – Green Mountain",
    "exp.green.desc": "Hands-on learning, IT tasks, and exposure to a professional environment. No internal details.",
    "exp.school.time": "2025 – ongoing",
    "exp.school.title": "VG2 IT – Gand Upper Secondary School",
    "exp.school.desc": "School track focused on IT foundations and practical assignments.",
    "exp.avinor.time": "2023 • 1 week",
    "exp.avinor.title": "Operations technician (job week) – Avinor, Sola airport",
    "exp.avinor.desc": "Assisted with IT operations and troubleshooting in a professional environment.",
    "section.lab.title": "School lab in Proxmox",
    "section.lab.subtitle": "Built for coursework and learning, not a hardened enterprise homelab.",
    "lab.desc": "This is a school lab in Proxmox where I test basic operations, security, and monitoring in controlled setups.",
    "lab.stackTitle": "Stack (high level)",
    "lab.stack1": "pfSense for routing and segmentation",
    "lab.stack2": "TrueNAS for storage and sharing",
    "lab.stack3": "Windows Server/AD (lab)",
    "lab.stack4": "Ubuntu services and basic automation",
    "lab.stack5": "Log pipeline and AI tooling experiments",
    "section.contact.title": "Contact",
    "section.contact.subtitle": "Buttons only, no forms.",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn (placeholder)",
    "contact.email": "Email (placeholder)",
    "contact.placeholder": "Placeholder",
    "footer.note": "Built for GitHub Pages. Status badges aim to be honest."
  }
};

const themeToggle = document.querySelector("#theme-toggle");
const langToggle = document.querySelector("#lang-toggle");

const applyTheme = (theme, lang = "no") => {
  document.documentElement.setAttribute("data-theme", theme);
  const dictionary = translations[lang] || translations.no;
  const nextLabel = theme === "dark" ? dictionary["toggle.themeLight"] : dictionary["toggle.themeDark"];
  if (themeToggle) {
    themeToggle.textContent = nextLabel || (theme === "dark" ? "Lys" : "Mørk");
  }
};

const setLanguage = (lang) => {
  const dictionary = translations[lang] || translations.no;
  document.documentElement.lang = lang === "en" ? "en" : "no";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dictionary[key]) {
      el.setAttribute("alt", dictionary[key]);
    }
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (dictionary[key]) {
      el.setAttribute("title", dictionary[key]);
    }
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dictionary[key]) {
      el.setAttribute("aria-label", dictionary[key]);
    }
  });
  langToggle.textContent = lang === "en" ? "NO" : "EN";
  const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(activeTheme, lang);
};

const storedTheme = localStorage.getItem("theme");
const storedLang = localStorage.getItem("lang") || "no";
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

if (!storedTheme) {
  localStorage.setItem("theme", initialTheme);
}

applyTheme(initialTheme, storedLang);
setLanguage(storedLang);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    const currentLang = document.documentElement.lang === "en" ? "en" : "no";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme, currentLang);
  });
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const currentLang = document.documentElement.lang === "en" ? "en" : "no";
    const nextLang = currentLang === "en" ? "no" : "en";
    localStorage.setItem("lang", nextLang);
    setLanguage(nextLang);
  });
}
