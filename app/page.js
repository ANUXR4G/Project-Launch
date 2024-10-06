import Image from "next/image";
import { GridBackgroundDemo } from "./components/Extras/GridBackground";
import { SpotlightPreview } from "./components/Extras/SpotlightPreview";
import { WavyBackgroundDemo } from "./components/Extras/WavyBackgroundDemo.jsx";
import { GoogleGeminiEffectDemo } from "./components/Extras/GoogleGeminiEffectDemo";
import { MacbookScrollDemo } from "./components/Extras/MacbookScrollDemo";
import { HeroScrollDemo } from "./components/Extras/HeroScrollDemo";
import { HeroParallaxDemo } from "./components/Extras/HeroParallaxDemo";
import { BackgroundBeamsDemo } from "./components/Extras/BackgroundBeamsDemo";
import { InfiniteMovingCardsDemo } from "./components/Extras/InfiniteMovingCardsDemo";
import { SparklesPreview } from "./components/Extras/SparklesPreview";

export default function Home() {
  return (
    <>
      <WavyBackgroundDemo />
      <GridBackgroundDemo />
      <SparklesPreview />
      <GoogleGeminiEffectDemo />
      <MacbookScrollDemo />
      <HeroScrollDemo />
      <HeroParallaxDemo />
      <InfiniteMovingCardsDemo />
      <BackgroundBeamsDemo />
      <SpotlightPreview />
    </>
  );
}
