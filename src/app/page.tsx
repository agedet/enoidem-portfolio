import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact/Contact";
import Stats from "@/components/Stats";


export default function Home() {
  return (
    <div className="min-h-screen">
      <About />
      <Stats />
      <Education />
      <Experience />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}
