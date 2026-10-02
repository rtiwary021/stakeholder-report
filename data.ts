// All data below is sourced from 16 completed stakeholder interviews (Brian Smith and
// Sarah Pavelske each contributed a Round 2 follow-up session covering the remainder of
// the discovery guide; these are additional sessions with existing participants, not new
// interviews, so the total stakeholder count remains 16).
// Interviewer (Amy Pritts / Reet Tiwary) content was excluded from every count and quote —
// verified by direct search of every isolated transcript, including removal of a
// transcription-system end-of-recording artifact that had no spoken content.
// Attribution is by role level only — no names.

export const COLORS = {
  orange: "#FD5108",
  orange2: "#FE7C39",
  orange3: "#FFAA72",
  grey: "#6E6E6E",
  grey4: "#A1A8B3",
  card: "#F2F2F2",
};

export const meta = {
  stakeholders: 16,
  roleLevels: 5,
  clusters: 8,
  avgDuration: "26 min",
  practiceOffice: "Practice Transformation Office",
  date: "September 2026",
};

export const roleBreakdown = [
  { role: "Associate", count: 2 },
  { role: "Senior Associate", count: 4 },
  { role: "Manager", count: 4 },
  { role: "Senior Manager", count: 4 },
  { role: "Director", count: 2 },
];

export const methodologyNote =
  "Not every interview reached all clusters within the available time; Barriers/Incentives reflects n=14 and Future State reflects n=11, noted where relevant";

export const sentimentByTheme = [
  { theme: "Value/Identity", Positive: 14, Mixed: 0, Concerned: 2 },
  { theme: "Trust/Control", Positive: 2, Mixed: 10, Concerned: 4 },
  { theme: "Barriers/Incentives", Positive: 4, Mixed: 7, Concerned: 3 },
  { theme: "Future State", Positive: 9, Mixed: 2, Concerned: 0 },
];

export const themeDefinitions =
  "Themes measure: Value/Identity (current value & identity), Trust/Control (trust & judgment), Barriers/Incentives (adoption barriers & rewards), Future State (2-year outlook).";

export const roleSentiment = [
  { role: "Director & Manager", pct: "100%" },
  { role: "Senior Associate", pct: "79%" },
  { role: "Associate", pct: "71%" },
  { role: "Senior Manager", pct: "69%" },
];

export const watchStats = [
  { big: "84%", text: "of all coded theme responses were positive or mixed, not concerned (48 of 57)" },
  { big: "2 of 16", text: "explicitly flagged utilization or billable-hour metrics as working against AI adoption" },
  { big: "#1", text: "most consistent ask: see it work on one real engagement first — raised in every interview that reached this question" },
];

export const execCards = [
  {
    icon: "zap",
    title: "Cautious curiosity, not resistance",
    body: "First reactions split three ways: genuine excitement (4 of 16), grounded wait-and-see (8 of 16), and skepticism rooted in past AI disappointments (4 of 16). Outright resistance was rare.",
  },
  {
    icon: "shield",
    title: "Trust is conditional, not categorical",
    body: "Only 2 of 16 trust agentic output without added review. The other 14 want a defined human checkpoint — most often before anything reaches the client.",
  },
  {
    icon: "alert",
    title: "Incentives lag the message",
    body: "2 of 16 explicitly named utilization or billable-hour metrics as working against AI-driven time savings; several others described a quiet stigma around visibly using AI in performance reviews.",
  },
  {
    icon: "trending",
    title: "Identity is shifting, not shrinking",
    body: "14 of 16 see their value moving toward judgment, client relationships and quality review, not disappearing. Two voiced genuine uncertainty about where they add value longer-term.",
  },
];

export const documentationBanner = {
  title: "DOCUMENTATION IS THE TOP TIME-SINK",
  body: "9 of 16 named documentation, reporting, or deck creation as their single biggest time-sink relative to its value — more than any other category named.",
};

export type Quote = { q: string; quote: string; attr: string };

