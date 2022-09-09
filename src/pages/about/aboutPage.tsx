import AboutPageHero from "../../components/aboutUsComponents/aboutPageHero";
import SecondSection from "../../components/aboutUsComponents/secondSection.section";
import ThirdSection from "../../components/aboutUsComponents/thirdSection";
import FourthSection from "../../components/aboutUsComponents/fourthSection";
import FifthSection from "../../components/aboutUsComponents/fifthSection";
import SixthSection from "../../components/aboutUsComponents/sixthSection";
import SeventhSection from "../../components/aboutUsComponents/seventhSection";
import FooterSection from "../../components/sections/footer.section";
function AboutPage() {
  return (
    <div>
      <AboutPageHero />
      <SecondSection />
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
    </div>
  );
}

export default AboutPage;

