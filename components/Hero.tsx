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
        <h1 className="text-[52px] leading-[1.08] max-w-[820px] mb-4 animate-in">
          {meta.title}
        </h1>
        <div className="text-sm text-muted border-t border-black/10 pt-4 inline-block animate-in" style={{ animationDelay: "0.2s" }}>
          {meta.date}
        </div>
      </div>
    </section>
  );
}
