import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import ExecSummary from "@/components/ExecSummary";
import Overview from "@/components/Overview";
import HeatMap from "@/components/HeatMap";
import ThemeSection from "@/components/ThemeSection";
import Theme8 from "@/components/Theme8";
import WordCloud from "@/components/WordCloud";
import SkillShift from "@/components/SkillShift";
import Recommendations from "@/components/Recommendations";
import Closing from "@/components/Closing";
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
      <HeatMap />
      <div id="themes">
        {themes.map((t, i) => (
          <ThemeSection key={t.title} data={t} index={i} />
        ))}
        <Theme8 />
      </div>
      <WordCloud />
      <SkillShift />
      <Recommendations />
      <Closing />
      <Footer />
      <BackToTop />
    </main>
  );
}
