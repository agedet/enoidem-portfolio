import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact/Contact";
import Stats from "@/components/Stats";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div className="min-h-screen bg-background leading-relaxed text-text antialiased selection:bg-primary selection:text-text expansion-alids-init">
      <main className="min-h-screen mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-primary via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
          
        <section className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Stats />
            <Education />
            <Experience />
            <Publications />
            <Contact />
            <Footer />
          </main>
        </section>
      </main>
    </div>
  );
}