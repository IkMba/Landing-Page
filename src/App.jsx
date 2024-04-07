import About from "./components/About";
import Banner from "./components/Banner";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Banner>
        <Header />
        <Hero />
      </Banner>
      <Services />
      <About />
      <Solutions />
      <Stats />
      <CaseStudies />
      <Footer />
    </div>
  );
}

export default App;
