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
import RedirectFormPage from "./components/RedirectFormPage";

const getRoute = () => {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
  if (path.endsWith("/whatsapp") || path.endsWith("/whatsapp/index.html")) {
    return "whatsapp";
  }
  if (path.endsWith("/call") || path.endsWith("/call/index.html")) {
    return "call";
  }
  return "home";
};

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const route = getRoute();

  if (route === "whatsapp") {
    return <RedirectFormPage type="whatsapp" />;
  }
  if (route === "call") {
    return <RedirectFormPage type="call" />;
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
