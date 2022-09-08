import React from "react";
export function dashboardNavBarHandler(e: MouseEvent) {}

export function toggleExpandParagraph(
  paragraph: HTMLParagraphElement,
  expandParagraph: boolean,
  setParagraphFn: React.Dispatch<React.SetStateAction<boolean>>
): void {
  if (expandParagraph) {
    paragraph.style.overflow = "visible";
    paragraph.style.whiteSpace = "normal";
    paragraph.style.width = "100%";
    setParagraphFn((expandParagraph) => !expandParagraph);
  } else {
    paragraph.style.overflow = "hidden";
    paragraph.style.width = "70%";
    paragraph.style.whiteSpace = "nowrap";
    setParagraphFn((expandParagraph) => !expandParagraph);
  }
}

export function dropdown(){ 
  
}