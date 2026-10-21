import { Flow, InterviewOutput, InterviewQuestion, sectionOf } from "@/lib/interview";

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-[10px] p-5">
      <div className="text-orange font-bold text-xs tracking-[1.4px] mb-2">{label}</div>
      <div className="text-[14.5px] leading-relaxed text-body text-pretty">{children}</div>
    </div>
  );
}

export default function QuestionCard({
  question,
  total,
  startMinute,
  interviewerMode,
  feedsOutputs,
  onTraceOutput,
}: {
  question: InterviewQuestion;
  total: number;
  startMinute: number;
  interviewerMode: boolean;
  feedsOutputs: InterviewOutput[];
  onTraceOutput: (flow: Flow) => void;
}) {
  const q = question;
  return (
    <article key={q.id} className="animate-in" aria-live="polite">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
        <span className="w-12 h-12 rounded-full bg-orange text-white font-serif font-bold text-lg flex items-center justify-center">
          {q.id}
        </span>
        <div className="flex flex-col">
          <span className="text-orange font-bold text-xs tracking-[1.6px] uppercase">{sectionOf(q.id)}</span>
          <span className="text-[13px] text-muted">
            Question {q.order} of {total} &middot; {q.minutes} min &middot; minute {startMinute}&ndash;{startMinute + q.minutes}
          </span>
        </div>
        {q.leadershipPriority && (
          <span className="ml-auto text-[11px] font-bold tracking-[1.2px] bg-orange/15 text-orange rounded-full px-3 py-1">
            LEADERSHIP EMPHASIS
          </span>
        )}
      </div>

      <h2 className={`font-serif leading-snug text-pretty mb-6 ${interviewerMode ? "text-[24px] md:text-[28px]" : "text-[28px] md:text-[36px]"}`}>
        {q.question}
      </h2>

      {interviewerMode && (
        <div className="flex flex-col gap-4">
          {q.notes && (
            <div className="border-l-4 border-orange bg-orange/5 rounded-r-lg px-5 py-4">
              <div className="font-bold text-xs tracking-[1.4px] text-orange mb-1.5">PROBES &amp; WHAT TO SHOW</div>
              <p className="text-[15px] leading-relaxed italic text-body">{q.notes}</p>
            </div>
          )}

          <div className="bg-orange text-white rounded-lg px-5 py-4 text-[14.5px] leading-relaxed">
            <b className="inline-block tracking-[1.2px] text-xs mr-2.5 opacity-75">PRODUCES</b>
            {q.output}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Detail label="WAVE 1 AGENTS">{q.wave1Agents}</Detail>
            <Detail label="LATER-WAVE AGENTS">{q.laterAgents}</Detail>
            <Detail label="FEEDS DELIVERABLE">{q.deliverable}</Detail>
            <Detail label="LEADERSHIP EMPHASIS">{q.emphasis}</Detail>
          </div>

          {feedsOutputs.length > 0 && (
            <div>
              <div className="text-xs font-bold tracking-[1.4px] text-muted mb-2">CONTRIBUTES TO OUTPUTS</div>
              <div className="flex flex-wrap gap-2">
                {feedsOutputs.map((o) => (
                  <button
                    key={o.n}
                    type="button"
                    onClick={() => onTraceOutput({ kind: "output", item: o })}
                    className="text-[13px] text-left bg-white border border-hairline rounded-full px-3 py-1.5 hover:border-orange hover:text-orange transition-colors"
                  >
                    {o.output.split(":")[0].replace(/\.$/, "")}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
