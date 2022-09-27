import gsap from "gsap";
export function animateNavBar(
  navLinks: HTMLDivElement,
  pageLinks: HTMLUListElement
) {
  let arrayOfAuthLinks = [...navLinks.querySelectorAll("p")];
  let arrayOfPageLinks = [...pageLinks.querySelectorAll("li")];
  let comboArray = [...arrayOfAuthLinks, ...arrayOfPageLinks];
  console.log(arrayOfAuthLinks);
  gsap.from(comboArray, 0.6, {
    delay: 2.5,
    x: "-14px",
    opacity: 0,
    stagger: 0.2,
  });
}
