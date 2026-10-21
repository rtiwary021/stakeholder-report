import { meta } from "@/lib/data";

export default function Hero() {
  return (
    <section
      className="relative pt-24 pb-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Ambient floating orbs for depth */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 420,
          height: 420,
          right: "-8%",
          top: "-15%",
          background: "radial-gradient(circle, rgba(253,81,8,0.14) 0%, rgba(253,81,8,0) 70%)",
          animation: "float1 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300,
          height: 300,
          left: "2%",
          bottom: "-20%",
          background: "radial-gradient(circle, rgba(254,124,57,0.12) 0%, rgba(254,124,57,0) 70%)",
          animation: "float2 11s ease-in-out infinite",
        }}
      />
      <div className="max-w-content mx-auto px-8 relative z-10">
        <div className="text-orange font-bold text-[13px] tracking-[2px] mb-3.5 animate-in">
          STAKEHOLDER IMPACT REPORT
        </div>
        <h1 className="text-[52px] leading-[1.08] max-w-[780px] mb-4 animate-in" style={{ animationDelay: "0.1s" }}>
          Agentic Delivery Transformation
        </h1>
        <p className="text-[19px] text-body max-w-[640px] mb-8 animate-in" style={{ animationDelay: "0.2s" }}>
          What CRM consulting stakeholders think, fear, and want as agentic delivery scales
        </p>
        <div className="text-sm text-muted border-t border-black/10 pt-4 inline-block animate-in" style={{ animationDelay: "0.3s" }}>
          Practice Transformation Office &nbsp;|&nbsp; {meta.stakeholders} completed stakeholder interviews &nbsp;|&nbsp; {meta.date}
        </div>
      </div>
    </section>
  );
}
