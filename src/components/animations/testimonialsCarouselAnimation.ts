import gsap from "gsap";
function animateCarousel(
  carousel: Array<HTMLDivElement>,
  Styles: {
    readonly [key: string]: string;
  },
  clientTestimonial: HTMLParagraphElement
) {
  let lengthOfCarousel = carousel.length;
  let middleOfCarousel = Math.ceil(lengthOfCarousel / 2);
  let storeOfDistances: { [key: string]: number } = {};
  for (let i = 0; i < lengthOfCarousel; i++) {
    storeOfDistances[`carouselindex${i + 1}`] =
      carousel[i].getBoundingClientRect().x;
  }
  // console.log(storeOfDistances);
  function animateImages() {
    carousel.forEach((image) => {
      let tempIndex = image.dataset.tempindex
        ? parseInt(image.dataset.tempindex)
        : null;
      if (tempIndex !== null) {
        if (tempIndex == 7) {
          let indexToGo = 1;
          image.dataset.tempindex = `${indexToGo}`;
          let carouselIndex = image.dataset.carouselindex
            ? parseInt(image.dataset.carouselindex)
            : "";
          let relativePosition =
            storeOfDistances[`carouselindex${carouselIndex}`];
          let positionToGo = storeOfDistances[`carouselindex${indexToGo}`];
          let moveTo = relativePosition - positionToGo;
          gsap.set(image, {
            x: `-${moveTo + 7}px`,
          });
        } else {
          let indexToGo = tempIndex + 1;
          image.dataset.tempindex = `${indexToGo}`;
          let carouselIndex = image.dataset.carouselindex
            ? parseInt(image.dataset.carouselindex)
            : "";
          let relativePosition =
            storeOfDistances[`carouselindex${carouselIndex}`];
          let positionToGo = storeOfDistances[`carouselindex${indexToGo}`];
          let moveTo = positionToGo - relativePosition;
          gsap.to(image, 0.2, {
            x: `${moveTo}px`,
          });
          if (indexToGo === middleOfCarousel) {
            image.classList.add(`${Styles.middleTestimonial}`);
            gsap.from(clientTestimonial, 1, {
              opacity: "0",
            });
            clientTestimonial.innerHTML = image.dataset.testimonial
              ? image.dataset.testimonial
              : "";
          } else {
            image.classList.remove(`${Styles.middleTestimonial}`);
          }
        }
      }
    });
  }
  animateImages();
  setInterval(() => {
    console.log(carousel[3].getBoundingClientRect().width);
    animateImages();
  }, 7000);
}
export default animateCarousel;
