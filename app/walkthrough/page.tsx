import type { Metadata } from "next";
import WalkthroughNav from "@/components/walkthrough/WalkthroughNav";
import InterviewWalkthrough from "@/components/walkthrough/InterviewWalkthrough";
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
            Here are the {interview.questions.length} questions we&apos;ll walk through together, so you know what to expect
            before our conversation.
          </p>
        </div>
      </section>
      <InterviewWalkthrough />
      <Footer />
    </main>
  );
}
