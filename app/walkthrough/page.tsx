import type { Metadata } from "next";
import WalkthroughNav from "@/components/walkthrough/WalkthroughNav";
import WalkthroughStages from "@/components/walkthrough/WalkthroughStages";
import Footer from "@/components/Footer";
import { interview } from "@/lib/interview";

export const metadata: Metadata = {
  title: "Interview Walkthrough — ERP Change Comms Stakeholder Interviews",
  description: `Interactive walkthrough of the ${interview.questions.length}-question, ${interview.minutes.total}-minute ERP stakeholder interview guide.`,
};

export default function WalkthroughPage() {
  return (
    <main>
      <WalkthroughNav />
      <section className="pt-16 pb-10">
        <div className="max-w-content mx-auto px-8">
          <div className="text-orange font-bold text-[13px] tracking-[2px] mb-3.5 animate-in">
            INTERVIEW QUESTIONS
          </div>
          <h1 className="text-[40px] md:text-[48px] leading-[1.08] max-w-[780px] mb-4 text-balance animate-in" style={{ animationDelay: "0.1s" }}>
            ERP Stakeholder Interview Guide
          </h1>
          <p className="text-[17px] text-body max-w-[680px] leading-relaxed mb-6 text-pretty animate-in" style={{ animationDelay: "0.2s" }}>
            A conversation of about 45 minutes to help shape how Foundation and Wave 1 land with you and your team. We&apos;ll
            start with a quick recap, then walk through the {interview.questions.length} questions together.
          </p>
        </div>
      </section>
      <WalkthroughStages />
      <Footer />
    </main>
  );
}
