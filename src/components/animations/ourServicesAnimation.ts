import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function animateOurServicesSection(section: HTMLDivElement) {
  let body = document.body;
  const tl = gsap.timeline();
  let allSpanElements = [...body.querySelectorAll("span")];
  let svgElements = [...body.querySelectorAll("svg")];
  gsap.to(body, 0.1, {
    css: {
      backgroundColor: "#075432",
      color: "white",
    },
    scrollTrigger: {
      trigger: section,
      scrub: true,
      start: "top 90%",
      end: "50px center",
    },
  });
  gsap.to(allSpanElements, 0.1, {
    css: {
      color: "white",
    },
    scrollTrigger: {
      trigger: section,
      scrub: true,
      start: "top 90%",
      end: "50px center",
    },
  });
}

export function bounceImages(imgs: Array<HTMLImageElement>) {
  imgs.forEach((img) => {
    let tl = gsap.timeline();
    let speed = img.dataset.speed ? parseInt(img.dataset.speed) / 10 : 0;
    console.log(speed);
    tl.to(img,1.1, {
      y: "12px",
      repeat: -1,
      yoyo: true,
      delay: speed,
    });
  });

}
