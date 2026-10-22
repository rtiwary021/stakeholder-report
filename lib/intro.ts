export const whyAsking = [
  "Foundation and Wave 1 roll out early January, and we are building the change, communications and learning plan now",
  "You know how your team really works, and what would help or get in the way",
  "We want your input to shape the plan, not hand it to you finished",
];

export const howUsed = [
  "To decide who hears what and when, what training looks like, and how we measure adoption",
  "Answers are combined across interviews and reported by group, not by name",
  "We won't use them for anything else without asking you first",
];

export const timeline = [
  { when: "Late October", what: "Interviews, about 30 minutes each" },
  { when: "End of October", what: "We draft the change, communications and learning plan using what we heard" },
  { when: "Early November", what: "We share a short summary of what we heard and what we are doing about it" },
  { when: "End of December", what: "ADLC Wave 1 build complete" },
  { when: "Early January", what: "Wave 1 rollout" },
];

export const themes = [
  {
    label: "Awareness",
    title: "What's coming and when",
    points: [
      "What you have already heard about the agents, and from whom",
      "How and how often you would like to hear about what is coming",
      "Which channels you actually read, and whose voice you trust",
    ],
  },
  {
    label: "Desire",
    title: "Why it matters to me",
    points: [
      "What would change in your day, and what concerns you",
      "What would help you trust the output and use it",
      "What would stop you using it, even if it works well",
    ],
  },
  {
    label: "Knowledge",
    title: "What I get now and what I don't",
    points: [
      "What you expect from Wave 1, and what you do not expect yet",
      "What you would need to learn, and how you like to learn",
      "What would show you it is working",
    ],
  },
];

export const wave1Expect = [
  "A new browser tab that becomes your hub: you open the five agents from there",
  "Five agents that give you visibility: project set-up, meeting recaps, continuous checks, an attention dashboard and a knowledge hub",
  "They work on new and in-flight projects (in-flight projects need a one-time set-up)",
  "A person always confirms; nothing is published without a named person's approval",
  "Under the hood, 19 shared skills. Nothing visible there yet",
];

export const notYet = [
  "Agents drafting requirements, designs or status reports (later waves)",
  "Clients using the agents directly (they are internal to PwC)",
  "Agents making changes inside D365 or loading data",
];

export const roadmapNote =
  "Not built by us: changes inside D365 and data loading use Microsoft's own tools. Code writing and code review are still being decided.";

export type Agent = { name: string; description: string };
export type Wave = {
  id: string;
  name: string;
  title: string;
  status: string;
  current: boolean;
  summary?: string;
  agents: Agent[];
};

export const waves: Wave[] = [
  {
    id: "foundation",
    name: "Foundation",
    title: "Shared building blocks",
    status: "Built first | now in testing",
    current: true,
    summary: "19 shared skills, built once and used by every agent. Nothing visible to consultants yet.",
    agents: [],
  },
  {
    id: "wave1",
    name: "Wave 1",
    title: "See everything",
    status: "Rollout: beginning of January",
    current: true,
    agents: [
      { name: "Mobilization", description: "One-time set-up per engagement, including projects under way: Azure DevOps, team, templates." },
      { name: "Meeting Recap", description: "Drafts recaps for the meeting owner to release, links work items, flags new requirements." },
      { name: "Continuous Monitoring", description: "Checks requirements, designs and plans for conflicts and gaps, and routes findings to owners." },
      { name: "Dashboard", description: "A personal list of what needs your attention, with a way to act. Unactioned items escalate." },
      { name: "Knowledge Hub", description: 'Answers "what changed, when and why?" from the project record, with sources cited.' },
    ],
  },
  {
    id: "wave2",
    name: "Wave 2",
    title: "Transform the design work",
    status: "Timing to be confirmed",
    current: false,
    agents: [
      { name: "Requirements Extraction", description: "Turns workshop recordings and questionnaires into draft requirements for you to confirm." },
      { name: "FITGAP Core", description: "Sorts each requirement into standard D365 or custom work, citing Microsoft documentation." },
      { name: "FDD Writer", description: "Drafts the functional design and flags risks for the architect to acknowledge." },
      { name: "TDD Writer", description: "Drafts the technical design from the approved functional design." },
    ],
  },
  {
    id: "wave3",
    name: "Wave 3",
    title: "Complete the picture",
    status: "Timing to be confirmed",
    current: false,
    agents: [
      { name: "Questionnaire", description: "Builds the discovery workbook from the firm's question library and takes answers back." },
      { name: "Meeting Scheduling", description: "Builds a workshop schedule from each consultant's needs and tracks bookings." },
      { name: "MSFT Monitoring", description: "Flags new Microsoft capability that overlaps something planned as a custom build." },
      { name: "Solution Doc", description: "Produces the client-facing explanation of the solution, plus a separate internal view." },
      { name: "Status Reporting", description: "Drafts two reports from live data: delivery health for PwC, progress for the client." },
    ],
  },
  {
    id: "wave4",
    name: "Wave 4",
    title: "Close the loop",
    status: "Timing to be confirmed",
    current: false,
    agents: [
      { name: "Delivery Planning", description: "Drafts seven program plans, including data migration, testing and training." },
      { name: "Cutover", description: "Builds the go-live checklist, with a task set for each rehearsal and live status." },
      { name: "Hypercare", description: "Researches each post-go-live issue and spots patterns across issues." },
      { name: "Test Case Generation", description: "Generates scenario-based test cases that chain requirements across processes." },
      { name: "Training Content", description: "Produces first-draft training material by security role, for consultants to edit." },
      { name: "Practice Intelligence", description: "Reads anonymized usage patterns and proposes improvements to shared templates." },
      { name: "Release Management", description: "Governs how approved improvements reach running projects, with rollback." },
    ],
  },
];

export const otherTools: (Agent & { tag: string })[] = [
  { tag: "Not yet designed", name: "Extension Coding", description: "Would help build D365 extensions from approved technical designs. Still to be decided." },
  { tag: "Not yet designed", name: "Code Review & QA", description: "Would review custom code against firm standards. Likely to use existing tools." },
  { tag: "Microsoft tool", name: "Microsoft Configuration Tool", description: "Microsoft's own AI tooling makes changes and posts transactions inside D365." },
  { tag: "Microsoft tool", name: "Microsoft Data Migration Tool", description: "Microsoft's tool runs and tracks the migration, using what our agents package." },
];
