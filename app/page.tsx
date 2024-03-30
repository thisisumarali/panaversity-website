import { HeroScrollDemo } from "./components/Containerescrolldemo";
import Ourprogram from "./components/Ourprogram";
import OurCourses from "./components/OurCourses";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { StickyScrollRevealDemo } from "./components/Stickyscrolldemo";

export default function Home() {
  return (
    <>
      <SpotlightPreview />
      <HeroScrollDemo />
      <StickyScrollRevealDemo />
      <Ourprogram />
      <OurCourses />
    </>
  );
}
