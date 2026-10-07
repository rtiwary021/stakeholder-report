// Synced to the latest PPTX, which now includes Kevin Barrett (Manager) — the 18th
// and final stakeholder interview. All numbers below were recomputed from scratch
// against n=18, not incrementally estimated.

export const COLORS = {
  orange: "#FD5108",
  orange2: "#FE7C39",
  orange3: "#FFAA72",
  grey: "#6E6E6E",
  grey4: "#A1A8B3",
  card: "#F2F2F2",
};

export const meta = {
  title: "ATE Stakeholder Impact Analysis - CRM",
  date: "October 2026",
  stakeholders: 18,
  roleLevels: 5,
  clusters: 8,
  avgDuration: "26 min",
  practiceOffice: "Practice Transformation Office",
};

export const methodologyOverview =
  "We interviewed 18 stakeholders spanning every level from Associate to Director, covering 8 distinct themes in depth to gather perspectives on AI delivery adoption from current value and identity, through trust and barriers, to peer influence and the future state.";

export const roleBreakdown = [
  { role: "Associates", count: 3 },
  { role: "Senior Associates", count: 4 },
  { role: "Managers", count: 5 },
  { role: "Senior Managers", count: 4 },
  { role: "Directors", count: 2 },
];

export const sentimentByTheme = [
  { theme: "Value/Identity", Positive: 16, Mixed: 0, Concerned: 2 },
  { theme: "Trust/Control", Positive: 4, Mixed: 10, Concerned: 4 },
  { theme: "Barriers/Incentives", Positive: 4, Mixed: 10, Concerned: 4 },
  { theme: "Future State", Positive: 13, Mixed: 3, Concerned: 0 },
];

export const overviewStatement =
  "From the 18 stakeholder interviews, we found that the sentiment is positive across every theme, and the one place caution concentrates is Trust/Control – not the technology itself and not the future that it points to.";

export const watchStats = [
  { big: "86%", text: "of all coded theme responses were positive or mixed, not concerned." },
  { big: "3 of 18", text: "said that they are still being measured on hours, not on the time that AI saves them." },
  { big: "#1", text: "most consistent ask: see it work on one real engagement first — raised in every interview." },
];

export const execOverview =
  "Overall, stakeholders are engaged, not resistant but full confidence depends on clear oversight and potential reward systems catching up with what is being asked of them.";

export const execCards = [
  {
    icon: "zap",
    title: "Cautious curiosity, not resistance",
    body: "Reactions split into three ways amongst 18 stakeholders: genuinely excited (5 of 18), open but wait-and-see (8 of 18), and skeptical based on past AI letdowns (5 of 18). Very few are opposed outright.",
  },
  {
    icon: "shield",
    title: "Trust is conditional, not categorical",
    body: "Just 4 of 18 stakeholders are comfortable with AI output going out without review. The other 14 want a clear human checkpoint – typically before anything reaches the client.",
  },
  {
    icon: "alert",
    title: "Rewarded for hours, not outcomes",
    body: "Performance is still measured by hours billed and visible effort, not time saved – so using AI well can look like doing less, not more in which 3 of 18 stakeholders named this directly; several others described alternate ways how AI use can be beneficial in performance reviews.",
  },
  {
    icon: "trending",
    title: "Identity is shifting, not shrinking",
    body: "16 of 18 stakeholders see their value moving towards judgment, client relationships and quality review - not disappearing in general. Only 2 stakeholders voiced genuine uncertainty about where they add value in the long-term.",
  },
];

export const documentationBanner = {
  title: "DOCUMENTATION IS THE TOP TIME-SINK",
  body: "11 of 18 stakeholders named documentation, reporting, or deck creation as their single biggest time-sink relative to its value — more than any other category named.",
};

export type Quote = { q: string; quote: string; attr: string };

type ThemeChart = {
  type: "bar" | "donut";
  title: string;
  data: { name: string; value: number }[];
  color?: string;
  colors?: string[];
  suffix?: string;
};

