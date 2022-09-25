import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function animateBookComp(
  container: HTMLDivElement,
  floatTitle: HTMLParagraphElement
) {
  let containerChildren = [...container.children];
  gsap.to(container, 0.5, {
    scrollTrigger: {
      trigger: container,
      onEnter: () => {
        containerChildren.forEach((child) => {
          let theChild = child as HTMLElement;
          theChild.style.display = "none";
        });
        gsap.to(container, 0.5, {
          css: {
            overflow: "hidden",
            width: "80px",
            position: "fixed",
            bottom: "5%",
            left: "90%",
            height: "80px",
            cursor: "pointer",
          },
        });
        floatTitle.style.display = "block";
        gsap.to(container, 0.5, {
          delay: 0.5,
          css: {
            borderRadius: "8px",
            backgroundColor: "#075432",
          },
        });
      },
      onLeaveBack: () => {
        let newContainerChildren = containerChildren as Array<HTMLElement>;
        reverseStyle(container, newContainerChildren, floatTitle);
      },
      markers: { startColor: "green", endColor: "red", fontSize: "12px" },
      start: "center 70%",
      endTrigger: "body",
    },
  });
}
export default animateBookComp;

function reverseStyle(
  container: HTMLDivElement,
  children: Array<HTMLElement>,
  floatTitle: HTMLParagraphElement
) {
  gsap.to(container, 0.3, {
    css: {
      width: "90%",
      position: "absolute",
      bottom: "8rem",
      left: "1rem",
      height: "auto",
      overflow: "auto",
      borderRadius: "0px",
      backgroundColor: "white",
    },
  });
  setTimeout(() => {
    children.forEach((child) => {
      if (!child.classList.contains("floatTitle")) {
        child.style.display = "flex";
      }
    });
  }, 400);
  floatTitle.style.display = "none";
}
