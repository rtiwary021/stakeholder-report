import Image from "next/image";
import Link from "next/link";

export default function WalkthroughNav() {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-hairline">
      <div className="max-w-content mx-auto px-8 py-3.5 flex items-center justify-between gap-6">
        <Link href="/" aria-label="Back to stakeholder report">
          <Image src="/pwc-logo.png" alt="PwC" width={100} height={49} className="h-[26px] w-auto" />
        </Link>
        <nav className="flex items-center gap-5">
          <Link href="/" className="text-[13px] font-bold text-muted hover:text-orange transition-colors">
            Stakeholder Report
          </Link>
          <span className="text-[13px] font-bold text-orange border-b-2 border-orange pb-0.5" aria-current="page">
            Interview Walkthrough
          </span>
        </nav>
      </div>
    </div>
  );
}
