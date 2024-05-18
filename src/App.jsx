import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
import NumberSec from "./components/NumberSec";
import OfferSection from "./components/OfferSection";
import PercentageSec from "./components/PercentageSec";
import Review from "./components/Review";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <NumberSec />
      <OfferSection />
      <PercentageSec />
      <Review />
      <Latest />
      <Footer />
    </>
  );
}

export default App;
