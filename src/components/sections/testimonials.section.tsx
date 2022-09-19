import Styles from "./testimonials.module.scss";
import Testiomonial1 from "../../assets/images/blackBeauty.jpg";
import Testiomonial2 from "../../assets/images/testimonial2.jpg";
import Testiomonial3 from "../../assets/images/testimonial3.jpg";
import Testiomonial4 from "../../assets/images/testimonial4.jpg";
import Testiomonial5 from "../../assets/images/testimonial5.jpg";
import Testiomonial6 from "../../assets/images/testimonial6.jpg";
import Testiomonial7 from "../../assets/images/testimonial7.jpg";
import { useEffect, useRef } from "react";

const TestimonialsSection = () => {
  let container = useRef<any>(null);
  let testimonialsContainer = useRef<any>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let containerRef = entry.target;
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
        }
        // observer.unobserve(entry.target)
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
        ></div>

        {/* //first testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.firstTestimonial}`}
          data-src={Testiomonial2}
        ></div>

        {/* second testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.secondTestimonial}`}
          data-src={Testiomonial3}
        ></div>

        {/* third testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.thirdTestimonial}`}
          data-src={Testiomonial1}
        ></div>

        {/* fourth testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.fourthTestimonial}`}
          data-src={Testiomonial5}
        ></div>

        {/* fifth testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.fifthTestimonial}`}
          data-src={Testiomonial6}
        ></div>

        {/* sixth testimonial */}
        <div
          className={`${Styles.testimonial} ${Styles.sixthTestimonial}`}
          data-src={Testiomonial7}
        ></div>
      </div>
      <p className={Styles.clientsTestimonial}>
        " tiano beauty spa was undoubtedly <br /> the best place i spent my <br />
        weekend after a stressful week."
      </p>
    </div>
  );
};
export default TestimonialsSection;
