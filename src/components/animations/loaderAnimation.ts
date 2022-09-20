// import gsap from "gsap"
function animateLoader(paragraph: HTMLParagraphElement) {
  let ArrayOfSpanElements: Array<HTMLSpanElement> = [];
  for (let i = 0; i < paragraph.children.length; i++) {
    ArrayOfSpanElements.push(paragraph.children[i] as HTMLSpanElement);
  }
  randomizeArray(ArrayOfSpanElements);
}
function randomizeArray(arrayOfElements: Array<HTMLSpanElement>) {
  let randomPosition = Math.floor(Math.random() * (arrayOfElements.length + 1));
  console.log(randomPosition);
}
export default animateLoader;
