import About from "@/components/About";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-lightBg text-lightText dark:bg-sea-floor dark:text-darkText">
      <Landing />
      <Scroll />
      <About />
      <Work />
      <Projects />
      <Footer />
    </main>
  );
}

const Scroll: React.FC = () => (
  <div className="scroll-down">
    <a href="#about">
      <span></span>
      Dive
    </a>
  </div>
);
