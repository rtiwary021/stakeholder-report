export const SENTIMENT = {
  positive: "#3F7A4F",
  mixed: "#FF914D",
  concerned: "#E5533D",
} as const;

export const ORANGE = "#FD5108";
export const ORANGE2 = "#FE7C39";
export const DARK_ORANGE = "#E24A00";
export const GREY = "#6E6E6E";
export const LIGHT_GREY = "#CBD1D6";
export const WAVE_GREY = "#A1A8B3";

export const erpMeta = {
  stakeholders: 18,
  roleLevels: 5,
  themes: 8,
  avgDuration: "26 min",
};

export const methodologyIntro =
  "We interviewed 18 stakeholders spanning every level from Associate to Director, covering 8 distinct themes in depth to gather perspectives on ERP agent adoption from current workload and awareness, through trust and barriers, to peer influence and success measures.";

export const roleMix = [
  { name: "Associates", value: 16, color: ORANGE },
  { name: "Senior Associates", value: 22, color: ORANGE2 },
  { name: "Managers", value: 17, color: "#FFAA72" },
  { name: "Senior Managers", value: 17, color: WAVE_GREY },
  { name: "Directors", value: 28, color: "#B5BCC4" },
];

export const themesCovered = [
  "Current Role & Time Spent",
  "Awareness & Influence",
  "Agent-by-Agent Usefulness",
  "Trust & Barriers to Adoption",
  "Working Preferences",
  "Learning & Capability Building",
  "Communication",
  "Success Measures",
];

export type SummaryPoint = { title: string; body: string };

export const working: SummaryPoint[] = [
  {
    title: "Stakeholders feel good about this overall",
    body: "96% of all responses across the 18 interviews were positive or open-minded. The one area stakeholders were more cautious was around Trust (83%), as to the other themes, it was close to unanimous.",
  },
  {
    title: "Stakeholders want to learn about this, not avoid it",
    body: "16 of 18 stakeholders are ready and willing to be trained. Nobody pushed back on the idea of learning new tools.",
  },
  {
    title: "Most of the practice has no alarming concerns",
    body: "Associates, Senior Associates and Directors all show 100% positive-or-mixed sentiment.",
  },
  {
    title: "Stakeholders want to help, not just go along with it",
    body: "15 of 18 stakeholders describe real enthusiasm and willingness to champion or test agents, that is real enthusiasm, not just tolerance.",
  },
  {
    title: "One agent stands out as the clear starting point",
    body: "The dashboard is named most valuable by 61% of stakeholders — more than double any other agent. It is the safest, clearest place to begin the rollout.",
  },
];

export const workTowards: SummaryPoint[] = [
  {
    title: "Some hesitation exists, but only at two levels",
    body: "Senior Managers and Managers are mainly the two groups with some mixed concerns.",
  },
  {
    title: "Concern comes from two different places",
    body: "Two Senior Managers want to keep making their own judgment calls, not hand decisions to AI. Separately, one Manager wants proof the AI's information sources are reliable before trusting its output.",
  },
  {
    title: "Stakeholders need to see proof, not just hear promises of accuracy",
    body: "These are not hypothetical fears, stakeholders told us about specific times AI gave them wrong or made-up information. They need to see it work correctly, not just be told it will.",
  },
  {
    title: "Some stakeholders already built their own AI tools",
    body: "Three stakeholders have built their own AI tools to do some similar work. They will naturally compare our official tools to what they made and expect ours to be better.",
  },
  {
    title: "Stakeholders are already telling us how to sequence this",
    body: "Four stakeholders, without being asked, gave the exact same warning: do not launch too many tools at once. That is specific, repeated advice, not just a vague feeling.",
  },
];

export const sentimentByTheme = [
  { name: "Awareness / Value Proposition", positive: 14, mixed: 4, concerned: 0 },
  { name: "Trust / Barriers to Adoption", positive: 7, mixed: 8, concerned: 3 },
  { name: "Learning Readiness", positive: 16, mixed: 2, concerned: 0 },
  { name: "Future / Champion", positive: 15, mixed: 3, concerned: 0 },
];

