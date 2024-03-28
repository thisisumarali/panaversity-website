import { HeroScrollDemo } from "./components/Containerescrolldemo";
import Ourprogram from "./components/Ourprogram";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { StickyScrollRevealDemo } from "./components/Stickyscrolldemo";

export default function Home() {
  return (
    <>
      <SpotlightPreview />
      <HeroScrollDemo />
      <StickyScrollRevealDemo />
      <Ourprogram />
    </>
  );
}
