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
  const priorityCount = interview.questions.filter((q) => q.leadershipPriority).length;

  return (
    <main>
      <WalkthroughNav />
      <section className="pt-16 pb-10">
        <div className="max-w-content mx-auto px-8">
          <div className="text-orange font-bold text-[13px] tracking-[2px] mb-3.5 animate-in">
            INTERVIEW WALKTHROUGH
          </div>
          <h1 className="text-[40px] md:text-[48px] leading-[1.08] max-w-[780px] mb-4 text-balance animate-in" style={{ animationDelay: "0.1s" }}>
            ERP Stakeholder Interview Guide
          </h1>
          <p className="text-[17px] text-body max-w-[680px] leading-relaxed mb-6 text-pretty animate-in" style={{ animationDelay: "0.2s" }}>
            {interview.questions.length} questions, the same for everyone, in about {interview.minutes.total} minutes. Step through
            each question, see what it touches and produces, or trace a leadership ask or output back to the questions that feed it.
          </p>
          <div className="text-sm text-muted border-t border-black/10 pt-4 inline-flex flex-wrap items-center gap-x-4 gap-y-2 animate-in" style={{ animationDelay: "0.3s" }}>
            <span>{interview.minutes.questions} min of questions + {interview.minutes.buffer} min intro &amp; buffer</span>
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-orange" aria-hidden="true" />
              {priorityCount} leadership-emphasis questions
            </span>
          </div>
        </div>
      </section>
      <InterviewWalkthrough />
      <Footer />
    </main>
  );
}