export const sentimentIntro =
  "From the 18 stakeholder interviews, we found that sentiment is overwhelmingly positive across every theme — the one place caution concentrates is Trust/Barriers, raised by three people across two role levels, for two distinct reasons.";

export const whatToWatch = [
  { stat: "96%", body: "of all coded theme responses were positive or mixed, not concerned." },
  {
    stat: "3 of 18",
    body: "raise the one real caution — two protect their independent judgment, one flags unverified AI inputs.",
  },
  {
    stat: "#1",
    body: "most consistent theme: several stakeholders are already running their own self-built AI workflows.",
  },
];

export type Stage = "concern" | "exploration" | "acceptance" | "commitment" | "not-assessed";

export const STAGES: { id: Stage; label: string; color: string }[] = [
  { id: "concern", label: "Concern / Resistance", color: "#E5533D" },
  { id: "exploration", label: "Exploration (mixed)", color: "#FF914D" },
  { id: "acceptance", label: "Acceptance / Engagement", color: "#FFBF1F" },
  { id: "commitment", label: "Commitment", color: "#3F7A4F" },
  { id: "not-assessed", label: "Not assessed", color: "#A1A8B3" },
];

export type HeatRole = {
  role: string;
  n: number;
  /** Degree of impact, 0–10 (x-axis) */
  x: number;
  /** Direct impact on service delivery, 0–10 (y-axis) */
  y: number;
  /** Relative change-curve impact (bubble size) */
  size: number;
  stage: Stage;
  insight: string;
};

export const heatMap: HeatRole[] = [
  {
    role: "Associates",
    n: 3,
    x: 9,
    y: 7.4,
    size: 9,
    stage: "commitment",
    insight: "Dashboard and meeting-recap value rated highest across all three; zero concern voiced at this level.",
  },
  {
    role: "Sr. Associates",
    n: 4,
    x: 7.8,
    y: 8.6,
    size: 7.6,
    stage: "commitment",
    insight:
      "Most enthusiastic cohort — already building personal AI tools and dashboards; eager to test and champion early.",
  },
  {
    role: "Managers",
    n: 3,
    x: 6.5,
    y: 7.2,
    size: 6.6,
    stage: "exploration",
    insight:
      "Already running sophisticated self-built AI workflows; one Manager separately raises not trusting unverified AI inputs.",
  },
  {
    role: "Sr. Managers",
    n: 3,
    x: 5.2,
    y: 5.5,
    size: 6.8,
    stage: "concern",
    insight:
      "Carries real concern alongside Managers — two of three explicitly protect their own judgment, wary of over-reliance on AI.",
  },
  {
    role: "Directors",
    n: 5,
    x: 3.6,
    y: 4.5,
    size: 4.6,
    stage: "commitment",
    insight:
      "Impact is managing multiple projects and pursuits at once; want more agents, not fewer — engagement letters, financials, remediation templates.",
  },
  {
    role: "P/MD",
    n: 0,
    x: 2.2,
    y: 2.2,
    size: 4.2,
    stage: "not-assessed",
    insight:
      "Not interviewed — position is a hypothesis to validate (pricing, pyramid and incentive decisions).",
  },
];

export const heatMapTakeaway =
  "Concern now touches two levels, for two different reasons — Senior Managers protecting independent judgment, a Manager wanting proof of input quality — while Associates, Senior Associates and Directors are fully bought in.";

export type Persona = {
  name: string;
  n: number;
  color: string;
  positive: number;
  mixed: number;
  concerned: number;
  positiveOrMixed: number;
  finding: string;
  topWave: string;
  waveQuote: string;
  waveAttr: string;
  waves: { w2: number; w3: number; w4: number };
  communication: string;
  training: string;
};

