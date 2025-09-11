import HeroSection from "./src/components/HeroSection";
import ProblemAwareness from "./src/components/ProblemAwareness";
import RealityCheck from "./src/components/RealityCheck";
import TargetAudience from "./src/components/TargetAudience";
import WhyDifferent from "./src/components/WhyDifferent";
import LearningRoadmap from "./src/components/LearningRoadmap";
import EbookSection from "./src/components/EbookSection";
// import ExclusiveBonus from "./src/components/ExclusiveBonus";
import Testimonials from "./src/components/Testimonials";
import FAQ from "./src/components/FAQ";
import Pricing from "./src/components/Pricing";
import FinalCTA from "./src/components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Top margin untuk estetika yang lebih baik */}
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
        </div>
      </div>
      
      <ProblemAwareness />
      <RealityCheck />
      <TargetAudience />
      <WhyDifferent />
      <LearningRoadmap />
      <EbookSection />
      {/* <ExclusiveBonus /> */}
      <Testimonials />
      <FAQ />
      <Pricing />
      <FinalCTA />
    </div>
  );
}