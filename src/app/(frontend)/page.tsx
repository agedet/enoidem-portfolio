import AboutMe from "@/components/AboutMe";
import Associations from "@/components/Associations";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-background leading-relaxed text-text antialiased selection:bg-primary selection:text-text expansion-alids-init">
      <main className="min-h-screen mx-auto max-w-screen-xl px-4 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-primary via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
        <section className="lg:py-10">
          <Hero />
          <AboutMe />
          <Stats />
          <Education />
          <Associations />
          <Experience />
          <Publications />
          <Contact />
        </section>

        {/* <section className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <Hero />
            <About />
            <Stats />
            <Education />
            <Associations />
            <Experience />
            <Publications />
            <Contact />
            <ASFooter />
          </main>
        </section> */}
      </main>
    </div>
  );
}