export const personas: Persona[] = [
  {
    name: "Engagement Leader",
    n: 5,
    color: ORANGE,
    positive: 85,
    mixed: 15,
    concerned: 0,
    positiveOrMixed: 100,
    finding:
      "Most positive and most expansionist — want more agents, not fewer (engagement letters, financials, remediation templates). Success measured in time reduction, not just adoption.",
    topWave: "Wave 3",
    waveQuote:
      "Tying wave-one activities together can generate that status report — there needs to be proper reference and linkage so a user can start trusting it.",
    waveAttr: "Director",
    waves: { w2: 1.3, w3: 2.1, w4: 1.8 },
    communication: "Peer-to-peer updates among directors, reinforced by visible leadership usage",
    training: "Executive briefings on what to ask teams and how to spot quality issues — not hands-on training",
  },
  {
    name: "Finance",
    n: 5,
    color: ORANGE2,
    positive: 60,
    mixed: 30,
    concerned: 10,
    positiveOrMixed: 90,
    finding:
      "Widest range of any persona — a self-built FDD-writer already exists, alongside skepticism that agents beat Loop and Claude, and a concern about trusting unverified AI inputs.",
    topWave: "Wave 2",
    waveQuote: "Honestly, the FDD, TDDs, those ones as well would be amazing.",
    waveAttr: "Senior Associate",
    waves: { w2: 2.0, w3: 1.3, w4: 1.7 },
    communication:
      "Direct proof-points (accuracy benchmarks) via email, given this group's own self-built tools; plus a running AI newsletter",
    training: "Hands-on FDD/TDD and test-case walkthroughs in finance examples",
  },
  {
    name: "SCM",
    n: 4,
    color: "#FFBF1F",
    positive: 69,
    mixed: 25,
    concerned: 6,
    positiveOrMixed: 94,
    finding:
      "A four-person group that still carries real signal — one stakeholder explicitly does not want AI replacing judgment on requirements; wants a 'second brain' for cross-topic connections, not a document generator.",
    topWave: "Wave 4",
    waveQuote: "Something like training content, that would be very helpful.",
    waveAttr: "Senior Associate",
    waves: { w2: 1.8, w3: 0.8, w4: 2.3 },
    communication: "Weekly email with links back to source documents, so findings stay independently verifiable",
    training: "Hands-on practice as each wave arrives, with validation drills to build trust in accuracy",
  },
  {
    name: "PM",
    n: 2,
    color: "#3F7A4F",
    positive: 75,
    mixed: 25,
    concerned: 0,
    positiveOrMixed: 100,
    finding:
      "Sees a use case beyond internal efficiency — structured requirements could auto-generate client-facing change-management materials, solving a recurring sales pain point.",
    topWave: "Wave 2",
    waveQuote:
      "Fit Gap Core would be great — that would save us a lot of time. FDD writer and TDD writers, that would be amazing.",
    waveAttr: "Manager",
    waves: { w2: 3.0, w3: 2.0, w4: 2.3 },
    communication: "Agent-specific updates, not generic practice-wide blasts regarding waves as a whole",
    training: "Walk through an actual go-live using the agents, focused on how status and escalation tasks shift",
  },
  {
    name: "Technical",
    n: 2,
    color: WAVE_GREY,
    positive: 75,
    mixed: 25,
    concerned: 0,
    positiveOrMixed: 100,
    finding:
      "Already running sophisticated self-built workflows (personal dashboard integrated with Teams and ADO); the open question is whether firm-built agents can beat what's already working.",
    topWave: "Wave 3",
    waveQuote:
      "Meeting scheduling and status reporting take a massive amount of time — if you can automate that away, that would be good.",
    waveAttr: "Associate",
    waves: { w2: 1.3, w3: 2.0, w4: 1.0 },
    communication: "Side-by-side comparisons of agent output vs. ad-hoc Claude use, addressed to stated skepticism",
    training: "Technical deep-dives on how agents are built and grounded, to evaluate build-vs-buy directly",
  },
];

export const personaIntro =
  "All three people who raised real concerns come from two Finance/SCM-adjacent personas — two Senior Managers protecting their own judgment, and a Manager wanting proof that AI inputs are clean.";