export type ThemeSectionData = {
  eyebrow: string;
  title: string;
  icon: string;
  sowhat: string;
  quotes: Quote[];
  chart?: ThemeChart;
  chart2?: ThemeChart;
};

export const themes: ThemeSectionData[] = [
  {
    eyebrow: "THEME 1 — CURRENT VALUE & IDENTITY",
    title: "Current Value Definition & Professional Identity",
    icon: "target",
    sowhat:
      "16 of 18 stakeholders locate their value in judgment, relationships and technical translation, not platform mechanics — a foundation agentic delivery should reinforce, not erode.",
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
      title: "Where value is perceived to sit (n=18, multi-mention)",
      data: [
        { name: "Judgment & critical thinking", value: 89 },
        { name: "Client relationship & communication", value: 78 },
        { name: "Product & platform expertise", value: 50 },
        { name: "Strategy & business development", value: 17 },
      ],
      color: COLORS.orange2,
      suffix: "%",
    },
  },
  {
    eyebrow: "THEME 2 — FRICTION & FIRST REACTION",
    title: "Delivery Friction & Initial Reaction to Agentic Delivery",
    icon: "zap",
    sowhat:
      "Documentation and reporting work is the single biggest time-sink relative to its value (61% of respondents) — and first reactions to agents taking on that work split three ways: excited (5 of 18 stakeholders), mixed (8 of 18 stakeholders), concerned (5 of 18 stakeholders).",
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
      title: "What consumes disproportionate time (% of 18 respondents)",
      data: [
        { name: "Documentation & reporting", value: 61 },
        { name: "Requirements & discovery process", value: 22 },
        { name: "Manual technical analysis", value: 11 },
        { name: "Low-value / underused deliverables", value: 6 },
      ],
      color: COLORS.orange2,
      suffix: "%",
    },
    chart2: {
      type: "bar",
      title: "Reaction to agents generating requirements & designs (n=18)",
      data: [
        { name: "Mixed", value: 44 },
        { name: "Excited", value: 28 },
        { name: "Concerned", value: 28 },
      ],
      colors: [COLORS.orange2, COLORS.orange, COLORS.grey],
      suffix: "%",
    },
  },
  {
    eyebrow: "THEME 3 — ROLE IMPACT & EXPERTISE EVOLUTION",
    title: "Perceived Role Impact & Expertise Evolution",
    icon: "book",
    sowhat:
      "Judgment and review surfaced in 17 of 18 stakeholder interviews as what becomes more valuable — more than any other skill named.",
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
      title: "Skills seen as more valuable (n=18, multi-mention)",
      data: [
        { name: "Judgment & review", value: 94 },
        { name: "Client relationship & communication", value: 67 },
        { name: "Product & platform expertise", value: 33 },
        { name: "Adaptability & continuous learning", value: 22 },
      ],
      color: COLORS.orange2,
      suffix: "%",
    },
  },
  {
    eyebrow: "THEME 4 — TRUST, CONTROL & JUDGMENT",
    title: "Trust, Control & Where Judgment Still Matters",
    icon: "shield",
    sowhat:
      "17 of 18 stakeholders are comfortable with agent-drafted first drafts; none who addressed it were comfortable with autonomous client-facing recommendations or communications.",
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
      title: "Comfort delegating to an agent (n=18, explicit mentions)",
      data: [
        { name: "First-draft docs", value: 94 },
        { name: "Config & technical changes", value: 28 },
        { name: "Test case generation", value: 22 },
        { name: "Client recommendations", value: 0 },
      ],
      color: COLORS.grey,
      suffix: "%",
    },
  },
  {
    eyebrow: "THEME 5 — CLIENT VALUE & BEHAVIOR CHANGE",
    title: "Client Value & Behavior Change Required",
    icon: "trending",
    sowhat:
      "Freed time is expected to flow first to clients and quality (client-facing time cited by 9 of 18 stakeholders, quality/testing by 4 stakeholders) — but consultants are candid that their own habits have to change first.",
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
      title: "Where freed capacity should go (n=18, multi-mention)",
      data: [
        { name: "Client-facing time & relationships", value: 50 },
        { name: "Upskilling & learning", value: 28 },
        { name: "Quality & testing", value: 22 },
        { name: "Business development", value: 22 },
      ],
      color: COLORS.orange2,
      suffix: "%",
    },
  },
  {
    eyebrow: "THEME 6 — BARRIERS & REWARD SYSTEMS",
    title: "Barriers to Adoption & Reward Systems",
    icon: "alert",
    sowhat:
      "The most-cited barrier is data/security constraints (8 of 18 stakeholders), followed by trust rebuilt slowly after past disappointments (7 of 18 stakeholders), stigma around visible AI use (3 of 18 stakeholders), and billable-hour incentives (3 of 18 stakeholders) — not the technology itself.",
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
      title: "Top-cited adoption barriers (n=18, multi-mention)",
      data: [
        { name: "Data sensitivity & security", value: 44 },
        { name: "Accuracy & trust after past letdowns", value: 39 },
        { name: "Stigma around visible AI use", value: 17 },
        { name: "Utilization & billable-hour metrics", value: 17 },
      ],
      color: COLORS.grey,
      suffix: "%",
    },
  },
  {
    eyebrow: "THEME 7 — LEARNING & PROOF",
    title: "Capability Building & Proof Points",
    icon: "compass",
    sowhat:
      "Stakeholders say they learn best hands-on, not in a classroom — and of those asked what proof they need (17 of 18 stakeholders), more than half point to a real, completed engagement (11 of 17 stakeholders) over training or demos.",
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
      title: "Most-cited proof source (n=17 of 18 addressed)",
      data: [
        { name: "Live engagement / hands-on trial", value: 65 },
        { name: "Output quality / accuracy proof", value: 24 },
        { name: "Peer example or formal approval", value: 12 },
      ],
      color: COLORS.orange2,
      suffix: "%",
    },
  },
];

