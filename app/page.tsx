import { TrustBar } from "@/components/layout/TrustBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { SocialProofPopup } from "@/components/ui/SocialProofPopup";

import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { EaterTypes } from "@/components/sections/EaterTypes";
import { TransformationWall } from "@/components/sections/TransformationWall";
import { CourseProgram } from "@/components/sections/CourseProgram";
import { Methodology } from "@/components/sections/Methodology";
import { Credentials } from "@/components/sections/Credentials";
import { SuccessProgram } from "@/components/sections/SuccessProgram";
import { PreQuizCTA } from "@/components/sections/PreQuizCTA";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function LandingPage() {
  return (
    <>
      <TrustBar />
      <Header />
      <main className="relative pb-24 md:pb-0">
        <Hero />
        <SocialProofBar />
        <HowItWorks />
        <EaterTypes />
        <TransformationWall />
        <CourseProgram />
        <Methodology />
        <Credentials />
        <SuccessProgram />
        <PreQuizCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
      <SocialProofPopup />
    </>
  );
}
