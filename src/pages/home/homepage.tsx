import AboutUsSection from "../../components/sections/about.section";
import OurServicesSection from "../../components/sections/ourServices.section";
import TestimonialsSection from "../../components/sections/testimonials.section";
import ExtraSection from "../../components/sections/extra.section";
import EmailCollectionSection from "../../components/sections/email.section";
import FooterSection from "../../components/sections/footer.section";
import { useState, useEffect } from "react";
import LoadingScreen from "../../components/loader/loader";
function Homepage() {
  const [showSections, setShowSections] = useState<boolean>(false);
  const [Bla, setBla] = useState<any>("loading");
  
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    if (showSections) {
      import("../../components/sections/hero").then((mod) => {
        setBla(mod.default());
      });
    }
  }, [showSections]);
  return (
    <div>
      <LoadingScreen />
      {showSections !== false && Bla}
      <AboutUsSection />
      <OurServicesSection />
      <TestimonialsSection />
      <ExtraSection />
      <EmailCollectionSection />
      <FooterSection showSocialMediaLinks={true} />
    </div>
  );
}
export default Homepage;
