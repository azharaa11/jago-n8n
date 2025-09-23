import HeroSection from "./components/HeroSection";
import ProblemAwareness from "./components/ProblemAwareness";
import RealityCheck from "./components/RealityCheck";
import TargetAudience from "./components/TargetAudience";
import WhyDifferent from "./components/WhyDifferent";
import LearningRoadmap from "./components/LearningRoadmap";
import EbookSection from "./components/EbookSection";
// import ExclusiveBonus from "./components/ExclusiveBonus";
import Testimonials from "./components/Testimonials";
// import VideoTutorialSection from "./components/EbookSection";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Top margin untuk estetika yang lebih baik */}
      
          <HeroSection />
        
      
      <ProblemAwareness />
      <RealityCheck />
      <TargetAudience />
      <WhyDifferent />
      <LearningRoadmap />
      {/* <VideoTutorialSection/> */}
      <EbookSection />
      {/* <ExclusiveBonus /> */}
      <Testimonials />
      <FAQ />
      <Pricing />
      <FinalCTA />
    </div>
  );
}