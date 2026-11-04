import type { Metadata } from "next";
import ErpNav from "@/components/erp/ErpNav";
import ErpHero from "@/components/erp/ErpHero";
import ErpMethodology from "@/components/erp/ErpMethodology";
import ErpSummary from "@/components/erp/ErpSummary";
import ErpSentiment from "@/components/erp/ErpSentiment";
import ErpHeatMap from "@/components/erp/ErpHeatMap";
import ErpPersonas from "@/components/erp/ErpPersonas";
import ErpThemes from "@/components/erp/ErpThemes";
import ErpFutureWaves from "@/components/erp/ErpFutureWaves";
import ErpPlan from "@/components/erp/ErpPlan";
import ErpSkills from "@/components/erp/ErpSkills";
import ErpRecommendations from "@/components/erp/ErpRecommendations";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "ERP Stakeholder Interview Results",
  description:
    "Interactive results from 18 ERP stakeholder interviews on agent adoption: sentiment, eight themes, persona insights, the skill shift and rollout recommendations.",
};

export default function ErpResultsPage() {
  return (
    <main>
      <ScrollProgress />
      <ErpNav />
      <ErpHero />
      <ErpMethodology />
      <ErpSummary />
      <ErpSentiment />
      <ErpHeatMap />
      <ErpPersonas />
      <ErpThemes />
      <ErpFutureWaves />
      <ErpPlan />
      <ErpSkills />
      <ErpRecommendations />
      <footer className="border-t border-hairline py-8">
        <div className="max-w-content mx-auto px-8 text-[13px] text-muted italic">
          Practice Transformation Office &nbsp;|&nbsp; ERP · 18 stakeholder interviews
        </div>
      </footer>
      <BackToTop />
    </main>
  );
}
