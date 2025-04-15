import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Education from "@/components/Education";


export default function Home() {
  return (
    <div className="min-h-screen">
      <About />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
}