// Theme 8 has a unique layout: a quote + chart section (peer influence), followed by
// a second section with one future-state quote per role level, introduced by its own
// question banner. This does not fit the generic ThemeSection pattern used above.
export const theme8 = {
  eyebrow: "THEME 8 — PEER INFLUENCE & FUTURE STATE",
  title: "Peer Influence & Desired Future State",
  icon: "layers",
  sowhat:
    "Peer example is the single most-cited influence on adoption (10 of 18 stakeholders) — and if agentic delivery works as hoped, consultants most often point their newly freed time toward strategic client work, not away from the client at all.",
  quote: {
    q: "Whose experience or opinion would most influence whether you adopt this way of working?",
    quote:
      "I have someone who's an associate who I would really value her opinion … if they said they tried this use case and it worked really well, I would [try it too].",
    attr: "Associate",
  },
  chart: {
    type: "bar" as const,
    title: "Who influences adoption (n=18, all stakeholders)",
    data: [
      { name: "Peer at a similar level", value: 56 },
      { name: "Leadership / management", value: 22 },
      { name: "Technical expert / early adopter", value: 17 },
      { name: "Seeing the whole process work end-to-end", value: 5 },
    ],
    colors: [COLORS.orange, COLORS.orange2, COLORS.grey, "#CBD1D6"],
    suffix: "%",
  },
  futureStateQuestion:
    "\u201cTwo years into this, agentic delivery has genuinely worked — what does your day look like differently?\u201d — in their own words, one from every role.",
  futureStateQuotes: [
    {
      quote: "I don't think we're going to be using any of these big [platforms] like Dynamics or Salesforce … we build them their application right from scratch.",
      attr: "Manager",
    },
    {
      quote: "Hopefully a lot less time after calls doing documentation and user stories … a lot more efficient.",
      attr: "Associate",
    },
    {
      quote: "Our people team would sell the project, AI kind of builds the whole thing … projects would be so much quicker. You could be on more than one project, getting access to different industries.",
      attr: "Senior Associate",
    },
    {
      quote: "Meeting scheduling, meeting summaries, post-meeting emails, follow-ups … all definitely automated. I think I'll end up being more into pre-sales rather than project engagement.",
      attr: "Senior Manager",
    },
    {
      quote: "Can I slice my team by 50%? I don't think so … can I slice my team by at least 20 to 30%? Yes, 100% — but you will still need people who review the stuff and bring experience.",
      attr: "Director",
    },
  ],
};

