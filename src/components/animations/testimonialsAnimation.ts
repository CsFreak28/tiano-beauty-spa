import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function animateTestimonialSection(section: HTMLDivElement) {
  let body = document.body;
  const bookContainer = body.querySelector(".bookContainer");
  let floatTitle = bookContainer?.querySelector(".floatTitle") as HTMLElement;
  gsap.to(body, 0.1, {
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom center",
      onLeave: () => {
        gsap.to(body, 0.5, {
          css: {
            backgroundColor: "#f3f3f3",
            color: "black",
          },
        });
        let bookCompIsOpened = bookContainer?.getAttribute("data-opened");
        if (bookCompIsOpened == "false") {
          gsap.to(bookContainer, 0.3, {
            css: {
              backgroundColor: "#075432",
            },
          });
          floatTitle.style.color = "#f3f3f3";
        }
      },
      onEnterBack: () => {
        gsap.to(body, 0.5, {
          css: {
            backgroundColor: "#075432",
            color: "white",
          },
        });
        gsap.to(bookContainer, 0.3, {
          backgroundColor: "white",
        });
        floatTitle.style.color = "black";
      },
    },
  });
}
