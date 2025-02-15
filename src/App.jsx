import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import FeaturesSection from "./components/features";
import HowItWorksSection from "./components/howItWorks";
import QAResults from "./components/qaResults";
import TestimonialsSection from "./components/testimonialsSection";
import FAQSection from "./components/faq";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/how-it-works" element={<HowItWorksSection />} />
        <Route path="/qa-results" element={<QAResults />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/faq" element={<FAQSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
