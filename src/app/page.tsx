import Home from "@/components/Home";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Proyects from "@/components/Proyects/Proyects";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";

const Index = () => {
  return (
    <>
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Stack />
      </div>
      <div>
        <Proyects />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Index;
