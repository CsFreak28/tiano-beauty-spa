import Styles from "./testimonials.module.scss";
const TestimonialsSection = () => {
  return (
    <div className={Styles.container}>
      Testimonials
      <div className={Styles.testimonialsCarousel}>
        <div
          className={`${Styles.testimonialContainer} ${Styles.centerTestimonial}`}
        ></div>

        {/* //first testimonial */}
        <div
          className={`${Styles.noneCenterTestimonial} ${Styles.firstTestimonial}`}
        ></div>

        {/* second testimonial */}
        <div
          className={`${Styles.noneCenterTestimonial} ${Styles.secondTestimonial}`}
        ></div>

        {/* third testimonial */}
        <div
          className={`${Styles.noneCenterTestimonial} ${Styles.thirdTestimonial}`}
        ></div>

        {/* fourth testimonial */}
        <div
          className={`${Styles.noneCenterTestimonial} ${Styles.fourthTestimonial}`}
        ></div>

        {/* fifth testimonial */}
        <div
          className={`${Styles.noneCenterTestimonial} ${Styles.fifthTestimonial}`}
        ></div>

        {/* sixth testimonial */}
        <div
          className={`${Styles.noneCenterTestimonial} ${Styles.sixthTestimonial}`}
        ></div>
      </div>
      <p className={Styles.clientsTestimonial}>
        " tiano beauty spa was seriously <br /> the best place i spent my <br />
        weekend after a stressful week."
      </p>
    </div>
  );
};
export default TestimonialsSection;
