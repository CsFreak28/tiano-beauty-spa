export function dashboardNavBarHandler(e: MouseEvent) {}
export function toggleExpandParagraph(
  paragraph: HTMLParagraphElement,
  expandParagraph: boolean
):void {
  if (expandParagraph) {
    paragraph.style.overflow = "visible";
    paragraph.style.whiteSpace = "wrap";
  } else {
    paragraph.style.overflow = "hidden";
    paragraph.style.whiteSpace = "nowrap";
  }
}
