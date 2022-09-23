import EmailCollectionSection from "../../components/sections/email.section";
import { useState, useEffect } from "react";
import LoadingScreen from "../../components/loader/loader";
function Homepage() {
  const [lcpHasLoaded, setLcpHasLoaded] = useState<boolean>(false);
  const [showSections, setShowSections] = useState<boolean>(false);
  const [HeroSection, setHeroSection] = useState<any>(() => "div");
  const [AboutSection, setAboutSection] = useState<any>(() => "div");
  const [TestimonialsSection, setTestimonialsSection] = useState<any>(
    () => "div"
    );
    
  const [FooterSection, setFooterSection] = useState<any>(() => "div");
  const [OurServicesSection, setOurServicesSection] = useState<any>(
    () => "div"
  );
  const [ExtraSection, setExtraSection] = useState<any>(() => "div");
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    if (showSections) {
      import("../../components/sections/hero").then((value) => {
        setHeroSection(<value.default setLcpHasLoaded={setLcpHasLoaded} />);
      });
      import("../../components/sections/about.section").then((value) => {
        setAboutSection(<value.default />);
      });
      import("../../components/sections/footer.section").then((value) => {
        setFooterSection(<value.default showSocialMediaLinks />);
      });
      import("../../components/sections/testimonials.section").then((value) => {
        setTestimonialsSection(<value.default />);
      });
      import("../../components/sections/ourServices.section").then((value) => {
        setOurServicesSection(<value.default />);
      });
      import("../../components/sections/extra.section").then((value) => {
        setExtraSection(<value.default />);
      });
      if (lcpHasLoaded) {
        setTimeout(() => {
          document.body.style.overflowY = "scroll";
        }, 1500);
      }
    }
  }, [showSections, lcpHasLoaded]);
  return (
    <div>
        <LoadingScreen
          loadSections={setShowSections}
          lcpHasLoaded={lcpHasLoaded}
        />
      {showSections !== false && (
        <>
          <div>{HeroSection}</div>
          <div>{AboutSection}</div>
          <div>{OurServicesSection}</div>
          <div>{TestimonialsSection}</div>
          <div>{ExtraSection}</div>
        </>
      )}
      <EmailCollectionSection />
      FooterSection
    </div>
  );
}
export default Homepage;
