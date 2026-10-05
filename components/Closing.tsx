import { closing } from "@/lib/data";

export default function Closing() {
  return (
    <section className="py-24 border-t border-hairline text-center">
      <div className="max-w-content mx-auto px-8">
        <h2 className="text-[42px] mb-3">{closing.title}</h2>
        <p className="text-[20px] text-muted italic">{closing.subtitle}</p>
      </div>
    </section>
  );
}
