import gsap from "gsap";
function animateHeroSection(arrayOfImages: Array<HTMLImageElement>) {
  gsap.to(arrayOfImages, 1, {
    y: "10px",
    yoyo: true,
    repeat: -1,
    stagger: 0.1,
  });
}
export default animateHeroSection;
