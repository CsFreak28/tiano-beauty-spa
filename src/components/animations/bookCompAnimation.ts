import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function animateBookComp(
  container: HTMLDivElement,
  floatTitle: HTMLParagraphElement,
  svg: SVGElement
) {
  let containerChildren = [...container.children];
  gsap.to(container, 0.3, {
    scrollTrigger: {
      trigger: container,
      onEnter: () => {
        containerChildren.forEach((child) => {
          let theChild = child as HTMLElement;
          theChild.style.display = "none";
        });
        gsap.to(container, 0.3, {
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
        gsap.to(container, 0.3, {
          delay: 0.5,
          css: {
            borderRadius: "8px",
            backgroundColor: "#075432",
          },
        });
        let newContainerChildren = containerChildren as Array<HTMLElement>;
        const revFunction = () => {
          reverseStyle(container, newContainerChildren, floatTitle, {
            positon: "fixed",
            bottom: "2rem",
            left: "5%",
          });
          container.removeEventListener("click", revFunction);
        };
        container.addEventListener("click", revFunction);
        svg.addEventListener("click", (e) => {
          e.stopPropagation();
          containerChildren.forEach((child) => {
            let theChild = child as HTMLElement;
            theChild.style.display = "none";
          });
          gsap.to(container, 0.3, {
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
          gsap.to(container, 0.3, {
            delay: 0.5,
            css: {
              borderRadius: "8px",
              backgroundColor: "#075432",
            },
          });
          container.addEventListener("click", revFunction);
        });
      },
      onLeaveBack: () => {
        let newContainerChildren = containerChildren as Array<HTMLElement>;
        reverseStyle(container, newContainerChildren, floatTitle, {
          positon: "absolute",
          bottom: "8rem",
          left: "1rem",
        });
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
  floatTitle: HTMLParagraphElement,
  styles: {
    positon: string;
    bottom: string;
    left: string;
  }
) {
  const tl = gsap.timeline();
  tl.to(container, 0.3, {
    css: {
      backgroundColor: "white",
    },
  }).to(container, 0.3, {
    css: {
      width: "90%",
      position: styles.positon,
      bottom: styles.bottom,
      left: styles.left,
      height: "auto",
      overflow: "hidden",
      borderRadius: "0px",
      backgroundColor: "white",
    },
  });
  setTimeout(() => {
    children.forEach((child) => {
      if (!child.classList.contains("floatTitle")) {
        child.style.display = "flex";
        child.style.opacity = "0";
        gsap.to(child, 0.1, {
          delay: 0.5,
          opacity: 1,
        });
      }
    });
  }, 100);
  floatTitle.style.display = "none";
}
