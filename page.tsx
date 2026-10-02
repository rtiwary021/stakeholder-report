import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import ExecSummary from "@/components/ExecSummary";
import Overview from "@/components/Overview";
import WordCloud from "@/components/WordCloud";
import ThemeSection from "@/components/ThemeSection";
import Risks from "@/components/Risks";
import Recommendations from "@/components/Recommendations";
import Rollout from "@/components/Rollout";
import KeyMessages from "@/components/KeyMessages";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { themes } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <NavBar />
      <Hero />
      <Methodology />
      <ExecSummary />
      <Overview />
      <WordCloud />
      <div id="themes">
        {themes.map((t, i) => (
          <ThemeSection key={t.title} data={t} index={i} />
        ))}
      </div>
      <Risks />
      <Recommendations />
      <Rollout />
      <KeyMessages />
      <Footer />
      <BackToTop />
    </main>
  );
}
