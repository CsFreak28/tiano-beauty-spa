import HeroSection from "../../components/sections/hero";
import AboutUsSection from "../../components/sections/about.section";
import OurServicesSection from "../../components/sections/ourServices.section";
import TestimonialsSection from "../../components/sections/testimonials.section";
import ExtraSection from "../../components/sections/extra.section";
import EmailCollectionSection from "../../components/sections/email.section";
import FooterSection from "../../components/sections/footer.section";
function Homepage() {
  return <div>
    <HeroSection/>
    <AboutUsSection/>
    <OurServicesSection/>
    <TestimonialsSection/>
    <ExtraSection/>
    <EmailCollectionSection/>
    <FooterSection showSocialMediaLinks={true}/>
  </div>;
}
export default Homepage;