export type ThemeSectionData = {
  eyebrow: string;
  title: string;
  icon: string;
  sowhat: string;
  quotes: Quote[];
  chart?: {
    type: "bar" | "donut";
    title: string;
    data: { name: string; value: number }[];
    color?: string;
    colors?: string[];
    suffix?: string;
  };
  chart2?: {
    type: "bar" | "donut";
    title: string;
    data: { name: string; value: number }[];
    color?: string;
    colors?: string[];
    suffix?: string;
  };
};

export const themes: ThemeSectionData[] = [
  {
    eyebrow: "THEME 1 — CURRENT VALUE & IDENTITY",
    title: "Current Value Definition & Professional Identity",
    icon: "target",
    sowhat:
      "14 of 16 stakeholders locate their value in judgment, relationships and technical translation, not platform mechanics — a foundation agentic delivery should reinforce, not erode.",
    quotes: [
      {
        q: "What does a strong CRM consultant do exceptionally well today?",
        quote:
          "A strong CRM consultant is someone who can understand the client's operating model, pain points, and desired outcomes — not just what is stated in the requirements — to make sure we are helping the client innovate and increase their sales.",
        attr: "Senior Manager",
      },
      {
        q: "What parts of delivery make you feel you add the most value?",
        quote:
          "Ability to understand their concerns … and generally show as more of an advisor than just checking a box … reporting back to the executives — that's where I know most of the value's been brought.",
        attr: "Director",
      },
    ],
    chart: {
      type: "bar",
      title: "Where value is perceived to sit (n=16, multi-mention)",
      data: [
        { name: "Judgment & critical thinking", value: 16 },
        { name: "Client relationship & communication", value: 12 },
        { name: "Product & platform expertise", value: 8 },
        { name: "Strategy & business development", value: 3 },
      ],
      color: COLORS.orange,
    },
  },
  {
    eyebrow: "THEME 2 — FRICTION & FIRST REACTION",
    title: "Delivery Friction & Initial Reaction to Agentic Delivery",
    icon: "zap",
    sowhat:
      "Documentation and reporting work is the single biggest time-sink relative to its value (56% of respondents) — and first reactions to agents taking on that work split three ways: excited (4 of 16), mixed (8 of 16), concerned (4 of 16).",
    quotes: [
      {
        q: "What work consumes disproportionate time relative to its value?",
        quote:
          "There's a lot of things to uncover. Specifically for larger enterprise clients, there are review boards you need to attend — a cloud governance committee, an architectural committee — to show your initial designs.",
        attr: "Manager",
      },
      {
        q: "Immediate reaction to agents generating requirements, process maps, designs, configuration, code and tests?",
        quote:
          "That's awesome — any assistance we can get generating baseline documentation is super helpful, because it lets us focus more on the important work. One area I'm a little wary about is making sure it's all still accurate.",
        attr: "Senior Associate",
      },
    ],
    chart: {
      type: "bar",
      title: "What consumes disproportionate time (% of 16 respondents)",
      data: [
        { name: "Documentation & reporting", value: 56 },
        { name: "Requirements & discovery process", value: 25 },
        { name: "Manual technical analysis", value: 13 },
        { name: "Low-value / underused deliverables", value: 6 },
      ],
      color: COLORS.orange,
      suffix: "%",
    },
    chart2: {
      type: "bar",
      title: "Reaction to agents generating requirements & designs (n=16)",
      data: [
        { name: "Mixed", value: 8 },
        { name: "Excited", value: 4 },
        { name: "Concerned", value: 4 },
      ],
      colors: [COLORS.orange2, COLORS.orange, COLORS.grey],
    },
  },
  {
    eyebrow: "THEME 3 — ROLE IMPACT & EXPERTISE EVOLUTION",
    title: "Perceived Role Impact & Expertise Evolution",
    icon: "book",
    sowhat:
      "Judgment and review surfaced in all 16 interviews as what becomes more valuable — more than any other skill named.",
    quotes: [
      {
        q: "What becomes more or less important in your role?",
        quote:
          "More important … is the people skills and having vision for the future state of systems during these implementation projects — where we can add value is really being a champion for the client and thinking with our Dynamics knowledge.",
        attr: "Manager",
      },
      {
        q: "How does this change what it means to be an expert?",
        quote:
          "It's expert of knowing how to prompt the tool correctly … expert in knowing how to apply those answers into your specific solution, because … no two solutions are the same.",
        attr: "Senior Manager",
      },
    ],
    chart: {
      type: "bar",
      title: "Skills seen as more valuable (n=16, multi-mention)",
      data: [
        { name: "Judgment & review", value: 16 },
        { name: "Client relationship & communication", value: 11 },
        { name: "Product & platform expertise", value: 6 },
        { name: "Adaptability & continuous learning", value: 4 },
      ],
      color: COLORS.orange,
    },
  },
  {
    eyebrow: "THEME 4 — TRUST, CONTROL & JUDGMENT",
    title: "Trust, Control & Where Judgment Still Matters",
    icon: "shield",
    sowhat:
      "15 of 16 are comfortable with agent-drafted first drafts; none who addressed it were comfortable with autonomous client-facing recommendations or communications.",
    quotes: [
      {
        q: "What would you be comfortable letting an agent draft — and what would you be uncomfortable delegating?",
        quote:
          "I would not want it to write into an application without my consent, or send an e-mail without my consent … but if it comes to research, generating code, or automating some workflows, I'm more than happy allowing an agent full control over that.",
        attr: "Manager",
      },
      {
        q: "Where does consultant judgment matter most?",
        quote:
          "If I didn't have the judgment there to say, hey, this output is too generic … when I hand it over to the client, they're going to lose trust in me.",
        attr: "Senior Associate",
      },
    ],
    chart: {
      type: "bar",
      title: "Comfort delegating to an agent (n=16, explicit mentions)",
      data: [
        { name: "First-draft docs", value: 15 },
        { name: "Config & technical changes", value: 5 },
        { name: "Test case generation", value: 4 },
        { name: "Client recommendations", value: 0 },
      ],
      color: COLORS.orange,
    },
  },
  {
    eyebrow: "THEME 5 — CLIENT VALUE & BEHAVIOR CHANGE",
    title: "Client Value & Behavior Change Required",
    icon: "trending",
    sowhat:
      "Freed time is expected to flow first to clients and quality (client-facing time cited by 8 of 16, quality/testing by 4) — but consultants are candid that their own habits have to change first.",
    quotes: [
      {
        q: "Where should consultants spend time freed up by agentic delivery?",
        quote:
          "Less time spent on my end dealing with our own internal workarounds, so I can also spend more time chasing deals … and mentoring my teams.",
        attr: "Director",
      },
      {
        q: "What would you personally have to do differently?",
        quote:
          "I try to do more proactive work that could potentially generate additional revenue — my day will probably be more proactive versus reactive.",
        attr: "Senior Manager",
      },
    ],
    chart: {
      type: "bar",
      title: "Where freed capacity should go (n=16, multi-mention)",
      data: [
        { name: "Client-facing time & relationships", value: 8 },
        { name: "Upskilling & learning", value: 5 },
        { name: "Quality & testing", value: 4 },
        { name: "Business development", value: 3 },
      ],
      color: COLORS.orange,
    },
  },
  {
    eyebrow: "THEME 6 — BARRIERS & REWARD SYSTEMS",
    title: "Barriers to Adoption & Reward Systems",
    icon: "alert",
    sowhat:
      "The most-cited barrier is data/security constraints (6 of 16), followed by trust rebuilt slowly after past disappointments (5 of 16), stigma around visible AI use (3 of 16), and billable-hour incentives (2 of 16) — not the technology itself.",
    quotes: [
      {
        q: "What would prevent adoption even if you believed the technology worked?",
        quote:
          "Sometimes clients are very strict about where this tool is deployed. For Comcast, for example, they wanted this AI tool deployed on their side — because they don't want to move anything to the PwC network.",
        attr: "Senior Manager",
      },
      {
        q: "What does the org reward that reinforces the old model?",
        quote:
          "If you were submitting a snapshot … and everything was just like, 'I put this into AI and used AI for this' … maybe that could … reflect poorly on you.",
        attr: "Associate",
      },
    ],
    chart: {
      type: "bar",
      title: "Top-cited adoption barriers (n=16, multi-mention)",
      data: [
        { name: "Data sensitivity & security", value: 6 },
        { name: "Accuracy & trust after past letdowns", value: 5 },
        { name: "Stigma around visible AI use", value: 3 },
        { name: "Utilization & billable-hour metrics", value: 2 },
      ],
      color: COLORS.grey,
    },
  },
  {
    eyebrow: "THEME 7 — LEARNING & PROOF",
    title: "Capability Building & Proof Points",
    icon: "compass",
    sowhat:
      "Stakeholders say they learn best hands-on, not in a classroom — and of those asked what proof they need (12 of 16), half point to a real, completed engagement (6 of 12) over training or demos.",
    quotes: [
      {
        q: "What would you need to learn to feel highly effective in an agentic delivery model?",
        quote:
          "I'm a hands-on kind of learner — I don't do well sitting in a class watching somebody else do it. I like to install it, access it, and try it out for myself … The best training is having the instructions right there in front of me as I try it myself.",
        attr: "Senior Manager",
      },
      {
        q: "What would you need to see happen on a real engagement before you believed this was materially changing delivery?",
        quote:
          "I don't think I need to see anything happen … because we did use it on a real engagement and it was helpful.",
        attr: "Manager",
      },
    ],
    chart: {
      type: "bar",
      title: "Most-cited proof source (n=12 of 16 addressed)",
      data: [
        { name: "Live engagement / hands-on trial", value: 6 },
        { name: "Output quality / accuracy proof", value: 4 },
        { name: "Peer example or formal approval", value: 2 },
      ],
      color: COLORS.orange,
    },
  },
  {
    eyebrow: "THEME 8 — PEER INFLUENCE & FUTURE STATE",
    title: "Peer Influence & Desired Future State",
    icon: "layers",
    sowhat:
      "Peer example is the single most-cited influence (6 of 12), but leadership and named technical experts matter nearly as much — and of those who reached it, 9 of 11 describe real excitement about where this future leads.",
    quotes: [
      {
        q: "Whose experience or opinion would most influence whether you adopt this way of working?",
        quote:
          "I have someone who's an associate who I would really value her opinion … if they said they tried this use case and it worked really well, I would [try it too].",
        attr: "Associate",
      },
      {
        q: "Two years into this, agentic delivery has genuinely worked — what does your day look like differently?",
        quote:
          "I don't think we're going to be using any of these big [platforms] like Dynamics or Salesforce … we build them their application right from scratch.",
        attr: "Manager",
      },
      {
        q: "Two years into this, agentic delivery has genuinely worked — what does your day look like differently?",
        quote:
          "Hopefully a lot less time after calls doing documentation and user stories … a lot more efficient.",
        attr: "Associate",
      },
    ],
    chart: {
      type: "bar",
      title: "Who influences adoption (n=12 of 16 addressed)",
      data: [
        { name: "Peer at a similar level", value: 6 },
        { name: "Leadership / management", value: 3 },
        { name: "Technical expert / early adopter", value: 3 },
      ],
      color: COLORS.orange,
    },
  },
];

