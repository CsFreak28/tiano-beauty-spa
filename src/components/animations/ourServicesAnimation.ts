import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function animateOurServicesSection(section: HTMLDivElement) {
  let body = document.body;
  const tl = gsap.timeline();
  let allSpanElements = [...body.querySelectorAll("span")];
  let svgElements = [...body.querySelectorAll("svg")];
  console.log(svgElements);
  const bookContainer = body.querySelector(".bookContainer");
  let floatTitle = bookContainer?.querySelector(".floatTitle") as HTMLElement;
  gsap.to(body, 0.1, {
    css: {
      backgroundColor: "#075432",
      color: "#f3f3f3",
    },
    scrollTrigger: {
      trigger: section,
      scrub: true,
      start: "top 90%",
      end: "50px center",
      onEnter: () => {
        floatTitle.style.color = "black";
        gsap.to(bookContainer, 0.5, {
          css: {
            backgroundColor: "white",
          },
        });
      },
      onLeaveBack: () => {
        floatTitle.style.color = "white";
        gsap.to(bookContainer, 0.5, {
          css: {
            backgroundColor: "#075432",
          },
        });
      },
    },
  });

  svgElements.forEach((svg) => {
    svg.style.fill = "white";
  });
  gsap.to(allSpanElements, 0.1, {
    css: {
      color: "#f3f3f3",
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
    tl.to(img, 1.5, {
      y: "12px",
      repeat: -1,
      ease: "power2.easeOut",
      delay: speed,
      yoyo: true,
      repeatDelay: 0.1,
    });
  });
}
