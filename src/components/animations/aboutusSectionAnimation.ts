import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function animateAboutSection(paragraph: HTMLParagraphElement) {
  let spanElements: Array<HTMLSpanElement> = [
    ...paragraph.querySelectorAll("span"),
  ];
  gsap.to(spanElements, 1, {
    stagger: 0.1,
    opacity: 1,
    scrollTrigger: {
      trigger: paragraph,
      start: "top 40%",
    },
  });
}
