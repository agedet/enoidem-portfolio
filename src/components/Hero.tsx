import { AutoSliderBanner } from "./auto-slider-banner";


export default function Hero() {
  return (
    <section id='hero' className="rounded-lg mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label='About professor enoidem usoro'>
        <AutoSliderBanner />
    </section>
  );
}