export const execSummaryMeta = {
  workingLabel: "What's Working",
  needsLabel: "What We Need to Work Towards",
  needsSubLabel: " in Adoption Planning",
};

export const strengths = [
  {
    title: "Broad positive foundation.",
    body: "86% of all coded responses across every theme are positive or mixed, not concerned.",
  },
  {
    title: "Judgment is universally valued.",
    body: "17 of 18 stakeholders cite judgment and review as what becomes more valuable.",
  },
  {
    title: "Director level remains fully bought in.",
    body: "Directors: 100% positive-or-mixed on every theme; Managers at 95% — one concerned coding across both levels.",
  },
  {
    title: "Genuine excitement about the future.",
    body: "13 of 16 stakeholders describe real enthusiasm about where this leads, not just tolerance.",
  },
];

export const stillNeeded = [
  {
    title: "Doubt concentrates at specific levels.",
    body: "Associates and Sr. Associates hold the most concern.",
  },
  {
    title: "Sr. Managers less convinced than seniority suggests.",
    body: "73% positive-or-mixed, driven by real concerns about data sensitivity and past AI disappointments.",
  },
  {
    title: "Trust is built slowly, not given upfront.",
    body: "Several stakeholders cited past AI tools that overpromised and underdelivered, and remain cautious as a result.",
  },
  {
    title: "Proof gap remains.",
    body: "Of those asked, more than half (11 of 17 stakeholders) say only a real, completed engagement, not a pilot or demo, will shift their view.",
  },
];

export const keyMessages = [
  {
    quote: "AI is not replacing consultants — it's replacing repetitive documentation.",
    grounding: "Grounded in: 16 of 18 locate their value in judgment and relationships, not platform mechanics",
    color: COLORS.orange,
  },
  {
    quote: "The future consultant spends less time documenting, more time advising.",
    grounding: "Grounded in: client-facing time is the top destination for freed capacity (9 of 18)",
    color: COLORS.orange2,
  },
  {
    quote: "Human expertise remains accountable for every client outcome.",
    grounding: "Grounded in: 14 of 18 want a defined human checkpoint before anything reaches the client",
    color: COLORS.grey,
  },
];

export const skillShiftMeta = {
  eyebrow: "THE SKILL SHIFT",
  title: "Consultant Skills: Baseline Today vs. Agentic Future",
  overview: "Skills named by 18 stakeholders across 22 interview transcripts; count = number of interviewees who raised it.",
  takeaway: "Validation is the new core skill — raised by 14 of 18 interviewees.",
  keyTakeaway: "Baseline skills don't disappear, they become the judgment AI can't replace. The shift is from producing deliverables to directing, contextualizing and validating AI's work, so enablement should build Validation, Context-Setting and Prompting on top of product and client skills.",
  source: "Source: ATE stakeholder interviews (18 stakeholders, Associate\u2013Director; 5 second-round), Sept\u2013Oct 2026. Skills coded from interviewee responses; one response may map to several skills. Counts are approximate.",
};