// "Risks" has been reworked per leadership direction into a two-sided view: what's
// working (grounded in the positive-sentiment data) alongside where skepticism
// concretely lives (grounded in role-level sentiment concentration), rather than a
// single list of "risks" that risked implying unsupported or biased findings.
export const strengths = [
  {
    title: "Broad positive foundation.",
    body: "84% of all coded responses across every theme are positive or mixed, not concerned (48 of 57).",
  },
  {
    title: "Judgment is universally valued.",
    body: "16 of 16 stakeholders cite judgment and review as what becomes more valuable — unanimous, with no exceptions.",
  },
  {
    title: "Manager & Director levels are fully bought in.",
    body: "Both levels show 100% positive-or-mixed sentiment across every theme — zero concerned codings at either level.",
  },
  {
    title: "Genuine excitement about the future.",
    body: "9 of 11 stakeholders who reached the future-state question describe real enthusiasm about where this leads — not just tolerance.",
  },
];

export const skepticism = [
  {
    title: "Doubt concentrates at specific levels.",
    body: "Associates and Senior Associates account for the most concerned codings in the data — stigma around visible AI use and feeling penalized for trying new tools, specifically.",
  },
  {
    title: "Senior Managers are less convinced than seniority suggests.",
    body: "69% positive-or-mixed — the lowest of any role level — driven by real concerns about data sensitivity and past AI disappointments.",
  },
  {
    title: "Trust rebuilt slowly, not given upfront.",
    body: "Several stakeholders cited specific past AI tools that overpromised and underdelivered, and remain cautious as a direct result.",
  },
  {
    title: "Proof gap remains.",
    body: "Of those asked, half (6 of 12) say only a real, completed engagement — not a pilot or demo — will shift their view.",
  },
];

