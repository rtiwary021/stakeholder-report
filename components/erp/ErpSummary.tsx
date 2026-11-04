import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { working, workTowards, type SummaryPoint } from "@/lib/erp";
import { SectionHeader } from "./shared";

function Column({
  title,
  icon,
  points,
  tone,
}: {
  title: string;
  icon: string;
  points: SummaryPoint[];
  tone: "orange" | "grey";
}) {
  const isOrange = tone === "orange";
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center ${isOrange ? "bg-orange" : "bg-muted"}`}
        >
          <Icon name={icon} className="w-5 h-5 text-white" />
        </div>
        <h3 className={`text-[19px] ${isOrange ? "!text-orange" : "!text-muted"}`}>{title}</h3>
      </div>
      <div className={`rounded-2xl p-6 flex flex-col gap-5 ${isOrange ? "bg-orange/5" : "bg-card"}`}>
        {points.map((p) => (
          <div key={p.title}>
            <div className={`font-bold text-[15.5px] mb-1 ${isOrange ? "text-orange" : "text-muted"}`}>{p.title}</div>
            <p className="text-[14.5px] text-body leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ErpSummary() {
  return (
    <section id="erp-summary" className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <SectionHeader title="Executive Summary" />
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <Column title="What's Working Currently" icon="zap" points={working} tone="orange" />
          </Reveal>
          <Reveal delay={120}>
            <Column
              title="What We Need to Work Towards in Adoption Planning"
              icon="alert"
              points={workTowards}
              tone="grey"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
