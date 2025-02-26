import About from "@/components/About";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Scroll from "@/components/Scroll";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <Landing />
      {/* <Scroll />
      <About />
      <Work />
      <Projects />
      <Footer /> */}
    </main>
  );
}