export const skillShiftToday = [
  { name: "Product Expertise", desc: "Deep Dynamics 365 and platform knowledge \u2014 the foundation", count: 9 },
  { name: "Communication", desc: "Explains technical ideas in plain, client-friendly language", count: 6 },
  { name: "Business Acumen", desc: "Understands the client's operating model, pain points and industry", count: 6 },
  { name: "Translation", desc: "Turns business needs into how Dynamics will actually work", count: 5 },
  { name: "Relationship-Building", desc: "Personable; earns client trust at a work and personal level", count: 4 },
  { name: "Problem-Solving", desc: "Gets to root causes, not just answering the question asked", count: 4 },
  { name: "Discovery", desc: "Draws out requirements and surfaces what clients don't know", count: 4 },
  { name: "Innovation", desc: "Reimagines processes rather than \u201clift and shift\u201d", count: 3 },
  { name: "Solution Judgment", desc: "Knows when to configure, customize or use out-of-the-box", count: 3 },
  { name: "Facilitation", desc: "Runs demos and guides clients through delivery", count: 2 },
];

export const skillShiftFuture = [
  { name: "Validation", desc: "Reviews AI output for accuracy, gaps and client fit before use", count: 14 },
  { name: "Context-Setting", desc: "Feeds AI the client background, terminology and examples it needs", count: 6 },
  { name: "Prompting", desc: "Asks the right question; iterates instructions to sharpen output", count: 6 },
  { name: "AI Fluency", desc: "Expert in the AI tools themselves, not just the product", count: 5 },
  { name: "Agent-Building", desc: "Designs and builds Copilot and custom agents", count: 3 },
  { name: "Adaptability", desc: "Explores, experiments and relearns how work gets done", count: 3 },
  { name: "Governance", desc: "Sets guardrails, protects data, defines human checkpoints", count: 3 },
  { name: "AI Advisory", desc: "Grounds client expectations in what AI can realistically do", count: 2 },
  { name: "Delegation", desc: "Directs and oversees AI as a co-worker, early in career", count: 1 },
  { name: "Championing", desc: "Early adopters model use and teach the practice", count: 1 },
];

export const recommendationsMeta = {
  eyebrow: "RECOMMENDATIONS & NEXT STEPS",
  title: "Turning findings into a rollout plan",
  risksTitle: "TOP RISKS TO MANAGE",
  leadershipTitle: "RECOMMENDATIONS FOR LEADERSHIP",
  keyTakeawayLabel: "Key Takeaway",
  keyTakeaway: "Reception is positive with 86% of responses regarding AI use within engagements positive or mixed. Adoption will be dependent on security clarity, time to change, and visible proof, so we sequence the rollout: secure first, prove with CVENT, then scale through peer champions and embedded coaches.",
  source: "Source: ATE stakeholder interviews (18 stakeholders, Associate\u2013Director; 5 second-round), Sept\u2013Oct 2026, plus change-lead input. Partners/MDs not interviewed. Counts reflect respondents to each question.",
};

export const recommendations = [
  {
    num: "01",
    title: "Settle data & code security first",
    insight: "Data/security is the #1 barrier (8 of 18); AI-generated code is least trusted.",
    action: "Publish a client data and legacy-code position before asking for adoption.",
  },
  {
    num: "02",
    title: "Build change into the work",
    insight: "Teams lack time to stop and rethink habits.",
    action: "Add a funded adoption coach on every new engagement; train hands-on via a simulated project.",
  },
  {
    num: "03",
    title: "Lead with CVENT as proof",
    insight: "11 of 17 need a real engagement to believe; on CVENT a new joiner used EMA for 90 minutes to produce a tech-debt recommendation validated ~85% accurate.",
    action: "Make it the flagship pilot story that validates Verizon's early success.",
  },
  {
    num: "04",
    title: "Make \u201crole evolution\u201d credible",
    insight: "Juniors carry the most change and concern.",
    action: "Publish a skill path per level (Validation, Context-Setting, Prompting) tied to promotion criteria; align leaders on one message.",
  },
  {
    num: "05",
    title: "Peer champions at every level",
    insight: "A peer at the same level is the top influence",
    action: "Name champions per level",
  },
  {
    num: "06",
    title: "Clear human checkpoints",
    insight: "14 of 18 want human sign-off; 17 of 18 comfortable with agent first drafts.",
    action: "Build into the future state user journey sign offs for anything client-facing.",
  },
  {
    num: "07",
    title: "Win over Sr. Managers",
    insight: "Least convinced for their seniority (73% positive or mixed); they run the engagements.",
    action: "Make them co-authors of the security position and human in the loop sign-off rules.",
  },
];

