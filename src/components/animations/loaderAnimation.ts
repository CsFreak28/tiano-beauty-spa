import gsap from "gsap";
async function animateLoader(paragraph: HTMLParagraphElement) {
  let ArrayOfSpanElements: Array<HTMLSpanElement> = [];
  for (let i = 0; i < paragraph.children.length; i++) {
    ArrayOfSpanElements.push(paragraph.children[i] as HTMLSpanElement);
  }
  let arrayOfRandomSpanElements = randomizeArray(ArrayOfSpanElements);
  gsap.to(arrayOfRandomSpanElements, 1, {
    opacity: 1,
    ease: "power2.out",
    stagger: 0.1,
  });
}
function randomizeArray(arrayOfElements: Array<HTMLSpanElement>) {
  let generatedNumbers: Array<number> = [];
  let randomArray: Array<HTMLSpanElement> = [];
  for (let i = 0; i < arrayOfElements.length; i++) {
    let randomPosition = Math.floor(Math.random() * arrayOfElements.length);
    while (generatedNumbers.includes(randomPosition)) {
      randomPosition = Math.floor(Math.random() * arrayOfElements.length);
    }
    generatedNumbers.push(randomPosition);
    randomArray.push(arrayOfElements[randomPosition]);
  }
  return randomArray;
}
export default animateLoader;

async function removeLoader() {}
