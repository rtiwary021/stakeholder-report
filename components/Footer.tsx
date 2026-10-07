import { meta } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-8">
      <div className="max-w-content mx-auto px-8 text-[13px] text-muted italic">
        {meta.stakeholders} stakeholder interviews &nbsp;|&nbsp; {meta.date}
      </div>
    </footer>
  );
}