export const personaSoWhat =
  "Concern is concentrated in three individuals across two functions, for two different reasons — so the fix is targeted coaching on judgment for two, and input-quality proof for one, not a blanket campaign.";

export const personaSource =
  "Source: how people responded across Awareness, Trust, Learning and Future topics in the 18 completed interviews, grouped by each stakeholder's assigned persona.";

export const futureWavesSoWhat =
  "Each persona leans toward a different wave — Finance and PM want Wave 2 (build-phase documentation) first, Engagement Leaders and Technical want Wave 3 (program visibility), and SCM wants Wave 4 (quality and training) most.";

export const planSoWhat =
  "No single plan fits everyone — each persona needs a different message delivered a different way, and a different kind of training to back it up, not a one-size-fits-all rollout.";

export type ChartBar = { name: string; value: number; color?: string };
export type ErpChart = { title: string; color: string; data: ChartBar[] };
export type QuoteGroup = { q: string; quotes: { text: string; attr: string }[] };

export type ErpTheme = {
  number: number;
  label: string;
  title: string;
  icon: string;
  sowhat: string;
  groups: QuoteGroup[];
  charts: ErpChart[];
};

export const erpThemes: ErpTheme[] = [
  {
    number: 1,
    label: "Current Role & Time Spent",
    title: "Current Role, Workload & Where Time Goes",
    icon: "target",
    sowhat:
      "Chasing status updates is the single biggest time-sink named (6 of 18 stakeholders) — more than requirements drafting, scheduling, or meeting prep combined.",
    groups: [
      {
        q: "Tell me about your current role on your project. What are the main things you produce, decide or review in a typical week?",
        quotes: [
          {
            text: "I have a range of duties going from building FDDs, conducting or eliciting requirements from the clients, conducting interviews, conducting workshops … I really have to wear a lot of hats.",
            attr: "Manager",
          },
        ],
      },
      {
        q: "Think of a typical week. Where does time go on work that isn't advising the client or making decisions, such as writing up meetings, drafting requirements or designs, building plans and reports, or chasing status?",
        quotes: [
          {
            text: "I think chasing status is the biggest one … that is based on the data that I have. If my data is not up to date, then my status isn't up to date.",
            attr: "Director",
          },
        ],
      },
    ],
    charts: [
      {
        title: "Where non-advisory time goes (% of 18, top mentions)",
        color: ORANGE2,
        data: [
          { name: "Chasing status updates", value: 33 },
          { name: "Requirements & design drafting", value: 22 },
          { name: "Scheduling & client coordination", value: 11 },
          { name: "Meeting prep & quality review", value: 6 },
        ],
      },
    ],
  },
  {
    number: 2,
    label: "Awareness & Influence",
    title: "Prior Awareness and Influence",
    icon: "zap",
    sowhat:
      "Most stakeholders had heard little to nothing before this conversation (9 of 18 stakeholders) — but once walked through it, 39% shared that peers would influence them on using new AI delivery models and tools.",
    groups: [
      {
        q: "What had you heard before today, and from whom? What is unclear or sounds like jargon?",
        quotes: [
          {
            text: "I hadn't really heard of this before you reached out. When I read through the material, all of it was pretty clear.",
            attr: "Director",
          },
        ],
      },
      {
        q: "Whose view would most influence whether you try a new way of working?",
        quotes: [
          {
            text: "This has to be a top-down adoption curve. If you see your leaders using it on a daily basis and speaking about these agents and the necessity for it, everybody — senior managers, managers, senior associates, associates — will be influenced to use it.",
            attr: "Director",
          },
          {
            text: "The director on my project would influence me the most. He uses AI so much, so I've kind of adapted that from him — if the director uses it and implements it when they're teaching us their ways, it would be helpful.",
            attr: "Associate",
          },
        ],
      },
    ],
    charts: [
      {
        title: "Where prior awareness came from (% of 18)",
        color: ORANGE2,
        data: [
          { name: "Little to no prior awareness", value: 50, color: ORANGE2 },
          { name: "Heard via a colleague", value: 28, color: GREY },
          { name: "Heard via practice comms", value: 22, color: DARK_ORANGE },
        ],
      },
      {
        title: "Who influences adoption (% of 18, multi-mention)",
        color: ORANGE2,
        data: [
          { name: "Peers at a similar level", value: 39 },
          { name: "Leadership / directors / partners", value: 33 },
          { name: "Seeing it work firsthand", value: 17 },
        ],
      },
    ],
  },
  {
    number: 3,
    label: "Agent-by-Agent Usefulness",
    title: "Which Wave 1 Agents Matter Most, By Role",
    icon: "book",
    sowhat:
      "The dashboard is the single most-valued Wave 1 agent (11 of 18 stakeholders) — ahead of meeting recaps (7 stakeholders) and continuous monitoring (4 stakeholders) which adds value to the admin and manual work being reduced.",
    groups: [
      {
        q: "Which agents from wave 1 are the most/least useful for your role? Waves 2-4?",
        quotes: [
          {
            text: "If there is a dashboard that has the list of things I need to do with dates and items to escalate, that will mean I have to change the way I work — but it might be worth trying.",
            attr: "Manager",
          },
        ],
      },
      {
        q: "If this works as planned, what gets better for you in your day-to-day, first with the agents arriving by end of December and then as later agents arrive? What would make it worth the effort of changing how you work?",
        quotes: [
          {
            text: "It would definitely take away a lot of the admin work — writing up meeting recaps, searching for action items. That takes up more time than I ever anticipate.",
            attr: "Senior Associate",
          },
        ],
      },
    ],
    charts: [
      {
        title: "Most-valued Wave 1 agent (% of 18, multi-mention)",
        color: ORANGE2,
        data: [
          { name: "Dashboard / attention list", value: 61 },
          { name: "Meeting recaps", value: 39 },
          { name: "Continuous monitoring", value: 22 },
          { name: "Mobilization", value: 22 },
        ],
      },
      {
        title: "What gets better in a day-to-day (% of 18)",
        color: GREY,
        data: [
          { name: "Less admin & manual work", value: 39 },
          { name: "Standardization across the practice", value: 22 },
          { name: "More time for strategic work", value: 17 },
          { name: "Faster, higher-quality delivery", value: 11 },
        ],
      },
    ],
  },
  {
    number: 4,
    label: "Trust & Barriers to Adoption",
    title: "What Would Stop Adoption, Even If It Works",
    icon: "shield",
    sowhat:
      "7 of 18 stakeholders named accuracy risk as a real barrier — and three raise deeper concerns: two Senior Managers protecting independent judgment, and a Manager wanting proof that AI inputs are clean before trusting the output.",
    groups: [
      {
        q: "Even if the agents work well, what would stop you using them in your normal delivery, now and as more agents arrive?",
        quotes: [
          {
            text: "If I'm better off doing something manually, I would just go do that manually — and I will urge my team to not use that agent.",
            attr: "Senior Manager",
          },
        ],
      },
      {
        q: "What would you need to see to trust an agent's output, and what could we show you before December? Would you need more proof for agents that draft requirements, designs or test cases?",
        quotes: [
          {
            text: "I need to understand 100% what inputs went in and that they were validated — it's only as good as the inputs and the parameters we've put in.",
            attr: "Manager",
          },
        ],
      },
    ],
    charts: [
      {
        title: "Top-cited barriers to adoption (% of 18, multi-mention)",
        color: GREY,
        data: [
          { name: "Accuracy", value: 36 },
          { name: "Preserving own judgment", value: 14 },
          { name: "Must beat existing self-built tools", value: 14 },
          { name: "Alert volume / fatigue", value: 14 },
        ],
      },
    ],
  },
  {
    number: 5,
    label: "Working Preferences",
    title: "How Agents Should Surface Issues",
    icon: "trending",
    sowhat:
      "Stakeholders consistently describe wanting a severity-based escalation chain, not a flat alert stream — and volume, not relevance, is what drives people to start ignoring flags.",
    groups: [
      {
        q: "When an agent flags something for you, such as two documents that disagree, an out-of-date document, a risk in a design draft or a concern that keeps coming up, who should be told, how would you like to hear (Teams, email, ADO, a personal to-do list), and what would make you start ignoring these alerts?",
        quotes: [
          {
            text: "There needs to be a chain of escalation with assigned timespans. If I'm not resolving it in a given timeline, I would expect that alert to be sent to a partner … so if it's built correctly, you should not be ignoring alerts.",
            attr: "Director",
          },
          {
            text: "I don't know if there's anything that would make me start ignoring these alerts per se, but if it was just popping up in ADO and for some reason I don't check ADO that day, that's something I might just miss – especially because there's a million things in ADO, whereas in my Teams or my e-mail, it's a little bit more consolidated.",
            attr: "Senior Associate",
          },
        ],
      },
    ],
    charts: [
      {
        title: "Preferred alert channel (% of 18, multi-mention)",
        color: ORANGE2,
        data: [
          { name: "Teams", value: 39 },
          { name: "Email", value: 28 },
          { name: "Personal dashboard / ADO", value: 22 },
          { name: "Other (text, flagged list)", value: 11 },
        ],
      },
    ],
  },
  {
    number: 6,
    label: "Learning & Capability Building",
    title: "How Stakeholders Want To Learn These Agents",
    icon: "alert",
    sowhat:
      "No one resisted learning itself — the only real debate is format and timing. Short, self-paced online courses are now the most-requested format (8 of 18 stakeholders), ahead of hands-on learning while on project work, half-day sessions and peer coaching.",
    groups: [
      {
        q: "Based on the work you do on a project, what would you need to learn or practice to use these agents well, both the first five and the ones that draft requirements, designs, plans or reports later?",
        quotes: [
          {
            text: "It's easiest to practice things as you're actually working on project work, because that's where you have the most context to validate it against — as I'm in the requirements phase, having it draft requirements and seeing if that's what I would actually put.",
            attr: "Senior Associate",
          },
        ],
      },
      {
        q: "The plan includes a short online course, half-day sessions, office hours, a peer community and coaching. Which would you use, and for later agents would you want training as each one arrives or ahead of time?",
        quotes: [
          {
            text: "Maybe instead of one five-hour course, you could do five one-hour courses — a little more manageable and less intimidating to people who think it's too much of a time commitment.",
            attr: "Senior Associate",
          },
        ],
      },
    ],
    charts: [
      {
        title: "Preferred learning format (% of 18, multi-mention)",
        color: GREY,
        data: [
          { name: "Short online course (self-paced)", value: 44 },
          { name: "Hands-on, as agents arrive", value: 28 },
          { name: "Peer coaching / community", value: 22 },
          { name: "Half-day / in-person session", value: 17 },
        ],
      },
    ],
  },
  {
    number: 7,
    label: "Communication",
    title: "How Updates Travel",
    icon: "compass",
    sowhat:
      "Stakeholders shared how Email and Teams (22% each) are usually the two forums where practice-wide changes are read and acted on, indicating that building on a platform that is already providing so much insight could result in more awareness.",
    groups: [
      {
        q: "How do you usually hear about practice-wide changes, which of those do you actually read or act on, and how often would you want updates as later agents get dates?",
        quotes: [
          {
            text: "My main source there is, for practice wide changes, via e-mail or some of those meetings, whether we have lunch and learns or quarterly updates. Something that would be definitely helpful is almost like an AI newsletter related to these agents.",
            attr: "Senior Associate",
          },
          {
            text: "I read both the emails and the Teams messages, just to make sure I'm not missing anything. I think a weekly update, even if it's just some small tips, is nice – daily would definitely be too much, but weekly I'm pretty good at reading those and keeping up.",
            attr: "Senior Associate",
          },
        ],
      },
    ],
    charts: [
      {
        title: "How stakeholders hear about practice-wide changes (% of 18, multi-mention)",
        color: ORANGE2,
        data: [
          { name: "Email", value: 22 },
          { name: "Teams", value: 22 },
          { name: "Lunch & learns / recordings", value: 11 },
        ],
      },
    ],
  },
  {
    number: 8,
    label: "Success Measures",
    title: "What Success Looks Like",
    icon: "layers",
    sowhat:
      "Usage and Adoption Rate (39%) is what leads to measuring success, following how much time is saved and accuracy along with the quality of work being produced by these agents in Waves 1-4.",
    groups: [
      {
        q: "What is the one thing we should do, or avoid, to make this work, for the first agents and for what comes after?",
        quotes: [
          {
            text: "Don't send anything that is half-cooked. It has to be right, it has to be proven — if the first agents don't work or don't help, trust is going to go down.",
            attr: "Director",
          },
        ],
      },
      {
        q: "A few months after rollout, how would you know it is working, for you and for your team? What would you notice, and what should we measure as later agents arrive?",
        quotes: [
          {
            text: "If I'm not having to spend 30 minutes drafting an e-mail to the client and instead I can just grab it from the agent — that's 30 minutes and then I get back into my day.",
            attr: "Associate",
          },
          { text: "I would know it's working from day-to-day, and I would notice the time saved.", attr: "Senior Associate" },
          {
            text: "How quickly can I get to an output for a specific use case — speed, and then the quality of the documentation that's created.",
            attr: "Manager",
          },
          {
            text: "Instead of rolling multiple agents at a time, see user adoption, get feedback on the first agent we're rolling out — then, based on that, roll out other agents.",
            attr: "Senior Manager",
          },
          {
            text: "If it helps me reduce my time to mobilize a project by 50%, why not? For me, that's success — measurable, because it helps me eliminate time from five working days to two or three.",
            attr: "Director",
          },
        ],
      },
    ],
    charts: [
      {
        title: "How stakeholders will measure success (% of 18)",
        color: ORANGE2,
        data: [
          { name: "Usage & adoption rate", value: 39, color: DARK_ORANGE },
          { name: "Time saved", value: 28, color: ORANGE2 },
          { name: "Accuracy & quality", value: 22, color: GREY },
          { name: "Client feedback", value: 11, color: LIGHT_GREY },
        ],
      },
    ],
  },
];

