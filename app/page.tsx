import Hero from "./components/Hero";
import WorkflowProblems from "./components/WorkflowProblems";
import Projects from "./components/Projects";
import WhyHireMe from "./components/WhyHireMe";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col space-y-0">
      <Hero />
      <WorkflowProblems />
      <Projects />
      <WhyHireMe />
      <About />
      <Contact />
    </div>
  );
}
