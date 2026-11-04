import Reveal from "@/components/Reveal";
import { personas, planSoWhat } from "@/lib/erp";
import { SectionHeader, Takeaway } from "./shared";

export default function ErpPlan() {
  return (
    <section id="erp-practice" className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <SectionHeader
          eyebrow="PRACTICE AREA FOCUS"
          title="How Each Persona Fits the Adoption & Learning Plan"
          intro="Drawn from everything stakeholders shared across all 18 interviews — what matters to each group, and how best to reach and train them going forward."
        />

        <Reveal>
          <div className="hidden md:grid grid-cols-[200px_1fr_1fr] gap-6 px-5 pb-3 text-[13px] font-bold text-ink">
            <span>Persona</span>
            <span>Preferred Communication</span>
            <span>Suggested Training Approach Add Ons</span>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            {personas.map((p) => (
              <div
                key={p.name}
                className="grid md:grid-cols-[200px_1fr_1fr] gap-3 md:gap-6 bg-card rounded-r-lg border-l-[6px] px-5 py-4 transition-transform duration-300 hover:translate-x-1"
                style={{ borderLeftColor: p.color }}
              >
                <div>
                  <div className="font-bold text-ink text-[15px]">{p.name}</div>
                  <div className="text-[12.5px] text-muted">n={p.n} of 18</div>
                </div>
                <div className="text-[14px] text-body leading-relaxed">
                  <span className="md:hidden block text-[11px] font-bold tracking-wide text-muted mb-0.5">
                    COMMUNICATION
                  </span>
                  {p.communication}
                </div>
                <div className="text-[14px] text-body leading-relaxed">
                  <span className="md:hidden block text-[11px] font-bold tracking-wide text-muted mb-0.5">
                    TRAINING ADD ONS
                  </span>
                  {p.training}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Takeaway>{planSoWhat}</Takeaway>
      </div>
    </section>
  );
}
