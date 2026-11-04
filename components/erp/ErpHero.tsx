const AGENDA = [
  { id: "erp-methodology", title: "Methodology & Scope", desc: "Who we interviewed, how, and the eight themes covered" },
  { id: "erp-summary", title: "Executive Summary", desc: "The headline findings on ERP agent adoption" },
  { id: "erp-sentiment", title: "Sentiment Overview", desc: "Overall sentiment and how findings vary by persona" },
  {
    id: "erp-themes",
    title: "Eight Themes in Depth",
    desc: "Role & time, awareness, agent usefulness, future waves, trust, preferences, learning, communication, success measures",
  },
  {
    id: "erp-practice",
    title: "Practice Area Focus & The Skill Shift",
    desc: "What changes for each practice area and the skills people will need",
  },
  { id: "erp-recommendations", title: "Recommendations & Next Steps", desc: "Actions to drive adoption and sustain momentum" },
];

export default function ErpHero() {
  return (
    <section className="pt-16 pb-12">
      <div className="max-w-content mx-auto px-8">
        <div className="text-orange font-bold text-[13px] tracking-[2px] mb-3.5 animate-in">
          ERP CHANGE COMMS · STAKEHOLDER INTERVIEW RESULTS
        </div>
        <h1
          className="text-[40px] md:text-[52px] leading-[1.06] max-w-[820px] mb-4 text-balance animate-in"
          style={{ animationDelay: "0.1s" }}
        >
          What 18 ERP stakeholders told us about agent adoption
        </h1>
        <p
          className="text-[17px] text-body max-w-[700px] leading-relaxed mb-10 text-pretty animate-in"
          style={{ animationDelay: "0.2s" }}
        >
          Findings from one-on-one interviews spanning Associate to Director — from where time goes today, through
          trust and barriers, to how people want to learn and how we&apos;ll know it&apos;s working.
        </p>

        <ol className="flex flex-col gap-2.5 animate-in" style={{ animationDelay: "0.3s" }}>
          {AGENDA.map((a, i) => (
            <li key={a.id}>
              <a
                href={`#${a.id}`}
                className="group flex flex-col md:flex-row md:items-center gap-1 md:gap-6 bg-card hover:bg-orange/5 rounded-lg px-5 py-4 transition-colors"
              >
                <span className="font-serif font-bold text-orange text-[28px] leading-none md:w-14">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-bold text-ink text-[16px] md:w-[300px]">{a.title}</span>
                <span className="text-muted text-[14px] flex-1 leading-relaxed">{a.desc}</span>
                <span
                  aria-hidden="true"
                  className="hidden md:block text-orange font-bold transition-transform group-hover:translate-x-1"
                >
                  {"→"}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
