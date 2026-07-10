import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import TestimonialBanner from "./components/TestimonialBanner";
import Amenities from "./components/Amenities";
import SeniorsNeeds from "./components/SeniorsNeeds";
import SolutionSection from "./components/SolutionSection";
import WhyChooseUs from "./components/WhyChooseUs";
import InlineForm from "./components/InlineForm";
import BenefitsSection from "./components/BenefitsSection";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import ScrollToTop from "./components/ScrollToTop";
import ContactPopup from "./components/ContactPopup";
import ThankYouPage from "./components/ThankYouPage";

const getRoute = () => {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
  if (path.endsWith("/thank-you") || path.endsWith("/thank-you/index.html")) {
    return "thank-you";
  }
  return "home";
};

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const route = getRoute();


  if (route === "thank-you") {
    return (
      <div className="font min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <ThankYouPage />
        </div>
        <FloatingActions />
      </div>
    );
  }

  return (
    <div className="font">
      <Navbar />
      <SmoothScroll />
      <div className="overflow-x-hidden">
        <Hero onOpenPopup={handleOpenPopup} />
        {/* <TestimonialBanner /> */}
        <Amenities />
        <SeniorsNeeds />
        <SolutionSection onOpenPopup={handleOpenPopup} />
        <WhyChooseUs />
        <InlineForm />
        <BenefitsSection onOpenPopup={handleOpenPopup} />
        <Testimonials />
        <Gallery />
        <FAQs />
        <Contact />
        <Footer />
      </div>
      <FloatingActions />
      <ScrollToTop />
      <ContactPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}
