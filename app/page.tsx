import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import ExecSummary from "@/components/ExecSummary";
import Overview from "@/components/Overview";
import WordCloud from "@/components/WordCloud";
import ThemeSection from "@/components/ThemeSection";
import Theme8 from "@/components/Theme8";
import Risks from "@/components/Risks";
import KeyMessages from "@/components/KeyMessages";
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
      <WordCloud />
      <div id="themes">
        {themes.map((t, i) => (
          <ThemeSection key={t.title} data={t} index={i} />
        ))}
        <Theme8 />
      </div>
      <Risks />
      <KeyMessages />
      <Recommendations />
      <Closing />
      <Footer />
      <BackToTop />
    </main>
  );
}
