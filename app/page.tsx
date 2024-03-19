import Career from "./components/Career";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import MidRow from "./components/MidRow";
import Partners from "./components/Partners";
import Section from "./components/Section";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />

      <MidRow />
      <Partners />
      <Career />
      <Faqs />
      <Testimonials />
    </div>
  );
}