export type Skill = { name: string; desc: string; count: number };

export const baselineSkills: Skill[] = [
  { name: "Requirements Elicitation", desc: "Discovery, dispositioning fit/gap, and capturing what the client actually needs", count: 8 },
  { name: "FDD/TDD Authorship", desc: "Writes functional and technical design docs the team builds from", count: 9 },
  { name: "Client Status & Program Communication", desc: "Status reporting, forecasting, and keeping leadership and clients aligned", count: 7 },
  { name: "Multi-Workstream Architecture", desc: "Owns cross-functional dependencies across supply chain, finance and technical", count: 5 },
  { name: "Configuration & Testing", desc: "Hands-on system configuration, SIT/UAT testing", count: 4 },
  { name: "Financial / Process Modeling", desc: "Chart of accounts, budgeting, business-process design", count: 5 },
  { name: "Training Content Development", desc: "Builds guides and materials to bring end users along", count: 3 },
  { name: "Cross-Functional Risk Management", desc: "Spots conflicts and dependencies across design areas before they surface", count: 4 },
  { name: "Data Migration & Validation", desc: "Field-by-field transformation logic and quality-checking migrated data", count: 4 },
  { name: "Proposals & Business Development", desc: "RFP response writing, pursuit support", count: 3 },
];

export const futureSkills: Skill[] = [
  { name: "Validating AI Output", desc: "Checks agent drafts for accuracy, wrong context, and hallucination before use", count: 7 },
  { name: "Prompting & Context-Setting", desc: "Frames the question and feeds agents the right project context", count: 6 },
  { name: "Escalation Judgment", desc: "Decides who gets told when an agent flags a conflict or risk, and how urgently", count: 3 },
  { name: "Knowledge-Hub Curation", desc: "Keeps project data centralized and current so agents have full context", count: 5 },
  { name: "Translating AI Designs into System Configuration", desc: "Takes an agent-drafted FDD or design and builds the actual D365 config", count: 2 },
  { name: "Grounding in Documentation", desc: "Anchors agent output to Microsoft docs and internal best practices", count: 1 },
  { name: "Governance & Scope-Setting", desc: "Defines what agents should and shouldn't touch on a project", count: 4 },
  { name: "Assessing Build-vs-Buy", desc: "Judges whether a firm-built agent actually beats a self-built workflow", count: 4 },
  { name: "Training and Adoption Content", desc: "Turns approved requirements into training guides and adoption materials for client rollout", count: 1 },
  { name: "Peer Coaching & Championing", desc: "Shows colleagues how to use new agent workflows hands-on", count: 6 },
];