export const recommendations = [
  {
    num: "01",
    title: "Align reward systems first",
    body: "2 of 16 stakeholders named utilization or billable-hour metrics directly as working against AI-driven time savings — messaging can't outrun what gets rewarded.",
  },
  {
    num: "02",
    title: "Name the human-in-the-loop line",
    body: "14 of 16 want a defined human checkpoint, most often before anything reaches the client — publish where sign-off is required, using the boundaries stakeholders described themselves.",
  },
  {
    num: "03",
    title: "Fund one visible reference engagement",
    body: "Of those asked, half (6 of 12) said only a real, completed engagement will change their view — run and publicize one as the proof point, not another pilot or demo.",
  },
  {
    num: "04",
    title: "Close the peer-adoption gap",
    body: "One stakeholder described a visible AI-usage gap on their own team; peer example was consistently cited as the most trusted proof — pair light and heavy AI users and put peer results in front of the practice.",
  },
];

export const waves = [
  {
    wave: "WAVE 1",
    period: "Days 1–30",
    title: "Quick wins where trust already exists",
    color: COLORS.orange,
    focus:
      "documentation, reporting, user stories and requirement summarization.",
    rationale:
      "These are the most consistently cited friction points, and first-draft document generation is already the most broadly embraced form of delegation (15 of 16).",
  },
  {
    wave: "WAVE 2",
    period: "Days 30–90",
    title: "Build on early trust",
    color: COLORS.orange2,
    focus:
      "process mapping, design recommendations, traceability and data dictionary generation.",
    rationale:
      "Clear value, but this is where stakeholders want the proof this report identifies — half (6 of 12) say only a real, completed engagement will change their view.",
  },
  {
    wave: "WAVE 3",
    period: "90+ Days",
    title: "Only after trust is earned",
    color: COLORS.grey,
    focus:
      "configuration and code generation, test generation, and more autonomous workflows.",
    rationale:
      "No stakeholder yet reported comfort with autonomous client-facing actions (0 of 16) — this wave should follow visible proof from Waves 1 and 2, not precede it.",
  },
];

export const keyMessages = [
  {
    quote: "AI is not replacing consultants — it's replacing repetitive documentation.",
    grounding: "Grounded in: 14 of 16 locate their value in judgment and relationships, not platform mechanics",
    color: COLORS.orange,
  },
  {
    quote: "The future consultant spends less time documenting, more time advising.",
    grounding: "Grounded in: client-facing time is the top destination for freed capacity (8 of 16)",
    color: COLORS.orange2,
  },
  {
    quote: "Human expertise remains accountable for every client outcome.",
    grounding: "Grounded in: 14 of 16 want a defined human checkpoint before anything reaches the client",
    color: COLORS.grey,
  },
];

export const skillShift = [
  { today: "Create from scratch", tomorrow: "Review & validate" },
  { today: "Research and gather manually", tomorrow: "Prompt effectively & iterate" },
  { today: "Spend most time producing deliverables", tomorrow: "Spend more time advising clients" },
];