export const topRisks = [
  { title: "Client legacy-code security", body: "Clients may restrict where tools run and what code they can touch." },
  { title: "Delivery pace", body: "No time to consciously change ways of working, so old habits win by default." },
];

export const leadershipRecs = [
  "Approve the client data & legacy-code position from a practice and compliance level to remove perceived ambiguity about what is acceptable",
  "Fund in person simulated-project training and count coaching time toward utilization",
  "Measure quality (accuracy/rework) alongside hours saved in performance metrics",
];

export const heatMapMeta = {
  eyebrow: "ROLES & DEGREE OF IMPACT",
  title: "ATE Stakeholder Impact Heat Map by Practice Roles",
  xAxisLabel: "DEGREE OF IMPACT \u00b7\u00a0\u00a0how much the role's day-to-day work changes\u00a0\u00a0(low \u2192 high)",
  yAxisLabel: "\u2191 DIRECT IMPACT ON SERVICE DELIVERY\u00a0\u00a0(low \u2192 high)",
  sizeLegendLabel: "Bubble size = change curve impact (how far the role must travel on the change curve)",
  soWhat: "Change impact concentrates at the base of the pyramid \u2014 Associates and Sr. Associates carry the largest change journey and the most hands-on delivery exposure, so enablement, a defined human-review checkpoint and visible reward for AI use should start there.",
  source: "Source: 23 ATE stakeholder interview transcripts (18 stakeholders; 5 second-round), Sept\u2013Oct 2026. Placement and bubble size are qualitative assessments synthesized from interview responses by role. P/MD not interviewed \u2014 provisional placement.",
};

export const heatMapBubbles = [
  { role: "Sr. Associates", n: 4, x: 7.0, y: 9.0, size: 9, color: COLORS.orange2, stage: "Exploration (mixed)",
    desc: "Closest to build \u2014 user stories, dev specs, requirements; split between excitement and fear of giving up control." },
  { role: "Associates", n: 3, x: 8.8, y: 5.8, size: 7, color: "#E65040", stage: "Concern / Resistance",
    desc: "Notes, decks, ADO reporting and documentation are the work agents absorb first; hesitancy after poor past AI output." },
  { role: "Managers", n: 5, x: 5.3, y: 6.8, size: 6, color: "#FFC845", stage: "Acceptance / Engagement",
    desc: "Shift from grooming requirements to reviewing AI output; most excited cohort, skeptical mainly of AI-generated code." },
  { role: "Sr. Managers", n: 4, x: 3.5, y: 4.5, size: 6, color: COLORS.orange2, stage: "Exploration (mixed)",
    desc: "Status reports, test scripts automated; role moves to architecture and risk; cautious on data sensitivity and accuracy." },
  { role: "Directors", n: 2, x: 2.0, y: 3.0, size: 5, color: "#4C8C5B", stage: "Commitment",
    desc: "Impact is commercial \u2014 staffing pyramid, skill mix of junior resources, more time on pursuits; no resistance voiced." },
];

export const heatMapPMD = { role: "P/MD", n: 0, x: 4.5, y: 1.2, size: 3,
  desc: "Not interviewed \u2014 position is a hypothesis to validate (pricing, pyramid and incentive decisions)." };

export const heatMapStages = [
  { color: "#E65040", label: "Concern / Resistance" },
  { color: COLORS.orange2, label: "Exploration (mixed)" },
  { color: "#FFC845", label: "Acceptance / Engagement" },
  { color: "#4C8C5B", label: "Commitment" },
  { color: null, label: "Not assessed" },
];

export const closing = {
  title: "Thank You",
  subtitle: "Questions & Discussion",
};