export const skillCallout =
  "Validating AI output is the most-cited future skill — raised by 7 of 18 stakeholders, more than any other.";

export const skillTakeaway =
  "Baseline ERP skills don't disappear — they become the judgment agents can't replace. The shift is from authoring documents to validating, contextualizing and governing AI's work, so enablement should build validation and knowledge-hub discipline on top of existing functional expertise.";

export const recommendations = [
  {
    title: "Prove accuracy before scale",
    learned:
      "Accuracy risk is the #1 barrier (7 of 18 stakeholders); two Senior Managers specifically distrust fully-automated FDD writing.",
    requires: "Publish accuracy benchmarks and a clear human-review checkpoint before broad rollout.",
  },
  {
    title: "Build a true knowledge hub first",
    learned:
      "Several stakeholders said agents will only beat their own Claude workflows if they have full project context in one place.",
    requires: "Prioritize data centralization over individual agent polish — this is the recurring technical blocker.",
  },
  {
    title: "Sequence the rollout, don't flood it",
    learned: "4 stakeholders independently warned against rolling out too many agents at once.",
    requires: "Launch one agent, gather adoption feedback, then roll out the next.",
  },
  {
    title: "Make the escalation design credible",
    learned: "Stakeholders consistently want a severity-based escalation chain, not a flat alert stream.",
    requires: "Build and publish a clear escalation matrix — who gets told, at what severity — before launch.",
  },
  {
    title: "Lean into peer champions",
    learned:
      "Peers are again the top influence overall (7 of 18 stakeholders); leadership still drives it for some Associates specifically.",
    requires: "Recruit visible champions at each level, and ensure project directors actively model AI use.",
  },
  {
    title: "Close two different trust gaps",
    learned:
      "Senior Managers (83%) and Managers (92%) are the only levels carrying any concern, for two different reasons: preserving judgment, and trusting unverified AI inputs.",
    requires: "Frame agents as augmenting judgment, not replacing it — for both groups.",
  },
  {
    title: "Capture existing self-built tools",
    learned:
      "Several stakeholders have already built their own AI workflows (FDD-writers, test-case generators, dashboards) that may outperform what's planned.",
    requires: "Interview these builders directly and fold validated approaches into the official agent designs.",
  },
];

export const topRisks = [
  {
    title: "Accuracy & hallucination risk",
    body: "An agent producing wrong or hallucinated output even once can break trust that took months to build.",
  },
  {
    title: "Delivery pace",
    body: "Without clear training, people fall back to self-built Claude workflows or old habits by default.",
  },
];

export const leadershipAsks = [
  "Approve accuracy benchmarks and a mandatory human-review checkpoint before any agent reaches broad rollout",
  "Measure quality (accuracy/rework) alongside hours saved in performance metrics",
  "Approve a phased rollout schedule – one agent at a time, with adoption feedback before the next",
];

export const finalTakeaway =
  "Reception is overwhelmingly positive — 96% of responses positive or mixed. The only real resistance is three stakeholders across two levels, for two reasons. Prioritize knowledge-hub data quality, sequence the rollout deliberately, and make Senior Managers and that Manager co-authors of the trust framework, rather than assuming top-down mandate alone will win them over.";
