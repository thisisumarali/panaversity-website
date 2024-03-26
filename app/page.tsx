import Career from "./components/Career";
import { HeroScrollDemo } from "./components/Containerescrolldemo";
import Faqs from "./components/Faqs";
import { GlobeDemo } from "./components/Globedemo";
import Hero from "./components/Hero";
import MidRow from "./components/MidRow";
import Partners from "./components/Partners";
import { SpotlightPreview } from "./components/SpotlightPreview";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <SpotlightPreview />
      <HeroScrollDemo />
      {/* <GlobeDemo /> */}

      <Hero />
      <MidRow />
      <Partners />
      <Career />
      <Faqs />
      <Testimonials />
    </>
  );
}
