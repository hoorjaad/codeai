import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Features from "./componants/Features";
import Pricing from "./componants/Pricing";
import Testimonals from "./componants/Testimonals";
import Footer from "./componants/Footer";
import Contact from "./componants/Contact";
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonals />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
