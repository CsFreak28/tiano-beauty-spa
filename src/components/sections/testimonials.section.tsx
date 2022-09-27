import Styles from "./testimonials.module.scss";
import Testiomonial1 from "../../assets/images/blackBeauty.jpg";
import Testiomonial2 from "../../assets/images/testimonial2.jpg";
import Testiomonial3 from "../../assets/images/testimonial3.jpg";
import Testiomonial4 from "../../assets/images/testimonial4.jpg";
import Testiomonial5 from "../../assets/images/testimonial5.jpg";
import Testiomonial6 from "../../assets/images/testimonial6.jpg";
import Testiomonial7 from "../../assets/images/testimonial7.jpg";
import { useEffect, useRef } from "react";
import animateTestimonialSection from "../animations/testimonialsAnimation";
import animateCarousel from "../animations/testimonialsCarouselAnimation";
const TestimonialsSection = ({ lcpHasLoaded }: { lcpHasLoaded: boolean }) => {
  let container = useRef<any>(null);
  let testimonialsContainer = useRef<any>(null);
  let clientTestimonialRef = useRef<any>(null);
  useEffect(() => {
    if (lcpHasLoaded) {
      setTimeout(() => {
        animateTestimonialSection(container.current);
      }, 2000);
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let children = [...testimonialsContainer.current.children];
          children.forEach((child) => {
            let newChild = child as HTMLDivElement;
            if (testimonialsContainer !== null) {
              newChild.style.background = newChild.dataset.src
                ? `url(${newChild.dataset.src})`
                : "";
              newChild.style.backgroundSize = "cover";
              newChild.style.backgroundPosition = "center center";
            }
          });
          animateCarousel(children, Styles, clientTestimonialRef.current);
          console.log("hi there bitch");
        }
      });
    });
    if (container.current !== null) {
      let containerRef = container.current as HTMLDivElement;
      observer.observe(containerRef);
    }
  }, [container.current]);
  return (
    <div className={Styles.container} ref={container}>
      <p className={Styles.heading}>Testimonials</p>
      <div className={Styles.testimonialsCarousel} ref={testimonialsContainer}>
        <div
          className={`${Styles.testimonial} ${Styles.centerTestimonial}`}
          data-src={Testiomonial4}
          data-carouselindex={1}
          data-tempindex={1}
          data-testimonial={`<p>" tiano beauty spa was undoubtedly <br /> the best place i spent my
          <br />
          weekend after a stressful week."</p>`}
        ></div>

        {/* //first testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.firstTestimonial}`}
          data-src={Testiomonial2}
          data-carouselindex={2}
          data-tempindex={2}
          data-testimonial={`<p>"i and my friends had a very good time at tiano beauty spa, <br/> we will obviously visit again."</p>`}
        ></div>

        {/* second testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.secondTestimonial}`}
          data-src={Testiomonial3}
          data-carouselindex={3}
          data-tempindex={3}
          data-testimonial={`<p>"this was exactly what i needed <br/> to relieve the stress of becoming a new mother."</p>`}
        ></div>

        {/* third testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.thirdTestimonial}`}
          data-src={Testiomonial1}
          data-carouselindex={4}
          data-tempindex={4}
          data-testimonial={`<p>"sincerely love this beauty spa, <br/> i feel more confident after every session."</p>`}
        ></div>

        {/* fourth testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.fourthTestimonial}`}
          data-src={Testiomonial5}
          data-carouselindex={5}
          data-tempindex={5}
          data-testimonial={`<p>"i come here every first saturday,<br/> it's a ritual i don't miss."</p>`}
        ></div>

        {/* fifth testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.fifthTestimonial}`}
          data-src={Testiomonial6}
          data-carouselindex={6}
          data-tempindex={6}
          data-testimonial={`<p>"Honestly speaking <br/> you get more than enough value for your money."</p>`}
        ></div>

        {/* sixth testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.sixthTestimonial}`}
          data-src={Testiomonial7}
          data-carouselindex={7}
          data-tempindex={7}
          data-testimonial={`<p>"the spa booking was a birthday gift <br/> from my nigerian wife, and it was a perfect one."</p>`}
        ></div>
      </div>
      <p className={Styles.clientsTestimonial} ref={clientTestimonialRef}></p>
    </div>
  );
};
export default TestimonialsSection;
