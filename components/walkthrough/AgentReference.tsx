import { waves } from "@/lib/intro";

const agentWaves = waves.filter((w) => w.agents.length > 0);

export default function AgentReference() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-[22px]">Agents by wave</h2>
        <p className="text-[14px] text-muted">
          A quick reference for the agents mentioned in the questions. Wave 1 rolls out early January; later waves are
          timing to be confirmed.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {agentWaves.map((w) => (
          <section
            key={w.id}
            aria-labelledby={`ref-${w.id}`}
            className={`rounded-[10px] p-5 flex flex-col gap-4 border ${
              w.current ? "bg-orange/5 border-orange" : "bg-white border-dashed border-muted/50"
            }`}
          >
            <div className="flex flex-col gap-1">
              <span
                className={`text-[12px] font-bold tracking-[2px] uppercase ${w.current ? "text-orange" : "text-muted"}`}
              >
                {w.name}
              </span>
              <h3 id={`ref-${w.id}`} className="text-[17px] font-bold">
                {w.title}
              </h3>
              <span className={`text-[13px] ${w.current ? "text-orange font-bold" : "text-muted"}`}>{w.status}</span>
            </div>
            <ul className="flex flex-col gap-3">
              {w.agents.map((a) => (
                <li key={a.name} className="flex flex-col gap-0.5">
                  <span className={`text-[14px] font-bold ${w.current ? "text-orange" : ""}`}>{a.name}</span>
                  <span className="text-[14px] leading-relaxed text-body text-pretty">{a.description}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
